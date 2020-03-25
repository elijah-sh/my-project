import React from 'react'
import LikesButton from './components/LikesButton';
import DigitalClock from './components/DigitalClock';
import CommentBox from './components/CommentBox';
import CommentList from './components/CommentList';
import ThemeContext from './theme-context';
import ThemeBar from './components/ThemedBar';
import {Provider} from "./context/themeContext";

const themes = {
    light: {
        classNames : 'btn btn-primary',
        bgColor: '#eeeeee',
        color: '#000'
    },
    dark: {
        classNames : 'btn btn-light',
        bgColor: '#222222',
        color: '#fff'
    }
}

class Welcome extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          comments: ["my frist reply"],
          theme: 'light'
        }
        this.addComment = this.addComment.bind(this)
        this.changeTheme = this.changeTheme.bind(this)

    }

    addComment(comment) {
        this.setState(
            {
                // 将新的commen添加到comments数组中
                comments: [...this.state.comments, comment]
            }
        )
    }
    changeTheme(theme) {
        this.setState(
            {
                theme,
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

              {/* 主题切换 */}
            <ThemeContext.Provider value={themes.light}>
 
                <div className="App">
                    <a href="#theme-switcher" className="btn btn-light" onClick={() => {this.changeTheme('light')}} > 浅色主题 </a>
                    <a href="#theme-switcher" className="btn btn-seconday" onClick={() => {this.changeTheme('dark')}} > 深色主题 </a>
                </div>
                <ThemeBar />
            </ThemeContext.Provider>
           
            </div>
           
        )
    }
}

export default Welcome