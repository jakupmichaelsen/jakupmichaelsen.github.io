var subtitles = {
    T_193760_assignment_3_v2: {
		lang: "en",
		name: "English",
        tracks: [
			//from		To			Text
			T(TTime("00:00:00:01"), TTime("00:00:01:30"), "#smartmanners<br />Kun tekst, der er relevant for opgavebesvarelsen, er tekstet til talesyntese."),
			T(TTime("00:00:01:30"), TTime("00:00:04:00"), "Modern Manners"),
			T(TTime("00:00:06:15"), TTime("00:00:08:15"), "Hear Ye"),
			T(TTime("00:00:17:15"), TTime("00:00:19:30"), "social media!"),
			T(TTime("00:00:32:20"), TTime("00:00:34:00"), "On Fleek"),
			T(TTime("00:01:07:45"), TTime("00:01:11:00"), "Smartgirl626 #latergram"),
			T(TTime("00:01:35:00"), TTime("00:01:36:30"), "re: relationship status"),
			T(TTime("00:01:46:15"), TTime("00:01:48:15"), "don’t accept every friend request"),
			T(TTime("00:02:10:30"), TTime("00:02:12:15"), "disconnect!"),
			T(TTime("00:02:19:15"), TTime("00:02:22:00"), "#smartmanners")
			
        ]
    },
	
	T_193760_assignment_5: {
		lang: "en",
		name: "English",
        tracks: [
			//from		To			Text
			T(TTime("00:00:00:01"), TTime("00:00:05:00"), "Kun tekst, der er relevant for opgavebesvarelsen, er tekstet til talesyntese."),
			T(TTime("00:00:06:00"), TTime("00:00:08:00"), "TED Ideas worth spreading"),
			T(TTime("00:00:12:30"), TTime("00:00:16:15"), "Tristan Harris"),
			T(TTime("00:00:18:00"), TTime("00:00:21:00"), "April 2017 - Vancouver BC"),
			T(TTime("00:00:26:00"), TTime("00:00:28:30"), "Recorded at TED")
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