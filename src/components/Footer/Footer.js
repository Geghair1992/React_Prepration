import React from 'react'
import FItems from './FItems/FItems'
import "./Footer.css"


const Foot = ["Location","About Us","Contacts"];

const Footer = () => {
    return (
          <footer>
            <ul>
                {
                Foot.map((h,l)=>{
                    return(
                        <FItems key={l} Ft={h} />
                    )
                })
               }
            </ul>
         </footer>
    )
}

export default Footer
