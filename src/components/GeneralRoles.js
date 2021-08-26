import React from "react";
import Typewriter from 'typewriter-effect'

const GeneralRoles = () => {
    return(
    <div className="type-writer">
        <Typewriter options={{autoStart: true, 
        loop: true, 
        delay: 80, 
        pauseFor: 1500,
        strings: [
            'I am a Computer Science Major.',
            'I am an Aspiring Software Engineer.',
            'I am a Application Developer.',
            'I am a Tech Enthusiast.'
        ],}}/>
    </div>
    )
}

export default GeneralRoles;