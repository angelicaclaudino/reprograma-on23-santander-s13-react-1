import Title from './Title'
import Image from './Image'
import Paragrafo from './Paragrafo'

function Cards (props) {
    return (
        <div className="Cards">
            <Title text= {props.titulo}/>
            <Image class="image" image={props.image}/>
            <Paragrafo text= {props.descricao}/>
        </div>
    )
}

export default Cards; 