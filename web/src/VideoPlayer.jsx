import PropTypes from "prop-types";

const VideoPlayer = ({ url }) => {
  return (
    <div>
      <video id="videoPlayer" width="650" controls muted autoPlay>
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

VideoPlayer.propTypes = {
  url: PropTypes.string.isRequired,
};

export default VideoPlayer;
