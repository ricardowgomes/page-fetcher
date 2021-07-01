const args = process.argv.splice(2);
const request = require('request');
const fs = require('fs');


//writeFileSync
request(args[0], (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.


  if (!error) {
    fs.access(args[1], (er) => {
      if (er) {
        fs.writeFile(args[1], body, err => {
          if (err) {
            console.error(err);
            return;
          }
          console.log(`Downloaded and saved ${body.length} bytes to ${args[1]}`);
        });

      } else {
        console.log(`file already exists!`);
        process.exit();
      }
    });

  } else {
    console.log(error);
    process.exit();
  }
});





