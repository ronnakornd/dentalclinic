import React, {useState} from 'react'
import './styles/MenuStyle.css'

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`menu ${isOpen ? 'open' : 'close'}`}>
        <div className="bar-container z-30" onClick={()=>setIsOpen(!isOpen)}>
        <div id="bar-1" className="bar bg-sky-500"></div>
        <div id="bar-2" className="bar bg-sky-500"></div>
        <div id="bar-3" className="bar bg-sky-500"></div>
        </div>
        <div id="drawer" className="absolute w-2 h-2 left-0 top-0 z-20 hidden">
            <div className="menu-item  text-stone-200">Home</div>
            <div className="menu-item  text-stone-200">About</div>
            <div className="menu-item  text-stone-200">Contact</div>
        </div>
    </div>
  )
}

export default Menu