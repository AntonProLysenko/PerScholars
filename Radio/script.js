const radio={

     currentStation: 0,

    sations:[
        {
            wave:95.3,
            name:"Radio Rocks",
            songs: [
                {title:'Can You Feel My Heart',
                artist: 'Bring me the Horizon'
                },
                {title:'Lights',
                artist: 'Journey'
                },
                {title:'I Hope You Die',
                artist: 'Bloodhound Gang'
                }  
            ]
            },
            {
            wave:100.5,
            name:"Techno Revolution",
            songs: [
                {title:'Retrida',
                artist: 'Angelov'
                },
                {title:'Respect Me',
                artist: '8 Kays & Lazarusman'
                },
                {title:'Space Noir',
                artist: 'Clarian'
                }  
            ]
            },
            {wave:88.1,
            name:"Jazz & Blues",
            songs: [
                {title:'Skokiaan',
                artist: 'Louis Armstrong'
                },
                {title:'Leave My Woman Alone',
                artist: 'Ray Charles'
                },
                {title:'Summer In The City',
                artist: 'B.B.King'
                }  
            ]
            }
    ],

    


}




const changeStation= ()=>{
    let stationDisplay= document.getElementById('station')
    let songDisplay = document.getElementById('song')
    

    let vibe;      
    vibe = radio.sations[radio.currentStation]

    if (radio.currentStation===radio.sations.length-1){
        radio.currentStation=0
    }else {
        radio.currentStation+=1
    }


    let song = vibe.songs[Math.floor(Math.random()*vibe.songs.length)]

    stationDisplay.innerHTML = `${vibe.wave} <p>${vibe.name}</p>`

    songDisplay.innerHTML = `${song.title} <p>by</p> <p></p>${song.artist}`

    console.log(`Now Plaing ${song.title} by ${song.artist} on ${vibe.name}`);




    let box = document.querySelector('.box')
    
    if (radio.currentStation === 2){
        box.classList.toggle('rotate-vert-center')
        box.style.backgroundColor = 'var(--yellow)'
        
    }else if (radio.currentStation === 1){
        box.classList.toggle('rotate-vert-center')
        box.style.backgroundColor = 'var(--coral)'
       
    }else{
        box.classList.toggle('rotate-vert-center')
        box.style.backgroundColor = 'var(--blue)'
        
    }




    


}

let button = document.querySelector('button')
button.addEventListener("click", changeStation)






