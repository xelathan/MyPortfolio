import {Image} from 'react-bootstrap'
import Aos from 'aos';
import 'aos/dist/aos.css'
import ReactCardFlip from 'react-card-flip';

const Item = ({item, onCardClickHandler}) => {
    return (
        <ReactCardFlip isFlipped={item.flipped} flipDirection='vertically'>
            <div>
                <button onClick={() => onCardClickHandler(item.id)} className="card-bg">
                    <h5>{item.title}</h5>
                    <Image src={item.image} style={item.title === 'States' ? {width: 200} : {width: 100}}/>
                </button>
            </div>

            <div>
                <button onClick={() => onCardClickHandler(item.id)} className="card-bg card-description-bg">
                    <p className="font-25px">{item.role}</p>
                    <p className="font-25px">{item.time}</p>
                    <p className="font-20px">{item.description}</p>
                    <a href={item.link} target="_blank" className="font-20px padding">{item.link}</a>
                </button>
            </div>
        </ReactCardFlip>
    )
}

export default Item;