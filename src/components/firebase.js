import firebase from "firebase/app"
import "firebase/auth"

//react-google-login
//www.npmjs.com/package/react-google-login
z//anthonyjgrove.github.io/react-google-login/?path=/info/google-login-button--default-button

// const firebaseConfig = 
const firebaseApp = initializeApp({
    databaseURL: "fyp1-78231 europe-west6.firebasedatabase.app", 
    apiKey: "AIzaSyAA9xr8geeF9PVznNk-9CoVWO21p78gYyw",
    authDomain: "fyp1-78231.firebaseapp.com",
    projectId: "fyp1-78231",
    storageBucket: "fyp1-78231.appspot.com",
    messagingSenderId: "162728047362",
    appId: "1:162728047362:web:f9f6a8e19c2e7fd643481b",
    measurementId: "G-9RDDFMN57Q"
  });
  
  
  
  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);
  
  export default async function getCities(db) {
    const ExampleCol = collection(db, 'Users');
    const ExampleSnapshot = await getDocs(ExampleCol);
    const ExampleList = ExampleSnapshot.docs.map(doc => doc.data());
    console.log({cityList: ExampleList})
    return ExampleList;
  }
  
  console.log(getCities(db))
  
  //detect auth state
  auth.onAuthStateChanged(user => {
  
  });
  onAuthStateChanged(auth, user => {
    if (user != null){
      console.log('Logged In!');
    } else{
      console.log('No user');
    }
  });

// export const auth = app.auth()
// export default app