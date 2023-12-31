import React from 'react'
import './component.css'


const Header = () => {
    return (
        <header className='main-header'>
            <div className='left'>
                <img src="https://logodix.com/logo/303038.jpg" className='img' alt="logo" />
            </div>

            <div className="right">
                user
            </div>
        </header>

    )
}

export default Header