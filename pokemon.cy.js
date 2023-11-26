
describe('Покупка нового аватара', function () {
    
    it('Покупка нового фото для своего тренера', function () {
        cy.visit('https://pokemonbattle.me/login');//зашли на сайт
        cy.get('#root > div > main > section > div.login__content > form > div:nth-child(1) > input').type('kostyukova.elena.3007@yandex.ru');// ввели логин
        cy.get('#password').type('Kost2563len');// ввели пароль
        cy.get('#root > div > main > section > div.login__content > form > button').click();//клик кнопка войти
        cy.get('.header__btns > [href="/shop"]').click();//клик кнопка магазин
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111');// ввели номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('12/24');// ввели срок
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');// ввели код
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Elena');// ввели имя
        cy.get('#root > div > main > form > div > button').click();//клик кнопка оплатить
        cy.get('#cardnumber').type('56456');// ввели код смс
        cy.get('#root > div > main > form > div > div > button').click();//клик кнопка отправить
        cy.get('#root > div > main > div.payment__form-container-defolt > form > div > div > h3').contains('Покупка прошла успешно');// текст совпадает

       })

    
     
})



