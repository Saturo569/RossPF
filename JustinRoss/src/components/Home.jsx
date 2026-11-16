    import { useEffect, useState } from 'react';
import doom from '../assets/doom.png';
    import { motion, AnimatePresence } from 'motion/react'

    const words = [
        { text: 'I', size: 'small'},
        { text: 'AM', size: 'small'},
        { text: 'ROSS', size: 'big'}
    ]

    const title = {
        hidden: {},
        show: {
            transition: { staggerChildren: 0.6, delayChildren: 0.3},
        },
    }

    const word = {
        hidden: { opacity: 0, y: 30, filter: 'blur(8px)'},
        show: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    }

    const time = 6000;
    function Home(){

        const [cycle, setCycle] = useState(0);
        useEffect(() => {
            const id = setInterval(() => setCycle((c) => c + 1), time)
            return () => clearInterval(id)
        }, [])
        return(
            <>
            <section className="home" id="home">

                <motion.h1
                    key={cycle}
                    className="title-ross"
                    variants={title}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    aria-label="I am Ross"
                >
                    {words.map((w) => (
                        <motion.span
                            key={w.text}
                            className={`w w-${w.size}`}
                            variants={word}
                            aria-hidden="true"
                        >

                            {w.text}

                        </motion.span>
                    ))} 
                </motion.h1>
                
                <motion.div
                    className="doom"
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.6 , ease: 'easeOut' }}
                >
                    <motion.img 
                    src={doom} 
                    alt="Maskara ni Dr Ross"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    />

                </motion.div>
                    
        </section>
            </>
        );
    }

    export default Home;