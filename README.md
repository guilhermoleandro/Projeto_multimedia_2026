Projeto_Multimédia

Nome da Aplicação / Dashboard Web: Gerador de Nuvem de Palavras
Disciplina: Oficina de Multimédia - 12.º Ano
Ano Letivo: 2026/2027
Autor: Guilhermo Leandro
Turma: A3
Link da Aplicação Web: -

1. Visão Geral do Projeto

Descrição:

O projeto consiste no desenvolvimento de uma aplicação web capaz de gerar automaticamente nuvens de palavras a partir de um texto introduzido pelo utilizador. A aplicação permite personalizar o resultado através da remoção de palavras indesejadas e da definição de um limite máximo de palavras a apresentar.

O principal objetivo é facilitar a análise e representação visual de textos, destacando as palavras mais frequentes através de uma imagem PNG que pode ser posteriormente descarregada.

2. Estrutura do Código e Funcionalidades Integradas

Para o desenvolvimento deste projeto foram utilizados conhecimentos adquiridos nas fichas práticas da disciplina, complementados com algumas funcionalidades desenvolvidas com o auxílio de Inteligência Artificial.

A aplicação utiliza HTML para construir a interface gráfica, CSS para definir o aspeto visual e Python para processar os dados introduzidos pelo utilizador.

Entre as principais funcionalidades implementadas encontram-se:

Introdução de texto através de uma caixa de texto.
Campo para definir palavras que devem ser ignoradas (stopwords).
Configuração do número máximo de palavras da nuvem.
Geração automática de uma representação visual das palavras.
Apresentação do resultado na própria página.
Possibilidade de descarregar a imagem gerada em formato PNG.
Apresentação de mensagens ao utilizador através do sistema de notificações.

Foi também utilizada a tecnologia Flask para estabelecer a ligação entre a interface HTML e o processamento realizado em Python.

3. Registo de Utilização da IA

Durante o desenvolvimento foi utilizada Inteligência Artificial como ferramenta de apoio à programação, permitindo esclarecer dúvidas, corrigir erros e melhorar a organização do código.

1. Prompt para conversão Web/HTML

"Com base numa aplicação desenvolvida em Python, cria uma interface HTML utilizando Flask e Jinja2. Pretendo uma página simples e funcional, com um formulário para introdução de texto, campos de configuração e uma área onde seja possível apresentar o resultado gerado."

2. Prompt para ampliação e construção de funcionalidades

"Adiciona funcionalidades ao gerador de nuvens de palavras, permitindo ao utilizador escolher o número máximo de palavras, introduzir palavras a remover e descarregar o resultado final como imagem PNG. Mantém a ligação entre o HTML e o Python através do Flask."

3. Dificuldades e erros corrigidos com a IA

Durante a construção da aplicação surgiram algumas dificuldades relacionadas com a comunicação entre os ficheiros Python e HTML, principalmente na transmissão dos dados introduzidos pelo utilizador.

Outra dificuldade foi a utilização correta das variáveis do Flask através da sintaxe Jinja2, necessária para apresentar dinamicamente os resultados.

Com o auxílio da IA foi possível identificar problemas na estrutura do código, corrigir referências aos ficheiros estáticos e compreender melhor o funcionamento dos formulários HTML e dos pedidos POST.

4. Otimização de Layout

Foi pedido à Inteligência Artificial que ajudasse a melhorar a apresentação visual da aplicação, procurando obter uma interface simples, organizada e intuitiva.

Foram consideradas alterações como:

Utilização de fontes sem serifa para melhorar a legibilidade.
Aplicação de cores claras nos campos de introdução de dados.
Utilização de contornos azuis para destacar os elementos interativos.
Organização dos elementos através de margens e espaçamentos.
Utilização de uma imagem de fundo adaptável ao tamanho do ecrã.
Uniformização dos títulos e dos restantes elementos da interface.

O objetivo foi criar uma experiência de utilização agradável, sem excesso de elementos visuais.

4. Estrutura de Ficheiros do Repositório

A organização do projeto foi realizada de forma a separar a lógica de programação, a interface gráfica e os recursos visuais.

app.py – Ficheiro principal responsável pelo funcionamento da aplicação e pelo processamento dos dados através de Python e Flask.
templates/main.html – Página HTML responsável pela interface e apresentação dos formulários e resultados.
static/estilos.css – Folha de estilos responsável pela formatação visual da aplicação.
README.md – Documento com a descrição do projeto, funcionalidades e registo do desenvolvimento.
static/ – Pasta destinada aos recursos estáticos utilizados pela aplicação.
assets/ – Pasta destinada ao armazenamento de imagens e outros recursos multimédia, caso sejam utilizados.
5. Reflexão Crítica e Aprendizagem

O desenvolvimento deste projeto permitiu consolidar conhecimentos relacionados com programação web, nomeadamente HTML, CSS e Python. Uma das partes que correu melhor foi a construção do formulário e a organização da interface, uma vez que permitiram criar uma aplicação relativamente simples de utilizar.

A maior dificuldade esteve na integração entre o Flask e os ficheiros HTML, especialmente na passagem de informação entre o formulário e o processamento realizado no servidor. Foi necessário compreender melhor a utilização de variáveis dinâmicas e a forma como os resultados são apresentados ao utilizador.

A Inteligência Artificial teve um papel importante durante o desenvolvimento, funcionando como uma ferramenta de apoio à resolução de problemas e à compreensão de conceitos. Permitiu acelerar algumas etapas da programação, sugerir melhorias e identificar possíveis erros. No entanto, foi igualmente importante analisar e adaptar as sugestões recebidas, de forma a garantir que o código correspondia aos objetivos pretendidos.

Concluindo, este projeto foi uma experiência positiva, pois permitiu perceber melhor como diferentes tecnologias podem ser combinadas para criar uma aplicação web funcional. Também demonstrou a importância da Inteligência Artificial como complemento ao processo de aprendizagem e desenvolvimento de projetos tecnológicos.
