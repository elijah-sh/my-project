import React from 'react'

class LikesButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: 0
        }
        // 定义方法
        //this.increaseLikes = this.increaseLikes.bind(this)
        // 调用方法 onClick={this.increaseLikes}
    }

    render() {
        return (
            <div className="like-button-component">
                <button type="button" 
                    className="btn btn-outline=primary btn-lg" 
                    onClick="fun()" 
                    //onClick={this.increaseLikes}
                    //声名式函数
                    onClick={ () => {this.increaseLikes()}}
                >
                    👍{this.state.likes}
                </button>
            </div>
        )
    }

    increaseLikes() {
        // alert(777)
        // console.log(this)
        this.setState({
            likes: ++this.state.likes
        })
    }
}

// 类导出
export default LikesButton