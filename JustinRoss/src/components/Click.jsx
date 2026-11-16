import { useEffect, useState }from 'react'
import './Click.css'

function Click(){
    const [clicks, setClicks] = useState([])

    useEffect(() => {
        function Handle(e){
            const id = Date.now() + Math.random()
            setClicks((prev) => [...prev,{id, x: e.clientX, y: e.clientY}])
        }

        window.addEventListener('click', Handle)
        return () => window.removeEventListener('click', Handle)
    }, [])

    function removeClick(id){
        setClicks((prev) => prev.filter((r) => r.id !== id))
    }
    return(
        <>
            {clicks.map((r) => (
                <span key={r.id} className="click" style={{left: r.x, top: r.y}}>
                    <span className="circle circle-gold"/>
                    <span className="circle circle-blue" onAnimationEnd={() => removeClick(r.id)}/>
                
                </span>
            ))}
        </>
    )
}

export default Click;