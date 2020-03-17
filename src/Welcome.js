import React from 'react'
import LikesButton from './components/LikesButton';
import DigitalClock from './components/DigitalClock';


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

            
      <LikesButton />
      
      
      <DigitalClock />
            </div>
           
        )
    }
}

export default Welcome