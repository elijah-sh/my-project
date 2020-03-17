import React from 'react'

class DigitalClock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    render() {
        return (
            <div className="digital-clock-component jumbotron">
                <h1>
                    {this.state.date.toLocaleTimeString()}
                </h1>
            </div>
        )
    }

    // 定时器
    componentDidMount() {
        this.timer = setInterval(
            () => {
                this.setState({
                    date: new Date()
                })
            }, 1000
        )
    }

    // 清除时间
    componentWillUnmount() {
        clearInterval(this.timer)
    }

    //打印
    componentDidUpdate(currentProos, currentState) {
        console.log(currentState)
    }
}

export default DigitalClock