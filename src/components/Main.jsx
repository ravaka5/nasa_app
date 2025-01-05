import React from 'react';
import PropTypes from 'prop-types';

function extractYouTubeID(url) {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})/);
  return match ? match[1] : null;
}

export default function Main(props) {
  const { data } = props;

  // Check if the URL is a YouTube video
  const isYouTubeVideo = data.url.includes("youtube.com") || data.url.includes("youtu.be");

  return (
    <div className="ImgContainer">
      {isYouTubeVideo ? (
        <iframe
          src={`${data.url}?autoplay=1&loop=1&controls=0&playlist=${extractYouTubeID(data.url)}`}
          title={data.title || 'YouTube video'}
          className="bgVideo"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      ) : (
        <img 
          src={data.url} 
          alt={data.title || 'background'} 
          className="bgImg" 
        />
      )}
    </div>
  );
}

Main.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
    media_type: PropTypes.string,
  }).isRequired,
};
