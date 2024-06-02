import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box, ButtonGroup, Checkbox, Column, Divider, Heading, Icon, IconButton, Link, Text } from 'gestalt';
import _ from 'lodash';
import { Helmet } from 'react-helmet';
import { fetchSongDetails } from '../../actions/actions_song_details';

class SongDetailsImpl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnNames: {
        en: true,
        rom: true,
        kana: true
      },
      isVertical: true
    };
  }

  componentDidMount() {
    const songId = this.props.match.params.id;
    this.props.fetchSongDetails(songId);
  }

  setLayout(isVertical) {
    this.setState(prevState => ({ ...prevState, isVertical }));
  }

  toggleLang(lang) {
    const { columnNames } = this.state;
    columnNames[lang] = !columnNames[lang]
    this.setState(prevState => ({ ...prevState, columnNames }));
  }

  drawColumns(lines, columnNames) {
    return (
      <Box paddingX={2} paddingY={2}>
        {_.map(lines, (line, i) => (
          <Box 
            display="flex"
            direction="row"
            paddingY={2}
            paddingX={1}
            key={`line${i}`}
            color={i % 2 === 0 ? "lightWash" : "transparent"}
          >
            {_.map(columnNames, col => (
              <Column 
                span={12/columnNames.length}
                key={`${col}${i}`}
              >
                {
                  _.map(_.split(line[col], '\n'), (row, j) => (
                    <Text key={`${row}${i}${j}`} italic={col === 'rom'} overflow="normal">{row}</Text>
                  ))
                }
              </Column>
            ))}
          </Box>
        ))}
      </Box>
    );
  }

  drawRows(lines, columnNames) {
    return (
      <Box>
        {_.map(lines, (line, i) => (
          <Box key={`line${i}`} paddingX={2} paddingY={2} borderStyle="shadow">
            {_.map(columnNames, col => (
              <Box key={`${col}${i}`} paddingY={2}>
                {_.map(_.split(line[col], '\n'), (row, j) => (
                  <Text key={`${row}${i}${j}`} italic={col === 'rom'}>{row}</Text>
                ))}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    );
  }

  render() {
    const { columnNames } = this.state;
    const { song_details } = this.props;
    if (_.isEmpty(song_details)) {
      return null;
    }
    const { lines, metadata } = song_details;
    return (
      <div>
        <Helmet>
          <title>{`${metadata.song_name_en} - ${metadata.artist_name_rom} lyrics translation`}</title>
          <meta name="description" content={`${metadata.song_name_en} by ${metadata.artist_name_rom} lyric translation`}></meta>
        </Helmet>
        <Box paddingY={3}>
          <Heading>{metadata.song_name_en}</Heading>
          <Box paddingY={1}><Text size={400}>By {metadata.artist_name_rom}</Text></Box>
          {metadata.youtube_link && <Box display="flex"><Text color="shopping"><Link href={metadata.youtube_link}>Listen on Youtube</Link></Text><Icon accessibilityLabel="youtube_link" icon="service-youtube"/></Box>}
          {metadata.spotify_link && <Box display="flex"><Text color="shopping"><Link href={metadata.spotify_link}>Listen on Spotify</Link></Text><Icon accessibilityLabel="spotify_link" icon="music-on"/></Box>}
        </Box>
        <Divider/>
        <Box paddingY={3} display="flex" wrap={true}>
          <Box flex="grow">
            <Heading>Lyrics</Heading>
          </Box>
          <Box>
            <Box display="flex" alignItems="center" marginBottom={1}>
              <Box paddingX={2}>
                <Text>Layout:</Text>
              </Box>
              <ButtonGroup>
                <IconButton
                  icon="pause"
                  accessibilityLabel="vertical"
                  selected={this.state.isVertical}
                  size="sm"
                  onClick={() => this.setLayout(true)}
                />
                <IconButton
                  icon="menu"
                  accessibilityLabel="horizontal"
                  selected={!this.state.isVertical}
                  size="sm"
                  onClick={() => this.setLayout(false)}
                />
              </ButtonGroup>
            </Box>
            <Box display="flex" alignItems="center">
              <Box paddingX={2}>
                <Text>Display:</Text>
              </Box>
              <Box marginEnd={3}>
                <Checkbox
                  label="English"
                  id="en"
                  checked={this.state.columnNames.en}
                  onChange={() => this.toggleLang('en')}
                />
              </Box>
              <Box marginEnd={3}>
                <Checkbox
                  label="Romaji"
                  id="rom"
                  checked={this.state.columnNames.rom}
                  onChange={() => this.toggleLang('rom')}
                />
              </Box>
              <Box marginEnd={3}>
                <Checkbox
                  label="日本語"
                  id="kana"
                  checked={this.state.columnNames.kana}
                  onChange={() => this.toggleLang('kana')}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box paddingY={2}>
          {this.state.isVertical && this.drawColumns(lines, _.filter(Object.keys(columnNames), k => columnNames[k]))}
          {!this.state.isVertical && this.drawRows(lines, _.filter(Object.keys(columnNames), k => columnNames[k]))}
        </Box>
        {metadata.notes && <Box display="flex"><Text italic>Notes: {metadata.notes}</Text></Box>}
      </div>
    );
  }
}

function mapStateToProps({ song_details }) {
  return { song_details };
}

export default connect(mapStateToProps, { fetchSongDetails })(SongDetailsImpl);