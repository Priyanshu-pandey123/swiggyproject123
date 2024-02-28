import React from 'react';
import ReactDOM from 'react-dom/client';

const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
            <img
            className="logo"
            src="https://img.freepik.com/free-vector/cute-panda-eating-burger-cartoon-vector-illustration-animal-food-concept-isolated-vector-flat-cartoon-style_138676-1936.jpg?t=st=1709107624~exp=1709111224~hmac=9d85445f8e0d518160b0c68a956d372ac9bf2b13bc94b818a6dbaf220962c4c4&w=740"
            alt="not found"

            />
            <h1>food order app</h1>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <li>olol</li>
                </ul>

            </div>
             
        </div>
    )
}

export default Header;