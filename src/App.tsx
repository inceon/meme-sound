import style from './App.module.css'
import AudioPlayer from "./audio-player/AudioPlayer.component.tsx";
import sound1 from './assets/sound/allo_cat.mp3'
import sound2 from './assets/sound/da_eto_ya.mp3'
import sound3 from './assets/sound/na_balkon.mp3'
import sound4 from './assets/sound/misku_veliku.mp3'
import sound5 from './assets/sound/nice.mp3'
import sound6 from './assets/sound/otdai-salo.mp3'
import sound7 from './assets/sound/schas-zareju.mp3'
import sound8 from './assets/sound/krisa.mp3'
import sound9 from './assets/sound/davai-po-novoi-misha.mp3'
import sound10 from './assets/sound/ebanyii-v-rot-etogo-kazino.mp3'
import sound11 from './assets/sound/ya-musulman.mp3'
import sound12 from './assets/sound/sigma.mp3'
import sound13 from './assets/sound/china.mp3'
import sound14 from './assets/sound/oh_no.mp3'
import sound15 from './assets/sound/ne_iskal.mp3'
import sound16 from './assets/sound/coke.mp3'

import image1 from './assets/image/allo_cat.jpeg'
import image2 from './assets/image/da_eto_ya.jpeg'
import image3 from './assets/image/na_balkon.jpeg'
import image4 from './assets/image/miska_holubiv.jpeg'
import image5 from './assets/image/nice.jpeg'
import image6 from './assets/image/otdai-salo.jpeg'
import image7 from './assets/image/schas-zareju.jpeg'
import image8 from './assets/image/krisa.jpeg'
import image9 from './assets/image/davai-po-novoi-misha.jpeg'
import image10 from './assets/image/ebanyii-v-rot-etogo-kazino.jpeg'
import image11 from './assets/image/ya-musulman.jpeg'
import image12 from './assets/image/sigma.jpeg'
import image13 from './assets/image/china.jpeg'
import image14 from './assets/image/oh_no.jpeg'
import image15 from './assets/image/ne_iskal.jpeg'
import image16 from './assets/image/coke.png'


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
            type: 'audio/mp3',
            image: image3
        },
        {
            name: 'sound12',
            url: sound12,
            type: 'audio/mp3',
            image: image12
        },
        {
            name: 'sound13',
            url: sound13,
            type: 'audio/mp3',
            image: image13
        },
        {
            name: 'sound14',
            url: sound14,
            type: 'audio/mp3',
            image: image14
        },
        {
            name: 'sound15',
            url: sound15,
            type: 'audio/mp3',
            image: image15
        },
        {
            name: 'sound4',
            url: sound4,
            type: 'audio/mp3',
            image: image4
        },
        {
            name: 'sound5',
            url: sound5,
            type: 'audio/mp3',
            image: image5
        },
        {
            name: 'sound6',
            url: sound6,
            type: 'audio/mp3',
            image: image6
        },
        {
            name: 'sound16',
            url: sound16,
            type: 'audio/mp3',
            image: image16
        },
        {
            name: 'sound7',
            url: sound7,
            type: 'audio/mp3',
            image: image7
        },
        {
            name: 'sound8',
            url: sound8,
            type: 'audio/mp3',
            image: image8
        },
        {
            name: 'sound9',
            url: sound9,
            type: 'audio/mp3',
            image: image9
        },
        {
            name: 'sound10',
            url: sound10,
            type: 'audio/mp3',
            image: image10
        },
        {
            name: 'sound11',
            url: sound11,
            type: 'audio/mp3',
            image: image11
        }
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
