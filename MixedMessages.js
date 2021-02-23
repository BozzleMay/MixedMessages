//Random Number Generator

    
const who = Math.floor((Math.random()) * 3);
let word1 = ""
switch (who) {
    case 0:
    word1 = 'You';
    break;
    case 1:
    word1 = 'Your Mum';
    break;
    case 2:
    word1 = 'Your Dad';
    break;
    

  
}   
const whaaa = Math.floor((Math.random()) * 3);
    let word2 = ""
    switch (whaaa) {
        case 0:
        word2 = 'loves';
        break;
        case 1:
        word2 = 'hates';
        break;
        case 2:
        word2 = 'despises';
        break;
    } 
    const why=  Math.floor((Math.random()) * 3);
        let word3 = ""
        switch (why) {
            case 0:
            word3 = 'women';
            break;
            case 1:
            word3 = 'dancing';
            break;
            case 2:
            word3 = 'football';
        } 

const phrase = () => {  
    if (word1 === 'You'){
    word2 = word2.substring(0, (word2.length -1))};
    console.log(`${word1} ${word2} ${word3}`)}


phrase()
