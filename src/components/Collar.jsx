import React from 'react'
import './collar.css'

function Collar(props) {
  return (
        <div className='collar'>
            <small>
                <i className={props.icon}></i>
                {props.subtitle}
            </small>

            <h3 className="text">
                {props.text}
            </h3>
        </div>
  )
}

export default Collar