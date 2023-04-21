import React from 'react'

function Link({text, target}) {
    
  return (
    <li><a href={target}>{text}</a></li>
  )
}

export default Link