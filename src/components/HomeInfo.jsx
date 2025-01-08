import React from "react";
import {Link} from "react-router-dom";
import {arrow} from '../assets/icons'



const InfoBox = ({text, link, btnText}) => (
    <div className = "info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to = {link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src = {arrow} className="w-4 h-4 object-contain"/>
        </Link>

    </div>
)
const renderContent =  {
    1: (

      <h1 className= "sm:text-xl sm:leading-snug text-center
      neo-brutalism-blue py-4 px-8 text-white mx-5">
          My name is <span className= "font-semibold">Ian</span>
          <br/>
          thank you for taking the time to peep out the interactive side of my website!
      </h1>
    ),
        2: (

       <InfoBox
       text = "Currently working on my Bachelors in Computer Science expected graduation Fall 2025."
        link = "/about"
       btnText="Learn More!"
       />
    ),
        3: (
            <InfoBox
                text = "Worked with research on TCAS at SUNY Oswego along
                with other projects and hackathons."
                link = "/Projects"
                btnText="Check out my projects! "
            />
    ),
        4: (

            <InfoBox
                text = "Looking for a developer and need a job done? One
                email and I will be there!"
                link = "/contact"
                btnText="Let's chat!"
            />
    )

}



const HomeInfo = ({currentStage}) => {
    return renderContent[currentStage] || null;
}
export default HomeInfo