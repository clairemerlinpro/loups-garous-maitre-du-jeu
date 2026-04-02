import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, type ReactNode } from "react";
import { useColorScheme, View } from "react-native";
import LoginPage from "./pages/LoginPage";
import { ThemeProvider, useTheme } from "../theme/ThemeContext";

SplashScreen.preventAutoHideAsync();

function ThemedShell({ children }: { children: ReactNode }) {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      {children}
    </View>
  );
}

export default function App() {
  const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({
    Cinzel: require("./assets/fonts/Cinzel-Regular.otf"),
    CinzelBold: require("./assets/fonts/Cinzel-Bold.otf"),
    Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotBold: require("./assets/fonts/Roboto-Bold.ttf"),
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
    <ThemeProvider colorScheme={colorScheme}>
      <ThemedShell>
        <LoginPage />
      </ThemedShell>
    </ThemeProvider>
  );
}
