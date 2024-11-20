describe('Проверка авторизации', function () 
{
    it('Верный пароль и верный логин', function () 
    {
         cy.visit('https://login.qa.studio'); //Зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru '); //Ввести верный логин
         cy.get('#pass').type('iLoveqastudio1'); //Ввести верный пароль
         cy.get('#loginButton').click(); //Нажать войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Виден текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Крестик виден


     })
     
     it('Восстановление пароля', function () 
    {
         cy.visit('https://login.qa.studio'); //Зашли на сайт
         cy.get('#forgotEmailButton').click(); // Нажали забыли пароль
         cy.get('#mailForgot').type('german@dolnikov.ru '); //Ввести верный логин
         cy.get('#restoreEmailButton').click(); 
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Виден текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Крестик виден


     })

     it('Неверный пароль и верный логин', function () 
     {
          cy.visit('https://login.qa.studio'); //Зашли на сайт
          cy.get('#mail').type('german@dolnikov.ru '); //Ввести верный логин
          cy.get('#pass').type('iLoveqastudio2'); //Ввести неверный пароль
          cy.get('#loginButton').click(); //Нажать войти
          cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Виден текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Крестик виден
  
      })
      it('Верный пароль и неверный логин', function () 
      {
           cy.visit('https://login.qa.studio'); //Зашли на сайт
           cy.get('#mail').type('ggerman@dolnikov.ru'); //Ввести неверный логин
           cy.get('#pass').type('iLoveqastudio1'); //Ввести верный пароль
           cy.get('#loginButton').click(); //Нажать войти
           cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Виден текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Крестик виден
   
       })
       it('Валидация', function () 
       {
            cy.visit('https://login.qa.studio'); //Зашли на сайт
            cy.get('#mail').type('germandolnikov.ru'); //Ввести невалидный логин
            cy.get('#pass').type('iLoveqastudio1'); //Ввести верный пароль
            cy.get('#loginButton').click(); //Нажать войти
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Виден текст
          cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Крестик виден
    
        })
        
        it('Строчные буквы', function () 
        {
             cy.visit('https://login.qa.studio'); //Зашли на сайт
             cy.get('#mail').type('GerMan@Dolnikov.ru'); //Ввести невалидный логин
             cy.get('#pass').type('iLoveqastudio1'); //Ввести верный пароль
             cy.get('#loginButton').click(); //Нажать войти
             cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Виден текст
           cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Крестик виден
     
         })
})