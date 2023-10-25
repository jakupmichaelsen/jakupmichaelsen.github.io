var subtitles = {
    T_193759_assignment_3: {
		lang: "en",
		name: "English",
        tracks: [
			//from		To			Text			
			T(TTime("00:00:21:15"), TTime("00:00:27:15"), "Ralph Ellison - Virginia Woolf - Italo Calvino")
				
		]
	},
	T_193759_assignment_4b: {
		lang: "en",
		name: "English",
        tracks: [
			//from		To			Text
			T(TTime("00:00:00:01"), TTime("00:00:04:45"), "NARF is working with its partners, tribes and survivors to bring this Boarding School story into the light nationally and internationally."),
			T(TTime("00:00:04:45"), TTime("00:00:09:00"), "Kun tekst, der er relevant for opgavebesvarelsen, er tekstet til talesyntese."),
			T(TTime("00:00:18:15"), TTime("00:00:21:00"), "Elicia Goodsoldier<br />Dine/Spirit Lake Dakota"),
			T(TTime("00:00:22:30"), TTime("00:00:25:30"), "Home"),
			T(TTime("00:00:30:30"), TTime("00:00:33:00"), "Danger<br />Keep Out"),
			T(TTime("00:00:51:15"), TTime("00:00:54:15"), "Brooke Ammann<br />Anishinaabe"),
			T(TTime("00:00:57:15"), TTime("00:01:00:15"), "Haskell Cemetery<br />1884 - US.BIA"),
			T(TTime("00:01:36:30"), TTime("00:01:41:30"), "NARF is fighting for accountability, healing and reconciliation for Native American peoples."),
			T(TTime("00:01:46:15"), TTime("00:01:48:30"), "Brett Shelton<br />Oglala Dakota"),
			T(TTime("00:02:17:15"), TTime("00:02:21:15"), "John Echohawk<br />Pawnee"),
			T(TTime("00:02:41:30"), TTime("00:02:44:30"), "Sarah Eagleheart - Oglala Dakota - National Native American Boarding School Healing Coalition Board Member"),
			T(TTime("00:03:10:30"), TTime("00:03:13:30"), "Be a Modern Day Warrior"),
			T(TTime("00:03:13:30"), TTime("00:03:19:00"), "Join in the movement for healing and reconciliation and invest in NARF’s work today.")
			
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