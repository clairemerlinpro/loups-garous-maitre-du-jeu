import { Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function LoginPage() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/wolf.jpeg")} />
      <Text style={{ fontFamily: "Cinzel-Bold" }}>Loups-Garous</Text>
      <Text style={{ fontFamily: "Cinzel" }}>Maître du Jeu</Text>
      <Text style={{ fontFamily: "Roboto" }}>Description</Text>
      <Text>Connexion</Text>
      <TextInput placeholder="E-mail" />
      <TextInput placeholder="Mot de passe" />
      <Text>Mot de pass oublié ?</Text>
      <Text>Créer un compte</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
  },
});
