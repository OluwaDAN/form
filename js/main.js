let homeBtn = document.getElementById(`home`);
let aboutBtn = document.getElementById(`about`);
let contactBtn = document.getElementById(`contact`);
contactBtn.style.backgroundColor = `hotpink`;
aboutBtn.style.backgroundColor = `yellow`;

// THIS CONTENT
let homeCont = document.getElementById(`one`);
let aboutCont = document.getElementById(`two`);
let contactCont = document.getElementById(`three`);
aboutCont.style.display = `none`;
contactCont.style.display = `none`;
homeCont.style.color = `white`;
aboutCont.style.color = `cyan`;
contactCont.style.color = `hotpink`;

homeBtn.addEventListener(`click`, homeCon1);

function homeCon1(){
    homeCont.style.display = `block`;
    aboutCont.style.display = `none`;
    contactCont.style.display = `none`;
}

aboutBtn.addEventListener(`click`, aboutCon1);

function aboutCon1(){
    aboutCont.style.display = `block`;
    contactCont.style.display = `none`;
    homeCont.style.display = `none`;
}

contactBtn.addEventListener(`click`, contactCon1);

function contactCon1(){
    contactCont.style.display = `block`;
    homeCont.style.display = `none`;
    aboutCont.style.display = `none`;
}