const size = 400;
const uploaderStyle = theme => (
	{
		paper: {
			height: size,
			width: size,
			margin: 'auto',
		},
		container: {
			backgroundColor: theme.palette.secondary.light,
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between'
		},
		toolbar: {
			width: '100%',
			display: 'flex',
			justifyContent: 'space-between',
			padding: theme.spacing(2),
			boxSizing: 'border-box'
		},
		scene: {
			height: 320,
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			padding: theme.spacing(2),
			boxSizing: 'border-box',
			overflow: 'hidden'
		},
		sceneEmpty: {
			height: size
		},
		buttonDelete: {
			color: theme.palette.error.main
		},
		img: {
			width: '100%'
		},
		notFoundImg:{
			color: theme.palette.secondary.main,
			fontSize: 100
		}
	}
);
export default uploaderStyle