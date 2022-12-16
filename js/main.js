/* 
Required abilities of a calculator:

accept user inputs of number, operator and another number
store inputs
recognize inputs and perform calculations
return a result

Optional features:
should accept longer arithmetic operations
display all the input as it is being entered
store previous total as start of next operation
clear button should clear all entries
should prevent invalid inputs 

*/

const keys = document.querySelector('.calculatorButtons');
    keys.addEventListener('click', event => { 
        const {target} = event;
        const {value} = target;
        if (!target.matches('button')){ 
            //if target matches something different than button, return nothing
            return;
        }else{
            calculator.parseInput(value)
            //pass value to parse method
            
        }

    })

const calculator = {
    displayText: '0',
    prevTotal: null,
    
    parseInput(value){
        //verificar si alguno de los botones "especiales" han sido utilizados (AC, =)
        switch(value){
            case '=' :
                //calculate the answer
                break;
            case 'AC':
                //clear screen and stored values
                break;
            case '.':
                if(this.displayText == 0){
                    //pass '0.' into add text method
                } else {
                    //add value to text string
                }
                break;
            default:
                //add value to text string
                break;
            }

        },

        addText(value){
            if(this.displayText === '0'){
                this.displayText = ''
            }else if(this.prevTotal !== null){
                this.displayText = this.prevTotal
                this.prevTotal = null
            }
            if(/* if user enters invalid sequence, dont proceed */){

            }
            this.displayText += value
            //output display text to screen
        },
}
