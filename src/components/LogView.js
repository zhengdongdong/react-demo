import React from 'react'
import DeleteView from './DeleteView'
import formatTime from '../utils/Utils'

class LogView extends React.Component {

    recordLog = () => {
        let lis = [];
        this.props.logs.forEach((time, index) => {
            lis.push(<li key={index}>
                {formatTime(time)}
                <DeleteView index={index} onClick={this.props.func}/>
            </li>);
        });
        return lis;
        // return this.props.logs.map(time => {
        //     return <li>{formatTime(time)}</li>;
        // });
    }

    clearLog = () => {
        return <div className="Empty">暂无记录...</div>;
    }

    render() {
        return (<ul className="Logs">
            {this.props.logs.length > 0 ? this.recordLog() : this.clearLog()}
        </ul>);
    }
}

export default LogView;