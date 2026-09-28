/* ==========================================
   MENU MOBILE
========================================== */

const menuBtn =
    document.getElementById("menuBtn");

const navbar =
    document.getElementById("navbar");


menuBtn.addEventListener(
    "click",
    function () {

        navbar.classList.toggle("open");

        if (
            navbar.classList.contains("open")
        ) {

            menuBtn.textContent = "✕";

        } else {

            menuBtn.textContent = "☰";

        }

    }
);


/* Đóng menu khi chọn mục */

document
    .querySelectorAll(".navbar a")
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                navbar.classList.remove("open");

                menuBtn.textContent = "☰";

            }
        );

    });


/* ==========================================
   DARK / LIGHT MODE
========================================== */

const themeBtn =
    document.getElementById("themeBtn");


const savedTheme =
    localStorage.getItem("portfolio-theme");


if (savedTheme === "light") {

    document.body.classList.add(
        "light-mode"
    );

    themeBtn.textContent = "☀";

}


themeBtn.addEventListener(
    "click",
    function () {

        document.body.classList.toggle(
            "light-mode"
        );


        if (
            document.body.classList.contains(
                "light-mode"
            )
        ) {

            themeBtn.textContent = "☀";

            localStorage.setItem(
                "portfolio-theme",
                "light"
            );

        } else {

            themeBtn.textContent = "☾";

            localStorage.setItem(
                "portfolio-theme",
                "dark"
            );

        }

    }
);


/* ==========================================
   TYPING EFFECT
========================================== */

const typing =
    document.getElementById("typing");


const words = [

    "sinh viên Sư phạm Tin học",

    "người yêu thích công nghệ",

    "người thích thiết kế Web",

    "một người luôn học hỏi"

];


let wordIndex = 0;

let characterIndex = 0;

let deleting = false;


function typingEffect() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typing.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typingEffect,
                1500
            );

            return;

        }

    } else {

        typing.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) %
                words.length;

        }

    }


    setTimeout(
        typingEffect,
        deleting ? 35 : 65
    );

}


typingEffect();


/* ==========================================
   HEADER SCROLL
========================================== */

const header =
    document.querySelector(".header");


window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 30) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }
);


/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".navbar a"
    );


function updateNavigation() {

    let currentSection = "home";


    sections.forEach(
        function (section) {

            const top =
                section.offsetTop - 170;

            const bottom =
                top +
                section.offsetHeight;


            if (
                window.scrollY >= top &&
                window.scrollY < bottom
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        }
    );


    navLinks.forEach(
        function (link) {

            link.classList.remove(
                "active"
            );


            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {

                link.classList.add(
                    "active"
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    updateNavigation
);


/* ==========================================
   SCROLL REVEAL
========================================== */

const revealItems =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("show");

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


revealItems.forEach(
    function (item) {

        revealObserver.observe(item);

    }
);


/* ==========================================
   SKILL PROGRESS
========================================== */

const progressBars =
    document.querySelectorAll(
        ".progress div"
    );


const progressObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        const width =
                            entry.target
                                .dataset
                                .width;

                        entry.target
                            .style
                            .width = width;

                    }

                }
            );

        },

        {
            threshold: 0.5
        }

    );


progressBars.forEach(
    function (bar) {

        progressObserver.observe(bar);

    }
);


/* ==========================================
   CONTACT FORM
========================================== */

const contactForm =
    document.getElementById(
        "contactForm"
    );


const formMessage =
    document.getElementById(
        "formMessage"
    );


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document
                .getElementById("name")
                .value
                .trim();


        formMessage.textContent =
            "Cảm ơn " +
            name +
            "! Mình đã nhận được lời nhắn của bạn ✓";


        contactForm.reset();


        setTimeout(
            function () {

                formMessage.textContent = "";

            },
            5000
        );

    }
);


/* ==========================================
   FOOTER YEAR
========================================== */

document
    .getElementById("year")
    .textContent =
    new Date().getFullYear();


/* ==========================================
   PROFILE 3D EFFECT
========================================== */

const profileCard =
    document.querySelector(
        ".profile-card"
    );


if (
    profileCard &&
    window.innerWidth > 900
) {

    profileCard.addEventListener(
        "mousemove",
        function (event) {

            const rect =
                profileCard
                    .getBoundingClientRect();


            const mouseX =
                event.clientX -
                rect.left;


            const mouseY =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateY =
                (mouseX - centerX) / 35;


            const rotateX =
                (centerY - mouseY) / 35;


            profileCard.style.transform =
                "perspective(1000px)" +
                " rotateX(" +
                rotateX +
                "deg)" +
                " rotateY(" +
                rotateY +
                "deg)" +
                " translateY(-5px)";

        }
    );


    profileCard.addEventListener(
        "mouseleave",
        function () {

            profileCard.style.transform =
                "perspective(1000px)" +
                " rotateX(0deg)" +
                " rotateY(0deg)" +
                " translateY(0)";

        }
    );

}