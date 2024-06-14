
'use strict';



//    let slideImg = document.querySelectorAll(".slidebar-scroll img");


//    for( let img of slideImg){
//     img.onclick = function (){
//         for(let imge of slideImg ){
//             imge.removeAttribute("class");
//         }
//         img.className ="active";
  
//     }
//    }




 



//slidepar

let slide = new XMLHttpRequest;
slide.open("GET", "https://api.themoviedb.org/3/trending/movie/day?api_key=5ada7ca246c877f587a63617fda34d37&append_to_response=casts,videos,images,releases");
slide.responseType = "json";
slide.send();
slide.onload = function () {
    let value = slide.response;
    let numPopular = value.results.length;
    let imgaurl = "https://image.tmdb.org/t/p/";
let contentslide =``;
    for(let i =0 ; i < numPopular; i++){      
      contentslide = ` <img src="${imgaurl}w1280${value.results[i].poster_path}" onclick="infoSlide(${value.results[i].id} , ${i})" class="active" alt="">    `;
       document.querySelector(".slidebar-scroll").innerHTML += contentslide ;
    }
    infoSlide(value.results[0].id, 0)
}



// function info slide bar
function infoSlide ( e ,i ){

    localStorage.setItem("idMovie" , e);
    let imgaurl = "https://image.tmdb.org/t/p/";
     let value = slide.response ;

    document.querySelector(".img-cover").src = `${imgaurl}w1280${value.results[i].backdrop_path}`;
    document.querySelector(".slidebar-info .title").innerHTML = value.results[i].title ;
    document.querySelector(".slidebar-info .rating ").innerHTML = `${value.results[i].release_date.substr(0,4)} <span>${ value.results[i].vote_average.toFixed(1)}</span>` ;
//     document.querySelector(".slidebar-info .categorie").innerHTML = '';
    document.querySelector(".slidebar-info .description").innerHTML = value.results[i].overview ;

    document.querySelector(".slidebar .watch").onclick = function(){
        window.open("detail.html" ,"_self");
    }    
}













// popular api
let popular = new XMLHttpRequest;
popular.open("GET", "https://api.themoviedb.org/3/movie/popular?include_adult=false&language=en-US&page=1&api_key=5ada7ca246c877f587a63617fda34d37");
popular.responseType = "json";
popular.send();
popular.onload = function () {
    let value = popular.response;
    let numPopular = value.results.length;
    let imgaurl = "https://image.tmdb.org/t/p/";

let contentpopular =``;
    for(let i =0 ; i < numPopular; i++){

        contentpopular = `
        <div class="weekly-item" onclick="idMovie(${value.results[i].id})" >
        <img src="${imgaurl}w1280${value.results[i].poster_path}" alt="">
        <h2 class="title">${value.results[i].title}</h2>
        <div class="weekly-info">
            <div class="rating"><i class="fa-solid fa-star" style="color: #fbff00;"></i> <span>${value.results[i].vote_average.toFixed(1)}</span></div>
            <div class="historey"> ${value.results[i].release_date.substr(0,4)}</div>
        </div>
    `;
    document.querySelector("#popular").innerHTML += contentpopular ;
    }
}







// Arabic
let Arabic = new XMLHttpRequest ;
Arabic.open("GET" , "https://api.themoviedb.org/3/discover/movie?api_key=5ada7ca246c877f587a63617fda34d37&with_original_language=ar&region=EG");
Arabic.responseType ="json";
Arabic.send();
Arabic.onload = function () {
   let value = Arabic.response ;
    let numPopular = value.results.length;
    let imgaurl = "https://image.tmdb.org/t/p/";
    let contentArabic =``;
    for(let i =0 ; i < numPopular; i++){
        contentArabic = `
        <div class="weekly-item" onclick="idMovie(${value.results[i].id})">
        <img src="${imgaurl}w1280${value.results[i].poster_path}" alt="">
        <h2 class="title">${value.results[i].title}</h2>
        <div class="weekly-info">
            <div class="rating"><i class="fa-solid fa-star" style="color: #fbff00;"></i> <span>${value.results[i].vote_average.toFixed(1)}</span></div>
            <div class="historey"> ${value.results[i].release_date.substr(0,4)}</div>
        </div> `;
    document.querySelector("#arabic").innerHTML += contentArabic ;

    }
}






// top  rated
let topRated = new XMLHttpRequest ;
topRated.open("GET" , "https://api.themoviedb.org/3/movie/top_rated?page=1&api_key=5ada7ca246c877f587a63617fda34d37");
topRated.responseType ="json";
topRated.send();
topRated.onload = function () {
   let value = topRated.response ;
    let numPopular = value.results.length;
    let imgaurl = "https://image.tmdb.org/t/p/";
    let contentRated =``;
    for(let i =0 ; i < numPopular; i++){
        contentRated = `
        <div class="weekly-item" onclick="idMovie(${value.results[i].id})">
        <img src="${imgaurl}w1280${value.results[i].poster_path}" alt="">
        <h2 class="title">${value.results[i].title}</h2>
        <div class="weekly-info">
            <div class="rating"><i class="fa-solid fa-star" style="color: #fbff00;"></i> <span>${value.results[i].vote_average.toFixed(1)}</span></div>
            <div class="historey"> ${value.results[i].release_date.substr(0,4)}</div>
        </div> `;
    document.querySelector("#top-rated").innerHTML += contentRated ;

    }
}






// now Playing
let nowplaying = new XMLHttpRequest ;
nowplaying.open("GET" , "https://api.themoviedb.org/3/movie/now_playing?page=2&api_key=5ada7ca246c877f587a63617fda34d37");
nowplaying.responseType ="json";
nowplaying.send();
nowplaying.onload = function () {
   let value = nowplaying.response ;
    let numPopular = value.results.length;
    let imgaurl = "https://image.tmdb.org/t/p/";
    let contentNowplaying =``;
    for(let i =0 ; i < numPopular; i++){
        contentNowplaying = `
        <div class="weekly-item" onclick="idMovie(${value.results[i].id})">
        <img src="${imgaurl}w1280${value.results[i].poster_path}" alt="">
        <h2 class="title">${value.results[i].title}</h2>
        <div class="weekly-info">
            <div class="rating"><i class="fa-solid fa-star" style="color: #fbff00;"></i> <span>${value.results[i].vote_average.toFixed(1)}</span></div>
            <div class="historey"> ${value.results[i].release_date.substr(0,4)}</div>
        </div> `;
    document.querySelector("#nowplaying").innerHTML += contentNowplaying ;

    }
}






// up comping
let upcoming = new XMLHttpRequest ;
upcoming.open("GET" , "https://api.themoviedb.org/3/movie/upcoming?page=1&api_key=5ada7ca246c877f587a63617fda34d37");
upcoming.responseType ="json";
upcoming.send();
upcoming.onload = function () {
   let value = upcoming.response ;
    let numPopular = value.results.length;
    let imgaurl = "https://image.tmdb.org/t/p/";
    let contentupcompin =``;
    for(let i =0 ; i < numPopular; i++){
        contentupcompin = `
        <div class="weekly-item" onclick="idMovie(${value.results[i].id})">
        <img src="${imgaurl}w1280${value.results[i].poster_path}" alt="">
        <h2 class="title">${value.results[i].title}</h2>
        <div class="weekly-info">
            <div class="rating"><i class="fa-solid fa-star" style="color: #fbff00;"></i> <span>${value.results[i].vote_average.toFixed(1)}</span></div>
            <div class="historey"> ${value.results[i].release_date.substr(0,4)}</div>
        </div> `;
    document.querySelector("#upcoming").innerHTML += contentupcompin ;

    }
}






// function open details movie
 function idMovie (value){
    localStorage.setItem("idMovie" , value);
    window.open("detail.html","_self");
 }


 


// https://api.themoviedb.org/3/movie/top_rated?          top  rated movise
// https://api.themoviedb.org/3/trending/movie/week?      top week moviece
// https://api.themoviedb.org/3/movie/upcoming?           upcoming moviece
// https://api.themoviedb.org/3/search/movie?query=spiderman&include_adult=false&language=en-US&page=1&api_key=5ada7ca246c877f587a63617fda34d37   search by name 
// https://api.themoviedb.org/3/movie/565770/recommendations?page=1&api_key=5ada7ca246c877f587a63617fda34d37                     recomendation by id
// https://api.themoviedb.org/3/find/615656?external_source=imdb_id                      find by 

// https://api.themoviedb.org/3/movie/upcoming?page=1' 



