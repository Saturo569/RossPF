import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark, faBars, faHouse, faCircleInfo, faFolder, faCode, faPhone} from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from "motion/react"

const anchors = [
    { href: '#home', label: 'Home', icon: faHouse },
    { href: '#about', label: 'About me', icon: faCircleInfo},
    { href: '#projects', label: 'Projects', icon: faFolder},
    { href: '#skills', label: 'My Skills', icon: faCode},
    { href: '#contact', label: 'Contact me', icon: faPhone}
]


export default function Sidebar(){
    const [ open, setOpen ] = useState(false);
    return(
        <>
            <aside className={open ? 'sidebar open' : 'sidebar'}>
                <div className="header-part">
                    <span className="logo">
                        <a
                         href="#home" onClick={() => setOpen(false)} >Justin Ross</a>
                    </span>

                    <motion.button
                        whileHover={{ 
                            scale: 1.1,
                            transition: { duration: 0.1}
                        }}
                        transition={{ duration: 0.5 }}
                       
                        className="menu"
                        aria-label="Toggle menu"
                        aria-expanded={open}
                        onClick={() => setOpen(!open)}
                    >

                       
                            {open ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                        
                    </motion.button>
                </div>

                <nav>
                    {anchors.map((anchor, index) =>
                    
                    (
                       <a key={anchor.href} href={`/${anchor.href}`} onClick={() => setOpen(false)}>
                            <FontAwesomeIcon icon={anchor.icon} /> {anchor.label}
                        </a>
                    ))}
                </nav>

            </aside>
        </>
    )
}