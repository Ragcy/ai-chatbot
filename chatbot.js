const ragcy = require('ragcy');
const readlineSync = require('readline-sync');
const API_KEY = 'your_api_key_here';
const client = ragcy.init({ key: API_KEY });


async function createCorpus() {
    try {
        const response = await client.createCorpus(
                        'general',
                        'My Chatbot Corpus',
                        'Welcome to the chatbot!',
                        'You are a helpful assistant.',
                        'Answer questions based on the provided information.'
                      );
        console.log('Corpus created:', response.corpus);
        return response.corpus.id;
    } catch (error) {
       console.error('Error creating corpus:', error);
    }
}

async function addDataToCorpus(corpusId, filePath) {
    try {
      const result = await client.addDataSource(corpusId, filePath);
      console.log('Data source added:', result);
    } catch (error) {
      console.error('Error adding data source:', error);
    }
}

async function chat(corpusId) {
    console.log('Chatbot is ready. Type "exit" to end the conversation.');
    let sessionId = null;
    while (true) {
        const userInput = readlineSync.question('You: ');
        if (userInput.toLowerCase() === 'exit') {
            console.log('Goodbye!');
            break;
        }
        try {
          const req = await client.query(corpusId, userInput, sessionId);
          console.log('Bot:', req.response);
          sessionId = req.sessionId;
        } catch (error) {
          console.error('Error querying the corpus:', error);
        }
    }
}

async function main() {
    const corpusId = await createCorpus();
    if (corpusId) {
        await addDataToCorpus(corpusId, '/path/to/your/data.pdf');
        // add others data source if necessary in txt, csv or page url
        await chat(corpusId);
    }
}

main();