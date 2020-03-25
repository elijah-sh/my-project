// 留言框 form 表单
import React from 'react'

class CommentBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
       // this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(event) {
        //alert(this.textInput.value)
        //   alert(this.state.value)  onChange
        // 外部传入数据
        this.props.onAddcomment(this.textInput.value)
        // 重新提交之后页面跳转
        event.preventDefault()
        //留言成功之后，清除留言框数据
        
    }

    render() {
        return (
            <form className="p-5"  onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>留言内容</label>
                    <input type="text" className="form-control"
                     placeholder="请输入内容" 
                    //  onChange={this.handleChange} value={this.state.value}
                    ref={(textValue) => this.textInput = textValue}
                      />
                </div>
                <button type="submit" className="btn btn-primary">
                    留言
                </button>
                <p>已有{this.props.commentsLength}条评论</p>

            </form>

        )
    }
}

export default CommentBox