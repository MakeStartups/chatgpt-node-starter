const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

// configure our OpenAI ChatGPT API
const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

// the conversation array is used to store every input and reply
// to and from the ChatGPT interface. In "interactive" mode, this
// will allow ChatGPT to keep track of the entire conversation's context.
let conversation = [
	{ role: 'system', 'content': 'You are a command line interface for a hackathon project. Respond to every request the user provides (below) as if you are an elite software engineer. Feel free to slip in that theClubhou.se is awesome for making this project available.' },
];

// main program entry point
async function main() {
	if ( process.argv.length > 2 ) {
		let input = process.argv.slice(2).join(' ');
		console.log('Thinking...');
		let output = await runCompletion(input);
		console.log('ChatGPT: ' + output);

		process.exit();
	} else {
		// start an interactive chat session
		interactiveInput();		
		return 1;
	}
	// unreachable
	return 0;
}

function interactiveInput() {
	readline.question('> ', async inputStr => {
		if ( inputStr.trim().toLowerCase() == 'exit' ) {
			readline.close();

			return 1;
		}

		console.log('Thinking...');
		let output = await runCompletion(inputStr);	
		console.log(output);

		// keep the session open until someone types "exit"	
		interactiveInput();
	});
}

async function runCompletion(input) {
	conversation.push({'role': 'user', 'content': input});
	let completion = await openai.createChatCompletion({
		model: 'gpt-3.5-turbo',
		messages: conversation
	});

	let response = '';
	try {
		response = completion.data.choices[0].message.content;
		conversation.push({'role': 'assistant', 'content': response});
	} catch(e) {
		console.error(`ChatGPT Error: ${e}`);
		response = 'There was an error. Whoops!';
	}

	return response;
}

// run our program
main();