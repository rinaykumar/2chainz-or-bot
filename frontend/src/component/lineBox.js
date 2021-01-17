import React from 'react';
import '../css/line.css';

class LineBox extends React.Component {
  render() {
    return (
      <div className="lineBox">
        <div className="text-holder">
          <p className="lineText">{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default LineBox;
