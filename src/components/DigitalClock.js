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

    // 定时器 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。
    componentDidMount() {
        this.timer = setInterval(
            () => {
                this.setState({
                    date: new Date()
                })
            }, 1000
        )
    }

    // 清除时间 在组件从 DOM 中移除之前立刻被调用
    componentWillUnmount() {
        clearInterval(this.timer)
    }

    //打印 componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。
    componentDidUpdate(currentProos, currentState) {
        console.log(currentState)
    }
}

export default DigitalClock