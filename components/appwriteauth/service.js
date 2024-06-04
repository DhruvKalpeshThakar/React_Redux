//steps to implement appwrite


//Install Appwrite package ("npm i appwrite")

//import belowcomponent from appwrite
import { ID,Account,Client } from "appwrite";


//create a variable to set endpoint and project id so configure the project
const the_client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('665edec000002a24384b');

// variable and use method to create new ACCOUNT    
const account = new Account(the_client);


//SIGN-UP PROCESS

//using create method to register new user where three parameters are compulsory which is (email,password,name)
const promise = account.create('[USER_ID]', 'email@example.com', '');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});


//LOGIN PROCESS
try {
    account.createEmailPasswordSession(userData.email,userData.password) //Here userData is the state which stores email and password
} catch (error) {
    
}


//account.get method is used to get users data from Database
account.get()



