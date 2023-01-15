import { useParams } from 'react-router-dom';
import SongDetailsImpl from './song_details_impl';

const SongDetails = (props) => {
	const params = useParams();
	return <SongDetailsImpl {...{...props, match: {params}}} />
}

export default SongDetails;