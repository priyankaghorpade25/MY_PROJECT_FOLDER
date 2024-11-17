//Complete the given scaffold to implement all the functiona
songArr=[
    {
        id:'1',
        image:"https://wallpapercave.com/wp/wp4248280.jpg",
        songName:"Ve kamleya",
        Autohr: "Shreya Ghoshal",
        type:"Pop",
        Audio:"Audio2.mp3",
    },
    {
        id:'2',
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi2MHLo8Wka458pm2KWMEMNhnidU3zjgnthrlD14OkNROUBbG3IYEPiuqaxguUCTE_0Ss&usqp=CAU",
        songName:"Pani Pani",
        Autohr: "Honey Singh",
        type:"Pop",
        Audio:"Audio1.mp3"
    },
    {
        id:'3',
        image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQjQ6_15ynTNFtt237ITmmfZxqbBfd4ku2bbpjaAtDPNJ1uKNgr",
        songName:"Desi Boys",
        Autohr: "Mika Singh",
        type:"Rock",
        Audio:"Audio3.mp3",
    }
]

let dropValue = document.querySelector("#dropdown");


let musicdiv =document.querySelector(".music-List");

function display(arr){
    if(musicdiv){
        musicdiv.innerHTML='';

    }
    
   
    for(let i of arr)
    {
        const button1=document.createElement("button");
        button1.classList.add("btn-info");
        button1.textContent=i['songName'];

        button1.addEventListener('click',()=>{
            const midmain = document.getElementById("middlemain");
            midmain.innerHTML='';
            if(midmain){
            
            let songImage=document.createElement("img");
            songImage.src=i['image'];



            let songAuthor=document.createElement("p");
            songAuthor.textContent=i['Autohr'];
            songAuthor.classList.add("author");

            


            const songTitle =document.createElement('p');
            songTitle.textContent=i['songName'];
            songTitle.classList.add("songname");


            
           
            
                
            midmain.append(songImage,songAuthor,songTitle);
           
            }
            
            


            const midAudio=document.getElementById("middleaudio");
            const audio= document.createElement('AUDIO');
            audio.src=i['Audio'];

            audio.type='audio/mpeg';
            audio.controls=true;
            midAudio.innerHTML='';
            midAudio.appendChild(audio);


        })
        if(musicdiv){
            musicdiv.appendChild(button1);

        }
        
       // button1.addEventListener('click',middlemain)

        const addPlay=document.querySelector(".addtoplay");
        const playlist = new Set();

        addPlay.addEventListener('click',()=>{
            playlist.push(audio);
        })
        console.log(playlist);


        }
    }

function showDetails(){
    let arr=songArr.filter((each)=>{
        if(dropValue.value !="All"){

           return each.type==dropValue.value;
            
        }
        return true;
    });
    
    display(arr);
};

dropValue.addEventListener('change',showDetails);
const addPlay=document.querySelector(".addtoplay");
addPlay.addEventListener('click', () => {
    
});



function toggleTheme() {
    // Select the body element
    const body = document.body;
  
    // Toggle the theme-dark class
    body.classList.toggle('theme-dark');
    
    // Save the user's preference to localStorage
    if (body.classList.contains('theme-dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }
const toggletheme = document.querySelector("#theme-toggle");

// Add event listener for change event
toggletheme.addEventListener('click', toggleTheme);




// Apply the saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('theme-dark');
    // Ensure the checkbox reflects the dark theme if needed
    toggletheme.checked = true;
  } else {
    // Ensure the checkbox reflects the light theme if needed
    toggletheme.checked = false;
  }
});


document.addEventListener('DOMContentLoaded', () => {
    const createPlaylistButton = document.getElementById('create-playlist-button');
    const createPlaylistModal = document.getElementById('create-playlist-modal');
    const closeModal = document.getElementById('close-modal');
    const cancelCreateButton = document.getElementById('cancel-create');
    const createPlaylistForm = document.getElementById('create-playlist-form');
    const playlistsContainer = document.getElementById('playlists-container');

    // Sample data for existing playlists
    const playlists = [
        { title: 'Playlist 1', description: 'Description for Playlist 1' },
        { title: 'Playlist 2', description: 'Description for Playlist 2' }
    ];

    // Function to render playlists
    function renderPlaylists() {
        playlistsContainer.innerHTML = '';
        playlists.forEach(playlist => {
            const playlistItem = document.createElement('div');
            playlistItem.classList.add('playlist-item');
            playlistItem.innerHTML = `
                <h3>${playlist.title}</h3>
                <p>${playlist.description}</p>
                <button class="edit-button">Edit</button>
                <button class="delete-button">Delete</button>
            `;
            playlistsContainer.appendChild(playlistItem);
        });
    }

    // Show the Create Playlist modal
    createPlaylistButton.addEventListener('click', () => {
        createPlaylistModal.style.display = 'flex';
    });

    // Close the modal
    closeModal.addEventListener('click', () => {
        createPlaylistModal.style.display = 'none';
    });

    cancelCreateButton.addEventListener('click', () => {
        createPlaylistModal.style.display = 'none';
    });

    // Handle the form submission
    createPlaylistForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const title = document.getElementById('playlist-title').value;
        const description = document.getElementById('playlist-description').value;
        playlists.push({ title, description });
        renderPlaylists();
        createPlaylistModal.style.display = 'none';
    });

    // Initial rendering of playlists
    renderPlaylists();
});



