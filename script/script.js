
/* ==================================
   NAVBAR AU SCROLL
================================== */

const navbar = document.getElementById("navbar");

if (navbar) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });

}


/* ==================================
   BOUTON RETOUR EN HAUT
================================== */

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {

            backToTop.style.display = "block";

        } else {

            backToTop.style.display = "none";

        }

    });


    backToTop.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/* ==================================
   FERMETURE MENU MOBILE BOOTSTRAP
================================== */

const menuLinks = document.querySelectorAll(".nav-link");

const menu = document.querySelector(".navbar-collapse");

const menuButton = document.querySelector(".navbar-toggler");


menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (
            menu &&
            menu.classList.contains("show") &&
            menuButton
        ) {

            menuButton.click();

        }

    });

});


/* ==================================
   COMPTEURS ANIMÉS
================================== */

const counters = document.querySelectorAll(".counter");

let countersStarted = false;


function startCounters() {

    counters.forEach(function (counter) {

        const target =
            Number(counter.getAttribute("data-target"));

        let count = 0;

        const duration = 1500;

        const interval = 20;

        const increment =
            target / (duration / interval);


        function updateCounter() {

            count += increment;


            if (count < target) {

                counter.innerText =
                    Math.ceil(count);

                setTimeout(updateCounter, interval);

            } else {

                counter.innerText =
                    target + "+";

            }

        }


        updateCounter();

    });

}


/* ==================================
   DÉTECTION DE LA SECTION COMPTEURS
================================== */

const counterSection =
    document.getElementById("pourquoi");


function checkCounters() {

    if (!counterSection || countersStarted) {

        return;

    }


    const position =
        counterSection.getBoundingClientRect().top;

    const screen =
        window.innerHeight;


    if (position < screen - 100) {

        startCounters();

        countersStarted = true;

    }

}


window.addEventListener(
    "scroll",
    checkCounters
);

checkCounters();


/* ==================================
   ANIMATION DES SECTIONS AU SCROLL
================================== */

const elements =
    document.querySelectorAll("section");


elements.forEach(function (element) {

    element.classList.add("fade-in");

});


function revealSections() {

    elements.forEach(function (element) {

        const position =
            element.getBoundingClientRect().top;

        const screen =
            window.innerHeight;


        if (position < screen - 100) {

            element.classList.add("visible");

        }

    });

}


window.addEventListener(
    "scroll",
    revealSections
);

revealSections();


/* ==================================
   FIN DU SCRIPT
================================== */
