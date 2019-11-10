import React from 'react'

const Header = props => {
    return (
        <nav className="navbar bg-dark" style={{height:100}}>
        <div className="container">
          <div className="row m-auto">
            <div className="h3 text-light my-auto">
              {props.title}
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Header


