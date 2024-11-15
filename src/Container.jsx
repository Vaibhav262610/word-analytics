import React, { useState } from 'react'
import TextArea from './TextArea'
import Stats from './Stats'

const Container = () => {

  const [text, setText] = useState("")
  const instagramCharacters = 280 - text.length;
  const numberOfCharacters = text.length;
  const numberOfWords= text.split(/\s/).filter((word) => word !== "").length;
  const facebookCharacters = 2200 - text.length;
  
  return (
    <main className='container'>
      <TextArea text={text} setText={setText} />
      <Stats numberOfCharacters={numberOfCharacters} instagramCharacters={instagramCharacters} facebookCharacters={facebookCharacters} numberOfWords={numberOfWords} />
    </main>
  )
}

export default Container
