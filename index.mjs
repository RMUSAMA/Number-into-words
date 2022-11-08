
import PromptSync from "prompt-sync";
let prompt = PromptSync();
let num = prompt("Enter a number to convert it into words below 10,000:  ");
let numarr = [num];
function numToWords(num){
    let wordsa = [" ","one","two","three","four","five","six","seven","eight","nine"];
    let wordsb = [" ","ten","twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninety"];
    let wordsc = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    let wordsd =[" ","eleven","twenty two","thirty three","fourty four","fifty five","sixty six","seventy seven","eighty eight","ninety nine"]
    let numSplit= String(num).split('').map(Number);
    // console.log(numSplit);
       
    if(num<10 && numarr.length <= 1){
         console.log(wordsa[num]);
    }

    if(num>=10 && num<20 && numSplit[0]==1 && numarr.length<3 ){
        let second = wordsc[numSplit[1]]
        console.log(second)
    }

     if (num>=20 && num<10000 ) {
            if(numSplit.length<3 ){
            let tens = wordsb[numSplit[0]];
            // console.log(tens);
            let ones = wordsa[numSplit[1]];
            // console.log(ones);
            console.log(tens+" "+ones);}
        
            if(numSplit.length<4 && numSplit.length>2 && numSplit[0]!=0 && numSplit[1]==0 && numSplit[2]==0){
            let hundreds = wordsa[numSplit[0]]
            console.log(hundreds + " hundred")};
            
            if(numSplit.length<4 && numSplit.length>2 && numSplit[0]!=0 && numSplit[1]==0 && numSplit[2]!=0){
                let first = wordsa[numSplit[0]]
                let third = wordsa[numSplit[2]]
                console.log(first+" hundred and "+third);
            }
           
             if(numSplit.length<4 && numSplit.length>2 && numSplit[0]!=0 && numSplit[1]!=0 && numSplit[1]!=0){
                let first = wordsa[numSplit[0]]
                let second = wordsb[numSplit[1]]
                let third = wordsa[numSplit[2]]
                console.log(first + " hundred "+ "and " +second+" " +third )};

             if(numSplit.length<5 && numSplit.length>3 && numSplit[0]!=0 && numSplit[1]==0 && numSplit[2]==0 && numSplit[3]!=0 ){
                    let first = wordsa[numSplit[0]]
                    let last = wordsa[numSplit[3]]
                    console.log(first+" thousand and "+last)}

                    // if(numSplit.length<5 && numSplit.length>3 && numSplit[0]!=0 && numSplit[1]!=0 && numSplit[2]!=0 && numSplit[3]!=0 ){
                    //     let first = wordsa[numSplit[0]]
                    //     let second = wordsa[numSplit[1]]
                    //     let last = wordsc[numSplit[3]]
                    //     console.log(first +" thousand "+second+" hundred and "+last)}
    

                if(numSplit.length<5 && numSplit.length>3 && numSplit[0]!=0 && numSplit[1]==0 && numSplit[2]==0 && numSplit[3]==0 ){
                let fourths = wordsa[numSplit[0]]
                    console.log(fourths + " thousand ")};
                   
                if(numSplit.length<5 && numSplit.length>3 && numSplit[0]!=0 && numSplit[1]!=0 && numSplit[2]==0 && numSplit[3]==0 ){
                let first =wordsc[numSplit[0]]
                let second =wordsa[numSplit[1]]
                console.log(first+" thousand and "+second+" hundred")}
                if(numSplit.length<5 && numSplit.length>3 && numSplit[0]!=0 && numSplit[1]==0 && numSplit[2]!=0 && numSplit[3]!=0 ){
                let first = wordsa[numSplit[0]]
                let third = wordsb[numSplit[2]]
                let fourth= wordsa[numSplit[3]]
            
                    console.log(first+" thousand and "+third+" "+fourth)
                }

                if(numSplit.length<5 && numSplit.length>3 && numSplit[0]!=0 && numSplit[1]==0 && numSplit[2]!=0 && numSplit[3]==0 ){
                    let first1 = wordsa[numSplit[0]]
                    let third = wordsb[numSplit[2]]
                    console.log(first1 + " thousand "+ " and " +third+" " )};
           
                if(numSplit.length<5 && numSplit.length>3 && numSplit[0]!=0 && numSplit[1]!=0 && numSplit[2]!=0 && numSplit[3]!=0 ){
                        let first1 = wordsa[numSplit[0]]
                        let second = wordsa[numSplit[1]]
                        let third = wordsb[numSplit[2]]
                        let fourth = wordsa[numSplit[3]]
                        console.log(first1 + " thousand "+ second +" hundred "+" and " +third+" " +fourth )};
                              
                if(numSplit.length<5 && numSplit.length>3 && numSplit[0]==numSplit[1]==numSplit[2]==numSplit[3]==numSplit[4] ){
                        let first1 = wordsa[numSplit[0]]
                        let second = wordsa[numSplit[1]]
                        let third = wordsd[numSplit[2]]
                        console.log(first1 + " thousand "+ second +" hundred "+" and " +third+" " )};              
    
}
}
numToWords(num);
