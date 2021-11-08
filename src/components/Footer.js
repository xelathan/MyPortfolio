import {Row, Col} from 'react-bootstrap'
import ImageButton from './ImageButton';
import { faLinkedin, faGithubSquare, faSpotify, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faMapMarkerAlt, faPhoneAlt} from '@fortawesome/free-solid-svg-icons'


import ContactInfoSlot from './ContactInfoSlot';

const Footer = () => {
    return (
        <Row className="Row lightblack" id="contact">
            <Col>
                <ImageButton name="linkedIn" imageSrc={faLinkedin} href="https://www.linkedin.com/in/alex-tran-33b28b1b1/"/>
                <ImageButton name="github" imageSrc={faGithubSquare} href="https://github.com/xelathan"/>
                <ImageButton name="spotify" imageSrc={faSpotify} href="https://open.spotify.com/playlist/3pPDz53sz2lh5QzwDxaeoO?si=29287b2c315f4331"/>
                <ImageButton name="gmail" imageSrc={faEnvelope} href="mailto:alex.t.tran@gmail.com"/>
                <ImageButton name="instagram" imageSrc={faInstagramSquare} href="https://www.instagram.com/xela._.t/" width="45"/>
            </Col>
            <Col>
                <ContactInfoSlot imageSrc={faMapMarkerAlt} info="Milpitas, CA"/>
                <ContactInfoSlot imageSrc={faEnvelope} info="alex.t.tran@gmail.com"/>
                <ContactInfoSlot imageSrc={faPhoneAlt} info="408-406-2417"/>
            </Col>
        </Row>
    )
}

export default Footer;