const roles = [
    "Web Developer",
    "Frontend Developer",
    "PHP Developer"
];

let roleIndex = 0;
let charIndex = 0;

const roleElement = document.querySelector(".hero h2");

function typeRole() {

    if (charIndex < roles[roleIndex].length) {

        roleElement.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeRole,100);

    }

    else{

        setTimeout(eraseRole,2000);

    }

}

function eraseRole(){

    if(charIndex>0){

        roleElement.textContent=roles[roleIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseRole,50);

    }

    else{

        roleIndex=(roleIndex+1)%roles.length;

        setTimeout(typeRole,500);

    }

}

roleElement.textContent="";

typeRole();


const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.05)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

const projectCards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.2
});

projectCards.forEach(card=>{
    card.classList.add("hidden");
    observer.observe(card);
});