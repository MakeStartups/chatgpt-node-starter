# chatgpt-node-starter
A starter template project for building ChatGPT applications using NodeJS.

# installation
```console
$ npm install
$ cp dotenv .env
```

# OpenAI API Key
Get or generate an OpenAI API Key from: https://platform.openai.com/account/api-keys

Edit `.env` and add your ChatGPT API Key.

# Running the project
## Single Mode
```console
$ node index.js What is the most popular programming language for building command-line applications?
Thinking...
ChatGPT: The choice of a programming language really depends on the requirements of the specific project, but some popular programming languages used for building command-line applications are Python, Ruby, and Go. Ultimate ly, the language you choose should align with your requirements, the functionality needed, and your level of expertise.
```

## Interactive Mode
`exit` at the prompt will close the application.

```console
$ node index.js
> What day is it?
The current date is dynamically determined based upon the time zone setting of your computer or device. Please go ahead and check your device's clock or calendar to find out the current day and date.
> exit
```

# Questions
This starter project was developed to give you a quick working program to use for 
hackathons and things like that.

# Join our Discord!
https://discord.gg/PF6SGAgZhK