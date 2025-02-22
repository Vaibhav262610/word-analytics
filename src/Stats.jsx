import React, { useCallback, useState } from 'react'

const Stats = ({numberOfCharacters,instagramCharacters,facebookCharacters,numberOfWords}) => {
    
  return (
    <section className='stats'>
      <section className='stat'>
        <span className='stat__number'>{numberOfWords}</span>
        <h2 className='second-heading'>Words</h2>
      </section>
      <section className='stat'>
        <span className='stat__number'>{numberOfCharacters}</span>
        <h2 className='second-heading'>Characters</h2>
      </section>
      <section className='stat'>
        
    <span className='stat__number'>{instagramCharacters}</span> 
        <h2 className='second-heading'>Instagram</h2>
      </section>
      <section className='stat'>
        <span className='stat__number'>{facebookCharacters}</span>
        <h2 className='second-heading'>Facebook</h2>
      </section>
    </section>
  )
}

export default Stats
