import React,{createElement} from 'react'
import Link from './Link'
function Nav() {
  return (
    <nav> 
      <span style={{float:"left!important",color:"#0000"} }>Mzee bikes</span>
        <ul>
        <Link target="#" text="Home"/>
        <Link target="#news" text="News"/>
        <Link target="#about-us" text="About"/>
      {/* {createElement(Link,{target:"top-par", text:"top"},"I am text ")} */}
        </ul>
      </nav> 
  )
}

export default Nav