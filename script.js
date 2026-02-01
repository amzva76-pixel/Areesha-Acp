function showPage(pageId) {
    var pages = document.querySelectorAll('.page');
    pages.forEach(function (p) {
        p.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}
