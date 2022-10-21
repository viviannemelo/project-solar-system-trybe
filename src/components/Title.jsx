import React from 'react';

class Title extends React.Component {
  render() {
    Title.propTypes = { headline: PropTypes.string.isRequired };
    const { headline } = this.props;
    return <h2>{headline}</h2>;
  }
}

export default Title;
