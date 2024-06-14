











let id = localStorage.idMovie ;



let Movie = new XMLHttpRequest ;
Movie.open("GET" , `https://api.themoviedb.org/3/movie/${id}?api_key=5ada7ca246c877f587a63617fda34d37&append_to_response=casts,videos,images,releases`);
Movie.responseType = "json";
Movie.send();
Movie.onload =function (){
    let value = Movie.response ;
    fakeVideo = Movie.response ;
    console.log(value);
    let imgaurl = "https://image.tmdb.org/t/p/";

    document.querySelector(".details img").src = `${imgaurl}w1280${value.poster_path}`;
    document.querySelector(".details .title").innerHTML = value.title;
    let arrgen =[];
    for(let i =0 ; i < value.genres.length ; i++){
        arrgen.push(value.genres[i].name);
    }
    let stringgen = arrgen.join(", ");

    document.querySelector(".details .categorie").innerHTML = stringgen ;
    document.querySelector(".details .description").innerHTML = value.overview ;
    document.querySelector(".details .rating span").innerHTML =  ` <i class="fa-solid fa-star" style="color: #fbff00;"></i> ${value.vote_average.toFixed(1)}` ;
    let hours = 0 ;
    let minut = value.runtime ;
    for(let h=0 ; h <=10 ; h++ ){
    if(minut >= 60){
        
        minut = minut - 60 ;
        hours +=  1 ; 
    }
}
document.querySelector(".details .runtime span").innerHTML = `${hours}h ${minut}m`;

    document.querySelector(".details .year span").innerHTML = value.release_date.substr(0,4) ;
    document.querySelector(".details .lang span").innerHTML = value.original_language.toUpperCase() ;

let trailerContent = ``;
let lengthVideo = value.videos.results.length ;
for(let j =0 ; j < lengthVideo ; j++){

trailerContent +=` <iframe src="https://www.youtube.com/embed/${value.videos.results[j].key}"  frameborder="0"></iframe> `;

        
    
}
document.querySelector(".trailers").innerHTML = trailerContent ;



  document.querySelector(".details").style.cssText= `background-image: url(${imgaurl}w1280${value.backdrop_path});   backdrop-filter: blur(10px);`;
}









// 

let topRated = new XMLHttpRequest ;

 topRated.open("GET" , `https://api.themoviedb.org/3/movie/${id}/recommendations?page=1&api_key=5ada7ca246c877f587a63617fda34d37`);
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


 
// function open details movie
function idMovie (value){
    localStorage.setItem("idMovie" , value);
    window.open("detail.html","_self");
 }




// https://api.themoviedb.org/3/movie/top_rated?          top  rated movise
// https://api.themoviedb.org/3/trending/movie/week?      top week moviece
// https://api.themoviedb.org/3/movie/upcoming?           upcoming moviece
// https://api.themoviedb.org/3/search/movie?query=spiderman&include_adult=false&language=en-US&page=1&api_key=5ada7ca246c877f587a63617fda34d37   search by name 
//  https://api.themoviedb.org/3/movie/565770/recommendations?page=1&api_key=5ada7ca246c877f587a63617fda34d37 
// https://api.themoviedb.org/3/find/615656?external_source=imdb_id                      find by id