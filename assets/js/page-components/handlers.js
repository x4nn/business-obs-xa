function handleProjectClick(e){
    const linkNextPage = e.target.closest('article').firstElementChild.dataset.next;

    window.location.href = `${linkNextPage}`;
}

export {handleProjectClick};