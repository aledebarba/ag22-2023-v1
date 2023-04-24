import ReactPlayer from "react-player/lazy";
import { TextControl } from "@wordpress/components";

const VideoURL = ({ attributes, attribute, onChange }) => (
  <div>
    <TextControl
      className="w-full"
      value={attributes[attribute]}
      onChange={(value) => onChange(attribute, value)}
    />
    <ReactPlayer
      url={attributes[attribute]}
      width="100%"
      controls={true}
      playing={false}
      loop={false}
      muted={false}
    />
  </div>
);

export default VideoURL;
