import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Heading, Link, Text } from 'gestalt';
import _ from 'lodash';
import { fetchSongs } from '../../actions/actions_songs';

class Home extends Component {
  componentDidMount() {
    this.props.fetchSongs();
  }

  render() {
    const { songs } = this.props;
    return (
      <div>
        <Heading>All Translations</Heading>
        {
          _.map(songs, song => {
            const urlString = _.replace(`${song.song_name_en}-${song.artist_name_rom}`, / /g, '-');
            return (
              <Text color="blue" key={song.song_name_en}>
                <Link href={`/lyrics/${song.song_id}/${urlString}`}>
                  {`${song.song_name_en} by ${song.artist_name_rom}`}
                </Link>
              </Text>
            );
          })
        }
      </div>
    );
  }
}

function mapStateToProps({ songs }) {
  return { songs };
}

export default connect(mapStateToProps, { fetchSongs })(Home);