import Aos from 'aos';
import 'aos/dist/aos.css'

const Bio = ({animation}) => {
    return (
        <div data-aos={animation}>
            <p className="font-25px" style={{textAlign: 'left', lineHeight: 2}}>My name is Alex and I enjoy solving complex problems with simple and efficient solutions on software applications. I live in Milpitas, California but currently I reside in the city of Davis where I attend UC Davis as a computer science major. I am familiar with developing web and mobile applications and I am always looking to expand on my technical skills in the field. Outside of computers, some of my interests include basketball and Japanese culture.</p>
        </div>
    )
}

export default Bio;