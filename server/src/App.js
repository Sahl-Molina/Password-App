import { generator } from "./modules/imports.js";

const App = async (filters, passwordLength, wordPasswordCheck, wordsNumber) => {

  try {

    const password = await generator(filters, passwordLength, wordPasswordCheck, wordsNumber);
    return password;
  } catch (error) {
    console.error('Error running application');
  }
}
export default App;