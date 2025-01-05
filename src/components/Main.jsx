import PropTypes from 'prop-types';
import img from "../assets/1047595.jpg"

export default function Main(props) {
  const { data } = props;

  // Determine if the URL points to a video
  const isVideo = data.media_type == "video" ?  true : false;

  return (
    <div className="ImgContainer">
      {isVideo ? (
        <img src={img} alt="beauty" className='bgImg'/>
      ) : (
        <img src={data.url} alt={data.title || 'background'} className="bgImg" />
      )}
    </div>
  );
}

Main.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
    media_type:PropTypes.string,
  }).isRequired,
};
