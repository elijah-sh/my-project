import React from 'react'
import DigitalClock from './components/DigitalClock';
import ThemeContext from './theme-context';
import ThemeBar from './components/ThemedBar';

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

class ContextColor extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          theme: 'light'
        }
        this.changeTheme = this.changeTheme.bind(this)
    }

    changeTheme(theme) {
        this.setState(
            {
                theme
            }
        )
    }

    render() {
        
        return (
            <div>

            {/* 主题切换 */}
            <ThemeContext.Provider value={themes[this.state.theme]}>

                {/* 时间显示 */}
                <DigitalClock />

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

export default ContextColor