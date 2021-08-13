import {Given, When, Then} from '@cucumber/cucumber';

Given('o usuario preenche seus dados de acesso corretamente', function () {
  await element(by.id('inputUser')).typeText('admin');
  await element(by.id('inputPassword')).typeText('admin\n');
});

When('tocar no botão de login', function () {
  await element(by.id('buttonLogin')).tap();
});

Then('deve visualizar a tela de login com sucesso', function () {
  await element(by.id('buttonLogin')).tap();
  await expect(element(by.text('Usuário ou senha inválido'))).toBeVisible();
});