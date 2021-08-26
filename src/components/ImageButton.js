import {Image} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ImageButton = ({imageSrc, href, name, width}) => {
    return (
        <a href={href} target="_blank">
            <FontAwesomeIcon icon={imageSrc} color="white" size="lg" style={{margin: 25}}/>
        </a>
    )
}

export default ImageButton;