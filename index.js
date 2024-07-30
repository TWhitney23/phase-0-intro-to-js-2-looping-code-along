// Code your solutions in this file
function writeCards(names, gift) {
    let thankYouMessages = [];
  
    names.forEach(name => {
      let message = `Thank you, ${name}, for the wonderful ${gift} gift!`;
      thankYouMessages.push(message);
    });
  

    return thankYouMessages;

  }

  function countDown(startNumber) {
    for (let i = startNumber; i >= 0; i--) {
      console.log(i);
    }
  }

  