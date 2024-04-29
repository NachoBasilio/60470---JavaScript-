
function router() {
    const path = window.location.hash.slice(1); 
    console.log(path)
    const app = document.getElementById("app");

    switch (path) {
        case ''://Aca evito que se haga problemas con el #
        case '/':
            app.innerHTML = "<h1>Inicio</h1><p>Bienvenido a la página de inicio.</p>";
            break;
        case '/about':
            app.innerHTML = "<h1>Acerca de</h1><p>Esta es la página de información acerca de nosotros.</p>";
            break;
        case '/contact':
            app.innerHTML = "<h1>Contacto</h1><p>Puedes contactarnos mediante el formulario de contacto.</p>";
            break;
        default:
            app.innerHTML = "<h1>Error 404</h1><p>Página no encontrada.</p>";
    }
}

window.addEventListener('hashchange', router);//Aca le da un evento al window para que haga algo si cambia el hash


router();
