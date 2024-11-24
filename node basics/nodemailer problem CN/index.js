// // Please don't change the pre-written code
// // Import the necessary modules here
// import nodemailer from "nodemailer";
// // import readline, { Interface } from "readline";
// import readline from "readline";

// const Solution = () => {
//   // Write your code here
//   const myInterface = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

//   myInterface.question("", async (rEmail) => {
//     const emailConfig = {
//       from: "codingninjas2k16@gmail.com",
//       to: rEmail,
//       subject: "Coding Ninjas",
//       text: "The world has enough coders; be a coding ninja!",
//     };

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "codingninjas2k16@gmail.com",
//         pass: " slwvvlczduktvhd",
//       },
//     });

//     try {
//       const result = await transporter.sendMail(emailConfig);
//       console.log("email sent successfully" + result);
//     } catch (error) {
//       console.log(error);
//     }
//   });

//   myInterface.close();
//   // const emailConfig = {
//   //   from: "codingninjas2k16",
//   //   to: rEmail,
//   //   subject: "Coding Ninjas",
//   //   text: "The world has enough coders; be a coding ninja!",
//   // };
// };

// export default Solution;

import nodemailer from "nodemailer";
import readline from "readline";

const Solution = () => {
  const cout = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Create a transporter object with SMTP details
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "codingninjas2k16@gmail.com",
      pass: "slwvvlczduktvhdj",
    },
  });

  // prompt the user to enter their email address
  cout.question("please enter your mail ", (userMail) => {
    // Define mail options
    let mailOptions = {
      from: "codingninjas2k16@gmail.com",
      to: userMail,
      text: "The world has enough coders; be a coding ninja!",
      subject: "Coding Ninjas",
    };

    // Send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log(`Success: Email sent to ${userMail}`);
      }
    });
    cout.close();
  });
};

export default Solution;
// create an interface to take input from the user

// This code uses Node.js and nodemailer library to send an email from 'codingninjas2k16@gmail.com' to the email address entered by the user. It also uses the readline library to get user input for the recipient's email address.

// Firstly, it creates an interface to take input from the user using the createInterface method of readline. Then, it creates a transporter object with SMTP details to define the email service and authentication details for the sender's email address.

// Next, it prompts the user to enter their email address using the question method of readline. After receiving the input, the code defines the email options such as sender, recipient, subject, and message body in the mailOptions object.

// Finally, it sends the email using the sendMail method of the transporter object. If the email is sent successfully, it displays a success message along with the recipient's email address, otherwise, it displays the error message. Lastly, it closes the readline interface.
