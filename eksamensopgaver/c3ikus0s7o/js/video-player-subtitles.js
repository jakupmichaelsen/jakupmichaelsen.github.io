var subtitles = {
    T_193318_video_assignment_3: {
		lang: "en",
		name: "English",
        tracks: [
			//from		To			Text			
			T(TTime("00:00:00:01"), TTime("00:00:02:15"), "Love the Earth. Defend the future."),
			T(TTime("00:00:02:15"), TTime("00:00:06:15"), "Kun tekst, der er relevant for opgavebesvarelsen, er tekstet til talesyntese"),
			T(TTime("00:01:31:15"), TTime("00:01:36:00"), "Slow Food USA."),
			
		]
	},
	T_193318_video_assignment_4b: {
		lang: "en",
		name: "English",
        tracks: [
			//from		To			Text
			T(TTime("00:00:00:01"), TTime("00:00:05:00"), "Kun tekst, der er relevant for opgavebesvarelsen, er tekstet til talesyntese"),
			T(TTime("00:00:13:00"), TTime("00:00:17:00"), "America Ferrera"),
			T(TTime("00:00:17:00"), TTime("00:00:20:30"), "April 2019 Vancouver BC"),
			T(TTime("00:00:22:15"), TTime("00:00:26:15"), "Recorded at TED"),
			T(TTime("00:07:40:15"), TTime("00:07:46:00"), "Primetime Emmys"),
			T(TTime("00:08:26:00"), TTime("00:08:32:00"), "\“I had become interested in journalism after seeing how my own words could make a difference"),
			T(TTime("00:08:32:00"), TTime("00:08:36:15"), "and also from watching the Ugly Betty DVDs about life at an American magazine.” – Malala Yousafzai"),
			T(TTime("00:13:03:00"), TTime("00:13:06:15"), "For more talks visit TED.com")
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