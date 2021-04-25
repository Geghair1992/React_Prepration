import React from 'react'
import Items from './Items/Items'
import "./Navigation.css"



const list=[
    {
        name:'Home',
        link:'/',
    },     
    {
       name:'Products',
       link:'/products',
    },
    {
       name:'About Us',
       link:'/aboutus',
    },
    {
        name:'Contact',
        link:'/contact',
    },
];

const Navigation = () => {
    return (
    <nav>
        <ul>
            {
                list.map((n,i)=>{
                    return(
                        <Items key={i} title={n.name} url={n.link}  />
                    )
                })
            }
        </ul>
    </nav>
    )
}

export default Navigation
