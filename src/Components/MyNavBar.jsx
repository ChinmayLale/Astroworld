import React, { useState }  from 'react'
import rocket from './assets/Images/charm_rocket.svg';
import  './Style/NavChangeMode.css';
function MyNavBar(props) {
    const logoColor = props.mode === 'light' ? 'black' : 'white';
    const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <nav className='mynav' style={{'color':props.mode==='light'?'black':'white'}}>
        <div className="navlogo">
           <span className='navimg'><img src={rocket} alt="" style={{ filter: props.mode==='light' ? 'invert(100%)' : 'invert(0)' , 'transform':'scale(1em)'}}/></span> <h3>AstroWorld</h3>
        
        <div className="navItems"style={{'textDecoration':'none','color':props.mode==='light'?'black':'white'}}>
            <h4 ><a href="/Astroworld" style={{'textDecoration':'none','color':props.mode==='light'?'black':'white'}}>Home</a></h4>
            <h4><a href='/Astroworld/about' style={{'textDecoration':'none','color':props.mode==='light'?'black':'white'}}>About</a></h4>
            <h4><a href="/Astroworld/projects" style={{'textDecoration':'none','color':props.mode==='light'?'black':'white'}}>Projects</a></h4>
            <h4><a href="/Astroworld/contactme" style={{'textDecoration':'none','color':props.mode==='light'?'black':'white'}}>ContactMe</a></h4>
           
        </div>
        </div>
        <div className="socialIcons">
        <a href="https://www.linkedin.com/in/chinmaylale/" className="social twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 32 32" style={{ fill: logoColor }}>
                    <path d="M 8.6425781 4 C 7.1835781 4 6 5.181625 6 6.640625 C 6 8.099625 7.182625 9.3085938 8.640625 9.3085938 C 10.098625 9.3085938 11.283203 8.099625 11.283203 6.640625 C 11.283203 5.182625 10.101578 4 8.6425781 4 z M 21.535156 11 C 19.316156 11 18.0465 12.160453 17.4375 13.314453 L 17.373047 13.314453 L 17.373047 11.310547 L 13 11.310547 L 13 26 L 17.556641 26 L 17.556641 18.728516 C 17.556641 16.812516 17.701266 14.960938 20.072266 14.960938 C 22.409266 14.960937 22.443359 17.145609 22.443359 18.849609 L 22.443359 26 L 26.994141 26 L 27 26 L 27 17.931641 C 27 13.983641 26.151156 11 21.535156 11 z M 6.3632812 11.310547 L 6.3632812 26 L 10.923828 26 L 10.923828 11.310547 L 6.3632812 11.310547 z"></path>
                    </svg>
                   </a>

                   <a href="/" className="social facebook"
                  ><svg height="1em" viewBox="0 0 320 512" style={{ fill: logoColor }}>
                    <path
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    ></path></svg
                ></a>
                <a href="mailto:chinmay29.lale@gmail.com" className="social google-plus">
                  <svg height="1em" viewBox="0 0 640 512" style={{ fill: logoColor }}>
                    <path
                      d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z"
                    ></path>
                  </svg>
                </a>
                <a href="https://github.com/ChinmayLale" className="social google-plus">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="800px" height="800px" viewBox="-2.5 0 19 19" className="cf-icon-svg" style={{ fill: logoColor }}><path d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z"/></svg>
                </a>
              
                <a href="https://www.instagram.com/astrochinmay/?igsh=MWY1MHJiZzV3Mmk0NA%3D%3D" className="social instagram"
                  ><svg height="1em" viewBox="0 0 448 512" style={{ fill: logoColor }}>
                    <path
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    ></path></svg>
                </a>
                
                {/* Button */}
              <label className="bb8-toggle" onChange={props.changeMode}>
                  <input className="bb8-toggle__checkbox" type="checkbox"/>
                  <div className="bb8-toggle__container">
                  <div className="bb8-toggle__scenery">
                      <div className="bb8-toggle__star"></div>
                      <div className="bb8-toggle__star"></div>
                      <div className="bb8-toggle__star"></div>
                      <div className="bb8-toggle__star"></div>
                      <div className="bb8-toggle__star"></div>
                      <div className="bb8-toggle__star"></div>
                      <div className="bb8-toggle__star"></div>
                      <div className="tatto-1"></div>
                      <div className="tatto-2"></div>
                      <div className="gomrassen"></div>
                      <div className="hermes"></div>
                      <div className="chenini"></div>
                      <div className="bb8-toggle__cloud"></div>
                      <div className="bb8-toggle__cloud"></div>
                      <div className="bb8-toggle__cloud"></div>
                  </div>
                  <div className="bb8">
                      <div className="bb8__head-container">
                      <div className="bb8__antenna"></div>
                      <div className="bb8__antenna"></div>
                      <div className="bb8__head"></div>
                      </div>
                      <div className="bb8__body"></div>
                  </div>
                  <div className="artificial__hidden">
                      <div className="bb8__shadow"></div>
                  </div>
                  </div>
            </label>
        </div>
        <span className='mobilemenue'>
          <i className="ri-menu-3-line mobilemenue" onClick={()=>{setShowMediaIcons(!showMediaIcons)}}></i>
          
        
        
        </span>
        <div className="mobilemenu" style={{display : showMediaIcons ? 'block' : 'none' , backdropFilter:'blur(10px)', width:'100vw' , height:'100vh'}}>
            <h4 ><a href="/" style={{'textDecoration':'none','color':props.mode==='light'?'black':'white'}}>Home</a></h4>
            <h4><a href='/about' style={{'textDecoration':'none','color':props.mode==='light'?'black':'white'}}>About</a></h4>
            <h4><a href="/projects" style={{'textDecoration':'none','color':props.mode==='light'?'black':'white'}}>Projects</a></h4>
            <h4><a href="/contactme" style={{'textDecoration':'none','color':props.mode==='light'?'black':'white'}}>ContactMe</a></h4>
            <label className="bb8-toggle" onChange={props.changeMode}>
                  <input className="bb8-toggle__checkbox" type="checkbox"/>
                  <div className="bb8-toggle__container">
                  <div className="bb8-toggle__scenery">
                      <div className="bb8-toggle__star"></div>
                      <div className="bb8-toggle__star"></div>
                      <div className="bb8-toggle__star"></div>
                      <div className="bb8-toggle__star"></div>
                      <div className="bb8-toggle__star"></div>
                      <div className="bb8-toggle__star"></div>
                      <div className="bb8-toggle__star"></div>
                      <div className="tatto-1"></div>
                      <div className="tatto-2"></div>
                      <div className="gomrassen"></div>
                      <div className="hermes"></div>
                      <div className="chenini"></div>
                      <div className="bb8-toggle__cloud"></div>
                      <div className="bb8-toggle__cloud"></div>
                      <div className="bb8-toggle__cloud"></div>
                  </div>
                  <div className="bb8">
                      <div className="bb8__head-container">
                      <div className="bb8__antenna"></div>
                      <div className="bb8__antenna"></div>
                      <div className="bb8__head"></div>
                      </div>
                      <div className="bb8__body"></div>
                  </div>
                  <div className="artificial__hidden">
                      <div className="bb8__shadow"></div>
                  </div>
                  </div>
            </label>
            <div className="mb-social-icon">
            <a href="https://www.linkedin.com/in/chinmaylale/" className="social twitter" style={{'transform':'scale(5)','marginTop':'2vh'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 32 32" style={{ fill: logoColor }}>
                    <path d="M 8.6425781 4 C 7.1835781 4 6 5.181625 6 6.640625 C 6 8.099625 7.182625 9.3085938 8.640625 9.3085938 C 10.098625 9.3085938 11.283203 8.099625 11.283203 6.640625 C 11.283203 5.182625 10.101578 4 8.6425781 4 z M 21.535156 11 C 19.316156 11 18.0465 12.160453 17.4375 13.314453 L 17.373047 13.314453 L 17.373047 11.310547 L 13 11.310547 L 13 26 L 17.556641 26 L 17.556641 18.728516 C 17.556641 16.812516 17.701266 14.960938 20.072266 14.960938 C 22.409266 14.960937 22.443359 17.145609 22.443359 18.849609 L 22.443359 26 L 26.994141 26 L 27 26 L 27 17.931641 C 27 13.983641 26.151156 11 21.535156 11 z M 6.3632812 11.310547 L 6.3632812 26 L 10.923828 26 L 10.923828 11.310547 L 6.3632812 11.310547 z"></path>
                    </svg>
                   </a>

            <a href="/" className="social facebook" style={{'transform':'scale(5)','marginTop':'2vh','padding':'2px'}}>
              <svg height="1em" viewBox="0 0 320 512" style={{ fill: logoColor }}>
                    <path
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    ></path></svg
                ></a>
                <a href="mailto:chinmay29.lale@gmail.com" className="social google-plus" style={{'transform':'scale(5)','marginTop':'2vh','padding':'1px'}}>
                  <svg height="1em" viewBox="0 0 640 512" style={{ fill: logoColor }}>
                    <path
                      d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z"
                    ></path>
                  </svg>
                </a>
                <a href="https://github.com/ChinmayLale" className="social google-plus" style={{'transform':'scale(5)','marginTop':'2vh'}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="800px" height="800px" viewBox="-2.5 0 19 19" className="cf-icon-svg" style={{ fill: logoColor }}><path d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z"/></svg>
                </a>
              
                <a href="https://www.instagram.com/astrochinmay/?igsh=MWY1MHJiZzV3Mmk0NA%3D%3D" className="social instagram" style={{'transform':'scale(5)','marginTop':'2vh','padding':'1px'}}>
                  <svg height="1em" viewBox="0 0 448 512" style={{ fill: logoColor }}>
                    <path
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    ></path></svg>
                </a>
            </div>
        </div>
    </nav>
  )
}

export default MyNavBar

