Projeto_Multimédia

Nome da Aplicação / Dashboard Web: Questionário de Multimédia
Disciplina: Oficina de Multimédia - 12.º Ano
Ano Letivo: 2026/2027
Autor: Guilhermo Leandro
Turma: A3
Link da Aplicação Web: -

# 1. Visão Geral do Projeto

Descrição:

O projeto consiste no desenvolvimento de uma aplicação web que permite aos utilizadores responder a um questionário sobre conteúdos relacionados com a disciplina de Multimédia. A aplicação apresenta um conjunto de perguntas com várias opções de resposta, permitindo ao utilizador testar os seus conhecimentos e avaliar a sua aprendizagem.

O principal objetivo é proporcionar uma forma interativa e dinâmica de estudar e consolidar conhecimentos sobre multimédia, através de perguntas relacionadas com diferentes áreas, como imagem, vídeo, áudio, animação, formatos digitais e ferramentas de edição.

# 2. Estrutura do Código e Funcionalidades Integradas

Para o desenvolvimento deste projeto foram utilizados conhecimentos adquiridos nas fichas práticas da disciplina, complementados com algumas funcionalidades desenvolvidas com o auxílio de Inteligência Artificial.

A aplicação utiliza HTML para construir a interface gráfica, CSS para definir o aspeto visual e Python para gerir as perguntas, processar as respostas e calcular os resultados obtidos pelos utilizadores.

Entre as principais funcionalidades implementadas encontram-se:

Apresentação de perguntas relacionadas com a disciplina de Multimédia.
Disponibilização de várias opções de resposta para cada pergunta.
Seleção de respostas através de elementos interativos.
Verificação automática das respostas selecionadas.
Cálculo da pontuação final do questionário.
Apresentação do resultado obtido pelo utilizador.
Possibilidade de repetir o questionário para melhorar os resultados.
Apresentação de mensagens ao utilizador através do sistema de notificações.

Foi também utilizada a tecnologia Flask para estabelecer a ligação entre a interface HTML e o processamento realizado em Python.

# 3. Registo de Utilização da IA

Durante o desenvolvimento foi utilizada Inteligência Artificial como ferramenta de apoio à programação, permitindo esclarecer dúvidas, corrigir erros e melhorar a organização do código.

## 1. Prompt para conversão Web/HTML

  "Com base numa aplicação desenvolvida em Python, cria uma interface HTML utilizando Flask e Jinja2. Pretendo uma página simples e funcional para um questionário de Multimédia, com perguntas de escolha múltipla, opções de resposta interativas e uma área onde seja possível apresentar a pontuação final obtida pelo utilizador."

## 2. Prompt para ampliação e construção de funcionalidades

  "Adiciona funcionalidades ao questionário de Multimédia, permitindo apresentar várias perguntas com diferentes opções de resposta, verificar automaticamente as respostas selecionadas e calcular a pontuação final. Adiciona também a possibilidade de repetir o questionário e visualizar o resultado obtido. Mantém a ligação entre o HTML e o Python através do Flask."

## 3. Dificuldades e erros corrigidos com a IA

  Durante a construção da aplicação surgiram algumas dificuldades relacionadas com a comunicação entre os ficheiros Python e HTML, principalmente na transmissão das respostas selecionadas pelo utilizador.

  Outra dificuldade foi a utilização correta das variáveis do Flask através da sintaxe Jinja2, necessária para apresentar dinamicamente as perguntas, as opções de resposta e os resultados do questionário.

  Com o auxílio da IA foi possível identificar problemas na estrutura do código, corrigir referências aos ficheiros estáticos e compreender melhor o funcionamento dos formulários HTML, dos pedidos POST e da verificação das respostas.

## 4. Otimização de Layout

  Foi pedido à Inteligência Artificial que ajudasse a melhorar a apresentação visual da aplicação, procurando obter uma interface simples, organizada e intuitiva, adequada à realização de um questionário.

Foram consideradas alterações como:

Utilização de fontes sem serifa para melhorar a legibilidade.
Aplicação de cores claras nas áreas das perguntas e respostas.
Utilização de contornos azuis para destacar os elementos interativos.
Organização das perguntas e opções de resposta através de margens e espaçamentos.
Utilização de uma imagem de fundo adaptável ao tamanho do ecrã.
Uniformização dos títulos, botões e restantes elementos da interface.
Destaque visual da pontuação e dos resultados finais.

  O objetivo foi criar uma experiência de utilização agradável, facilitando a leitura das perguntas e a seleção das respostas, sem excesso de elementos visuais.

# 4. Estrutura de Ficheiros do Repositório

  A organização do projeto foi realizada de forma a separar a lógica de programação, a interface gráfica e os recursos visuais.

app.py – Ficheiro principal responsável pelo funcionamento da aplicação, pela gestão das perguntas, pela verificação das respostas e pelo cálculo dos resultados através de Python e Flask.
templates/main.html – Página HTML responsável pela interface e apresentação das perguntas, opções de resposta e resultados do questionário.
static/estilos.css – Folha de estilos responsável pela formatação visual da aplicação.
README.md – Documento com a descrição do projeto, funcionalidades e registo do desenvolvimento.
static/ – Pasta destinada aos recursos estáticos utilizados pela aplicação.
# 5. Reflexão Crítica e Aprendizagem

  O desenvolvimento deste projeto permitiu consolidar conhecimentos relacionados com programação web, nomeadamente HTML, CSS e Python. Uma das partes que correu melhor foi a construção do questionário e a organização das perguntas e opções de resposta, uma vez que permitiram criar uma aplicação simples e intuitiva de utilizar.

  A maior dificuldade esteve na integração entre o Flask e os ficheiros HTML, especialmente na passagem das respostas selecionadas pelo utilizador para o processamento realizado no servidor. Foi necessário compreender melhor a utilização de variáveis dinâmicas, a verificação das respostas e a forma como os resultados são apresentados ao utilizador.

  A Inteligência Artificial teve um papel importante durante o desenvolvimento, funcionando como uma ferramenta de apoio à resolução de problemas e à compreensão de conceitos. Permitiu acelerar algumas etapas da programação, sugerir melhorias e identificar possíveis erros. No entanto, foi igualmente importante analisar e adaptar as sugestões recebidas, de forma a garantir que o código correspondia aos objetivos pretendidos.

  Concluindo, este projeto foi uma experiência positiva, pois permitiu perceber melhor como diferentes tecnologias podem ser combinadas para criar uma aplicação web funcional e interativa. Também demonstrou a importância da Inteligência Artificial como complemento ao processo de aprendizagem e desenvolvimento de projetos tecnológicos, permitindo criar uma ferramenta educativa que ajuda a testar e consolidar conhecimentos na área da Multimédia.
