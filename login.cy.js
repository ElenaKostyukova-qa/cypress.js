
describe('Проверка авторизации', function () {
    
    it('Верный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/');//зашли на сайт
        cy.get('#loginButton').should('be.disabled');// проверка что кнопка войти задизейблена
        cy.get('#mail').type('german@dolnikov.ru');// ввели логин
        cy.get('#loginButton').should('be.disabled');// проверка что кнопка войти задизейблена
        cy.get('#pass').type('iLoveqastudio1');// ввели пароль
        cy.get('#loginButton').should('be.enabled');// проверка что кнопка войти активна
        cy.get('#loginButton').click();//клик кнопка войти
        cy.get('#messageHeader').should('be.visible');//проверяем что слово видимое
        cy.get('#messageHeader').contains('Авторизация прошла успешно');// текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//проверяем что видим крестик

         })

     it('Востановления пароля', function () {
        cy.visit('https://login.qa.studio/');//зашли на сайт
        cy.get('#forgotEmailButton').click();//клик кнопка забыли пароль
        cy.get('#mailForgot').type('german@dolnikov77.ru');// ввели любой эмейл
        cy.get('#restoreEmailButton').should('be.visible');//проверяем что слово видимое
        cy.get('#restoreEmailButton').contains('Отправить код');// текст совпадает
        cy.get('#exitRestoreButton > img').should('be.visible');//проверяем что видим крестик

         })

      it('Верный логин, НЕ верный пароль', function () {
        cy.visit('https://login.qa.studio/');//зашли на сайт
        cy.get('#loginButton').should('be.disabled');// проверка что кнопка войти задизейблена
        cy.get('#mail').type('german@dolnikov.ru');// ввели логин
        cy.get('#loginButton').should('be.disabled');// проверка что кнопка войти задизейблена
        cy.get('#pass').type('iLoveqastudio1256');// ввели не верный пароль
        cy.get('#loginButton').should('be.enabled');// проверка что кнопка войти активна
        cy.get('#loginButton').click();//клик кнопка войти
        cy.get('#messageHeader').should('be.visible');//проверяем что слово видимое
        cy.get('#messageHeader').contains('Такого логина или пароля нет');// текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//проверяем что видим крестик

         })

     it('НЕ верный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/');//зашли на сайт
        cy.get('#loginButton').should('be.disabled');// проверка что кнопка войти задизейблена
        cy.get('#mail').type('german@dolnikov789.ru');// ввели не верный логин
        cy.get('#loginButton').should('be.disabled');// проверка что кнопка войти задизейблена
        cy.get('#pass').type('iLoveqastudio1');// ввели пароль
        cy.get('#loginButton').should('be.enabled');// проверка что кнопка войти активна
        cy.get('#loginButton').click();//клик кнопка войти
        cy.get('#messageHeader').should('be.visible');//проверяем что слово видимое
        cy.get('#messageHeader').contains('Такого логина или пароля нет');// текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//проверяем что видим крестик

         })

    it('Логин без @, верный пароль', function () {
        cy.visit('https://login.qa.studio/');//зашли на сайт
        cy.get('#loginButton').should('be.disabled');// проверка что кнопка войти задизейблена
        cy.get('#mail').type('germandolnikov.ru');// ввели логин без @
        cy.get('#loginButton').should('be.disabled');// проверка что кнопка войти задизейблена
        cy.get('#pass').type('iLoveqastudio1');// ввели пароль
        cy.get('#loginButton').should('be.enabled');// проверка что кнопка войти активна
        cy.get('#loginButton').click();//клик кнопка войти
        cy.get('#messageHeader').should('be.visible');//проверяем что слово видимое
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');// текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//проверяем что видим крестик

         })

     it('Приведение логина к строчным буквам', function () {
        cy.visit('https://login.qa.studio/');//зашли на сайт
        cy.get('#loginButton').should('be.disabled');// проверка что кнопка войти задизейблена
        cy.get('#mail').type('GerMan@Dolnikov.ru');// ввели логин
        cy.get('#loginButton').should('be.disabled');// проверка что кнопка войти задизейблена
        cy.get('#pass').type('iLoveqastudio1');// ввели пароль
        cy.get('#loginButton').should('be.enabled');// проверка что кнопка войти активна
        cy.get('#loginButton').click();//клик кнопка войти
        cy.get('#messageHeader').should('be.visible');//проверяем что слово видимое
        cy.get('#messageHeader').contains('Авторизация прошла успешно');// текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//проверяем что видим крестик

         })
     
})



