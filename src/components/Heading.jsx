import React from 'react'

function Heading(props) {
    return(
        <div className="headlines">
            <div className="text">
            <p>{props.text}</p>
            </div>
        </div>
    )
}

export default Heading