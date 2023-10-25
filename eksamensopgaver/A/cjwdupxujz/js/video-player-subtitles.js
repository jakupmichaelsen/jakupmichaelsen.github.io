var subtitles = {
	T_194409_assignment_3: {
		lang: "en",
		name: "English",
        tracks: [
			//from		To			Text
			T(TTime("00:00:00:01"), TTime("00:00:04:00"), "Kun tekst, der er relevant for opgavebesvarelsen, er tekstet til talesyntese."),
			T(TTime("00:00:09:00"), TTime("00:00:12:00"), "U.S. CENTER CHAPEL"),
			T(TTime("00:00:12:00"), TTime("00:00:16:00"), "WELCOME TO THE CENTER OF THE USA. LEBANON HAS SOUVENIRS."),
			T(TTime("00:01:45:00"), TTime("00:01:50:00"), "To the ReUnited States of America"),
			T(TTime("00:01:51:00"), TTime("00:01:55:00"), "Jeep.com/TheRoadAhead"),
			T(TTime("00:01:56:00"), TTime("00:02:10:00"), "Jeep 80TH")
			
        ]
    },
    T_194409_assignment_4b: {
		lang: "en",
		name: "English",
        tracks: [
			//from		To			Text
			T(TTime("00:00:00:01"), TTime("00:00:03:00"), "Kun tekst, der er relevant for opgavebesvarelsen, er tekstet til talesyntese.<br />New York Magazine. The Cut. James, age 12"),
			T(TTime("00:00:04:00"), TTime("00:00:07:00"), "Boys and Girls on Stereotypes"),
			T(TTime("00:00:07:00"), TTime("00:00:14:00"), "Felice, age 14. What does it mean to be a boy in your opinion?"),
			T(TTime("00:00:15:00"), TTime("00:00:18:00"), "Jose, age 11"),
			T(TTime("00:00:19:00"), TTime("00:00:24:00"), "Capone, age 9"),
			T(TTime("00:00:26:00"), TTime("00:00:29:00"), "Miles, age 10"),
			T(TTime("00:00:30:00"), TTime("00:00:32:00"), "Scarlet, age 7"),
			T(TTime("00:00:33:00"), TTime("00:00:37:00"), "Jon Luc, age 10"),
			T(TTime("00:00:38:00"), TTime("00:00:44:00"), "Izzy, age 11"),
			T(TTime("00:00:47:00"), TTime("00:00:50:00"), "Chloe, age 7"),
			T(TTime("00:00:51:00"), TTime("00:00:56:00"), "Joshua, age 13"),
			T(TTime("00:00:58:00"), TTime("00:01:00:00"), "You don’t think there’s anything else?"),
			T(TTime("00:01:03:00"), TTime("00:01:08:00"), "Jaxon, age 8"),
			T(TTime("00:01:09:00"), TTime("00:01:14:00"), "Besides anatomy, what’s the number one thing that makes boys and girls different in your mind?"),
			T(TTime("00:01:28:00"), TTime("00:01:31:00"), "Issys, age 6")
			
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