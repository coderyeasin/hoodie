import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


const hoodieInitialization = () => {
    initializeApp(firebaseConfig)
}
export default hoodieInitialization; 