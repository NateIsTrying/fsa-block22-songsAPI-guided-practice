const songsAPIURL = 'https://fsa-async-await.herokuapp.com/api/guided-practice/songs';
const artistsAPIURL ='https://fsa-async-await.herokuapp.com/api/guided-practice/artists';
const genresAPIURL = 'https://fsa-async-await.herokuapp.com/api/guided-practice/genres';


const fetchAllSongs = async () => {
    try{
        const response =await fetch(songsAPIURL);
        const songs = await response.json();
        return songs;
    } catch(error) {
        console.log(error);
    }
};





const init = async () => {
    const songs = await fetchAllSongs();
    console.log(songs);
};

init();