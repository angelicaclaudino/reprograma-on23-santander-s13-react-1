import Subtitle from './Subtitle'
import Image from './Image'
import Paragrafo from './Paragrafo'


function Bio (props) {
    return (
        <div className="Bio">
            <Subtitle subtitle={props.text}/>
            <Paragrafo text= {props.descricao}/>
            <Image class="image" image={props.image}/>

        </div>

    )
}

export default Bio; 