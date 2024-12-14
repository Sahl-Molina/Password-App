import { shuffle } from 'underscore';
import { randomWordChain, Filter } from './imports.js';

//The "generator" function is the responsable to generete a password with all the filters.
const generator = async (

  //The default parameters have been set, which can be later modified from the user interface.
  filters = [true, true, true, true],
  passwordLength = 15,
  wordPasswordCheck = false,
  wordsNumber = 3) => {

  try {

    let password = '';

    /*It checks if the user wants to create a password based on words. If true, 
    it skips password creation based on the Filters class. */
    if (wordPasswordCheck) {
      password = await randomWordChain(wordsNumber);
      return password;
    }

    /*If the "wordPasswordCheck" parameter is set to false, password creation uses the filters defined in the Filters class.*/
    filters = new Filter(filters[0], filters[1], filters[2], filters[3]);
    const appliedFilters = shuffle(filters.applyFilters().split(','));

    for (let i = 0; i < passwordLength; i++) {
      password = password + appliedFilters[i];
    };

    return password;

  } catch (error) {
    console.error('An error occurred while generating the password');
  }
}

export { generator };