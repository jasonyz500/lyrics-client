import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box, Column, Text } from 'gestalt';
import _ from 'lodash';

class SongDetails extends Component {

  drawRows(lines, columnNames) {
    return (
      <Box>
        {_.map(lines, line => {
          return (
            <Box display="flex" direction="row" paddingY={2} key={line}>
              {_.map(columnNames, col => {
                return (
                  <Column span={12/columnNames.length} key={col}><Text>{line[col]}</Text></Column>
                );
              })}
            </Box>
          );
        })}
      </Box>
    );
  }

  render() {
    const { data, columnNames } = this.props;
    const lines = data.lines;
    return (
      <Box>
        {this.drawRows(lines, columnNames)}
      </Box>
    );
  }
}

function mapStateToProps({ data }) {
  return { data };
}

export default connect(mapStateToProps)(SongDetails);