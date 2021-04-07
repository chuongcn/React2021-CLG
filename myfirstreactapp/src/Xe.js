import React from "react";

class Xe extends React.Component {
  render() {
    // console.log("Xe class: ", this.props.color);

    return <h2 style={{ color: this.props.color }}>Hi, {this.props.value} !</h2>;
  }
}

export default Xe;
