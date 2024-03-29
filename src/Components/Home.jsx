import React from 'react'
import developer from '../Components/assets/Images/Designersvg.png';
import {useNavigate} from 'react-router-dom';
import resume from '../Components/assets/Chinmay_Lale_CV.pdf';


function Home(props) {
  const navigate = useNavigate();
  return (
    <div style={{'color':props.mode==='light'?'black':'white'}} className='mainhome'>
      <div className="home">
        <div className="left">
          <img src={developer} alt="" className='homeimg'/>
        </div>
        <div className="right">
          <h2>The Future Belongs To Those <br />Who <span>Believe In</span> <br /> Beauty Of Their <span>Dreams !</span></h2>
          <h4>I'm a skilled full-stack developer specializing in React.js and web development. Notable projects include Trata (Patented), achieving 98% accuracy in crop monitoring, and WallE Rover, demonstrating autonomous navigation. With a Bachelor's in Technology and certifications in Azure Fundamentals and Cyber Security, I bring a passion for innovation to every endeavor.</h4>
        
        <div className="homebtns">
          <a href={resume} download="Chinmay_Lale_CV">
          <button className='hombtn' style={{'color':props.mode==='light'?'black':'white'}}>
            Resume 
          </button>
          </a>
          <button className='hombtn' style={{'color':props.mode==='light'?'black':'white'}} onClick={()=>{navigate('/about')}}>
            Explore 
          </button>
        </div>
        
        
        </div>
      </div>
      
    </div>
  )
}

export default Home




