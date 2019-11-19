## Requisitos para a aplicação

todas as informacoes sao publicas, exceto senhas dos usuários, para que seja possivel o compartilhamento de informacoes de maniea mais simples.

- auth
  - middleware de verificacao de identidade
  - rota registro
    - rota para upload de imagem de usário
  - rota para autenticar
- questions
  - rota para criar
  - rota para atualizar
  - rota para deletar
  - rota para editar
  - search: rota que realiza busca usando elasticseach
  - rota com parametros pata definir o tipos as respostas: completas (default), minimas (so ids)
  - rota com questionId e answerID para pegar uma respostas espeficica de uma pergunta especifica
-
