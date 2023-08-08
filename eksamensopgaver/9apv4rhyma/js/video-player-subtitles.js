var subtitles = {
    T_194115_assignment_3: {
		lang: "en",
		name: "English",
        tracks: [
			//from		To			Text			
			T(TTime("00:00:00:01"), TTime("00:00:03:00"), "Kun tekst, der er relevant for opgavebesvarelsen, er tekstet til talesyntese.<br />CHILDHOOD TRAUMA AND THE BRAIN"),
			T(TTime("00:00:29:00"), TTime("00:00:31:00"), "COACH"),
			T(TTime("00:00:33:00"), TTime("00:00:43:00"), "LATENT VULNERABILITY"),
			T(TTime("00:00:46:00"), TTime("00:00:50:00"), "STRESS SUSCEPTIBILITY"),
			T(TTime("00:01:31:00"), TTime("00:01:33:00"), "STRESS GENERATION"),
			T(TTime("00:01:35:00"), TTime("00:01:39:00"), "WEIRDO, WEEDY, UGLY, LOSER, TROUBLEMAKER"),
			T(TTime("00:01:49:00"), TTime("00:01:53:00"), "SOCIAL THINNING")
				
		]
	},
	T_194115_assignment_4b: {
		lang: "en",
		name: "English",
        tracks: [
			//from		To			Text
			T(TTime("00:00:00:01"), TTime("00:00:05:00"), "Kun tekst, der er relevant for opgavebesvarelsen, er tekstet til talesyntese."),
			T(TTime("00:00:07:00"), TTime("00:00:10:00"), "Oh no!"),
			T(TTime("00:00:21:00"), TTime("00:00:23:00"), "What if they don’t like me?"),
			T(TTime("00:00:23:00"), TTime("00:00:26:00"), "What do I even say?"),
			T(TTime("00:00:47:00"), TTime("00:00:49:00"), "THE LIKING GAP"),
			T(TTime("00:01:01:00"), TTime("00:01:07:00"), "People consistently underestimated how much people liked them"),
			T(TTime("00:01:08:00"), TTime("00:01:12:00"), "THE LIKING GAP"),
			T(TTime("00:01:31:00"), TTime("00:01:34:00"), "What do you do?"),
			T(TTime("00:01:37:00"), TTime("00:01:39:00"), "What do you do for fun?"),
			T(TTime("00:01:39:00"), TTime("00:01:41:00"), "What’s the best thing that’s happened to you this year?"),
			T(TTime("00:01:41:00"), TTime("00:01:43:00"), "What are you looking forward to?"),
			T(TTime("00:01:43:00"), TTime("00:01:45:00"), "What excites you?"),
			T(TTime("00:01:50:00"), TTime("00:01:54:00"), "Asking follow up questions is important")
			
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