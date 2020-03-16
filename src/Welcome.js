import React from 'react'

class Welcome extends React.Component {
    render() {
        const isLogin = true
        const test = <h1> Hello React </h1>
        console.log(test)
        return (
            <div>
                 <h1> Hello React . </h1>
            {1+2}
            {isLogin ? <p>您已经登陆</p> : <p>请登陆</p>}
            </div>
           
        )
    }
}

export default Welcome