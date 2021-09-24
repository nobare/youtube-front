import Card from '../Card/Card';
import css from './VideoList.module.css';

const VideoList = (props) => {
  return (
    <ul className={css.list}>
      { props.videos.map((video) => (
        <Card
          id={video.id.videoId}
          title={video.snippet.title}
        />
      ))}
    </ul>
  );
}

export default VideoList;