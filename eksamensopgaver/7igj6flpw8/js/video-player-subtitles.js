var subtitles = {
    T_180237_video_opg3: {
		lang: "en",
		name: "English",
        tracks: [
			T(TTime("00:00:04:00"), TTime("00:00:06:00"), "REUTERS"),
			T(TTime("00:00:07:00"), TTime("00:00:09:00"), "Lucozade"),
			T(TTime("00:00:24:00"), TTime("00:00:28:00"), "Amy Munro<br />Land Rover BAR"),
			T(TTime("00:01:34:00"), TTime("00:01:39:00"), "REUTERS")
        ]
	},
	T_180237_video_opg5: {
		lang: "en",
		name: "English",
        tracks: [
			T(TTime("00:00:01:00"), TTime("00:00:05:00"), "SUNDAY MORNING"),
			T(TTime("00:00:06:00"), TTime("00:00:10:00"), "November 9, 2016"),
			T(TTime("00:00:12:12"), TTime("00:00:22:00"), "HILLARY RODHAM CLINTON"),
			T(TTime("00:00:22:00"), TTime("00:00:37:00"), "What Happened HILLARY RODHAM CLINTON"),
			T(TTime("00:00:53:00"), TTime("00:00:55:00"), "Producers ALAN GOLDS<br />GABRIEL FALCON"),
			T(TTime("00:00:55:00"), TTime("00:00:59:00"), "Hillary Rodham Clinton<br />Editor ED GIVNISH"),
			T(TTime("00:01:13:00"), TTime("00:01:15:00"), "USA"),
			T(TTime("00:04:32:00"), TTime("00:04:34:00"), "What Happened<br />HILLARY RODHAM CLINTON"),
			T(TTime("00:04:34:00"), TTime("00:04:39:00"), "I couldn’t get the job done, and I’ll have to live with that for the rest of my life"),
			T(TTime("00:05:14:00"), TTime("00:05:22:00"), "TRUMP - www.DonaldJTrump.com - MAKE AMERICA GREAT AGAIN"),
			T(TTime("00:05:29:00"), TTime("00:05:31:00"), "TRUMP - www.DonaldJTrump.com"),
			T(TTime("00:05:36:00"), TTime("00:05:40:00"), "TRUMP PENCE"),
			T(TTime("00:05:40:00"), TTime("00:05:42:00"), "TRUMP Make America Great Again 2016"),
			T(TTime("00:05:42:00"), TTime("00:05:43:00"), "TRUMP for President *2016*"),
			T(TTime("00:05:43:00"), TTime("00:05:44:00"), "HILLARY FOR PRISON 2016"),
			T(TTime("00:06:12:00"), TTime("00:06:15:00"), "DEMOCRATIC NATIONAL HEADQUARTERS - 430 SOUTH CAPITOL WEST"),
			T(TTime("00:06:32:00"), TTime("00:06:33:00"), "Estoy contigo"),
			T(TTime("00:06:34:00"), TTime("00:06:36:00"), "1848"),
			T(TTime("00:06:36:00"), TTime("00:06:38:00"), "Estoy contigo"),
			T(TTime("00:07:14:00"), TTime("00:07:21:00"), "September 9, 2016   STRONGER TOGETHER  hillaryclinton.com"),
			T(TTime("00:08:11:00"), TTime("00:08:17:00"), "verizon wireless - Access Hollywood - Verizon wireless - year 10 - America Tour"),
			T(TTime("00:10:11:00"), TTime("00:10:14:00"), "I was running a traditional presidential campaign"),
			T(TTime("00:10:14:00"), TTime("00:10:18:00"), "while Trump was running a reality TV show"),
			T(TTime("00:10:37:00"), TTime("00:10:40:00"), "More from Hillary Clinton...<br />CBSSUNDAYMORNING.COM"),
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

function T(start, end, text) {
	return {
		start: start,
		end: end,
		text: text
	};
}