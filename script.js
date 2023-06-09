//Function to get movies at the start

const mainurl = "https://api.themoviedb.org/3/discover/movie?api_key=3d8eb8217ce359d076102f6765a454b4";
const searchInput = document.getElementById("search");

getMovies(mainurl);


//Function to get movies after search


//const moviesContainer = document.getElementById("cards");

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
    //    alert("Click Ok to get movies");
       searchMovies();
    }
});
function searchMovies(){
       //alert("Wait");
    const searchTerm = searchInput.value;
   // alert(searchTerm);
    // document.getElementById("cards").innerHTML="";
    const searchurl = `https://api.themoviedb.org/3/search/movie?api_key=3d8eb8217ce359d076102f6765a454b4&query=${searchTerm}`;
   // alert(searchurl);
    getMovies(searchurl);
    
}


function getMovies(url)
{
     document.getElementById("cards").innerHTML="";
    
    fetch(url)
    .then((data)=> {
         // console.log(data);
         return data.json();
     }).then((completedata)=>{
              //console.log(completedata.results);  //(This gives the array of complete data)
              let data1="";
              completedata.results.map((value)=>{
              data1+=`<div class="card">
              <img src="https://image.tmdb.org/t/p/w500/${value.poster_path}" alt="" class="image">
              <h2 class="title">${value.title}</h2>
              <p class= "rating">Rating : ${value.vote_average}</p>
              <p class="overview">${value.overview}</p>
              </div>`
    });
    document.getElementById("cards").innerHTML=data1;


 }).catch((error)=>{
    console.log(error);
 })

}