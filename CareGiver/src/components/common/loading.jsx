import React from "react";

const Loading = ({ loading, loadingOverlayDiv }) => {
	return loading && <div className={`loading ${loadingOverlayDiv ? 'loadingOverlayDiv' : ''}`}><div></div><div></div></div>
};

export default Loading;