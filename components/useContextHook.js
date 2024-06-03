//About React Context API which  is a way to share data between components without having
// to pass props down manually at every level. This can be useful for sharing data that is considered "global" .

//1 - Import createContext which indicates the creation
import { createContext } from "react";

//2 - take one variable with createContext
const noteText = createContext()  


//3 - import usecontext to use it
import { useContext } from "react";  //can use it in any file to access stored data

//4 - Wrap the file with .Provider , je file ma createContext lidhu hoy ena thi wrap karvanu , value prop can be used to pass data , Don't forget to use {props.children} insider provider Tag

//5 - Now Wrap the whole App.js with your Main Function where you have used createContext