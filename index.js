// Mobile nav

const menuOpen = document.querySelector(".header__icon");
const mobileNav = document.querySelector(".header__mobile");
const faq = document.querySelectorAll(".faq__ques--ans");
const faqPara = document.querySelectorAll(".faq__ques--para");
const faqArrow = document.querySelectorAll(".faq-arrow");

const removeNav = document.querySelectorAll(".header__links");

const form = document.querySelector(".signup__input--btn");
const formInput = document.querySelectorAll(".signup__input")[1];
const formSpan = document.querySelector(".signup__invalid");

menuOpen.addEventListener('click', function(){
    menuOpen.classList.toggle('active');
    mobileNav.classList.toggle('open');
    for(let i = 0 ; i < removeNav.length ; i++ ){
        removeNav[i].addEventListener('click', function(){
            mobileNav.classList.remove('open');
            menuOpen.classList.remove('active');
        })
    }
});


//Faq Answer Toggle
for(let i = 0 ; i < faq.length ; i++ ){
    faq[i].addEventListener('click', function(){
        faqPara[i].classList.toggle('faq__ques--open');
        faqArrow[i].classList.toggle('faq__arrow');
    })
}

//Form Validation

form.addEventListener('click', function(){
    if(formInput.value == ""){
        formInput.classList.add('signup__email');
        formSpan.classList.add('signup__req');
        formInput.placeholder = 'email@example/com';
    }else{
        formInput.classList.remove('signup__email');
        formSpan.classList.remove('signup__req');
        formInput.value = '-------------X-Thankyou for subscribing-X-------------';
    }
});



const features = document.querySelectorAll('.features__button');

const illus = document.querySelector('.features__illustration');
const bookmark = document.querySelector('.features__bookmark');

let image1 =  `<span class="features__illustration--bg"></span>
                <img class="features__illustration--img" src="images//illustration-features-tab-1.svg" alt="Bookmark illustration">`;
let image2 =  `<span class="features__illustration--bg"></span>
                <img class="features__illustration--img" src="images//illustration-features-tab-2.svg" alt="Bookmark illustration">`;
let image3 =  `<span class="features__illustration--bg"></span>
                <img class="features__illustration--img" src="images//illustration-features-tab-3.svg" alt="Bookmark illustration">`;

let imgArr = [image1, image2, image3];


let text1 = `<h2>Bookmark in one click</h2>
            <p>Organize your bookmarks however you like. Our simple drag-and-drop interface 
            gives you complete control over how you manage your favourite sites.</p>
            <button class="faq__ques--btn button">More Info</button>`;

let text2 = `<h2>Intelligent search</h2>
            <p>Our powerful search feature will help you find saved sites in no time at all. 
            No need to trawl through all of your bookmarks.</p>
            <button class="faq__ques--btn button">More Info</button>`;

let text3 = `<h2>Share your bookmarks</h2>
            <p>Easily share your bookmarks and collections with others. Create a shareable 
            link that you can send at the click of a button.</p>
            <button class="faq__ques--btn button">More Info</button>`;

let textArr = [text1, text2, text3]

for(let f = 0; f < features.length; f++){
    features[f].addEventListener('click',function(){
        illus.innerHTML= imgArr[f];
        bookmark.innerHTML = textArr[f];
    })
}

const featuresTab = document.querySelectorAll('.features__button');
const fSpan = document.querySelectorAll('.f__span');


for(let i = 0; i < featuresTab.length ; i++ ){
    let click = false;

    featuresTab[i].addEventListener('click', function(){
        click = true;
        if(click === true){
            fSpan[i].classList.add('features__red');
            if(fSpan[i] === fSpan[0]){
                fSpan[1].classList.remove('features__red');
                fSpan[2].classList.remove('features__red');
                
            } else if (fSpan[i] === fSpan[1]){
                fSpan[0].classList.remove('features__red');
                fSpan[2].classList.remove('features__red');
            } else {
                fSpan[0].classList.remove('features__red');
                fSpan[1].classList.remove('features__red');
            }

        }
    })
}