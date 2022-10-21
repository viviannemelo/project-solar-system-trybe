import React from 'react';
import { checkPropTypes } from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return <h2>{headline}</h2>;
  }
}

Title.propTypes = { headline: checkPropTypes.string };

export default Title;
