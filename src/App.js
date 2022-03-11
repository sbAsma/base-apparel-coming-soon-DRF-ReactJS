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
		height: "55px",
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
		height: "100%",
		borderRadius: "27px",
		background: "linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))",
	},
	button: {
		position: "absolute",
		borderRadius: "27px",
		height: "100%",
		background: "linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))",
		boxShadow: "-2px 15px 36px -11px rgba(0,0,0,0.30)",
		'&:hover': {
			background: "hsl(0, 80%, 86%)",
			boxShadow: "-2px 15px 36px -11px rgba(0,0,0,0.50)",
		},
	},
	iconErrorContainer:{
		position: "absolute",
		height: "100%",
		display: "flex",
		justifyContent: "center",
	},
	iconError: {
		margin: "auto",
		height: "30px",
		width: "30px",
	},
	notchedOutline:{
		borderWidth: '2px',
    	borderColor: 'hsl(0, 93%, 68%) !important',
		backgroundColor: "transparent",
	},
	[theme.breakpoints.down('xs')]: {
		root: {
			flexDirection: "column",
			position: "relative",
			height: "650px",
		},
		header: {
			backgroundColor: "white",
			display: "flex",
			justifyContent: "center",
			height: "85px",
		},
		logo: {
			margin: 'auto auto auto 35px',
			height: "25px",
			width: "auto",
		},
		content: {
			position: "absolute",
			top: "335px",
			height: "200px",
			marginTop: "30px",
		},
		heroBackground: {
			position: "absolute",
			top: "85px",
			height: "250px",
			background: "url(/images/hero-mobile.jpg)",
			backgroundSize: "cover",
			backgroundRepeat: "no-repeat",
		},
		title: {
			textAlign: "center",
			fontSize: "10vw",
			height: 'auto',
			marginTop: '30px',
		},
		descriptionBody: {
			margin: "20px 25px 20px 25px",
			fontSize: "4vw",
			width:"auto",
			textAlign: "center",
		},
		emailContainer:{
			width: "80%",
			justifyContent: "center",
			margin: " 35px auto auto auto",
		},
		buttonContainer: {
			right: "-5px",
			width: "70px",
		},
		button: {
			width: "70px",
		},
		iconErrorContainer: {
			right: "75px",
		},
	},
	[theme.breakpoints.up('sm')]: {
		root: {
			flexDirection: "row",
			height: "100%",
			minHeight: "600px",
			width: "100%",
			position: "absolute",
		},
		header: {
			paddingTop: "65px", // fixed for all desktop screens
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
			<Grid item xs={12} sm={7} className={classes.header} >
				<img 
					src="images/logo.svg"
					alt="base-apparel-logo"
					className={classes.logo}
				/>
			</Grid>
			<Grid item xs={12} sm={7} className={classes.content} >
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
			<Grid item xs={12} sm={5} className={classes.heroBackground} />
		</div>
		</ThemeProvider>
    );
}

export default App;