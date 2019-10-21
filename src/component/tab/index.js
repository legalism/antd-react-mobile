import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './style.scss'

export default class Tabs extends PureComponent {
  static propTypes = {
    tabIndex: PropTypes.number,
    options: PropTypes.array,
    onChange: PropTypes.func,
  };
  
  static defaultProps = {
    tabIndex: -1,
    options: [],
    onChange: () => {
    },
  };
  
  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
  
  }
  
  // componentWillReceiveProps(nextProps) {
  //   console.log("nextProps=" + nextProps);
  // }
  
  
  render() {
    return (
      <div className="tabs">
        <ul>
          {
            this.props.options.map((value, index, array) => {
              return (
                <li key={this.props.tabIndex}
                    className={`tabs ${
                      index === this.props.tabIndex
                        ? "selected"
                        : ""
                      }`}
                    onClick={() => this.props.onChange(index)}>
                  {value.text}
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}