import React from 'react'
import '../components/Navbar.css'


function Navbar() {
    return (
        <nav>
        <div className="navbar">
            <div className='logo_content'>
               <p> Department     Of      IoT</p>
            </div>
            <ul className='nav_links'> 
                <li><a href="/">Home</a></li>
                <li><a href="/chatroom">Chatroom</a></li>
                <li><a href="/Resources">Resources</a></li>
                <li><a href="/about">About us</a></li>
                <li><a href="/faculty">Faculty</a></li>
            </ul>
            <div className='login_btn'>
                <a href="/login"><button className='login_btn_container'>login</button></a>
            </div>
            
        </div>
    </nav>
        
    )
}

export default Navbar
