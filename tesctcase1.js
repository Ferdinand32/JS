const puppeteer = require('puppeteer');




async function  test1(URL) {
    
    const URL_TEST = URL;

    console.log('Запуск браузера');
    const browser = await puppeteer.launch({headless: true, slowMo: 1});

    console.log('Создание новой вкладки в браузере');
    const page = await browser.newPage();

    console.log('Переход по ссылке');
    await page.goto(URL_TEST);

    console.log('Ожидание Загрузки');
    await page.waitForNavigation('.serp-item');

    console.log('Ввод логина');
    const searchAdminLogin = await page.$('body > app-root > app-login > div > div > div.panel.panel-dark.panel-flat > div.panel-body > form > div:nth-child(1) > app-text > label > div:nth-child(2) > input');
    await searchAdminLogin.click();
    await searchAdminLogin.type('*****');

    console.log('Ввод пароля ');
    const searchAdminPass = await page.$('body > app-root > app-login > div > div > div.panel.panel-dark.panel-flat > div.panel-body > form > div:nth-child(2) > app-password-input > label > span > input');
    await searchAdminPass.click();
    await searchAdminPass.type('******');

    console.log('Вход ');
    const Submit = await page.$('body > app-root > app-login > div > div > div.panel.panel-dark.panel-flat > div.panel-body > form > button');
    await Submit.click();

    console.log('Ожидание Загрузки');
    await page.waitFor(8000);

    console.log('Проверка результата');
    const result = await page.$('body > app-root > app-layout > div > div > app-sidebar > nav > ul > perfect-scrollbar > div > div.ps-content > app-layout-menu > mat-nav-list')

    if (result == null) {
        console.log('Меню нет');  //вообще итог можно и в файл писать сразу
    }
    else {
        console.log('Pass');
    }

        console.log('Сохранение скриншота'); //его просто для наглядности 
    await page.screenshot({path: 'screen.png'});

    console.log('Выход');
    await browser.close();



}

test1('******'); // при вызове можно разные стенды писать 
