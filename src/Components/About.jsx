import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Style/about.css';
import './Style/timeline.css';
import './Style/edutime.css';
import mypic from '../Components/assets/Images/mypic_test_2.jpg';
import img1 from '../Components/assets/Certifications/img1.png';
import img2 from '../Components/assets/Certifications/img2.png';
import img3 from '../Components/assets/Certifications/img3.png';
import img4 from '../Components/assets/Certifications/img4.png';
import img5 from '../Components/assets/Certifications/img5.png';
import img6 from '../Components/assets/Certifications/img6.png';
import img7 from '../Components/assets/Certifications/img7.png';
import img8 from '../Components/assets/Certifications/img8.png';
import img9 from '../Components/assets/Certifications/img9.png';
import img10 from '../Components/assets/Certifications/img10.png';
import img11 from '../Components/assets/Certifications/img11.png';



function About(props) {
  const words = ['Full Stack Developer', 'Java Developer', 'Patent Holder', 'IOT Developer'];
  let currentIndex = 0;
  const images = [
    { src: img1 },
    { src: img2 },
    { src: img3 },
    { src: img4 },
    { src: img5 },
    { src: img6 },
    { src: img7 },
    { src: img8 },
    { src: img9 },
    { src: img10 },
    { src: img11 },
  ];

  const changeImageplus = () => {
    const imageElement = document.getElementById("certiimg");
    // const imageElement = document.getElementById("certiimg");
    currentIndex = (currentIndex + 1);
    if (currentIndex > 10) {
      currentIndex = 0;
    }
    const currentImage = images[currentIndex];
    imageElement.src = currentImage.src;
    imageElement.alt = currentImage.alt;
  }
  setInterval(changeImageplus, 3000);
  const changeImageminus = () => {
    const imageElement = document.getElementById("certiimg");
    // const imageElement = document.getElementById("certiimg");

    currentIndex = (currentIndex - 1);
    if (currentIndex < 1) {
      currentIndex = 10;
    }
    const currentImage = images[currentIndex];
    imageElement.src = currentImage.src;
    imageElement.alt = currentImage.alt;
  }


  return (
    <div className='about'>
      <div className="fd-about">
        <div className="about-left">
          <h1>Hi there ! &#128075;</h1>
          <h2>I'm Chinmay Lale</h2>
          <h3>A  <span style={{ color: props.mode === 'light' ? 'rgba(233,33,99,1)' : 'rgba(233,33,99,1)' }}><Typewriter
            words={words}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
          /></span></h3>
          <p style={{ textJustify: 'justify' }}>
            Hi, I'm Chinmay Lale,currently based in Wagholi, Pune. With a passion for technology and innovation, I've ventured into diverse projects, including Trata, a patented crop monitoring system boasting a 98% accuracy in feature extraction and predictive modeling. I also spearheaded the development of WallE Rover, a self-navigating rover adept at traversing challenging terrains using sensor fusion and IoT technologies. My expertise extends to game development, where I seamlessly integrated gaming functionalities in The Warrior, leveraging Unreal Engine's capabilities. Alongside my technical prowess, I hold certifications in Azure Fundamentals, Cyber Security, and Data Visualization with Python, among others. With a Bachelor's in Technology from N. K. Orchid College of Engineering & Technology, Solapur, I'm constantly driven to push boundaries and explore new frontiers in technology
          </p>
        </div>
        <img src={mypic} alt="c" className='myimg' />
      </div>




      <div className="sd-about">
        {/* -----------------------------------------------------------------------------------------------------------------------*/}
        <h1>Achievments</h1>
        <div className="timeline">

          <ul>
            <li>
              <div className="content">
                <h3> CSESA - Computer Science Student Assosiation hackathon. </h3>
                <p>Led a team to achieve 2nd place in a CSESA hackathon. Developed a Chatbot within 6 hours  </p>
              </div>
              <div className="time">
                <h4>June 2023</h4>
              </div>
            </li>

            <li>
              <div className="content">
                <h3>Avishkar Competition</h3>
                <p>Exhibited ingenuity and troubleshooting abilities by becoming a finalist among 12 teams in the state
                  level Avishkar Competition in the agriculture domain , Developed a IOT kit which will help to predict best sutaible crop in soil by testing soil within 20 sec of time </p>
              </div>
              <div className="time">
                <h4>May 2022</h4>
              </div>
            </li>

            <li>
              <div className="content">
                <h3>Google Hash Code</h3>
                <p>Demonstrated strong debugging and algorithmic skills by achieving a top 28.4% ranking in the Google Hash
                  Code Qualification Round  </p>
              </div>
              <div className="time">
                <h4>November 2021</h4>
              </div>
            </li>

            <li>
              <div className="content">
                <h3>Google Cloud Skill Boost</h3>
                <p>Illustrated proficiency in cloud computing by earning 6 digital badges from Google Cloud Skill Boost  </p>
              </div>
              <div className="time">
                <h4>December 2021</h4>
              </div>
            </li>
            <div style={{ "clear": "both" }}></div>
          </ul>
        </div>
        {/* ---------------------------------------------------------------------------------------------------------------------------------- */}
      </div>




      <div className="td-about">
        {/* ======================================================================== */}
        <h1>Skills</h1>
        <div className="skills">
          <div className="card" style={{ color: props.mode === 'light' ? 'rgba(233,33,99,1)' : 'rgba(233,33,99,1)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60px" height="60px"><path fill="#F44336" d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z" /><path fill="#F44336" d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z" /><g><path fill="#1565C0" d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z" /><path fill="#1565C0" d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z" /><path fill="#1565C0" d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z" /><path fill="#1565C0" d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z" /><path fill="#1565C0" d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z" /></g></svg>
            <div className="card__content">
              <p className="card__title" style={{ color: props.mode === 'light' ? 'rgba(233,33,99,1)' : 'rgba(233,33,99,1)' }}>Java</p>
              <p className="card__description" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Advance Java With Data Structures</p>
            </div>
          </div>
          <div className="card">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z" /><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z" /><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z" /><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z" /></svg>
            <div className="card__content">
              <p className="card__title" style={{ color: props.mode === 'light' ? 'rgba(233,33,99,1)' : 'rgba(233,33,99,1)' }}>HTML</p>
              <p className="card__description" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Full Stack Developer</p>
            </div>
          </div>
          <div className="card">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#0277bd" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22 h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104 c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672 C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498 c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z" /><path fill="#ffc107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343 h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104 c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672 C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498 c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z" /></svg>
            <div className="card__content">
              <p className="card__title" style={{ color: props.mode === 'light' ? 'rgba(233,33,99,1)' : 'rgba(233,33,99,1)' }}>Python</p>
              <p className="card__description" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Intermediate</p>
            </div>
          </div>
          <div className="card">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3"><g fill="#61DAFB"><path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z" /><circle cx="420.9" cy="296.5" r="45.7" /><path d="M520.5 78.1z" /></g></svg>
            <div className="card__content">
              <p className="card__title" style={{ color: props.mode === 'light' ? 'rgba(233,33,99,1)' : 'rgba(233,33,99,1)' }}>React</p>
              <p className="card__description" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>MERN Stack Developer</p>
            </div>
          </div>
          <div className="card">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><linearGradient id="TQDriqswrKwPOniLrPT12a" x1="16.33" x2="32.293" y1="-2.748" y2="41.109" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2aa4f4" /><stop offset="1" stopColor="#007ad9" /></linearGradient><path fill="url(#TQDriqswrKwPOniLrPT12a)" d="M7.192,7.176l2.627,29.77c0.109,1.237,0.97,2.28,2.164,2.621l10.643,3.041 c0.898,0.257,1.849,0.257,2.747,0l10.643-3.041c1.194-0.341,2.055-1.383,2.164-2.621l2.627-29.77C40.911,6.006,39.99,5,38.816,5 H9.184C8.01,5,7.089,6.006,7.192,7.176z" /><path fill="#35c1f1" d="M24,8v31.9l9.876-2.822c0.797-0.228,1.371-0.924,1.443-1.749l2.286-26.242 C37.656,8.502,37.196,8,36.609,8H24z" /><path fill="#fff" d="M33.1,13H24v4h4.9l-0.3,4H24v4h4.4l-0.3,4.5L24,30.9v4.2l7.9-2.6L32.6,21l0,0L33.1,13z" /><path fill="#d6e0e9" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4 L19.8,27z" /><path d="M33.1,13l-0.5,8l-0.7,11.5L24,35.1l-7.9-2.6L15.8,27h4l0.1,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-4.4l-0.2-4H24h4.6l0.3-4H24 h-8.9l-0.3-4H24H33.1 M34.164,12H33.1H24h-9.2h-1.078l0.081,1.075l0.3,4L14.172,18H15.1H24h3.822l-0.15,2H24h-4.6h-1.051 l0.052,1.05l0.2,4L18.649,26H15.8h-1.056l0.058,1.054l0.3,5.5l0.037,0.682l0.649,0.214l7.9,2.6L24,36.153l0.313-0.103l7.9-2.6 l0.644-0.212l0.041-0.677l0.7-11.5l0.5-7.998L34.164,12L34.164,12z M20.761,26H24h3.331l-0.185,2.769L24,29.843l-3.128-1.068 l-0.073-1.815L20.761,26L20.761,26z" opacity=".05" /><path d="M33.1,13l-0.5,8l-0.7,11.5L24,35.1l-7.9-2.6L15.8,27h4l0.1,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-4.4l-0.2-4H24h4.6l0.3-4H24 h-8.9l-0.3-4H24H33.1 M33.632,12.5H33.1H24h-9.2h-0.539l0.04,0.537l0.3,4l0.035,0.463H15.1H24h4.361l-0.225,3H24h-4.6h-0.526 l0.026,0.525l0.2,4l0.024,0.475H19.6H24h3.866l-0.242,3.634L24,30.372l-3.614-1.234L20.3,26.98L20.28,26.5H19.8h-4h-0.528 l0.029,0.527l0.3,5.5l0.019,0.341l0.324,0.107l7.9,2.6L24,35.626l0.156-0.051l7.9-2.6l0.322-0.106l0.021-0.339l0.7-11.5l0.5-7.999 L33.632,12.5L33.632,12.5z" opacity=".07" /></svg>
            <div className="card__content">
              <p className="card__title" style={{ color: props.mode === 'light' ? 'rgba(233,33,99,1)' : 'rgba(233,33,99,1)' }}>CSS</p>
              <p className="card__description" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Begginer</p>
            </div>
          </div>
          <div className="card">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" width="64px" height="64px"><path d="M36,12c13.255,0,24,10.745,24,24c0,10.656-6.948,19.685-16.559,22.818c0.003-0.009,0.007-0.022,0.007-0.022 s-1.62-0.759-1.586-2.114c0.038-1.491,0-4.971,0-6.248c0-2.193-1.388-3.747-1.388-3.747s10.884,0.122,10.884-11.491 c0-4.481-2.342-6.812-2.342-6.812s1.23-4.784-0.426-6.812c-1.856-0.2-5.18,1.774-6.6,2.697c0,0-2.25-0.922-5.991-0.922 c-3.742,0-5.991,0.922-5.991,0.922c-1.419-0.922-4.744-2.897-6.6-2.697c-1.656,2.029-0.426,6.812-0.426,6.812 s-2.342,2.332-2.342,6.812c0,11.613,10.884,11.491,10.884,11.491s-1.097,1.239-1.336,3.061c-0.76,0.258-1.877,0.576-2.78,0.576 c-2.362,0-4.159-2.296-4.817-3.358c-0.649-1.048-1.98-1.927-3.221-1.927c-0.817,0-1.216,0.409-1.216,0.876s1.146,0.793,1.902,1.659 c1.594,1.826,1.565,5.933,7.245,5.933c0.617,0,1.876-0.152,2.823-0.279c-0.006,1.293-0.007,2.657,0.013,3.454 c0.034,1.355-1.586,2.114-1.586,2.114s0.004,0.013,0.007,0.022C18.948,55.685,12,46.656,12,36C12,22.745,22.745,12,36,12z" /></svg>
            <div className="card__content">
              <p className="card__title" style={{ color: props.mode === 'light' ? 'rgba(233,33,99,1)' : 'rgba(233,33,99,1)' }}>Git / GitBash</p>
              <p className="card__description" style={{ color: props.mode === 'light' ? 'black' : 'white' }}></p>
            </div>
          </div>
          <div className="card">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#37474f" d="M18.125,7L18,15H5c0,0,0-2.567,0-4.5S6.567,7,8.5,7S18.125,7,18.125,7z" /><path fill="#00e676" d="M30.009,5.627l1.85-3.117c0.282-0.475,0.125-1.089-0.349-1.371c-0.475-0.283-1.088-0.125-1.371,0.349 l-1.945,3.276C26.889,4.276,25.478,4,24,4s-2.889,0.276-4.195,0.765L17.86,1.489c-0.282-0.474-0.895-0.632-1.371-0.349 c-0.475,0.282-0.631,0.896-0.349,1.371l1.85,3.117c-3.301,1.92-5.608,5.362-5.94,9.373H35.95 C35.618,10.989,33.311,7.547,30.009,5.627z" /><circle cx="19" cy="10" r="1" fill="#fff" /><circle cx="29" cy="10" r="1" fill="#fff" /><path fill="#448aff" d="M39.5,14c-0.494,0-30.14,0-31,0C6.567,14,5,12.433,5,10.5c0,0.001,0,25.067,0,27S6.567,41,8.5,41 C9.36,41,43,41,43,41s0-21.567,0-23.5S41.433,14,39.5,14z" /><path fill="#37474f" d="M39.5,21c-0.342,0-0.871,0-1.5,0v25.875c0.629,0,1.158,0,1.5,0c1.933,0,3.5-1.567,3.5-3.5 S43,17.5,43,17.5C43,19.433,41.433,21,39.5,21z" /><path fill="#37474f" d="M33.768,44.061l-7.444-15.819C27.335,27.515,28,26.337,28,25c0-1.858-1.28-3.411-3-3.858V19 c0-0.552-0.448-1-1-1s-1,0.448-1,1v2.142c-1.72,0.447-3,2-3,3.858c0,1.337,0.665,2.515,1.676,3.242l-7.44,15.811 c-0.424,0.901-0.201,2.025,0.62,2.588c1.047,0.718,2.437,0.309,2.954-0.79l4.643-9.866c0.616-1.309,2.479-1.309,3.095,0l4.643,9.866 C30.531,46.576,31.25,47,32.001,47c0.411,0,0.832-0.128,1.203-0.402C33.982,46.024,34.18,44.936,33.768,44.061z M24,23 c1.103,0,2,0.897,2,2s-0.897,2-2,2s-2-0.897-2-2S22.897,23,24,23z" /></svg>
            <div className="card__content">
              <p className="card__title" style={{ color: props.mode === 'light' ? 'rgba(233,33,99,1)' : 'rgba(233,33,99,1)' }}>Android</p>
              <p className="card__description" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Android Developer Begginer</p>
            </div>
          </div>

          <div className="card">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#37474F" d="M16.458,2.987c-0.212,0.007-0.441,0.086-0.701,0.29c-0.635-0.245-1.251-0.33-1.802,0.168c-0.852-0.109-1.128,0.118-1.337,0.383c-0.187-0.002-1.397-0.191-1.953,0.638C9.27,4.3,8.829,5.287,9.329,6.205c-0.285,0.441-0.58,0.877,0.086,1.719C9.179,8.394,9.325,8.9,9.88,9.516c-0.146,0.659,0.142,1.123,0.659,1.486c-0.097,0.9,0.826,1.424,1.102,1.61c0.106,0.526,0.326,1.021,1.38,1.295c0.174,0.784,0.808,0.917,1.421,1.083c-2.028,1.178-3.768,2.729-3.755,6.535l-0.297,0.529c-2.326,1.414-4.418,5.96-1.146,9.655c0.214,1.156,0.572,1.986,0.891,2.905c0.478,3.705,3.593,5.44,4.414,5.646c1.205,0.916,2.487,1.787,4.222,2.396c1.636,1.688,3.408,2.331,5.19,2.329c0.026,0,0.053,0.001,0.079,0c1.781,0.002,3.554-0.642,5.189-2.329c1.735-0.608,3.018-1.479,4.223-2.396c0.821-0.206,3.937-1.941,4.413-5.646c0.319-0.919,0.678-1.749,0.892-2.905c3.271-3.695,1.18-8.241-1.146-9.655l-0.297-0.53c0.012-3.805-1.729-5.356-3.756-6.534c0.613-0.166,1.247-0.3,1.421-1.084c1.055-0.272,1.275-0.769,1.381-1.295c0.276-0.186,1.198-0.709,1.103-1.611c0.517-0.361,0.805-0.826,0.657-1.484c0.557-0.615,0.702-1.124,0.466-1.592c0.667-0.842,0.371-1.277,0.087-1.719c0.499-0.918,0.059-1.905-1.337-1.739c-0.555-0.829-1.766-0.64-1.953-0.638c-0.209-0.265-0.486-0.492-1.337-0.383c-0.551-0.498-1.167-0.413-1.802-0.168c-0.756-0.596-1.256-0.119-1.826,0.062c-0.912-0.298-1.122,0.111-1.57,0.277c-0.997-0.211-1.299,0.247-1.777,0.731l-0.556-0.011c-1.503,0.886-2.249,2.69-2.514,3.616c-0.264-0.928-1.009-2.731-2.512-3.616l-0.556,0.011c-0.479-0.484-0.781-0.942-1.778-0.731c-0.448-0.166-0.657-0.575-1.571-0.277C17.208,3.22,16.863,2.975,16.458,2.987L16.458,2.987z" /><path fill="#64DD17" d="M13.466 6.885c3.987 2.055 6.305 3.718 7.575 5.134-.65 2.607-4.042 2.726-5.283 2.653.254-.119.467-.26.541-.479-.311-.221-1.415-.023-2.186-.456.296-.062.435-.12.573-.339-.727-.232-1.511-.433-1.973-.817.249.003.481.055.806-.17-.652-.351-1.348-.629-1.888-1.166.337-.009.701-.004.806-.129-.596-.37-1.1-.78-1.518-1.23.472.058.671.009.786-.075-.452-.461-1.023-.85-1.294-1.421.35.121.671.168.902-.011-.154-.345-.81-.55-1.189-1.357.369.036.761.081.839 0-.172-.697-.465-1.089-.753-1.496.79-.01 1.985.004 1.931-.063l-.488-.499c.771-.207 1.561.034 2.133.213.257-.203-.005-.459-.318-.721.655.087 1.247.238 1.782.445.286-.258-.186-.516-.413-.773 1.012.191 1.44.46 1.866.73.31-.295.018-.548-.19-.807.764.283 1.156.648 1.57 1.009.141-.19.357-.328.096-.784.542.312.95.68 1.252 1.092.335-.214.2-.506.201-.775.563.459.921.946 1.358 1.423.088-.064.165-.282.233-.626 1.344 1.303 3.242 4.586.488 5.889C19.367 9.343 16.568 7.938 13.466 6.885L13.466 6.885zM34.623 6.885c-3.986 2.055-6.305 3.718-7.574 5.134.65 2.607 4.043 2.726 5.283 2.653-.254-.119-.466-.26-.542-.479.312-.221 1.415-.023 2.186-.456-.296-.062-.434-.12-.573-.339.729-.232 1.514-.433 1.974-.817-.249.003-.481.055-.806-.17.652-.351 1.348-.629 1.889-1.166-.338-.009-.701-.004-.807-.129.598-.37 1.1-.78 1.518-1.23-.473.058-.671.009-.785-.075.451-.461 1.021-.85 1.293-1.421-.35.121-.67.168-.9-.011.152-.345.811-.55 1.188-1.357-.369.036-.76.081-.838 0 .172-.697.465-1.089.754-1.496-.789-.012-1.985.004-1.932-.063l.488-.499c-.771-.207-1.56.034-2.133.213-.258-.203.005-.459.318-.721-.654.087-1.248.237-1.782.445-.286-.258.186-.516.414-.774-1.013.191-1.44.461-1.867.731-.31-.295-.018-.548.19-.807-.763.283-1.156.648-1.57 1.008-.14-.189-.356-.327-.095-.783-.542.311-.951.68-1.252 1.092-.335-.215-.2-.506-.202-.775-.563.459-.92.946-1.358 1.423-.088-.064-.165-.282-.232-.626-1.345 1.303-3.243 4.586-.488 5.889C28.723 9.342 31.521 7.938 34.623 6.885L34.623 6.885z" /><g><path fill="#FF4081" d="M28.873 33.426c.014 2.433-2.113 4.414-4.75 4.428-2.638.012-4.788-1.948-4.801-4.381 0-.016 0-.031 0-.047-.014-2.433 2.112-4.414 4.75-4.428 2.638-.012 4.787 1.948 4.801 4.382C28.873 33.395 28.873 33.411 28.873 33.426zM21.333 20.846c1.979 1.296 2.335 4.234.797 6.563-1.539 2.329-4.391 3.165-6.37 1.868l0 0c-1.979-1.297-2.335-4.235-.797-6.563C16.502 20.385 19.355 19.549 21.333 20.846L21.333 20.846zM26.676 20.61c-1.98 1.295-2.337 4.235-.798 6.563 1.539 2.33 4.391 3.166 6.369 1.869l0 0c1.979-1.297 2.337-4.234.798-6.564C31.506 20.15 28.654 19.314 26.676 20.61L26.676 20.61zM11.443 22.966c2.136-.573.721 8.838-1.017 8.066C8.514 29.493 7.898 24.988 11.443 22.966zM36.135 22.848c-2.138-.572-.722 8.839 1.016 8.066C39.064 29.375 39.68 24.871 36.135 22.848zM28.875 15.839c3.687-.624 6.756 1.567 6.632 5.565C35.385 22.938 27.516 16.065 28.875 15.839zM18.687 15.72c-3.687-.621-6.755 1.57-6.631 5.567C12.177 22.821 20.045 15.949 18.687 15.72zM23.983 14.789c-2.2-.058-4.313 1.634-4.318 2.613-.006 1.19 1.741 2.412 4.333 2.442 2.648.019 4.337-.977 4.347-2.205C28.354 16.246 25.937 14.767 23.983 14.789L23.983 14.789zM24.118 39.221c1.919-.084 4.493.619 4.499 1.549.031.905-2.336 2.947-4.626 2.907-2.373.103-4.699-1.943-4.668-2.651C19.287 39.984 22.212 39.174 24.118 39.221zM17.031 33.703c1.366 1.646 1.988 4.539.849 5.39-1.079.652-3.698.384-5.56-2.29-1.255-2.245-1.094-4.527-.212-5.199C13.426 30.801 15.463 31.884 17.031 33.703L17.031 33.703zM30.932 33.183c-1.479 1.731-2.301 4.888-1.223 5.905 1.03.791 3.799.681 5.842-2.156 1.484-1.906.988-5.087.141-5.934C34.431 30.026 32.623 31.271 30.932 33.183L30.932 33.183z" /></g></svg>
            <div className="card__content">
              <p className="card__title" style={{ color: props.mode === 'light' ? 'rgba(233,33,99,1)' : 'rgba(233,33,99,1)' }}>IOT</p>
              <p className="card__description" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Embedded Sys Developer</p>
            </div>
          </div>
        </div>
        {/* <!-- skill  black box --> */}

      </div>
      <div className="certi-about">
        <h1>Certifications</h1>
        <div className="certi-img">
          <svg xmlns="http://www.w3.org/2000/svg" onClick={changeImageminus} viewBox="0 0 24 24" className='arrow' fill="currentColor"><path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path></svg>
          <img id="certiimg" src={img1} alt="" style={{ borderColor: props.mode == 'light' ? 'black' : 'white' }} />
          <svg xmlns="http://www.w3.org/2000/svg" className='arrow' onClick={changeImageplus} viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
        </div>
      </div>

      <div className="edu" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h1>Education</h1>
        <div className="container">
          <ul>
            <li className="box"style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
              <span></span>
              <div className="title">Bachelor of Technology (B. Tech)</div>
              <div className="sub-title">Computer Science Engineering : 7.5 / 10 cgpa</div>
              <div className="info">N. K. Orchid College of Engineering & Technology</div>
              <div className="time" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <span>2024</span>
                <span>2020</span>
              </div>
            </li>
            <li className="box">
              <span></span>
              <div className="title">Higher Secondary School </div>
              <div className="sub-title">HSC in Science </div>
              <div className="info">Sangameshwar College</div>
              <div className="time">
                <span>2020</span>
                <span>2018</span>
              </div>
            </li>
            <li className="box">
              <span></span>
              <div className="title">Secondary School </div>
              <div className="sub-title">SSC </div>
              <div className="info">Jnana Prabodhini</div>
              <div className="time">
                <span>2018</span>
                <span>2017</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About