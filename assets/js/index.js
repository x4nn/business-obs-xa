import * as Handler from "./page-components/handlers.js";

init();

function init(){
    bindEvents();
}

function bindEvents(){
    document.querySelectorAll('#projects article').forEach($article => {
        $article.addEventListener('click', Handler.handleProjectClick);
    });
}

