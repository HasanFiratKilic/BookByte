import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import SignIn from "./src/pages/SignIn/SignIn";
import SignUp from "./src/pages/SignUp/SignUp";
import Library from "./src/pages/Library/Library";
import FlashMessage from "react-native-flash-message";
import SaveBook from "./src/pages/SaveBook/SaveBook";
import SettingButton from "./src/components/SettingButton/SettingButton";
import Setting from "./src/pages/Setting/Setting";
import BookUpdate from "./src/pages/BookUpdate/BookUpdate";



const Stack = createNativeStackNavigator();

const RootStack = () => {
  const [initialRoute, setInitialRoute] = useState("SingInPage");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setInitialRoute("LibraryPage"); 
      } else {
        setInitialRoute("SingInPage"); 
      }
      setLoading(false); 
    });

    return () => unsubscribe(); 
  }, []);

  if (loading) {
    return null; 
  }

  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }} initialRouteName={initialRoute}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="SingInPage"
        component={SignIn}
      />
      <Stack.Screen
        options={{ title: "Kayıt Ol" }}
        name="SingUpPage"
        component={SignUp}
      />
      <Stack.Screen
        options={{ headerTitle: "Kitaplığım" ,headerRight:()=> <SettingButton/> }}
        name="LibraryPage"
        component={Library}
      />
      <Stack.Screen
        options={{headerTitle:"Kitap Kayıt"}}
        name="SaveBookPage"
        component={SaveBook}
      />
      <Stack.Screen
        options={{headerTitle:"Ayarlar"}}
        name="SettingPage"
        component={Setting}
      />
      <Stack.Screen
        options={{headerTitle:"Kitap"}}
        name="BookUpdatePage"
        component={BookUpdate}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
}