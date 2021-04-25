import React from 'react'
import FItems from './FItems/FItems'
import "./Footer.css"


const Foot = ['Address','Products','Latest Articles'];

const Footer = () => {
    return (
          <footer>
            <ul>
                {
                Foot.map((h,l)=>{
                    return(
                        <FItems key={l} ft={h} />
                    )
                })
               }
            </ul>
         </footer>
    )
}

export default Footer
