import React, { Component } from 'react'

import { connect } from 'react-redux'

class TomatoList extends Component {
    constructor(props) {
        super(props)

        this.getDateString = this.getDateString.bind(this)
    }

    getDateString(d) {
        const date = new Date(d)
        const month = date.getMonth() + 1
        const day = date.getDate()
        const year = date.getFullYear()
        const minutes = date.getMinutes()
        const time = date.getHours() > 12 ? `${date.getHours() - 12}:${minutes}pm` : `${date.getHours()}:${minutes}am`

        return `${year}/${month}/${day} at ${time}`
    }
    
    render() {
        if ( this.props.tomatoes == null ) return <div/>

        const tomatoes = this.props.tomatoes.map((tomato, i) => {
            const start = this.getDateString(tomato.startTime)
            const end = this.getDateString(tomato.endTime)

            return <li key={i}>{start} - {end}: {tomato.description}</li>
        })

        return (
            <div>
                <ul>{tomatoes}</ul>
            </div>
        )
    }
}

function mapStateToProps(state, props){
    return {
        tomatoes: state.tomatoes
    }
}

export default connect(mapStateToProps)(TomatoList)