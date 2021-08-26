import { Image, Col, Row } from "react-bootstrap"
import MyImage from '../assets/Alex-UCD-img.jpg'
import GeneralRoles from "./GeneralRoles"

const PictureSection = () => {
    return (
        <div className="picture-section" >
            <Image src={MyImage} roundedCircle className="my-image"/>
        </div>
    )
}

export default PictureSection