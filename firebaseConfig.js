import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { getDatabase, ref, set,push ,child,get,onValue,update} from "firebase/database"

// Firebase yapılandırması
const firebaseConfig = {
  apiKey: "AIzaSyBlR0GTS6nlN8Z9k9-scRxLhaxgNYqAFFo",
  authDomain: "mylibrary-8cd9d.firebaseapp.com",
  projectId: "mylibrary-8cd9d",
  storageBucket: "mylibrary-8cd9d.firebasestorage.app",
  messagingSenderId: "966978448038",
  appId: "1:966978448038:web:3c515b4f871a313e1a2267",
};

// Firebase uygulamasını başlat
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
// Firebase Authentication'ı AsyncStorage ile yapılandır
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});



export { app, auth,database,ref,set ,push,get,child,onValue};