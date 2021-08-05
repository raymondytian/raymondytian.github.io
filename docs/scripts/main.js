let collapsibleLinks = document.querySelectorAll('.collapsible-link');

if (window.matchMedia('(max-width: 767px)').matches) {
    for (let link of collapsibleLinks) {
        link.setAttribute("target", "")
    }
} else {
    for (let link of collapsibleLinks) {
        link.setAttribute("target", "_blank")
    }
}