import React, {useState} from "react";
import { 
	Grid, 
	TextField, 
	Button, 
	Typography,
	makeStyles,
	ThemeProvider,
	createTheme
} from "@material-ui/core";
import axios from 'axios'

const font = "'Josefin Sans', sans-serif";

const customTheme = createTheme({
	typography: {
		fontFamily: font,
	},
})

const useStyles = makeStyles((theme) => ({
	root:{	
		display: "flex",
	},
	header:{
		position: "absolute",
		top: "0",
		height: "70px",
		width: "100%",
	},
	content: {
		width: "100%",
	},
	heroBackground: {
		width: "100%",
	},
	title: {
		fontWeight: "600",
		textTransform: "uppercase",
		color: "hsl(0, 6%, 24%)",
		letterSpacing: "1rem",		
	},
	descriptionBody: {
		fontWeight: "400",
		color: "hsl(0, 36%, 70%)",
	},
	emailContainer: {
		display: "flex",
		flexDirection: "row",
		position: "relative",
	},
	emailInput: {
		"& .MuiOutlinedInput-root":{
			borderRadius: "27px",
			'&.Mui-focused fieldset': {
				borderColor: "hsl(0, 36%, 70%)",
			},
			'&:hover fieldset': {
				borderColor: 'hsl(0, 36%, 70%)',
			},
		},
		"& .MuiInputBase-root":{
			color: "hsl(0, 6%, 24%)",
		},
		"& input": {
			paddingLeft: "30px",
			color: "hsl(0, 6%, 24%)",
		},
		"& .MuiFormHelperText-root": {
			color: "hsl(0, 93%, 68%)",
			paddingLeft: "15px",
			paddingTop: "3px",
			fontWeight: "bold",
		}
	},
	buttonContainer:{
		position: "absolute",
		height: "56px",
		borderRadius: "28px",
		background: "linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))",
	},
	button: {
		position: "absolute",
		borderRadius: "28px",
		height: "56px",
		background: "linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))",
		boxShadow: "-2px 15px 36px -11px rgba(0,0,0,0.30)",
		'&:hover': {
			background: "hsl(0, 80%, 86%)",
			boxShadow: "-2px 15px 36px -11px rgba(0,0,0,0.50)",
		},
	},
	iconErrorContainer:{
		position: "absolute",
		height: "56px",
		display: "flex",
		justifyContent: "center",
	},
	iconError: {
		margin: "auto",
		height: "30px",
		width: "30px",
	},
	notchedOutline:{
		marginTop: '1px',
		borderWidth: '2px',
    	borderColor: 'hsl(0, 93%, 68%) !important',
		backgroundColor: "transparent",
	},
	[theme.breakpoints.up('md')]: {
		root: {
			flexDirection: "row",
			height: "100%",
			minHeight: "600px",
			width: "100%",
			position: "absolute",
		},
		header: {
			paddingTop: "65px",
			paddingLeft: "11.5%",
		},
		content: {
			background: "url(/images/bg-pattern-desktop.svg)",
			backgroundRepeat: "no-repeat",
			backgroundSize: "100% 100%",
			backgroundPosition: "left",
			backgroundAttachment: "scroll",
			minHeight: "100%",
			paddingTop: "180px",
			paddingLeft: "11.5%",
		},
		heroBackground: {
			background: "url(/images/hero-desktop.jpg)",
			backgroundSize: "cover",
			minHeight: "100%",
		},
		title: {
			fontSize: "4vw",
		},
		descriptionBody: {
			marginTop: "15px",
			width:"450px",
		},
		emailContainer:{
			marginTop: "35px",
			width: "60%",
		},
		buttonContainer: {
			right: "-55px",
			width: "100px",
		},
		button: {
			width: "100px",
		},
		iconErrorContainer: {
			right: "55px",
		},
	},
	[theme.breakpoints.between('xs', 'sm')]: {
		root: {
			flexDirection: "column",
			position: "relative",
			minHeight: "1200px",
			height: "100%",
		},
		header: {
			backgroundColor: "white",
			display: "flex",
			justifyContent: "center",
			height: "145px",
		},
		logo: {
			margin: 'auto auto auto 55px',
			height: "45px",
			width: "auto",
		},
		content: {
			position: "absolute",
			top: "595px",
			height: "auto",
			backgroundColor: "hsl(0, 100%, 98%)",
		},
		heroBackground: {
			position: "absolute",
			top: "145px",
			height: "450px",
			background: "url(/images/hero-mobile.jpg)",
			backgroundSize: "cover",
			backgroundRepeat: "no-repeat",
		},
		title: {
			textAlign: "center",
			fontSize: "11vw",
			height: "30%",
			marginTop: '105px',
		},
		descriptionBody: {
			margin: "30px 35px 0px 35px",
			fontSize: "4vw",
			width:"auto",
			textAlign: "center",
			height: "27%",
		},
		emailContainer:{
			width: "65%",
			justifyContent: "center",
			margin: " 45px auto 90px auto",
		},
		notchedOutline:{ 
			marginTop: '1px',
			height: "74px",
		},
		emailInput: { 
			"& .MuiOutlinedInput-root":{
				borderRadius: "37px",
				height: "74px",
			},
			"& input": {
				paddingLeft: "42px",
				height: "38px",
				fontSize: "3vw"
			},
			"& .MuiFormHelperText-root": {
				paddingLeft: "27px",
				paddingTop: "10px",
				fontSize: "3vw"
			},
		},
		buttonContainer: {
			right: "-5px",
			width: "95px",
			borderRadius: "37px", 
			height: "74px", 
		},
		button: {
			width: "95px",
			borderRadius: "37px", 
			height: "74px", 
		},
		iconErrorContainer: {
			right: "110px",
			height: "74px", 
		},
	},
	[theme.breakpoints.down('xs')]: {
		root: {
			minHeight: "800px",
		},
		header: {
			backgroundColor: "white",
			height: "85px",
		},
		logo: {
			margin: 'auto auto auto 35px',
			height: "25px",
		},
		content: {
			top: "335px",
		},
		heroBackground: {
			top: "85px",
			height: "250px",
		},
		title: {
			fontSize: "10vw",
			marginTop: '65px',
		},
		descriptionBody: {
			margin: "20px 25px 0px 25px",
		},
		emailContainer:{
			width: "80%",
		},
		notchedOutline:{ 
			marginTop: '0px',
			height: "61px",
		},
		emailInput: { 
			"& .MuiOutlinedInput-root":{
				borderRadius: "30px",
				height: "60px",
			},
			"& input": {
				paddingLeft: "35px",
				height: "24px",
				fontSize: "3.5vw"
			},
			"& .MuiFormHelperText-root": {
				paddingLeft: "20px",
				paddingTop: "7px",
				fontSize: "3.5vw"
			}
		},
		buttonContainer: {
			width: "70px",
			borderRadius: "30px",
			height: "60px",
		},
		button: {
			width: "70px",
			borderRadius: "30px",
			height: "60px",
		},
		iconErrorContainer: {
			right: "75px",
			height: "60px",
		},
	},
}));

if (window.location.origin === "http://localhost:3000") {
  axios.defaults.baseURL = "http://127.0.0.1:8000"; // development address
} else {
  axios.defaults.baseURL = window.location.origin; // production address
}

function App() {
	const classes = useStyles()
	const [newSubscription, setNewSubscription] = useState({
		email: '',
	})
	const [emailValidity, setEmailValidity] = useState({
		isEmailValid: false,
		isEmailSubmitted: false,
	})
	const handleChange = (e) => {
		const email = e.target.value
		setNewSubscription({
			email: email,
		})
		var pattern = new RegExp(
			/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
		);
		if (pattern.test(email)) {
			setEmailValidity({
				...emailValidity,
				isEmailValid: true,
			})
		}else{
			setEmailValidity({
				...emailValidity,
				isEmailValid: false,
			})
		}
	}
	const handleSubmit = () => {
		setEmailValidity({
			...emailValidity,
			isEmailSubmitted: true,
		})
		if(emailValidity.isEmailValid){
			axios.post('/subscriptions/',{
				'email': newSubscription.email,
			})
			.then((res) => {
				console.log("Subscription email sent")
			})
			.catch((err) => {
				console.log(err)
			})
		}else{
			console.log("Email is not valid")
		}
	}
	var helperText = ''
	if(emailValidity.isEmailSubmitted && !emailValidity.isEmailValid){
		helperText = 'Please provide a valid email'
	}else{
		helperText = ''
	}
    return (
		<ThemeProvider theme={customTheme}>
        <div
			className={classes.root}
		>
			<Grid item xs={12} sm={12} md={7} className={classes.header} >
				<img 
					src="images/logo.svg"
					alt="base-apparel-logo"
					className={classes.logo}
				/>
			</Grid>
			<Grid item xs={12} sm={12} md={7} className={classes.content} >
				<Typography
					variant="h1"
					className={classes.title}
				>
					<span style={{
						color: "hsl(0, 36%, 70%)",
						fontWeight: "300",
						}}
					>We're</span>
					<br/>
					coming 
					<br/>
					soon
				</Typography>
				<Typography
					variant="body1"
					className={classes.descriptionBody}
				>
					Hello fellow shoppers! We're currently building our new fashion store. 
					Add your email below to stay up-to-date with announcements and our launch deals.
				</Typography>
				<div className={classes.emailContainer}>
					<TextField
						variant="outlined"
						id="email" 
						placeholder="Email Address"
						value={newSubscription.email}
						onChange={handleChange}
						error={emailValidity.isEmailSubmitted && !emailValidity.isEmailValid}
						helperText = {helperText}
						fullWidth
						className={classes.emailInput}
						InputProps={{
							classes: {
								notchedOutline: (emailValidity.isEmailSubmitted &&
									!emailValidity.isEmailValid) && classes.notchedOutline,
							},
						  }}
					/>
					<div className={classes.iconErrorContainer}>
						<img 
							src="images/icon-error.svg"
							alt="error-icon"
							className={classes.iconError}
							style={{
								display: !(emailValidity.isEmailSubmitted && !emailValidity.isEmailValid) && "none"
							}}
						/>
					</div>
					<div className={classes.buttonContainer} >
						<Button
							variant="contained" 
							color="primary"
							className={classes.button}
							onClick={handleSubmit}
						>
							<img 
								src="images/icon-arrow.svg" 
								alt="arrow-icon"
							/>
						</Button>
					</div>
				</div>
			</Grid>
			<Grid item xs={12} sm={12} md={5} className={classes.heroBackground} />
		</div>
		</ThemeProvider>
    );
}

export default App;