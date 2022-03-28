import React from "react"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
	<div className="video">
		<video
			src={videoSrcURL}
			title={videoTitle}
			autoPlay
			muted
			loop
		>
		</video>
	</div>
)

export default Video