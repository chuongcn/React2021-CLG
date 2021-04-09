import React from "react";

class Xe extends React.Component {
  constructor(props) {
    console.log("Xe constructor: ", props);
    super(props);
    this.state = {
      color: props.color,
      value: props.value,
    };
  }
  // static getDerivedStateFromProps(props, state) {
  //   console.log('getDerivedStateFromProps');
  //   return { color: props.color };    
  // }

  render() {
    // console.log("Xe class: ", this.props.color);
    // this.state = { color: this.props.color, value: this.props.value };
    console.log('render');
    return (
      <h3 style={{ color: this.state.color }}>Hi, {this.state.value} !</h3>
    );
  }

  componentDidMount() {
    console.log('componentDidMount');
    setTimeout(() => {
      this.setState({color: "yellow"});
      console.log('componentDidMount đã thay đổi thành màu vàng');
    }, 3000)
  }
}

export default Xe;
