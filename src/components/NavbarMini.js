import React from 'react'

export default function NavbarMini() {

    function GoPage(num){
        let span_menu = document.getElementById("NavbarMini__menu")
      span_menu.classList.toggle("NavbarMini__span__hidden")
      
        window.scrollTo({
            top: num,
            behavior: 'smooth',
          })
    }

  return (
    <div id="NavbarMini__menu" className='NavbarMini__menu'>
        <a className='NavbarMini__span' href='#about'><span>About</span></a>
        <a className='NavbarMini__span' href='#Education'><span >Education</span></a>
        <a className='NavbarMini__span' href='#Work' ><span>Work</span></a>
        <a className='NavbarMini__span' href='#FunFacts'><span >FunFacts</span></a>
        </div>
  )
}


