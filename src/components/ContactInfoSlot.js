import {Image} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactInfoSlot = ({imageSrc, width, info}) => {
    return (
        <div style={{fontSize: '0.6rem'}}>
            <FontAwesomeIcon icon={imageSrc} size="xs" style={{display: 'inline-block'}}/>
            <p style={{fontSize: 15, display: 'inline-block', margin: 0, paddingLeft: 5}}>{info}</p>
        </div>
    )
}

export default ContactInfoSlot;