import React from 'react'

function Header(props) {
  return (
    <>
      <header className="title">
        <h2>{props.title}</h2>
          <div className="text">
            <p className='small'>{props.subtitle}</p>
          </div>
      </header>
    </>
  )
}

export default Header