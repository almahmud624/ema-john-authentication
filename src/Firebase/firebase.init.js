import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const firebaseInit = () => {
    initializeApp(firebaseConfig);
}

export default firebaseInit;


/*  Steps for Authentication
-----------------------------
Initial setup
1. firebase: create project
2. create web app
3. get configuration
4. initalize setup
5. Enable auth method
-----------------------------
step 2: setup component
1. Create Login component
2. Create Register component
3. Create Route for login and register
----------------------------
step 3: set auth system
1. Setup login method
2. setup signout method
3. user state
4. special observer
5. export necessery methods and states from firebase
----------------------------
step 4: create auth context (useAuth)
1. Create a Auth context
2. Create context provider
*. Set context provider value
4. use Auth provider
5. create useAuth hook
----------------------------
step 5: create private route
1. Create private route
2. Set private route
*/

