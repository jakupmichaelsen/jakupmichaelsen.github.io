var subtitles = {
    T_191191_video_assignment3: {
		lang: "en",
		name: "English",
        tracks: [
			//from		To			Text
			T(TTime("00:00:00:01"), TTime("00:00:05:00"), "Kun tekst, der er relevant for opgavebesvarelsen, er tekstet til talesyntese"),
			T(TTime("00:00:09:15"), TTime("00:00:10:45"), "Fire fighter for Biden"),
			T(TTime("00:00:25:00"), TTime("00:00:27:00"), "Saved the American economy"),
			T(TTime("00:00:27:00"), TTime("00:00:29:00"), "Passed the affordable care act"),
			T(TTime("00:00:29:00"), TTime("00:00:31:00"), "Protecting over 100 million Americans"),
			T(TTime("00:00:31:00"), TTime("00:00:33:00"), "With pre-existing conditions"),
			T(TTime("00:00:37:15"), TTime("00:00:39:30"), "Build on Obamacare"),
			T(TTime("00:00:39:30"), TTime("00:00:41:45"), "Record investment in schools"),
			T(TTime("00:00:41:45"), TTime("00:00:43:45"), "Lead the world on climate"),
			T(TTime("00:00:43:45"), TTime("00:00:45:45"), "Rebuild our alliances"),
			T(TTime("00:00:45:45"), TTime("00:00:49:00"), "Restore the soul of the nation"),
			T(TTime("00:00:55:45"), TTime("00:01:00:00"), "Biden. Joe Biden.com<br />Approved by Joe Biden. Paid for by Biden for President")
        ]
    },
	
	T_191191_video_assignment_4b: {
		lang: "en",
		name: "English",
        tracks: [
			//from		To			Text
			T(TTime("00:00:00:01"), TTime("00:00:03:15"), "1. What ethnicity are you?"),
			T(TTime("00:00:04:15"), TTime("00:00:08:00"), "2. Which generation are you?"),
			T(TTime("00:00:27:00"), TTime("00:00:32:00"), "3. What is the first experience where you felt that demarcation of being a minority different?"),
			T(TTime("00:01:15:15"), TTime("00:01:20:00"), "4. Were you always proud of your heritage or was there a time you rejected it?"),
			T(TTime("00:01:49:10"), TTime("00:01:50:30"), "You see this book?"),
			T(TTime("00:01:50:30"), TTime("00:01:52:00"), "I can read all of it!")
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