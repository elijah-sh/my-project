import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard';
import LikesButton from './components/LikesButton';
import DigitalClock from './components/DigitalClock';
import CommentBox from './components/CommentBox';

const tags = ["读书🌆", "吉他🎸", "音乐🎵"]
function App() {
  return (
    <div className="App">
      <header className="App-header" hidden> 
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>

      {/* 自定义名片 */}
      <NameCard name="Elijah" number={17890567} isHuman tags={tags} />

      {/* 点赞👍 */}
      <LikesButton />
      
      {/* 时间显示 */}
      <DigitalClock />

      {/* 留言板 */}≈
      <CommentBox />
      
    </div>
  );
}

// class App extends Component {
//   render() {
//     return (
//       <div className = "App">
//         <header className= "App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-titile">Welcome to React</h1>
//         </header>

//       </div>
//     )
//   }
// }

export default App;
