import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        const linkStyle = {
            display: 'block', 
            height: '100%', 
            color: '#666', 
            textDecoration: 'none'
        }
        const liStyle = { listStyle: 'none' }

        return (
            <div className="container">
                <div style={{textAlign: "center"}}>
                    <h3>Hey, you're not signed in yet!</h3>
                    <p>To save your tomato history you need to log in (you don't have to if you don't want to).</p>

                    <ul>
                        <li style={liStyle}>
                            <button><Link to="/sign-in" style={linkStyle}>sign in</Link></button>
                        </li>
                        <li style={liStyle}>
                            <button><Link to="/dashboard" style={linkStyle}>eh, i just need to squash some tomatoes</Link></button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Home