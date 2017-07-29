import React from 'react';
import $ from 'jquery';

export default class WrappedIframe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 500,
    }
  }

  componentDidMount() {
    const height = $('.content').height();
    this.setState({
      height,
    })
  }
  render() {
    const {height} = this.state;
    return (<iframe style={{
      height,
      width: '100%'
    }} src={ this.props.url } />);
  }
}