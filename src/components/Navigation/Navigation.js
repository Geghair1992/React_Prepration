import React from 'react'
import Items from './Items/Items'
import "./Navigation.css"



const list=["Home","Products","About Us","Contact"];

const Navigation = () => {
    return (
    <nav>
        <ul>
            {
                list.map((n,i)=>{
                    return(
                        <Items key={i} titleHead={n}  />
                    )
                })
            }
        </ul>
    </nav>
    )
}

export default Navigation
