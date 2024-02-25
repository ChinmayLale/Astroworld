import React from 'react'
import teampic_1 from './assets/Images/Samana_Pune_1674459217.jpeg';
import teampic_2 from './assets/Images/Team.jpg';
import teampic_3 from './assets/Images/vijayBhatkar.jpg';
function Project(props) {
  return (
    <div className="projects">
      <div className="p1">
        <h1>Trata - Ai Based Crop Monitoring & Predication System</h1>
        <div className="p1-inner">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/7YcE06znHCg?si=YrgB_G6jS0YBVMd7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <div className="desc">
            <h3>Description </h3>
            <h4>&bull; Engineered and executed a machine learning pipeline with <b>accuracy of 98%</b> for automated feature
              extraction and predictive modeling within a crop monitoring system.
            </h4>
            <h4>
              &bull;  <b>Integrates multiple sensor </b>(4 – 5) data from IoT devices with sources
            </h4>
            <h4>
              &bull; On-farm deployment of the system demonstrated effectiveness in improving crop yields
            </h4>
          </div>
        </div>
      </div>
      <div className="p2">
        <h2>Background</h2>
        <h3>
          Traditionally farmers have used their perceptual sensorial systems to diagnose and monitor their crops health and needs. Now conventional smartphones are equipped with several sensors that could be useful to support real-time usual and advanced farming activities. The proposed system will fetch inputs from farmers and sensors like soil moisture, temperature, humidity and then will predict the best suitable crop for their soil type.
        </h3>
        <h2 className='tech'>Tech Stack Used </h2>
        <div className="techstack">
          <div className="card">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#0277bd" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22 h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104 c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672 C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498 c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z" /><path fill="#ffc107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343 h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104 c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672 C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498 c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z" /></svg>
            <div className="card__content">
              <p className="card__title" style={{ color: props.mode === 'light' ? 'rgba(233,33,99,1)' : 'rgba(233,33,99,1)' }}>Python</p>
              <p className="card__description" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Used For Backend</p>
            </div>
          </div>


          <div className="card">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#37474f" d="M18.125,7L18,15H5c0,0,0-2.567,0-4.5S6.567,7,8.5,7S18.125,7,18.125,7z" /><path fill="#00e676" d="M30.009,5.627l1.85-3.117c0.282-0.475,0.125-1.089-0.349-1.371c-0.475-0.283-1.088-0.125-1.371,0.349 l-1.945,3.276C26.889,4.276,25.478,4,24,4s-2.889,0.276-4.195,0.765L17.86,1.489c-0.282-0.474-0.895-0.632-1.371-0.349 c-0.475,0.282-0.631,0.896-0.349,1.371l1.85,3.117c-3.301,1.92-5.608,5.362-5.94,9.373H35.95 C35.618,10.989,33.311,7.547,30.009,5.627z" /><circle cx="19" cy="10" r="1" fill="#fff" /><circle cx="29" cy="10" r="1" fill="#fff" /><path fill="#448aff" d="M39.5,14c-0.494,0-30.14,0-31,0C6.567,14,5,12.433,5,10.5c0,0.001,0,25.067,0,27S6.567,41,8.5,41 C9.36,41,43,41,43,41s0-21.567,0-23.5S41.433,14,39.5,14z" /><path fill="#37474f" d="M39.5,21c-0.342,0-0.871,0-1.5,0v25.875c0.629,0,1.158,0,1.5,0c1.933,0,3.5-1.567,3.5-3.5 S43,17.5,43,17.5C43,19.433,41.433,21,39.5,21z" /><path fill="#37474f" d="M33.768,44.061l-7.444-15.819C27.335,27.515,28,26.337,28,25c0-1.858-1.28-3.411-3-3.858V19 c0-0.552-0.448-1-1-1s-1,0.448-1,1v2.142c-1.72,0.447-3,2-3,3.858c0,1.337,0.665,2.515,1.676,3.242l-7.44,15.811 c-0.424,0.901-0.201,2.025,0.62,2.588c1.047,0.718,2.437,0.309,2.954-0.79l4.643-9.866c0.616-1.309,2.479-1.309,3.095,0l4.643,9.866 C30.531,46.576,31.25,47,32.001,47c0.411,0,0.832-0.128,1.203-0.402C33.982,46.024,34.18,44.936,33.768,44.061z M24,23 c1.103,0,2,0.897,2,2s-0.897,2-2,2s-2-0.897-2-2S22.897,23,24,23z" /></svg>
            <div className="card__content">
              <p className="card__title" style={{ color: props.mode === 'light' ? 'rgba(233,33,99,1)' : 'rgba(233,33,99,1)' }}>Android</p>
              <p className="card__description" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Android App For Farmers</p>
            </div>
          </div>

          <div className="card">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="96" height="96" viewBox="0 0 48 48">
              <path fill="#ff8f00" d="M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z" /><path fill="#ffa000" d="M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z" /><path fill="#ff6f00" d="M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z" /><path fill="#ffc400" d="M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743 c-0.609,0.342-1.352,0.342-1.961,0L8,37z" />
            </svg>
            <div className="card__content">
              <p className="card__title" style={{ color: props.mode === 'light' ? 'rgba(233,33,99,1)' : 'rgba(233,33,99,1)' }}>Firebase</p>
              <p className="card__description" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Used As DataBase</p>
            </div>
          </div>

          <div className="card">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
              <g fill="none" stroke="#000" stroke-width="2">
                <circle cx="24" cy="24" r="20" />
                <path d="M16 24v-4h4M32 24v-4h-4M12 16l4 4M36 16l-4 4M12 32l4-4M36 32l-4-4" />
                <path d="M24 8l8 8M24 40l8-8" />
              </g>
            </svg>

            <div className="card__content">
              <p className="card__title" style={{ color: props.mode === 'light' ? 'rgba(233,33,99,1)' : 'rgba(233,33,99,1)' }}>Machine Learning</p>
              <p className="card__description" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Trained A ML Model To Predict Best Sutaible Crop</p>
            </div>
          </div>

          <div className="card">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet" fill={props.mode === 'light' ? 'black' : 'white'}>

              <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                <path d="M1805 3501 c-71 -18 -131 -66 -169 -136 -21 -40 -21 -41 -21 -805 0 -764 0 -765 21 -805 28 -51 68 -91 119 -119 40 -21 41 -21 805 -21 l765 0 44 23 c51 28 85 62 115 117 21 40 21 42 21 805 0 763 0 765 -21 805 -30 55 -64 89 -115 117 l-44 23 -745 2 c-410 1 -758 -2 -775 -6z m510 -376 c20 -19 25 -34 25 -75 l0 -50 75 0 75 0 0 55 c0 65 22 95 70 95 48 0 70 -30 70 -95 l0 -55 75 0 75 0 0 49 c0 91 69 133 125 76 22 -21 25 -33 25 -90 0 -89 16 -105 105 -105 57 0 69 -3 90 -25 14 -13 25 -36 25 -50 0 -14 -11 -37 -25 -50 -19 -20 -34 -25 -75 -25 l-50 0 0 -75 0 -75 55 0 c65 0 95 -22 95 -70 0 -48 -30 -70 -95 -70 l-55 0 0 -75 0 -75 50 0 c41 0 56 -5 75 -25 32 -31 32 -69 0 -100 -21 -22 -33 -25 -90 -25 -89 0 -105 -16 -105 -105 0 -57 -3 -69 -25 -90 -31 -32 -69 -32 -100 0 -20 19 -25 34 -25 75 l0 50 -75 0 -75 0 0 -55 c0 -65 -22 -95 -70 -95 -48 0 -70 30 -70 95 l0 55 -75 0 -75 0 0 -50 c0 -41 -5 -56 -25 -75 -13 -14 -36 -25 -50 -25 -14 0 -37 11 -50 25 -22 21 -25 33 -25 90 0 89 -16 105 -105 105 -57 0 -69 3 -90 25 -57 56 -15 125 76 125 l49 0 0 75 0 75 -55 0 c-65 0 -95 22 -95 70 0 48 30 70 95 70 l55 0 0 75 0 75 -50 0 c-41 0 -56 5 -75 25 -32 31 -32 69 0 100 21 22 33 25 90 25 89 0 105 16 105 105 0 57 3 69 25 90 13 14 36 25 50 25 14 0 37 -11 50 -25z" />
              </g>
            </svg>

            <div className="card__content">
              <p className="card__title" style={{ color: props.mode === 'light' ? 'rgba(233,33,99,1)' : 'rgba(233,33,99,1)' }}> Sensors / IOT</p>
              <p className="card__description" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Esp32 With Some Sensors to Collect Data </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p3">
        <h1>Some Project Pics </h1>
        <div className="project-img">
          <div className="projimgcol">
          <img src={teampic_1} alt="" id='img1p'/>
          <h2>Proud Movement news was Published In Paper </h2>
          </div>
          <div className="projimgcol">
          <img src={teampic_3} alt="" id='img1p'/>
          <h2>Proud Movement Demonstrating Project To Honurable <b>Dr. Vijay Bhatkar Sir</b></h2>
          </div>
          <div className="projimgcol">
          <img src={teampic_2} alt="" id='img1p'/>
          <h2>Testing Our Project in Real World</h2>
          </div>
        </div>
        <h2>My Role : Developed A IOT Kit & Android App</h2>
      </div>
    </div>
  )
}

export default Project