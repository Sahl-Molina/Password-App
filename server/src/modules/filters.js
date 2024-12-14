import {characters} from "./imports.js";

/* The Filter class is in charge of the creation and management of the grammarly filters. 
It means that will control if a password uses Upper-Lower case, symbols and numbers as characters. */ 
export class Filter{
    constructor(uppercaseCheck, lowercaseCheck, symbolsCheck, numbersCheck){
        
        //This property stores the all characters that will be used for the creation of the password 
        this.filters = '';

        this.uppercaseCheck = uppercaseCheck;
        this.lowercaseCheck = lowercaseCheck;
        this.symbolsCheck = symbolsCheck;
        this.numbersCheck = numbersCheck;
    }

    /* This method checks if the Top-Bottom filter case is true/false and adds the corresponding characters to the "filters" property.
    This process is repeated for all other filtering methods */
    upper_lowerFunc(){

        if(this.lowercaseCheck){
            const lower = characters.alphabet.map(element => element.toLowerCase());
            this.filters = this.filters + lower;
        }

        if (this.uppercaseCheck) {
            this.filters = this.filters  + characters.alphabet;
        }
    }

    symbolsFunc(){
        if(this.symbolsCheck){
            this.filters = this.filters  + characters.symbols;
        }
    }

    numbersFunc(){
        if(this.numbersCheck){
            this.filters = this.filters  + characters.numbers;
        }
    }

    //This method applies all filters to "filters" property and returns it.
    applyFilters(){
        try{
            this.upper_lowerFunc();
            this.symbolsFunc();
            this.numbersFunc();

            return this.filters;

        } catch(error){
            console.error('There was an error applying the filters.')
        }
    }
}