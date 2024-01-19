var subtitles = {
	T_194351_video_assignment_3: {
		lang: "en",
		name: "English",
		tracks: [
			//from		To			Text			
			T(TTime("00:00:01:00"), TTime("00:00:03:00"), "PARENTING IS A JOURNEY"),
			T(TTime("00:00:18:00"), TTime("00:00:23:00"), "Berkeley UNIVERSITY OF CALIFORNIA Greater Good Science Center"),
			T(TTime("00:00:29:00"), TTime("00:00:32:00"), "COMPASSION AND RESPECT"),
			T(TTime("00:00:43:00"), TTime("00:00:52:00"), "CARING EMPATHY"),
			T(TTime("00:01:01:00"), TTime("00:01:03:00"), "LOVE"),
			T(TTime("00:01:03:00"), TTime("00:01:05:20"), "GENEROSITY PURPOSE FORGIVENESS HUMILITY HONESTY GRATITUDE RELIABILITY LOVE"),
			T(TTime("00:01:23:00"), TTime("00:01:24:20"), "LEARN MORE AT GGSC.BERKELEY.EDU/PARENTING"),
			T(TTime("00:01:24:20"), TTime("00:01:27:00"), "Berkeley UNIVERSITY OF CALIFORNIA Greater Good Science Center")

		]
	},
	T_194351_video_assignment_4b: {
		lang: "en",
		name: "English",
		tracks: [
			//from		To			Text
			T(TTime("00:00:00:01"), TTime("00:00:03:00"), "THE EFFECT SMARTPHONES HAVE ON OUR HEALTH"),
			T(TTime("00:00:03:00"), TTime("00:00:05:00"), "TECH INSIDER"),
			T(TTime("00:00:34:00"), TTime("00:00:38:00"), "REUTERS"),
			T(TTime("00:02:49:00"), TTime("00:02:50:30"), "Dr Rangan Chatterjee is the author of “The 4 Pillar Plan. DR RANGAN CHATTERJEE THE 4 PILLAR PLAN HOW TO EAT SLEEP RELAX MOVE."),
			T(TTime("00:02:50:30"), TTime("00:02:52:00"), "Your Way to a Longer, Healthier Life.")

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
	if (arguments.length == 1) {
		frames = (arguments[0] * 1) / 24;
	}
	else if (arguments.length == 2) {
		frames = (arguments[1] * 1) / 24;
		seconds = arguments[0] * 1;
	}
	else if (arguments.length == 3) {
		frames = (arguments[2] * 1) / 24;
		seconds = arguments[1] * 1;
		minutes = (arguments[0] * 1) * 60;
	}
	else if (arguments.length == 4) {
		frames = (arguments[3] * 1) / 24;
		seconds = arguments[2] * 1;
		minutes = (arguments[1] * 1) * 60;
		hours = (arguments[0] * 1) * 3600;
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
	if (typeof value === "undefined") {
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
	if (typeof value === "undefined") {
		value = "00:00:00:00";
	}
	var split = value.split(":");
	var frames = (split[3] * 1) / 24;
	var seconds = split[2] * 1;
	var minutes = (split[1] * 1) * 60;
	var hours = (split[0] * 1) * 3600;
	var output = hours + minutes + seconds + frames;
	return output;
}

function T(start, end, text, direction) {
	if (typeof direction === "undefined") {
		direction = "ltr";
	}
	return {
		start: start,
		end: end,
		text: text,
		direction: direction
	};
}