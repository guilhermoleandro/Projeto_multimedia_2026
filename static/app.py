from flask import (
    Flask,
    render_template,
    request,
    redirect,
    url_for,
    flash,
    send_from_directory
)

from wordcloud import WordCloud
from pathlib import Path
import re

app = Flask(__name__)

# Secret key used for flash messages
app.secret_key = "gerador_nuvem_multimedia_2026"

# Project directories
BASE_DIR = Path(__file__).resolve().parent
STATIC_DIR = BASE_DIR / "static"

# Create static folder if it doesn't exist
STATIC_DIR.mkdir(exist_ok=True)

# Generated image path
IMAGE_PATH = STATIC_DIR / "nuvem.png"


@app.route("/", methods=["GET", "POST"])
def index():

    texto = ""
    removidas = ""
    max_words = 100
    imagem_url = None

    if request.method == "POST":

        texto = request.form.get("texto", "").strip()
        removidas = request.form.get("stopwords", "").strip()

        try:
            max_words = int(request.form.get("max_words", 100))

            if not 1 <= max_words <= 200:
                raise ValueError

        except ValueError:
            flash("O número de palavras deve estar entre 1 e 200.")

            return render_template(
                "main.html",
                texto=texto,
                removidas=removidas,
                max_words=100,
                imagem_url=None
            )

        if not texto:
            flash("Por favor, introduza algum texto.")

        else:
            try:
                # Convert stopwords into a set
                stopwords = {
                    word.strip().lower()
                    for word in re.split(r"[,;\n]+", removidas)
                    if word.strip()
                }

                # Generate word cloud
                wordcloud = WordCloud(
                    width=1200,
                    height=800,
                    background_color="white",
                    max_words=max_words,
                    stopwords=stopwords,
                    colormap="viridis",
                    collocations=False
                )

                wordcloud.generate(texto)

                # Save generated image
                wordcloud.to_file(str(IMAGE_PATH))

                imagem_url = url_for(
                    "static",
                    filename="nuvem.png"
                )

            except ValueError:
                flash("Não foi possível gerar a nuvem. Verifique o texto.")

            except Exception as error:
                print("Erro:", error)
                flash("Ocorreu um erro ao gerar a nuvem de palavras.")

    return render_template(
        "main.html",
        texto=texto,
        removidas=removidas,
        max_words=max_words,
        imagem_url=imagem_url
    )


@app.route("/descarregar")
def descarregar():

    if not IMAGE_PATH.exists():
        flash("Ainda não existe nenhuma imagem para descarregar.")
        return redirect(url_for("index"))

    return send_from_directory(
        STATIC_DIR,
        "nuvem.png",
        as_attachment=True,
        download_name="nuvem_de_palavras.png"
    )


if __name__ == "__main__":
    app.run(debug=True)
