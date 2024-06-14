





let apiKey  = "5ada7ca246c877f587a63617fda34d37" ;
let movielistCategorie = localStorage.getItem("listMovie");
console.log(movielistCategorie);
 if (+movielistCategorie === "number"){
    console.log("number");

  }





// https://api.themoviedb.org/3/discover/movie?api_key={YOUR_API_KEY}&with_genres=28,12



let movie =  new XMLHttpRequest ;
movie.open("GET", `${movielistCategorie}&page=1`);
// movie.open("GET", `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=arabic`);   
movie.responseType = "json";
movie.send(); 
movie.onload = function (){
    let value = movie.response ;
    let numPopular = value.results.length;
    let imgaurl = "https://image.tmdb.org/t/p/";
  
let contentMovies =``;
for(let i =0 ; i < numPopular; i++){

    contentMovies = `
    <div class="weekly-item" onclick="idMovie(${value.results[i].id})" >
    <img src="${imgaurl}w1280${value.results[i].poster_path}" alt="">
    <h2 class="title">${value.results[i].title}</h2>
    <div class="weekly-info">
        <div class="rating"><i class="fa-solid fa-star" style="color: #fbff00;"></i> <span>${value.results[i].vote_average.toFixed(1)}</span></div>
        <div class="historey"> ${value.results[i].release_date.substr(0,4)}</div>
    </div>
`;
document.querySelector(".movies-list").innerHTML += contentMovies ;
}
}



function idMovie (value){
    localStorage.setItem("idMovie" , value);
    window.open("detail.html","_self");
 }


 let page =2 ;
  function addmore (){
for(let z = 0 ; z < 2 ; z++){
    let moreMovie =  new XMLHttpRequest ;
    moreMovie.open("GET", `${movielistCategorie}&page=${page}`);   
    moreMovie.responseType = "json";
    moreMovie.send(); 
    moreMovie.onload = function (){
        let value = moreMovie.response ;
        let numPopular = value.results.length;
        let imgaurl = "https://image.tmdb.org/t/p/";
      
    let contentMovies =``;
    for(let i =0 ; i < numPopular; i++){
    
        contentMovies = `
        <div class="weekly-item" onclick="idMovie(${value.results[i].id})" >
        <img src="${imgaurl}w1280${value.results[i].poster_path}" alt="">
        <h2 class="title">${value.results[i].title}</h2>
        <div class="weekly-info">
            <div class="rating"><i class="fa-solid fa-star" style="color: #fbff00;"></i> <span>${value.results[i].vote_average.toFixed(1)}</span></div>
            <div class="historey"> ${value.results[i].release_date.substr(0,4)}</div>
        </div>
    `;
    document.querySelector(".movies-list").innerHTML += contentMovies ;
    }
    }

    page = page + 1;
}
 }
