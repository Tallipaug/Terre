const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
let stock  = '';
const firstletter = 'b';

const startindex = letters.indexOf(firstletter);

for (let i = startindex + 1 ; i < letters.length; i++) {
    stock += letters[i] + '';
}




console.log( firstletter + stock);
