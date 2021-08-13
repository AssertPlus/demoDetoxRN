Feature: Login
  Como um usuário do app
  Quero conseguir preencher minhas credencias
  Para ter acesso ao app

  Scenario: Login com sucesso
    Given o usuario preenche seus dados de acesso corretamente
    When tocar no botão de login
    Then deve visualizar a tela de login com sucesso