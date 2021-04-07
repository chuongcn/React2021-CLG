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
  render() {
    // console.log("Xe class: ", this.props.color);
    // this.state = { color: this.props.color, value: this.props.value };

    return (
      <h3 style={{ color: this.state.color }}>Hi, {this.state.value} !</h3>
    );
  }
}

export default Xe;
