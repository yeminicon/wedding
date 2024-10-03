import React from 'react'
import ReactPlayer from 'react-player'

const YoutubeEmbed = () => (
  <div className="relative overflow-hidden pb-[100.25%] md:pb-[56.25%] h-0">
    <ReactPlayer url='https://youtu.be/XtCbDKjh1GU?si=ShcxfyY1YQTo36k8' />
    {/* <iframe
      className="absolute top-0 left-0 w-full h-full"
      src={`https://youtu.be/XtCbDKjh1GU?si=ShcxfyY1YQTo36k8`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded YouTube Video"
    /> */}
  </div>
);

export default YoutubeEmbed;
