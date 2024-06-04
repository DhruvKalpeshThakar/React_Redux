//useImperative Hook is used to access the function from child to parent

import { useImperativeHandle } from "react";

useImperativeHandle(ref,createHandle)  //ref is to transfer from parent to child and // creaeHandle means what data needs to be send  to parent from child