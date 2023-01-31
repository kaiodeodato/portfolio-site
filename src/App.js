import React,{useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import myPic from './components/images/myPic.png'
import Animation from './Animation';
import NavbarMini from './components/NavbarMini';
import Tools from './components/Tools'
import Resume from './components/RESUME.pdf';
import {Container, Row, Col} from 'react-bootstrap';

import album from './components/images/album.jpg';
import theVoiceBrasil from './components/images/theVoiceBrasil.jpg';
import theVoicePortugal from './components/images/theVoicePortugal.jpg';
import teatro from './components/images/teatro.jpg';

import image1 from './components/images/image1.png';
import image2 from './components/images/image2.png';
import image3 from './components/images/image3.png';
import image4 from './components/images/image4.png';
import image6 from './components/images/image6.png';

import './App.css';

function App() {

  const [showingAnimation,setShowingAnimation] = useState(true)

  setTimeout(()=>{
    setShowingAnimation(false)
  },4250)

  const [subida,setSubida] = useState(window.scrollY)



  document.addEventListener("scroll", DoIt);

  function DoIt(){
    setSubida(window.scrollY)
  } 
  

  useEffect(()=>{
    let gif = document.querySelector(".gif")
    gif.style.top = `-${subida*0.2}px`
    DoIt()
  },[subida])

if(subida){
  if(subida <= 800){
    let gif = document.querySelector(".gif")
    gif.style.display = "block"
  }
  if(subida > 500){
    let gif = document.querySelector(".gif")
    gif.style.display = "none"
  }
}


if(window.scrollY > 610 && window.scrollY < 1270){
  let section = document.querySelector(".App__content__About")
  section.classList.add("hidden__section")
}
if(window.scrollY > 1380 && window.scrollY < 2170){
  let section1 = document.querySelector(".App__content__Education")
  section1.classList.add("hidden__section")
}
if(window.scrollY > 2280 && window.scrollY < 4400){
  let section2 = document.querySelector(".App__content__Work")
  section2.classList.add("hidden__section")
}
if(window.scrollY > 4400){
  let section3 = document.querySelector(".App__content__FunFacts")
  section3.classList.add("hidden__section")
}

console.log(window.scrollY)

  return (
    <div className="App">
      { showingAnimation && <Animation/>}
      <Navbar/>
      <NavbarMini/>
      

     <img className='gif' src="https://media.giphy.com/media/ko7twHhomhk8E/giphy.gif"></img>
   
      <div className="App__text" >
        <div>
          <div className="App__text__topo" >
            <h1>Front-End</h1>
            <span>Developer</span> 
          </div>
        <p className="App__text__sentence" >Let's create something beautiful</p>

        </div>
      
        
        <img className="mypic" src={myPic}></img>
      </div>
      <div className="App__mask">
        <Tools/>
      <br></br>
        <p id="about" ></p>

        <div className="App__content__About">
          <span > 01. About Me</span>
          <br></br>
          <span>Hi, my name is</span>

          <h2>Kaio Deodato.</h2>
          <h1>I build things for the web.</h1>

          <span className="App__content__About__span">
           I am a Brazilian Front-End Developer 
          who loves creating awesome Responsive Web Design, Web Development /
           Web Performance and subtle web animations. I am always challenging myself to 
           implement a more stunning design and I am self-taught for passion. I have experience in design, 
           more precisely in creating branding and visual identity, and I am also starting my journey in React.</span>

          <a target="_blank" href={Resume} className="button__resume">RESUME</a>

        </div>

        <div id='Education' className="App__content__Education">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        
          <span id='Education'> 02. Education</span>
          <br></br>

          <div className='Education__box'>
            <h3>
              2022 - Complete Vanilla JS
            </h3>
            <span className='Education__title' >
                Javascript
            </span>
            <span className='Education__subtitle' >
                Danki Code
            </span>
          </div>

          <div className='Education__box'>
            <h3>
              2022 - FrontEnd Package
            </h3>
            <span className='Education__title' >
                Web developer - HTML/CSS
            </span>
            <span className='Education__subtitle' >
                Danki Code
            </span>
          </div>

          <div className='Education__box'>
            <h3>
              2022 - FrontEnd - frameworks
            </h3>
            <span className='Education__title' >
                React.js
            </span>
            <span className='Education__subtitle' >
                FreeCodeCamp
            </span>
          </div>

          <div className='Education__box'>
            <h3>
              2012 - Graphic Designer
            </h3>
            <span className='Education__title' >
                Graphic Designer EQF level 4
            </span>
            <span className='Education__subtitle' >
                Seven CG
            </span>
          </div>
   
        </div>

        </div>



        <div id='Work' className="App__content__Work"><br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
       
          <span > 03. Something I built recently</span>
          <br></br>

          <div className='work__box'>
            <a target="_blank" href='https://teste-8e6a1.web.app/'> 
              <img className='work__container__image' src={image2}></img>
            </a>
            <div className='work__info'>
              <h3>
                Movie List
              </h3>
              <span className='work__title' >
                Entertainment movies website. Content includes releases, synopsis, 
                trailers and screen stars. It has an extensive database with over 135,000 
                films and series.
              </span>
            </div>
          </div>

          <div className='work__box'>
            <a target="_blank" href='https://kaiodeodato.github.io/Pokedex/'> 
              <img className='work__container__image' src={image4}></img>
            </a>
            <div className='work__info'>
              <h3>
                Pokedex
              </h3>
              <span className='work__title' >
              A Pokémon Go data website with useful Pokémon information 
              like type, ability, level and location. Learn more about them and 
              see their evolutions.
              </span>
            </div>
          </div>
          <div className='work__box'>
            <a target="_blank" href='https://testefotos-b7f0c.web.app/'> 
              <img className='work__container__image' src={image3}></img>
            </a>
            <div className='work__info'>
              <h3>
                News Channel
              </h3>
              <span className='work__title' >
              The News, your online news diary. News about national 
              and international current affairs, politics, sports and much more.
              </span>
            </div>
          </div>
          
          <div className='work__box'>
            <a target="_blank" href='https://kaiodeodato.github.io/Site/'> 
              <img className='work__container__image' src={image1}></img>
            </a>
            <div className='work__info'>
              <h3>
                Nintendo Switch
              </h3>
              <span className='work__title' >
              Nintendo switch built from scratch with advanced knowledge of CSS, 
              transformed into an interactive Portfolio. Contains my small projects
               and fun games to demonstrate logic and programming skills.
              </span>
            </div>
          </div>

          <div className='work__box'>
            <a target="_blank" href='https://vansshopclone.web.app/'> 
              <img className='work__container__image' src={image6}></img>
            </a>
            <div className='work__info'>
              <h3>
                Vans Store Clone
              </h3>
              <span className='work__title' >
              A Vans store clone in React.js,a multi-page web application that replicates the online shopping experience of a Vans store. It utilizes React.js as the front-end library to create a dynamic and responsive user interface.
              </span>
            </div>
          </div>

          

      
        <div id='FunFacts'  className="App__content__FunFacts">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span  > 04. Some important parts of who I am</span>
      <div className='App__content__FunFacts__pics'>
          <div className='fun__box'>
                <a target="_blank" href='https://www.youtube.com/watch?v=ONEGiYHi5Mg'> 
                  <img className='fun__container__image' src={theVoicePortugal}></img>
                </a>
                <div className='fun__info'>
                  <h3>
                  The Voice Portugal 2017
                  </h3>
                  <span className='fun__title' >
                  After moving to Lisbon, I also participated in The Voice Portugal in 2017, 
                  in the singer Anselmo's team, staying until mid-season.
                  </span>
                </div>
              </div>

              <div className='fun__box'>
                <a target="_blank" href='https://www.dailymotion.com/video/x19u90y'> 
                  <img className='fun__container__image' src={theVoiceBrasil}></img>
                </a>
                <div className='fun__info'>
                  <h3>
                    The Voice Brazil 2013
                  </h3>
                  <span className='fun__title' >
                  The Voice Brazil contestant in 2013, on the singer Daniel's team, reaching the battles phase.
                  </span>
                </div>
              </div>

              <div className='fun__box'>
                <a target="_blank" href='http://www.cianissi.com/'> 
                  <img className='fun__container__image' src={teatro}></img>
                </a>
                <div className='fun__info'>
                  <h3>
                    Missionary experience
                  </h3>
                  <span className='fun__title' >
                  In 2016 i decided to join the missionary work, performing in plays promoted by CIA
                   NISSI in Brazil and later on tour in Europe, with the aim of raising funds
                    to build a day care center in Angola.
                  </span>
                </div>
              </div>

              <div className='fun__box'>
                <a target="_blank" href='https://open.spotify.com/album/1JBjjYi1vzfzLBAlJM8Rgd?si=NUwUISpoRhqsAwsCIrfChQ'> 
                  <img className='fun__container__image' src={album}></img>
                </a>
                <div className='fun__info'>
                  <h3>
                    Album "MAR"
                  </h3>
                  <span className='fun__title' >
                  Authorial CD released in mid-2015, which features a collection of songs and themes composed by myself.
                  </span>
                </div>
              </div>
              </div>
        </div>
        
        
        </div>
      <small className='footer'>Designed & Built by Kaio Deodato</small>
    </div>
  );
}

export default App;
