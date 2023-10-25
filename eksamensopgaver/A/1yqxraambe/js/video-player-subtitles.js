var subtitles = {
    T_191146_video_assignment_3: {
		lang: "en",
		name: "English",
        tracks: [
			//from		To			Text
			T(TTime("00:00:00:01"), TTime("00:00:03:14"), "Kun tekst, der er relevant for opgavebesvarelsen, er tekstet til talesyntese"),
			T(TTime("00:00:03:14"), TTime("00:00:06:16"), "Sackville School. Together we achieve."),
			T(TTime("00:00:06:16"), TTime("00:00:10:20"), "Julian Grant, Head Teacher."),
			T(TTime("00:00:14:17"), TTime("00:00:17:20"), "Leah, Year 8 Student"),
			T(TTime("00:00:21:22"), TTime("00:00:24:22"), "Max, Year 8 Student"),
			T(TTime("00:00:34:16"), TTime("00:00:36:18"), "Chloe, Year 8 Student"),
			T(TTime("00:00:38:00"), TTime("00:00:41:15"), "George, Year 8 Student"),
			T(TTime("00:00:47:15"), TTime("00:00:49:20"), "Miah, Year 8 Student"),
			T(TTime("00:00:54:13"), TTime("00:00:55:20"), "Sackville"),
			T(TTime("00:00:57:13"), TTime("00:01:00:18"), "Abbey, Year 8 Student"),
			T(TTime("00:01:08:14"), TTime("00:01:11:03"), "Ella, Year 8 Student"),
			T(TTime("00:01:39:00"), TTime("00:01:41:20"), "Karen Brown, Transition Coordinator"),
		]
	},
	T_191146_video_assignment_4b: {
		lang: "en",
		name: "English",
        tracks: [
			//from		To			Text
			T(TTime("00:00:00:01"), TTime("00:00:02:00"), "Kun tekst, der er relevant for opgavebesvarelsen, er tekstet til talesyntese"),
			T(TTime("00:00:02:00"), TTime("00:00:04:00"), "Army Suicide: The Struggle Continues. By Mark Thompson."),
			T(TTime("00:00:04:00"), TTime("00:00:07:10"), "Army Suicide Rate Hits New High. By Mark Thompson."),
			T(TTime("00:00:07:10"), TTime("00:00:10:00"), "Army Suicide: Tip of the Service’s “Mental Health Iceberg”. By Mark Thompson."),
			T(TTime("00:00:10:15"), TTime("00:00:17:00"), "Time. One a day."),
			T(TTime("00:00:18:15"), TTime("00:00:23:15"), "Mark Thompson, Time National Security Correspondent."),
			T(TTime("00:02:28:10"), TTime("00:02:32:18"), "Army, Health Promotion, Risk Reduction, Suicide Prevention, Report 2010"),
			T(TTime("00:02:35:05"), TTime("00:02:39:10"), "Suicides by Calendar Year"),
			T(TTime("00:02:58:00"), TTime("00:03:02:00"), "What is PTSD?"),
			T(TTime("00:03:02:00"), TTime("00:03:07:15"), "Feeling lost? Let us help you find your way.")
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