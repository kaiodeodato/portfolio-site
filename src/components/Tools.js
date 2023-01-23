import React from 'react'

import { FaReact,FaBootstrap,FaGitAlt} from 'react-icons/fa'
import { AiFillGithub,AiFillHtml5,AiFillWindows} from 'react-icons/ai'
import { DiCss3} from 'react-icons/di'
import { SiJavascript,
    SiFirebase,
    SiAdobephotoshop,
    SiAdobeaftereffects,
    SiAdobeillustrator} from 'react-icons/si'
import { FiFigma} from 'react-icons/fi'
import { ImNpm} from 'react-icons/im'

    






export default function Tools() {
  return (
    <div className='Tools__container'>
           <span><AiFillHtml5 size={50}/></span>
           <span><DiCss3 size={50}/> </span>
           <span><SiJavascript size={50}/></span>
           <span><FaReact size={50}/></span>
           <span><AiFillGithub size={50}/></span>
           <span><FaGitAlt size={50}/></span>
           <span><SiAdobephotoshop size={50}/></span>
           <span><FaBootstrap size={50}/></span>
           <span><SiAdobeaftereffects size={50}/></span>
           <span><SiAdobeillustrator size={50}/></span>
           <span><FiFigma size={50}/></span>
           <span><ImNpm size={50}/></span>
           <span><SiFirebase size={50}/></span>
           <span><AiFillWindows size={50}/></span>

          
    </div>
  )
}
