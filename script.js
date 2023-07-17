const songsAPIURL = 'https://fsa-async-await.herokuapp.com/api/guided-practice/songs';
const artistsAPIURL ='https://fsa-async-await.herokuapp.com/api/guided-practice/artists';
const genresAPIURL = 'https://fsa-async-await.herokuapp.com/api/guided-practice/genres';

const fetchAllSongs = async () => {
    try{
        const response = await fetch(songsAPIURL);
        const songsData = await response.json();
        console.log(songsData)
        return songsData;
    } catch (error) {
        console.log('error', error);
    }
}

const renderAllSongs = async(data) => {
    
    const musicBox = document.querySelector(`#song-container`);
    musicBox.innerHTML = '';
    const boxUl = document.createElement('ul');
    musicBox.appendChild(boxUl);

    for(let i = 0; i < data.length; i++){          
        // console.log(data[i].title);
        const boxLi = document.createElement('li');
        boxUl.appendChild(boxLi);  
        boxLi.innerText = data[i].title;
    }

}

const addNewSong = async(title, id, date) => {
    try {
        const response = await fetch('https://fsa-async-await.herokuapp.com/api/guided-practice/songs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                id,
                date,
            }),
        });
        const data = await response.json();
        return data;
    } catch(error) {
        console.log(error);
    }
    
}

const renderNewSongForm = () => {

}

const init = async () => {
    const songs = await fetchAllSongs();
    renderAllSongs(songs);

    addNewSong(`Mambo No. 5`, 666,'1996-6-16');
}

init()
