import Card from '../Card/Card';
import css from './VideoList.module.css';

const VideoList = (props) => {
  return (
    <ul className={css.list}>
      { props.videos.map((video) => (
        <Card
          image={video.id}
          title={video.title}
          description={video.description}
        />
      ))}
    </ul>
  );
}

export default VideoList;