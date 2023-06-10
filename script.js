// Declaring variables and API key
const apiKey = "67867160559d24f4f9a3c10b8a3cb697";
let closeButton = document.getElementById("close-search-button");
let movies = document.querySelector("#movies-grid");
let query = document.getElementById("search-input");
let page=1; // used to load more pages of movies
const loadButton = document.querySelector("#load-more-movies-btn");
const moviePage = document.getElementById("movie-card");
const movieDetails = document.getElementById("movieinfo");
const searchButton = document.getElementById("searchbutton");
const searchInput = document.getElementById("search-input");


//Function to get the movies that the user has searched for
const getsearchData = async () => {
    let searchquery=query.value;
    //API Calls
    const response = await fetch("https://api.themoviedb.org/3/search/movie?api_key=" + apiKey + "&language=en-US&query="+ searchquery);
    const data = await response.json();
    //Add Movies to Grid
    data.results.forEach(element => {  
        addMovies(element.title,element.poster_path, element.vote_average , element.id);
    });
    loadButton.addEventListener( "click", loadmoresearched);
    // grabs the individual cards of the movies as an item that if clicked generates the movie page for that movie.
    document.querySelectorAll(".movie-card").forEach(item =>{
        item.addEventListener("click", event =>{
            getMoviePage(item.firstChild.id)
        });
    });
}

//Function to get the popular movies data
const getCurrentMovies = async () => {
    loadButton.style.display="block";
    //API call
    const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=" + apiKey + "&language=en-US&page="+page);
    const data = await response.json();
    //Calls movie data for each element
    data.results.forEach(element => {
        addMovies(element.title,element.poster_path, element.vote_average , element.id);
    });
    // grabs the individual cards of the movies as an item that if clicked generates the movie page for that movie.
    document.querySelectorAll(".movie-card").forEach(item =>{
        item.addEventListener("click", event =>{
            getMoviePage(item.firstChild.id)
        });
    });
}
const addMovies = (title, path, rating, movieId) => {
    let url = getImage(path, "poster");
    parseFloat(rating).toPrecision(2)
    //Create the HTML code to create the movie cards in the grid
    movies.innerHTML += '<div class="movie-card"><img class="movie-poster" alt="' + title +'" src="' + url + '"id="' + movieId + '"/><div class="movie-bar"><span class= "movie-title">' + title + '</span><div class="rating"><img class= "ratingstar" alt="star.png" src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png"/><span class="movie-votes">' + rating + '</span> </div></div></div>';
}

//Movie Page Section:
const getMoviePage = async (Id) => {
    //Fetches Movie Data
    const response = await fetch("https://api.themoviedb.org/3/movie/"+ Id+"?api_key=" + apiKey + "&language=en-US&page="+page);
    const element = await response.json();
    //Generates Movie Page
    let paths = [element.poster_path, element.backdrop_path]; 
    generateMoviePage(paths, element.genres, element.title, element.runtime, element.release_date, element.vote_average,element.overview 
        );

}
//Function to generate the movie page with the movie's information when it's clicked.
const generateMoviePage = async (paths, genre, title, length, release, rating, description) => {
    moviePage.style.display="block"; // make the page visible
    let background = getImage(paths[1],"wide");
    let movieGenre = genre["0"].name;
    // Create the HTML elements with the proper variables to create the movie details pages
    movieDetails.innerHTML='<img class="background" alt="' + title + ' backdrop" src="' + background + '"><div id="secondrow"><div id="info"><span class="genres">' + movieGenre + '</span><h2 class= "movie-title">' + title + '</h2><div id="nextrow"><span class= "movielength">' + length + ' min</span><span id="dividemovies">-</span><span class="release-date">' + release + '</span></div><div id="rating"><img class= "ratingstar" alt="star.png" src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" /><span class="score">' + rating + '</span></div></div><span class="moviedescription">' + description + '</span></div>';
    closeButton.addEventListener("click", closeMoviePage); // event listener for close button to close the page
}

const closeMoviePage = () => {
    document.getElementById("movie-card").style.display="none";
}

//Function to ge the image of the movies to display based off their respective paths
const getImage = (path, type) => {
    let imgWide ="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/";
    let imgSmall ="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/";
    let imgPoster ="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/";

    if(type === "poster"){
        return imgPoster + path;
    }
    else if(type === "wide"){
        return imgWide + path;
    }
    else {
        return imgSmall + path;
    }
}


const loadmore = () => {
    //loads more movies
    page += 1;
    getCurrentMovies();
}

const loadmoresearched = () => {
    //should load more searched movies
    page += 1;
    getsearchData();
}

// Functions are event listeners to when certain buttons are clicked
// that either load new movies or load specific movies
getCurrentMovies();
loadButton.addEventListener( "click", loadmore);
closeButton.addEventListener("click",closeMoviePage)

// Event listener for the search button that runs the function to find movies based off the searches
searchButton.addEventListener("click", function(event){
    event.preventDefault();
    if(searchInput.value == null || searchInput.value == ""){ // resets the page to normal if there is nothing in the search bar and someone tries to hit enter
        // originally if this happened it would have resulted in no movies being shown at all, this fixes that bug
        getCurrentMovies();
    }
    document.getElementById("movies-grid").innerHTML="";
    getsearchData();
});

