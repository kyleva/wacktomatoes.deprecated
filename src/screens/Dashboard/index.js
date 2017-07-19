import React, { Component } from 'react'

import TomatoClock from 'components/TomatoClock'
import TomatoList from 'components/TomatoList'

class Dashboard extends Component {
    render() {
        return (
            <div className="container">
                <div style={{textAlign: "center"}}>
                    <h3>Happy tomato-squashing.</h3>
                </div>
                <hr/>
                <TomatoClock/>
                <TomatoList/>
            </div>
        )
    }
}

export default Dashboard

