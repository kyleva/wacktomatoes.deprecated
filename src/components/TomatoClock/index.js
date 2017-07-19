import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as tomatoActions from 'actions/tomato-list'

import pad from 'utils/pad'

class TomatoClock extends Component {
    static defaultProps = {
        minutesToCountdown: .1
    }

    constructor(props) {
        super(props)

        this.startTomato = this.startTomato.bind(this)
        this.completeTomato = this.completeTomato.bind(this)
        this.destroyTomato = this.destroyTomato.bind(this)
        this.updateTomatoDescription = this.updateTomatoDescription.bind(this)
        this.saveTomato = this.saveTomato.bind(this)
        this.tick = this.tick.bind(this)
    }

    state = {
        timeRemaining: '',
        finishedCounting: false,
        counting: false,
        startTime: null,
        endTime: null,
        tick: null,
        tomatoDescription: ''
    }

    startTomato() {
        const now = new Date()
        const twentyMinutesFromNow = new Date(now.getTime() + (this.props.minutesToCountdown*60000))

        this.setState({
            endTime: twentyMinutesFromNow,
            startTime: now,
            tick: setInterval(this.tick, 1000)
        })
    }

    tick() {
        const diff = Date.parse(this.state.endTime) - Date.parse(new Date())
        const minutesRemaining = Math.floor((diff/1000/60) % 60)
        const secondsRemaining = Math.floor((diff/1000) % 60)

        if ( !minutesRemaining && !secondsRemaining ) {
            clearInterval(this.state.tick)

            this.completeTomato()

            return
        }

        this.setState({
            counting: true,
            timeRemaining: `${pad(minutesRemaining)}:${pad(secondsRemaining)}`
        })
    }

    completeTomato() {
        this.setState({
            timeRemaining: '',
            finishedCounting: true,
            counting: false,
            tick: null
        })
    }

    destroyTomato(completed) {
        clearInterval(this.state.tick)

        this.setState({
            timeRemaining: '',
            finishedCounting: false,
            counting: false,
            endTime: null,
            tick: null,
        })
    }

    updateTomatoDescription(event){
        this.setState({
            tomatoDescription: event.target.value
        })
    }

    saveTomato() {
        this.props.actions.addToTomatoList({
            description: this.state.tomatoDescription,
            startTime: this.state.startTime,
            endTime: this.state.endTime
        })

        this.setState({
            finishedCounting: false,
            tomatoDescription: '',
            startTime: null,
            endTime: null
        })
    }

    render() {
        let actions;

        if (!this.state.counting && !this.state.finishedCounting) {
            actions = <button onClick={this.startTomato}>start</button>
        }
        else if (this.state.counting) {
            actions = <button onClick={this.destroyTomato}>cancel</button>
        }
        else {
            actions = (
                <span>
                    <button onClick={this.saveTomato}>save</button>
                    <button onClick={this.destroyTomato}>cancel</button>
                </span>
            )
        }

        return (
            <div className="tomato-clock">
                <div><h3>{this.state.timeRemaining}</h3></div>
                {this.state.finishedCounting && 
                    <div className="tomato-text-input">
                        <input 
                            type="text" 
                            value={this.state.tomatoDescription} 
                            placeholder="what did you do?" 
                            onChange={this.updateTomatoDescription} />
                    </div>
                }
                <div className="tomato-clock-actions">
                    {actions}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, props){
    return {
        tomatoes: state.tomatoes
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(tomatoActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TomatoClock)