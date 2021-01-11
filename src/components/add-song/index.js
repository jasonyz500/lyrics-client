import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Column, Divider, Flex, Heading, IconButton, Text, TextArea, TextField } from 'gestalt';
import _ from 'lodash';
import { addSong, editSong, fetchSongDetails } from '../../actions/actions_song_details';

function newDetails() {
  return {lines: [], metadata: {song_name_kana: '', song_name_rom: '', song_name_en: '', link: '', notes: '', artist_id: 0}};
}

class AddSong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secret: ''
    }
  }

  componentDidMount() {
    const songId = this.props.match.params.id;
    if (songId) {
      this.props.fetchSongDetails(songId);
    }
  }

  editMetadata(value, fieldName) {
    this.props.song_details.metadata[fieldName] = value;
    this.setState(this.props.song_details);
  }

  addLine() {
    this.props.song_details.lines.push({})
    this.setState(this.props.song_details);
  }

  removeLine() {
    this.props.song_details.lines.length = Math.max(0, this.props.song_details.lines.length - 1);
    this.setState(this.props.song_details);
  }

  editLine(value, idx, fieldname) {
    this.props.song_details.lines[idx][fieldname] = value;
    this.setState(this.props.song_details);
  }

  handleSave() {
    const id = this.props.match.params.id;
    const secret = this.state.secret;
    const data = this.props.song_details;
    data.secret = secret;
    if (id) {
      this.props.editSong(id, data, secret);
    } else {
      this.props.addSong(data, secret);
    }
  }

  render() {
    const state = _.isEmpty(this.props.song_details) ? newDetails() : this.props.song_details;
    return (
      <div>
        <Heading>Add/Edit Song</Heading>
        <Divider/>
        <Heading size="md">Metadata</Heading>
        <Divider/>
        <TextField
          id="artist_id"
          placeholder="Artist ID"
          label="Artist ID"
          value={state.metadata.artist_id.toString()}
          onChange={({ value }) => this.editMetadata(value, 'artist_id')}
        />
        <TextField
          id="song_name_kana"
          placeholder="日本語曲名"
          label="日本語曲名"
          value={state.metadata.song_name_kana}
          onChange={({ value }) => this.editMetadata(value, 'song_name_kana')}
        />
        <TextField
          id="song_name_rom"
          placeholder="Romaji song name"
          label="Romaji song name"
          value={state.metadata.song_name_rom}
          onChange={({ value }) => this.editMetadata(value, 'song_name_rom')}
        />
        <TextField
          id="song_name_en"
          placeholder="English song name"
          label="English song name"
          value={state.metadata.song_name_en}
          onChange={({ value }) => this.editMetadata(value, 'song_name_en')}
        />
        <TextField
          id="link"
          placeholder="https://www.youtube.com/watch?..."
          label="Link"
          value={state.metadata.link}
          onChange={({ value }) => this.editMetadata(value, 'link')}
        />

        <Heading size="md">Lines</Heading>
        <Divider/>
        {_.map(state.lines, (line, i) => (
          <Flex key={i}>
            <Column span={1}>
              <Text>Line {i+1}</Text>
            </Column>
            <Column span={11}>
              <TextArea
                id={`kana${i}`}
                placeholder="日本語"
                label="日本語"
                value={state.lines[i].kana}
                onChange={({ value }) => this.editLine(value, i, 'kana')}
              />
              <TextArea
                id={`rom${i}`}
                placeholder="Romaji"
                label="Romaji"
                value={state.lines[i].rom}
                onChange={({ value }) => this.editLine(value, i, 'rom')}
              />
              <TextArea
                id={`en${i}`}
                placeholder="English"
                label="English"
                value={state.lines[i].en}
                onChange={({ value }) => this.editLine(value, i, 'en')}
              />
            </Column>
          </Flex>
        ))}

        <Flex>
          <IconButton
            accessibilityLabel="Add line"
            icon="add-circle"
            iconColor="red"
            size="xl"
            onClick={this.addLine.bind(this)}
          />
          <IconButton
            accessibilityLabel="Delete line"
            icon="remove"
            iconColor="red"
            size="xl"
            onClick={this.removeLine.bind(this)}
          />
        </Flex>

        <Divider/>
        <TextArea
          id="link"
          placeholder="Notes"
          label="Notes"
          value={state.metadata.notes}
          onChange={({ value }) => this.editMetadata(value, 'notes')}
        />
        <Divider/>
        <TextField
          id="secret"
          placeholder="Top Secret!"
          label="Top Secret!"
          value={this.state.secret}
          onChange={({ value }) => this.setState({ secret: value })}
        />
        <Button
          type="submit"
          text="Save"
          color="red"
          onClick={this.handleSave.bind(this)}
        />
      </div>
    );
  }
}

function mapStateToProps({ song_details }) {
  if (_.isEmpty(song_details)) {
    song_details = newDetails();
  }
  return { song_details };
}

export default connect(mapStateToProps, { addSong, editSong, fetchSongDetails })(AddSong);