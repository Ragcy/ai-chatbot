# AI Chatbot Ragcy (Rag as a service)

This project demonstrates how to create a simple chatbot using the Ragcy API. The chatbot can create a corpus, add data to it, and engage in conversation based on the provided information.

## Prerequisites

- Node.js installed on your system
- A Ragcy API key

## Installation

1. Clone this repository or create a new directory for your project.

2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Replace `'your_api_key_here'` with your actual Ragcy API key.

## Usage

1. Modify the `createCorpus` function parameters if desired:
- Corpus type (default: 'general')
- Corpus name
- Welcome message
- System message
- Instructions

2. In the `main` function, update the file path in `addDataToCorpus`:
```javascript
await addDataToCorpus(corpusId, '/path/to/your/data.pdf');
```

Replace /path/to/your/data.pdf with the actual path to your data file. You can add multiple data sources by calling addDataToCorpus multiple times with different file paths.

Run the script:
```bash
 node chatbot.js
```

Interact with the chatbot by typing your messages. Type 'exit' to end the conversation.

## Features
- Creates a new corpus with customizable parameters
- Adds data sources to the corpus (supports PDF, TXT, CSV, or webpage URL)
- Maintains conversation context using session IDs
- Simple command-line interface for chatting

## Error Handling
The script includes basic error handling for API calls. Errors are logged to the console.
Note
Ensure that you comply with Ragcy's terms of service and usage limits when using this script.