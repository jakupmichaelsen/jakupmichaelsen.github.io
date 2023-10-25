var subtitles = {
    T_181476_opg3: {
		lang: "en",
		name: "English",
        tracks: [
			//from		To			Text
			T(TTime("00:00:00:01"), TTime("00:00:01:10"), "Kun tekst, der er relevant for besvarelsen, er tekstet til talesyntese."),
			T(TTime("00:00:01:10"), TTime("00:00:03:15"), "REUTERS"),
			T(TTime("00:00:17:30"), TTime("00:00:19:00"), "Consumer Electronics Unlimited"),
			T(TTime("00:00:19:00"), TTime("00:00:27:30"), "Julian Jagtenberg<br />Somnox Co-founder"),
			T(TTime("00:00:34:15"), TTime("00:00:38:30"), "I GO TO BED WITH A ROBOT"),
			T(TTime("00:00:55:15"), TTime("00:00:57:30"), "Consumer Electronics Unlimited"),
			T(TTime("00:01:07:05"), TTime("00:01:09:15"), "I am going to use the sleep robot to<br />nap - sleep - relax"),
			T(TTime("00:01:09:15"), TTime("00:01:11:15"), "I want the sleep robot to stop breathing after 30 min"),
			T(TTime("00:01:12:15"), TTime("00:01:17:15"), "REUTERS")
        ]
    },
	
    T_181476_opg5b: {
		lang: "en",
		name: "English",
        tracks: [
			//from		To			Text
			T(TTime("00:00:16:15"), TTime("00:00:18:45"), "PENNSYLVANIA - KENTUCKY - W.V - VIRGINIA - TENNESSEE - NORTH CAROLINA - ALABAMA - GEORGIA - S.C."),
			T(TTime("00:00:18:45"), TTime("00:00:22:10"), "APPALACHIA")
			
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