var speech = window.webkitSpeechRecognition

var recognition = new speech()

recognition.continuous = true 

recognition.start();

recognition.onresult = (event) => {
	const result = event.results[0][0].transcript;
	Console.log(result);
};