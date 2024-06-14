'use strict';





//  add event on multiple elements

const addEventOnElemnts =  function (elements , eventType , callback){
    for(const elem of elements) elem.addEventListener (eventType , callback);
} 

// Toggle search in  mobile device || small screan 
const seachBox  = document.querySelector("[search-box]") ;
const searchTogglers = document.querySelectorAll("[search-toggler]");

addEventOnElemnts(searchTogglers , "click" , function (){
    seachBox.classList.toggle("active");
})



const menuBtn = document.querySelector(".menu-btn ");

menuBtn.onclick = function () {
    menuBtn.classList.toggle("active");
    document.querySelector(".sidebar").classList.toggle("active");
    document.querySelector(".overlay").classList.toggle("active");
}



// open movie list
function addMovielist(value){
    console.log(value);
    localStorage.setItem("listMovie" , `https://api.themoviedb.org/3/movie/${value}?api_key=5ada7ca246c877f587a63617fda34d37` );
    window.open("movie-list.html" ,"_self");
}




//set gneres
let setGenre = new XMLHttpRequest ;
setGenre.open("GET" , "https://api.themoviedb.org/3/genre/movie/list?api_key=5ada7ca246c877f587a63617fda34d37");
setGenre.responseType ="json";
setGenre.send();
setGenre.onload = function () {
   let value = setGenre.response ;
    let numPopular = value.genres.length;
    let contentGenre =``;
    for(let i =0 ; i < numPopular; i++){
        contentGenre = `
        <div  menu-close class="sidebar-link" onclick="addGenrelist(${value.genres[i].id})"  >${value.genres[i].name}</div>
        `;
    document.querySelector("#genre .box").innerHTML += contentGenre ;

    }
}



// open genre list
function addGenrelist(value){
    localStorage.setItem("listMovie" , `https://api.themoviedb.org/3/discover/movie?api_key=5ada7ca246c877f587a63617fda34d37&with_genres=${value}` );
    window.open("movie-list.html" ,"_self");
}




// open countrey list
function addCountreylist(language , contrey){
    localStorage.setItem("listMovie" , `https://api.themoviedb.org/3/discover/movie?api_key=5ada7ca246c877f587a63617fda34d37&with_original_language=${language}&region=${contrey}` );
    window.open("movie-list.html" ,"_self");
}






//search filed
function searchField (value){
    document.querySelector(".search-wrapper").className +=" searching";
    if(value !== ''){
        
        document.querySelector("#searchContainer").innerHTML  = '';
        
//search data
let search = new XMLHttpRequest ;
search.open("GET", `https://api.themoviedb.org/3/search/movie?api_key=5ada7ca246c877f587a63617fda34d37&query=${value}`);   
search.responseType ="json";
search.send();
search.onload = function () {
    let imgaurl = "https://image.tmdb.org/t/p/";
   let value = search.response ;
   console.log(value)
    let numPopular = value.results.length;
    let contentSearch =``;
    for(let i =0 ; i < numPopular; i++){
        contentSearch = `
        <div class="weekly-item" onclick="idMovie(${value.results[i].id})" >
        <img src="${imgaurl}w1280${value.results[i].poster_path}" alt="">
        <h2 class="title">${value.results[i].title}</h2>
        <div class="weekly-info">
            <div class="rating"><i class="fa-solid fa-star" style="color: #fbff00;"></i> <span>${value.results[i].vote_average.toFixed(1)}</span></div>
            <div class="historey"> ${value.results[i].release_date.substr(0,4)}</div>
        </div>
        `;
     document.querySelector("#searchContainer").innerHTML  += contentSearch;
     document.querySelector(".fakeContentSearch").style.cssText = 'display:none;';

    }
}

    }
    else{
     document.querySelector(".fakeContentSearch").style.cssText = 'display:block;';
     document.querySelector("#searchContainer").innerHTML  = '';

    }
    setTimeout(function (){
    document.querySelector(".search-wrapper").className ="search-wrapper";
}, 1300)


}






