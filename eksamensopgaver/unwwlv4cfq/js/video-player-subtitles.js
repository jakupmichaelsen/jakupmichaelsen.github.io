var subtitles = {
    T_192673_video_assignment_3_2: {
		lang: "en",
		name: "English",
        tracks: [
			//from		To			Text			
			T(TTime("00:00:00:01"), TTime("00:00:04:00"), "HUMAN RIGHTS!<br />HUMAN RIGHTS?"),
			T(TTime("00:00:06:00"), TTime("00:00:07:15"), "FAIR, JUST, EQUAL"),
			T(TTime("00:00:15:15"), TTime("00:00:17:00"), "All of us"),
			T(TTime("00:01:01:00"), TTime("00:01:03:05"), "NEVER AGAIN"),
			T(TTime("00:01:04:10"), TTime("00:01:07:00"), "European Convention on Human Rights"),
			T(TTime("00:01:07:00"), TTime("00:01:11:00"), "SECTION 1. RIGHTS AND FREEDOMS."),
			T(TTime("00:01:11:00"), TTime("00:01:12:16"), "Right to life."),
			T(TTime("00:01:12:16"), TTime("00:01:14:00"), "Right to liberty and security"),
			T(TTime("00:01:14:00"), TTime("00:01:15:20"), "Freedom of expression"),
			T(TTime("00:01:16:21"), TTime("00:01:18:15"), "1998"),
			T(TTime("00:01:18:15"), TTime("00:01:22:00"), "Human Rights Act"),
			T(TTime("00:01:45:19"), TTime("00:01:49:00"), "Anywhere. Everywhere"),
			T(TTime("00:01:57:00"), TTime("00:02:00:00"), "Rights Info. RightsInfo.org"),
			T(TTime("00:02:00:00"), TTime("00:02:08:22"), "SHARE THIS VIDEO IF YOU THINK HUMAN RIGHTS MATTER")
		]
	},
	T_192673_video_opg_4b: {
		lang: "en",
		name: "English",
        tracks: [
			//from		To			Text
			T(TTime("00:00:00:01"), TTime("00:00:04:00"), "Kun tekst, der er relevant for opgavebesvarelsen, er tekstet til talesyntese"),
			T(TTime("00:00:07:00"), TTime("00:00:09:19"), "BJORN NANSEN, MEDIA AND COMMUNICATIONS, THE UNIVERSITY OF MELBOURNE"),
			T(TTime("00:02:12:18"), TTime("00:02:15:19"), "TAKE ACTION"),
			T(TTime("00:02:15:19"), TTime("00:02:18:12"), "JOIN THE CONVERSATION AT FACEBOOK.COM/ITS PEOPLE LIKE US")
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