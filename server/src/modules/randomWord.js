import axios from "axios";

const randomWordUrl = 'https://random-word-api.herokuapp.com/word?';

//The function called getRandomWord sends a request to the Random Word API to retrieve a word. 
const getRandomWord = async () => {
    try {
        const response = await axios.get(randomWordUrl);
        return response.data.toString();
        
    } catch (error) {
        console.error('API call error');
    }
}

//The WorldChain function generates a string of words based on the specified amount we ask for and returns it.
const randomWordChain = async (times) => {
    
    try {
        let wordsChain = '';

        for(let i = 0; i < times; i++){
            const randomWord = await getRandomWord(randomWordUrl);
            wordsChain = wordsChain + randomWord;
        }

        return wordsChain;
        
    } catch (error) {
        console.error('There was an error generating the word chain.');
    }
}

export {randomWordChain};