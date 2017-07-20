import React from 'react'

class Button extends React.Component {
    // 静态属性, 给props设置初始值
    static defaultProps = {
        onClick: null,
        className: "",
        text: "按钮"
    }

    render() {
        return (
            <button className={`Button ${this.props.className}`}
                    onClick={this.props.onClick}>{this.props.text}</button>);
    }
}

export default Button;