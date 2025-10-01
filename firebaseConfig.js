import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { getDatabase, ref, set,push ,child,get,onValue,update} from "firebase/database"

// Firebase yapılandırması
const firebaseConfig = {
  
};

// Firebase uygulamasını başlat
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
// Firebase Authentication'ı AsyncStorage ile yapılandır
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});



export { app, auth,database,ref,set ,push,get,child,onValue};