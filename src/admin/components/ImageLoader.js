import React, {useState} from 'react';
import {CircularProgress} from "@material-ui/core";
import Image from "@material-ui/icons/Image"
const ImageLoader = ({src, callback, falseComponent, ...rest}) => {
	const [loaded, setLoaded] = useState(null);

	function handleLoaded() {
		setLoaded(true);
		callback(true);
	}

	function handleError() {
		setLoaded(false);
		callback(false);
	}

	return (
		<div>
			{loaded === null && <CircularProgress/>}
			{loaded === false ? (falseComponent || <Image fontSize='large'/>) : <img alt={src}
													  src={src}
													  style={{opacity: loaded ? 1 : 0}}
													  onError={handleError}
													  onLoad={handleLoaded}
													  {...rest}
			/>}
		</div>
	);
};

export default ImageLoader;