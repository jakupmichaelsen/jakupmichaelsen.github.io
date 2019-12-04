var subtitles = {
    T_181438_opg2: {
		lang: "en",
		name: "English",
        tracks: [
			//from		To			Text
			T(TTime("00:00:00:01"), TTime("00:00:15:00"), "Word of the Year")
        ]
    },
	
    T_182177_assignment_5b: {
		lang: "en",
		name: "English",
        tracks: [
			//from		To			Text
			T(TTime("00:00:00:01"), TTime("00:00:03:00"), "Kun tekst, der er relevant for besvarelsen, er tekstet til talesyntese."),
			T(TTime("00:00:05:00"), TTime("00:00:08:00"), "TED <br />Ideas worth spreading"),
			T(TTime("00:00:08:15"), TTime("00:00:11:15"), "Explore thousands of TED TALKS<br />New ideas every weekday TED.com"),
			T(TTime("00:00:13:00"), TTime("00:00:17:00"), "TED <br />Nita Farahany"),
			T(TTime("00:00:18:00"), TTime("00:00:21:20"), "NOVEMBER 2018 <br />New York New York"),
			T(TTime("00:00:22:00"), TTime("00:00:26:00"), "Recorded at TED Salon"),
			T(TTime("00:04:07:00"), TTime("00:04:17:10"), "Betty Kaplan, Ali Gadema, Jennifer Claire, With Anton Saunders. A brain controlled film. An albinomosquito film. The moment. Written and directed by Richard Ramchurn."),
			T(TTime("00:06:33:00"), TTime("00:06:36:00"), "Percentage of Respondents Finding Information \“Very Sensitive\”"),
			T(TTime("00:06:36:00"), TTime("00:06:39:00"), "Social Security Number 89.2. Content of Phone Conversation 65.7 <br />Content of Mental Thoughts 62.6"),
			T(TTime("00:06:39:00"), TTime("00:06:41:00"), "Visual Images in Mind 58.3. Brainwave Activity 47.3. <br />Your relationship history 46.3. Inward Emotional Feelings 44.6"),
			T(TTime("00:06:41:00"), TTime("00:06:43:00"), "0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100"),
			T(TTime("00:09:36:00"), TTime("00:09:40:00"), "For more talks visit TED.com"),
		]
    }
};

/**
 * Takes up to 4 values 
 * 4 values: [0]hours[1]minutes[2]seconds[3]frames
 * 3 values: [0]minutes[1]seconds[2]frames
 * 2 values: [0]seconds[1]frames
 * 1 value : [0]frames
 */
function ATime() {
	var frames = 0;
	var seconds = 0;
	var minutes = 0;
	var hours = 0;
	if(arguments.length == 1) {
		frames = (arguments[0]*1)/24;
	}
	else if(arguments.length == 2) {
		frames = (arguments[1]*1)/24;
		seconds = arguments[0]*1;
	}
	else if(arguments.length == 3) {
		frames = (arguments[2]*1)/24;
		seconds = arguments[1]*1;
		minutes = (arguments[0]*1)*60;
	}
	else if(arguments.length == 4) {
		frames = (arguments[3]*1)/24;
		seconds = arguments[2]*1;
		minutes = (arguments[1]*1)*60;
		hours = (arguments[0]*1)*3600;
	}
	else {
		return 0;
	}
	return hours + minutes + seconds + frames;
}

/**
 * If value is undefined returns 0
 * @param {*} value 
 */
function UndefinedToZero(value) {
	if(typeof value === "undefined") {
		return 0;
	}
	return value;
}

/**
 * Convert input to seconds
 * @param {numeric} frames Not Required
 * @param {numeric} seconds Not Required
 * @param {numeric} minutes Not Required
 * @param {numeric} hours Not Required
 */
function _Time(frames, seconds, minutes, hours) {
	frames = UndefinedToZero(frames) / 24;
	seconds = UndefinedToZero(seconds);
	minutes = UndefinedToZero(minutes) * 60;
	hours = UndefinedToZero(hours) * 3600;
	return hours + minutes + seconds + frames;
}

/**
 * Convert string input "00:00:00:00" to seconds
 * @param {string} value Required
 */
function TTime(value) {
	if(typeof value === "undefined") {
		value = "00:00:00:00";
	}
	var split = value.split(":");
	var frames = (split[3]*1)/24;
	var seconds = split[2]*1;
	var minutes = (split[1]*1)*60;
	var hours = (split[0]*1)*3600;
	var output = hours + minutes + seconds + frames;
	return output;
}

function T(start, end, text, direction) {
	if(typeof direction === "undefined") {
		direction = "ltr";
	}
	return {
		start: start,
		end: end,
		text: text,
		direction: direction
	};
}