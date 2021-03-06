import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <header style={headerStyle}>
                <h1>SIMPLE REACT TODO LIST</h1>
                <Link style={linkStyle} to="/todo-app">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
            </header>
        </div>
    )
}

const headerStyle = {
    background : 'rgb(8 76 77',
    color : "#fff",
    textAlign : "center",
    padding: "10px"
}

const linkStyle = {
    color :'#fff',
    textDecoration: 'none'
}