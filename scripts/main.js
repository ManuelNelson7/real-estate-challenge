window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("header").classList.add("scrolled");
    } else {
        document.getElementById("header").classList.remove("scrolled");
    }
}

const showMessage = () => {
    document.getElementById("message").classList.add("show-message");
}

const hideMessage = () => {
    document.getElementById("message").classList.remove("show-message");
}

setTimeout(showMessage, 5000);
