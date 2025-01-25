import React from 'react'
import '../../styles/about/about.css';
import RoverCanvas from './Rover';
import Navbar from '../Navbar';
// import Ionicthruster from '../projects/ionicthruster';

const About = () => {
  
  return (
    <div className='aboutContainer'>
      <Navbar />
      <div className="aboutHeroContainer">
        <div className='aboutLeft'>
                <RoverCanvas />
                {/* <Ionicthruster/> */}
        </div>
        <div className="aboutRight">
            <div className="aboutTitle">Who we Are</div>
            <div className="aboutDescription" style={{textAlign:"justify"}}>
            The engineering physics branch's departmental club is Team Abraxas - a vibrant community of individuals fueled by passion, creativity, and technology. We embark on a journey to unravel the secrets of the universe, while at the same time, creating technological wonders that defy imagination. Our research encompasses a kaleidoscope of physics disciplines - from the frontier of quantum computing to the timeless theories of particle physics. Physics enthusiasts, come and join us in a world of discovery, where the universe is your playground and knowledge is your compass. Let's ignite your curiosity, spark new ideas and demonstrate your expertise. With discussions, demonstrations, and discoveries, we will create a captivating atmosphere that will leave a lasting impression on all who join us. Though we may be new, we are determined to make our mark and leave a legacy that will be remembered for years to come.
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
