import './App.css';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import PictureSection from './components/PictureSection';
import {Row, Col, Image} from 'react-bootstrap'
import GeneralRoles from './components/GeneralRoles';
import Bio from './components/Bio';
import MyImage from './assets/Alex-UCD-img.jpg'
import {useEffect, useState} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import HikePic from './assets/HonoluluHikePic.jpg'
import CardList from './components/CardList';
import logo_cambi from './assets/logo_cambi.png'
import music_logo from './assets/music-box-1601342-1357987.png'
import pongIcon from './assets/pongIcon.png'
import statesIcon from './assets/states-map.png'
import resume from './assets/ResumeDisplayWeb.pdf'
import Footer from './components/Footer';
import opportunity_logo from './assets/opportunityknocslogoblue.png';

function App() {
  const [listOne, setListOne] = useState([{
    title: 'Cambi',
    image: logo_cambi,
    flipped: false,
    id: 1,
    role: 'Android Developer',
    time: 'June 2020 - September 2020',
    link: 'https://www.cambi.io/',
    description: 'Developed a new user interface for the settings and profile screen for better client usability. Used object oriented programming with java to implement these new features for a Native Android Application.'
  },
  {
    title: 'Custom Pong',
    image: pongIcon,
    id: 3,
    role: 'Game Developer(Personal Project)',
    time: 'December 2020 - March 2021',
    description: 'Developed my own customized verson of Pong with Unity. Strung together animations from scratch, animated the user interface, and created an organized workflow for the game in C# using player and manager scripts.',
    link: 'https://github.com/xelathan/Custom_Pong.git',
    flipped: false,
  },
  {
    title: 'States',
    image: statesIcon,
    flipped: false,
    id: 5,
    role: 'IOS Developer(Personal Project)',
    time: 'October 2020 - December 2020',
    description: 'Created a native IOS Application displaying the information of a set of states. Added a search query for faster navigation. Implemented Google Maps and an additional search query to locate nearby destinations using keywords.',
    link: 'https://github.com/xelathan/States.git'
  }])

  const [listTwo, setListTwo] = useState([{
      title: 'Opportunity Knocks',
      image: opportunity_logo,
      id: 2,
      flipped: false,
      description: 'Used Object Oriented Programming in dart and APIS to add features to a flutter application. Collaborated in a tech-startup environment in teams to produce a product. Implemented a search bar that queries results from Firebase database.',
      role: 'Software Engineer',
      time: 'September 2021 - November 2021',
      link: 'https://opportunityknocks.tech/'
    },
    {
      title: 'Fresh Bot',
      image: music_logo,
      flipped: false,
      id: 4,
      description: 'Created a Discord bot using Node.js and javascript that can play, stop, skip, and queue music in a list. Wrote scalable and optimized code for faster streaming.',
      role: 'Software Engineer(Personal Project)',
      time: 'February 2021 - April 2021',
      link: 'https://github.com/xelathan/Fresh_Bot.git'
  },])

  useEffect(() => {
    Aos.init({duration: 800})
  }, [])

  const onCardClickHandler = (id) => {
    setListOne(listOne.map((item) => (item.id === id ? {...item, flipped: !item.flipped}: item)))
  }

  const onCardClickHandlerTwo = (id) => {
    setListTwo(listTwo.map((item) => (item.id === id ? {...item, flipped: !item.flipped}: item)))
  }

  return (
    <div className="Row" id="home">
      <Row className="Row">
        <NavBar name="Alex Tran"/>
      </Row>
      <Row className="Row ro">
        <PictureSection/>
      </Row>
      <Row className="Row">
        <GeneralRoles/>
      </Row>
      <Row className="lightblue">
        <h3 id="about" className="sub-header">About me</h3>
        <Col>
          <Bio animation="fade-right"/>
        </Col>
        <Col className="s">
            <Image src={HikePic} className="Hike-Pic" data-aos="fade-left"/>
        </Col>
      </Row>
      <Row className="Row lightred">
        <h3 id="experience" className="sub-header" >Experience</h3>
        <Col>
          <CardList list={listOne} onCardClickHandler={onCardClickHandler}/>
        </Col>
        <Col>
          <CardList list={listTwo} onCardClickHandler={onCardClickHandlerTwo}/>
        </Col>
      </Row>
      <Row className="Row lightgreen">
        <h3 id="resume" className="sub-header">Resume</h3>
        <embed 
        src={resume} 
        type="application/pdf"
        className="resume-pdf"
        />
      </Row>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
