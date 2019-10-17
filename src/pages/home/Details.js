import {Component} from "react";
import PropTypes from "prop-types";

class Details extends Component {
  static propTypes = {
    title: PropTypes.object,
  };
  
  constructor(props) {
    super(props)
  }
  
  
  render() {
    const x = 1;
    return (
      {/*<div>
        <p> hello details </p>
      </div>*/}
    );
  }
  
}

export default Details;