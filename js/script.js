document.addEventListener("DOMContentLoaded", function () {

    /* ===== HIỆN TOÀN BỘ NỘI DUNG ===== */
    document.querySelectorAll(".reveal").forEach(function (item) {
        item.classList.add("show");
    });


    /* ===== MENU MOBILE ===== */
    const menuBtn = document.getElementById("menuBtn");
    const navbar = document.getElementById("navbar");

    if (menuBtn && navbar) {
        menuBtn.addEventListener("click", function () {
            navbar.classList.toggle("open");
            menuBtn.textContent =
                navbar.classList.contains("open") ? "✕" : "☰";
        });

        document.querySelectorAll(".navbar a").forEach(function (link) {
            link.addEventListener("click", function () {
                navbar.classList.remove("open");
                menuBtn.textContent = "☰";
            });
        });
    }


    /* ===== DARK / LIGHT MODE ===== */
    const themeBtn = document.getElementById("themeBtn");

    if (themeBtn) {
        const savedTheme = localStorage.getItem("portfolio-theme");

        if (savedTheme === "light") {
            document.body.classList.add("light-mode");
            themeBtn.textContent = "☀";
        }

        themeBtn.addEventListener("click", function () {
            document.body.classList.toggle("light-mode");

            if (document.body.classList.contains("light-mode")) {
                themeBtn.textContent = "☀";
                localStorage.setItem("portfolio-theme", "light");
            } else {
                themeBtn.textContent = "☾";
                localStorage.setItem("portfolio-theme", "dark");
            }
        });
    }


    /* ===== TYPING EFFECT ===== */
    const typing = document.getElementById("typing");

    if (typing) {
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
            const currentWord = words[wordIndex];

            if (!deleting) {
                typing.textContent =
                    currentWord.substring(0, characterIndex + 1);

                characterIndex++;

                if (characterIndex === currentWord.length) {
                    deleting = true;
                    setTimeout(typingEffect, 1500);
                    return;
                }
            } else {
                typing.textContent =
                    currentWord.substring(0, characterIndex - 1);

                characterIndex--;

                if (characterIndex === 0) {
                    deleting = false;
                    wordIndex = (wordIndex + 1) % words.length;
                }
            }

            setTimeout(typingEffect, deleting ? 35 : 65);
        }

        typingEffect();
    }


    /* ===== HEADER SCROLL ===== */
    const header = document.querySelector(".header");

    if (header) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 30) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    }


    /* ===== ACTIVE MENU ===== */
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar a");

    function updateNavigation() {
        let currentSection = "home";

        sections.forEach(function (section) {
            const top = section.offsetTop - 170;
            const bottom = top + section.offsetHeight;

            if (
                window.scrollY >= top &&
                window.scrollY < bottom
            ) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(function (link) {
            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateNavigation);
    updateNavigation();


    /* ===== THANH KỸ NĂNG ===== */
    document.querySelectorAll(".progress div").forEach(function (bar) {
        const width = bar.dataset.width;

        if (width) {
            bar.style.width = width;
        }
    });


    /* ===== CONTACT FORM ===== */
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm && formMessage) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const nameInput = document.getElementById("name");
            const name = nameInput ? nameInput.value.trim() : "";

            formMessage.textContent =
                "Cảm ơn " + name +
                "! Mình đã nhận được lời nhắn của bạn ✓";

            contactForm.reset();

            setTimeout(function () {
                formMessage.textContent = "";
            }, 5000);
        });
    }


    /* ===== FOOTER YEAR ===== */
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* ===== PROFILE 3D ===== */
    const profileCard = document.querySelector(".profile-card");

    if (profileCard && window.innerWidth > 900) {

        profileCard.addEventListener("mousemove", function (event) {
            const rect = profileCard.getBoundingClientRect();

            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateY = (mouseX - centerX) / 35;
            const rotateX = (centerY - mouseY) / 35;

            profileCard.style.transform =
                "perspective(1000px) " +
                "rotateX(" + rotateX + "deg) " +
                "rotateY(" + rotateY + "deg) " +
                "translateY(-5px)";
        });

        profileCard.addEventListener("mouseleave", function () {
            profileCard.style.transform =
                "perspective(1000px) " +
                "rotateX(0deg) rotateY(0deg) translateY(0)";
        });
    }

});
