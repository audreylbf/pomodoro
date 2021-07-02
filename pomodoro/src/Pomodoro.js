import React, {useState, useEffect} from "react";
import parse from 'html-react-parser';

export default function Pomodoro(){
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(5);
	const [displayMessage, setDisplayMessage ] = useState(false);

	useEffect(() => {
		let interval = setInterval(() => {
			clearInterval(interval);

			if (seconds == 0) {
				alert('Temps terminé');
				if (minutes !== 0) {
					setSeconds(59);
					setMinutes(minutes -1);
				



				
				} else{
					let minutes = displayMessage ? 24 : 0;
					let seconds =  5;

					setSeconds(seconds); 
					setMinutes(minutes); 
					setDisplayMessage(!displayMessage); 

					
				}
			}else {
				setSeconds(seconds - 1); 
				
			}

		}, 1000);

	}, [seconds]);

	const timerMinutes = minutes < 10 ? `0${minutes}`: minutes;
	const timerSeconds = seconds < 10 ? `0${seconds}`: seconds;


	return  <div className="pomodoro">

		<div className="message">

		
		{displayMessage && <div>Pause, le travail reprend dans:</div>}
		</div>


		<div className="timer">{timerMinutes}:{timerSeconds}</div>


	</div>;
	
}
