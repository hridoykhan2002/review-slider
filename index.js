// arrays
const reviews = [
    {
        id:1,
        Name:"Susan Devoloper",
        job:"web Devoloper",
        img:"img/person (9).jpeg",
        text: "Im baby megging twee health goth +1 bicyle right tumaric charterless before they  sold out chesmtry pop-up. sheman hundblog pivked coloring book salvia hoodie cold prresed four dollR TOAST EVERYDAY carry"
    },
    {
        id:2,
        Name:"Anna johoson",
        job:"Web Desigener",
        img:"img/person (2).jpeg",
        text: "Im baby megging twee health goth +1 bicyle right tumaric charterless before they  sold out chesmtry pop-up. sheman hundblog pivked coloring book salvia hoodie cold prresed four dollR TOAST EVERYDAY carry"
    },
    {
        id:3,
        Name:"peter jones",
        job:"intern",
        img:"img/person (16).jpeg",
        text: "Im baby megging twee health goth +1 bicyle right tumaric charterless before they  sold out chesmtry pop-up. sheman hundblog pivked coloring book salvia hoodie cold prresed four dollR TOAST EVERYDAY carry"
    },
    {
        id:4,
        Name:"RR Hridoy",
        job:"Full Stack devoloper",
        img:"img/person (25).jpeg",
        text: "Im baby megging twee health goth +1 bicyle right tumaric charterless before they  sold out chesmtry pop-up. sheman hundblog pivked coloring book salvia hoodie cold prresed four dollR TOAST EVERYDAY carry"
    }
];

// varoiable
let values =0;

// selecting elements
const img =document.querySelector("#imgTag");
const name =document.querySelector("#name");
const job =document.querySelector("#job");
const text =document.querySelector("#text");
const prev =document.querySelector("#prev");
const next =document.querySelector("#next");
const randomButton =document.querySelector("#randomButton");


// window object

window.addEventListener("DOMContentLoaded",() =>{
    showPerson();
});

// function

const showPerson = () =>{
    const item = reviews[values]
    img.src = item.img;
    job.textContent = item.job;
    name.textContent = item.Name;
    text.textContent = item.text;
};
const prevFunction = () =>{
    values--;
    if(values<0){
        values = reviews.length -1;
    }
    showPerson();
};
const nextFunction = () =>{
    values++;
    if(values>reviews.length -1){
        values = 0;
    }
    
    showPerson();
};

const randomFunction = () =>{
    values= Math.floor(Math.random()*reviews.length);
    showPerson()
}
// add event listener

prev.addEventListener("click",prevFunction);
next.addEventListener("click",nextFunction);
randomButton.addEventListener("click",randomFunction);
