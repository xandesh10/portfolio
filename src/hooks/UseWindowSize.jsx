import React, { useEffect, useState } from 'react'

function UseWindowSize() {
    const [width, setWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
        console.log(width);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

  return width;
}

export default UseWindowSize