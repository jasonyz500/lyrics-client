import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box, Column, Text } from 'gestalt';
import _ from 'lodash';
import { fetchSongDetails } from '../../actions/actions_song_details';

class SongDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnNames: ['kana', 'rom', 'en']
    };
  }

  componentDidMount() {
    const songId = this.props.match.params.id;
    this.props.fetchSongDetails(songId);
  }

  drawRows(lines, columnNames) {
    return (
      <Box>
        {_.map(lines, line => (
          <Box 
            display="flex"
            direction="row"
            paddingY={2}
            key={line}
          >
            {_.map(columnNames, col => (
              <Column 
                span={12/columnNames.length}
                key={col}
              >
                {
                  _.map(_.split(line[col], '\n'), row => (
                    <Text key={row}>{row}</Text>
                  ))
                }
              </Column>
            ))}
          </Box>
        ))}
      </Box>
    );
  }

  render() {
    const { columnNames } = this.state;
    const { song_details } = this.props;
    const lines = song_details.lines || null;
    return (
      <Box>
        {this.drawRows(lines, columnNames)}
      </Box>
    );
  }
}

function mapStateToProps({ song_details }) {
  return { song_details };
}

export default connect(mapStateToProps, { fetchSongDetails })(SongDetails);