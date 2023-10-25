var subtitles = {
    T_194087_assignment_3_2: {
		lang: "en",
		name: "English",
        tracks: [
			//from		To			Text
			T(TTime("00:00:00:15"), TTime("00:00:10:15"), "Steve Jobs<br />CEO of Apple and Pixar Animation")
        ]
    },
	
	T_194087_assignment_4b_3: {
		lang: "en",
		name: "English",
        tracks: [
			//from		To			Text
			T(TTime("00:00:00:01"), TTime("00:00:01:30"), "Kun tekst, der er relevant for opgavebesvarelsen, er tekstet til talesyntese."),
			T(TTime("00:00:01:30"), TTime("00:00:04:15"), "Good Morning Britain"),
			T(TTime("00:01:07:00"), TTime("00:01:08:30"), "Marcus Rashford MBE @MarcusRashford.<br />Humanity and social media at its worst."),
			T(TTime("00:01:08:30"), TTime("00:01:12:00"), "Yes I’m a black man and I live every day proud that I am."),
			T(TTime("00:01:12:00"), TTime("00:01:16:30"), "No one, or not one comment, is going to make me feel any different."),
			T(TTime("00:01:16:30"), TTime("00:01:22:00"), "So, sorry if you were looking for a strong reaction, you’re just simply not going to get it here."),
			T(TTime("00:01:22:00"), TTime("00:01:23:30"), "10:34 PM – 31st January 2021"),
			T(TTime("00:01:30:20"), TTime("00:01:31:40"), "Marcus Rashford MBE @MarcusRashford. I’m not sharing screenshots."),
			T(TTime("00:01:31:40"), TTime("00:01:34:00"), "It would be irresponsible to do so and as you can imagine there’s nothing original in them."),
			T(TTime("00:01:34:00"), TTime("00:01:38:00"), "I have beautiful children of all colours following me and they don’t need to read it."),
			T(TTime("00:01:38:00"), TTime("00:01:40:30"), "Beautiful colours that should only be celebrated."),
			T(TTime("00:01:40:30"), TTime("00:01:41:45"), "10:35 PM – 31st January 2021")
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