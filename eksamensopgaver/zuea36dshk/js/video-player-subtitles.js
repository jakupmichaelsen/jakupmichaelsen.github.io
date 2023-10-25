var subtitles = {
    T_194088_assignment_2: {
		lang: "en",
		name: "English",
        tracks: [
			//from		To			Text
			T(TTime("00:00:00:01"), TTime("00:00:02:00"), "Kun tekst, der er relevant for opgavebesvarelsen, er tekstet til talesyntese.<br />BBC"),
			T(TTime("00:01:10:00"), TTime("00:01:13:00"), "Fish & Chip Shop of the year 2014"),
			T(TTime("00:01:14:00"), TTime("00:01:15:15"), "Bread Bun £0.70 - Pickled Onion/Egg/Gherkin £0.60 - Yorkshire Tea £1.70 - Coffee £2.00"),
			T(TTime("00:01:15:15"), TTime("00:01:16:30"), "Chilled Can 330ml £1.00 - Chilled Water 330ml £0.90 500ml £1.50 - Flavoured Water £1.50"),
			T(TTime("00:01:16:30"), TTime("00:01:17:45"), "Chips £2.20 - Cone of Chips £1.90 - Cheesy Chips £3.20 - Chip Butty £2.60 - Cod Sm £3.20 Lg £5.00"),
			T(TTime("00:01:17:45"), TTime("00:01:19:00"), "Haddock Sm £3.50 Lg £5.60 - Fusco’s Fishcake £1.60 - Whitby Scampi £5.20"),
			T(TTime("00:02:11:00"), TTime("00:02:15:00"), "Today’s Food: Cod Landed by British trawler Kirkella - Haddock – Scottish off the <br />boat Keila - Potatoes – Sagitta variety from Forest Farm, Easingwold"),

        ]
    },
	
	T_194088_assignment_5b: {
		lang: "en",
		name: "English",
        tracks: [
			//from		To			Text
			T(TTime("00:00:00:01"), TTime("00:00:01:30"), "Kun tekst, der er relevant for besvarelsen, er tekstet til talesyntese.<br />TED"),
			T(TTime("00:00:04:00"), TTime("00:00:08:00"), "William Collis"),
			T(TTime("00:00:09:00"), TTime("00:00:12:00"), "October 2020 TED@BCG")
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