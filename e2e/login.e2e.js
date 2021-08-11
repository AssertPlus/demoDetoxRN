describe('Teste home ', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Deve visualizar a tela de boas vindas com sucesso', async () => {
    
    //Dado que o usuário preenche as informações de login
    await element(by.id('inputUser')).typeText('admin');
    await element(by.id('inputPassword')).typeText('admin\n');

    //Quando o usuário tocar em Log In
    await element(by.id('buttonLogin')).tap();

    //Então deve aparecer a tela de boas vindas com sucesso
    await expect(element(by.text('Seja bem vindo, admin'))).toBeVisible();
  });


  it('Deve visualizar exibir mensagem de erro para campo usuário e senha vazio', async () => {
    await element(by.id('buttonLogin')).tap();

    await expect(element(by.text('Usuário ou senha inválido'))).toBeVisible();
  });


  it('Deve visualizar exibir mensagem de erro para campo usuário vazio', async () => {
    await element(by.id('inputPassword')).typeText('adminn\n');
    await element(by.id('buttonLogin')).tap();

    await expect(element(by.text('Usuário ou senha inválido'))).toBeVisible();
  });

  it('Deve visualizar exibir mensagem de erro para campo senha vazio', async () => {
    await element(by.id('inputUser')).typeText('admin\n');
    await element(by.id('buttonLogin')).tap();

    await expect(element(by.text('Usuário ou senha inválido'))).toBeVisible();
  });
});