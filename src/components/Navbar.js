import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'


export default function Navbar() {




function HandleClick(){
  let span_menu = document.getElementById("NavbarMini__menu")
  span_menu.classList.toggle("NavbarMini__span__hidden")
}

// console.log(window.scrollY)

return (
<div className='Navbar__container'>
    <h3>Kaio_Deodato</h3>
    <div className='Navbar__menu'>
        <AiOutlineMenu onClick={HandleClick}  className='icon__menu' size={22}/>
        <span > [</span>
        <a href='#about'><span>About</span></a>
        <span>,</span>
        <a href='#Education'><span >Education</span></a>
        <span>,</span>
        <a href='#Work' ><span>Work</span></a>
        <span>,</span>
        <a href='#FunFacts'><span >FunFacts</span></a>
        <span>]</span>
    </div>
</div>
)
}
