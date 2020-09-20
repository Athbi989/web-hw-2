/* 
    "Work Smarter, Not Harder"
    Some function to get movies & search ...... (light version)
    connected with The Movie Database Api (developers.themoviedb.org)
    Author : Athbi 🎥
*/


// Setup the config 
const APIKEY = "36f1181b7de7c9b7ed706c8ee9368344" ; //this is my api key i know 
const DOMAIN = "https://api.themoviedb.org/3/";

//Some api methods 

const getPouplar = async (page = 1) => {
    const response = await fetch(DOMAIN + 'movie/popular?api_key='+APIKEY+'&language=en-US&page=' + page);
    const json = await response.json(); //wait for respone
    return json;
}
  
const getUpcoming = async (page = 1) => {
    const response = await fetch(DOMAIN + 'movie/upcoming?api_key='+APIKEY+'&language=en-US&page=' + page);
    const json = await response.json(); //wait for respone
    return json;
}

const getMostVoted = async (page = 1) => {
    const response = await fetch(DOMAIN + 'movie/top_rated?api_key='+APIKEY+'&language=en-US&page=' + page);
    const json = await response.json(); //wait for respone
    return json;
}

const getPouplarTvShows = async (page = 1) => {
    const response = await fetch(DOMAIN + 'tv/popular?api_key='+APIKEY+'&language=en-US&page=' + page);
    const json = await response.json(); //wait for respone
    return json;
}

const getGenere = async (id = 28) => {
    const response = await fetch(DOMAIN + 'discover/movie?api_key='+APIKEY+'&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=' + id);
    const json = await response.json(); //wait for respone
    return json;
}

const getMovie = async (id = 28) => {
    const response = await fetch(DOMAIN + 'movie/'+id+'?api_key='+APIKEY + '&append_to_response=videos');
    const json = await response.json(); //wait for respone
    return json;
}



//Other function
function parseURL(url) {
    var parser = document.createElement('a'),
        searchObject = {},
        queries, split, i;
    // Let the browser do the work
    parser.href = url;
    // Convert query string to object
    queries = parser.search.replace(/^\?/, '').split('&');
    for( i = 0; i < queries.length; i++ ) {
        split = queries[i].split('=');
        searchObject[split[0]] = split[1];
    }
    return {
        protocol: parser.protocol,
        host: parser.host,
        hostname: parser.hostname,
        port: parser.port,
        pathname: parser.pathname,
        search: parser.search,
        searchObject: searchObject,
        hash: parser.hash
    };
}
