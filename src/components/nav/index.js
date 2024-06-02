import React, { Component } from 'react';
import { Box, Divider, Heading, Link } from 'gestalt';

class Nav extends Component {

  render() {
    return (
      <div>
      <Box display="flex">
        <Box flex="grow">
          <Link href="/"><Heading color="shopping">Home</Heading></Link>
        </Box>
        <Box>
          <Heading color="shopping"><Link href="/about">About</Link></Heading>
        </Box>
      </Box>
      <Divider />
      </div>
    );
  }
}

export default Nav;