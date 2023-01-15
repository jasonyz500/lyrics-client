import { useParams } from 'react-router-dom';
import AddSongImpl from './add_song_impl';

const AddSong = (props) => {
	const params = useParams();
	return <AddSongImpl {...{...props, match: {params}}} />
}

export default AddSong;