import React from 'react'
import Button from './Button'
import LogView from './LogView'
import formatTime from '../utils/Utils'

class TimerView extends React.Component {
    // 初始化数据, 否则会null异常
    constructor(props) {
        super(props);
        this.state = {
            start: false,
            time: 0,
            logs: [],
        }
    }

    // 开始/暂停
    handleToggle = () => {
        if (this.state.start) {
            // 暂停操作
            clearInterval(this.timer);
        } else {
            // 开始操作
            this.timer = setInterval(() => {
                this.setState({time: this.state.time + 1});
                //console.log(this.state.time);
            }, 10);
        }
        this.setState({start: !this.state.start})
    }

    // 重置
    handleReset = () => {
        if (this.state.start) {
            this.setState({start: false});
            clearInterval(this.timer);
        }
        this.setState({time: 0});
    }

    // 记录
    handleRecord = () => {
        if (this.state.start) {
            this.state.logs.push(this.state.time);
            //this.setState({logs: this.state.logs.push(this.state.time)});
        }
    }

    // 清除
    handleClear = () => {
        this.setState({logs: []});
    }

    handleDeleteLog = (e) => {
        const logs = this.state.logs.filter((time, index) => (
            index !== +e.target.getAttribute('data-index')
        ))

        this.setState({
            logs: logs
        })
    }

    render() {
        return (<div>
            <p>{formatTime(this.state.time)}</p>
            <div className="Controller">
                <Button text={this.state.start ? "暂停" : "开始"}
                        className={this.state.start ? "BtnPause" : "BtnStart"}
                        onClick={this.handleToggle}/>
                <Button text="重置"
                        className="BtnReset"
                        onClick={this.handleReset}/>
                <Button text="记录"
                        className="BtnLog"
                        onClick={this.handleRecord}/>
                <Button text="清除"
                        className="BtnClear"
                        onClick={this.handleClear}/>
            </div>
            <LogView logs={this.state.logs} func={this.handleDeleteLog}/>
        </div>);
    }
}

export default TimerView;