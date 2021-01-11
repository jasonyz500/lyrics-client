import React, { Component } from 'react';
import { Heading, Link } from 'gestalt';

class Nav extends Component {

  render() {
    return (
      <Heading size="sm" color="blue"><Link href="/">Songs Homepage</Link></Heading>
    );
  }
}

export default Nav;