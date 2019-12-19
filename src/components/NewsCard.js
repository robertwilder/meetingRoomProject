import React from 'react'

export default function NewsCard(props) {
    return (
        <div className="newsCard">
            
                <h2>{props.title}</h2>
            
                <p>{props.article}</p>

               <a>{props.link}</a>
            
        </div>
    )
}
