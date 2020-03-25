import React from 'react'
import LikesButton from './components/LikesButton';
import DigitalClock from './components/DigitalClock';
import CommentBox from './components/CommentBox';
import CommentList from './components/CommentList';


class Welcome extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          comments: ["my frist reply"]
        }
        this.addComment = this.addComment.bind(this)
    }

    addComment(comment) {
        this.setState(
            {
                // 将新的commen添加到comments数组中
                comments: [...this.state.comments, comment]
            }
        )
    }

    render() {
        const isLogin = true
        const test = <h1> Hello React </h1>
        console.log(test)
        const {comments} = this.state
        return (
            <div>
                 {/* <h1> Hello React . </h1>
            {1+2}
            {isLogin ? <p>您已经登陆</p> : <p>请登陆</p>} */}

             {/* 时间显示 */}
            <DigitalClock />

            {/* 评论列表 */}
            <CommentList comments={comments}/>

            {/* 留言板 */}
            <CommentBox
             commentsLength={comments.length}
             onAddcomment={this.addComment}
             />
            </div>
           
        )
    }
}

export default Welcome