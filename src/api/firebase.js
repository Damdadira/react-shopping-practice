import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DB_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export function login() {
  signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    console.log(user)
  })
  /**
   * 콜백함수에서 함수의 인자와 호출할 인자가 동일한 경우에는 생략 가능
   * (error) => console.error(error) > 이런식으로 안적어도 됨 
   */
  .catch(console.error); 
}