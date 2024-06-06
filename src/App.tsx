import style from './App.module.css'
import AudioPlayer from "./audio-player/AudioPlayer.component.tsx";
import sound1 from './assets/sound/allo_cat.mp3'
import sound2 from './assets/sound/da_eto_ya.mp3'
import sound3 from './assets/sound/na_balkon.m4a'

import image1 from './assets/image/allo_cat.jpeg'
import image2 from './assets/image/da_eto_ya.jpeg'
import image3 from './assets/image/na_balkon.jpeg'




function App() {
    const sounds = [
        {
            name: 'sound1',
            url: sound1,
            type: 'audio/mp3',
            image: image1
        },
        {
            name: 'sound2',
            url: sound2,
            type: 'audio/mp3',
            image: image2
        },
        {
            name: 'sound3',
            url: sound3,
            type: 'audio/m4a',
            image: image3
        },
    ]
  return (<>
    <h1 style={{textAlign: 'center'}}>Meme Player</h1>

    <div className={style.root}>
        {
            sounds.map((sound, index) => {
                return <AudioPlayer
                    key={index}
                    src={sound.url}
                    type={sound.type}
                    name={sound.name}
                    image={sound.image}
                />
            })
        }
    </div>
  </>)
}

export default App
