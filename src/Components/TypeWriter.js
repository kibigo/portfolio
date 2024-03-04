import React, { useEffect, useState } from 'react'

function TypeWriter({words, speed}) {
    const [currentwordIndex, setCurrentwordIndex] = useState(0)
    const [currenttext, setCurrentText] = useState("");
    const currentWord = words[currentwordIndex];

    useEffect(() => {
        let charIndex = 0;

        const typingInterval = setInterval(() => {
            if (charIndex <= currentWord.length){
                setCurrentText(currentWord.slice(0, charIndex))
                charIndex++;
            }else{
                //word typed out, clear and move to the next
                clearInterval(typingInterval);

                setTimeout(() => {
                    setCurrentwordIndex((prevIndex) => prevIndex === words.length -1 ? 0 : prevIndex + 1)
                }, 1000);
            }
        }, speed);

        return () => {
            clearInterval(typingInterval);
        }
    }, [currentWord, speed, words])
  return (
    <span className='tracking-wider bg-clip-text text-green-700 mt-7'>
        {currenttext}
    </span>
  )
}

export default TypeWriter