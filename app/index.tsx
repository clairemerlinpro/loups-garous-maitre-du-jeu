import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { View } from "react-native";
import LoginPage from "../pages/LoginPage";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    Cinzel: require("../assets/fonts/Cinzel-Regular.otf"),
    CinzelBold: require("../assets/fonts/Cinzel-Bold.otf"),
    Roboto: require("../assets/fonts/Roboto-Regular.ttf"),
    RobotBold: require("../assets/fonts/Roboto-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <LoginPage />
    </View>
  );
}
