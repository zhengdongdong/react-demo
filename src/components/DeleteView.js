import React from 'react'

class DeleteView extends React.Component {


    render() {
        return (<span className="DeleteView" data-index={this.props.index} onClick={this.props.onClick}>
            删除
        </span>);
    }
}

export default DeleteView;