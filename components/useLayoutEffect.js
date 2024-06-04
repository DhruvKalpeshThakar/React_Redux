//This Hook is identical to useEffect 

import { useLayoutEffect } from "react";

//But useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.

//same syntax
useLayoutEffect(() => {

}, [])



//well this hook is not preferable to use because it can degrade performance and user experience