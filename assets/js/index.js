import * as Handler from "./page-components/handlers.js";

function init(){
    bindEvents();
}

function bindEvents(){
    document.querySelectorAll('#projects article').forEach($article => {
        $article.addEventListener('click', Handler.handleProjectClick);
    });
}

init();