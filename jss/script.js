/* ==========================
   SHRI RAM HOSPITAL VIP
========================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       COUNTER ANIMATION
    ========================== */

    const counters = document.querySelectorAll(".stat-box h2");

    counters.forEach(counter => {

        const updateCounter = () => {

            const target =
            parseInt(counter.innerText.replace(/\D/g,""));

            let current =
            parseInt(counter.getAttribute("data-count")) || 0;

            const increment =
            Math.ceil(target / 100);

            if(current < target){

                current += increment;

                counter.setAttribute(
                    "data-count",
                    current
                );

                counter.innerText =
                current + "+";

                setTimeout(
                    updateCounter,
                    20
                );

            }else{

                if(counter.innerText.includes("24")){
                    counter.innerText = "24/7";
                }else{
                    counter.innerText = target + "+";
                }

            }

        };

        updateCounter();

    });

    /* ==========================
       SCROLL ANIMATION
    ========================== */

    const revealElements =
    document.querySelectorAll(
        ".card, .doctor-card, .testimonial, .department-card"
    );

    const revealOnScroll = () => {

        revealElements.forEach(el => {

            const position =
            el.getBoundingClientRect().top;

            const screen =
            window.innerHeight - 100;

            if(position < screen){

                el.style.opacity = "1";
                el.style.transform = "translateY(0)";

            }

        });

    };

    revealElements.forEach(el => {

        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = "all .8s ease";

    });

    window.addEventListener(
        "scroll",
        revealOnScroll
    );

    revealOnScroll();

});


/* ==========================
   BACK TO TOP
========================== */

const topBtn =
document.createElement("button");

topBtn.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


/* ==========================
   LOADING SCREEN
========================== */

window.addEventListener("load", () => {

    const loader =
    document.getElementById("loader");

    if(loader){

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },500);

    }

});