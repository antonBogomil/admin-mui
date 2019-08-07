import React, {useCallback} from 'react';
import {withStyles} from "@material-ui/styles";
import uploaderStyle from "./uploader.style";
import {useDropzone} from 'react-dropzone'
import {Paper, RootRef} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import {Delete, PhotoCamera} from "@material-ui/icons";
import withTheme from "../../../utils/withTheme";
import theme from "../../styles/theme";
import ImageLoader from "../ImageLoader";
import ImageBroken from "@material-ui/icons/BrokenImage"
import classNames from 'classnames'

const Uploader = ({classes}) => {
	const img = null;
	const onDrop = useCallback(acceptedFiles => {
		const reader = new FileReader();
		reader.onabort = () => console.log('file reading was aborted');
		reader.onerror = () => console.log('file reading has failed');
		reader.onload = () => {
			const binaryStr = reader.result;
		}
		acceptedFiles.forEach(file => reader.readAsBinaryString(file));
	}, []);

	function imageLoad(status) {
		console.log(status);
	}

	const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});
	const {ref, ...rootProps} = getRootProps();
	return (
		<RootRef rootRef={ref}>
			<Paper className={classes.paper}>
				<div className={classes.container}>
					<input {...getInputProps()} />
					{
						img ? <>
								<div className={classes.scene}>
									<ImageLoader
										className={classes.img}
										callback={imageLoad}
										src={img}
										falseComponent={<ImageBroken
											className={classes.notFoundImg}
										/>}
									/>
									{isDragActive && 'Here'}
								</div>
								<div className={classes.toolbar}>
									<IconButton
										color="primary"
										className={classes.button}
										aria-label="upload picture"
										component="span"
										{...rootProps}
									>
										<PhotoCamera fontSize={'large'}/>
									</IconButton>
									<IconButton
										className={classes.buttonDelete}
										aria-label="upload picture"
										component="span"
									>
										<Delete fontSize={'large'}/>
									</IconButton>
								</div>

							</> :
							<div className={classNames(classes.scene, classes.sceneEmpty)} {...rootProps}>
								<IconButton
									color="primary"
									className={classes.button}
									aria-label="upload picture"
									component="span"
								>
									<PhotoCamera fontSize={'large'}/>
								</IconButton>
							</div>
					}
				</div>
			</Paper>
		</RootRef>
	);
};

export default withTheme(withStyles(uploaderStyle)(Uploader), theme)