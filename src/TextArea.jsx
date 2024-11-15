import React, { useState } from 'react'

function TextArea({text,setText}) {

    const handleChange = (e) => {
        const controlText = e.target.value
        setText(controlText)
    }

  return (
      <textarea value={text} spellCheck='false' placeholder='Enter Your Text' onChange={handleChange} className='textarea'/>
  )
}

export default TextArea
