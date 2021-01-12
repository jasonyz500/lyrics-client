import React, { Component } from 'react';
import { Box, Heading, Link } from 'gestalt';

class Nav extends Component {

  render() {
    return (
      <Box display="flex">
        <Box flex="grow">
          <Heading size="sm" color="blue"><Link href="/">Songs Homepage</Link></Heading>
        </Box>
        <Box>
          <Heading size="sm" color="blue"><Link href="/about">About</Link></Heading>
        </Box>
      </Box>
    );
  }
}

export default Nav;