import { Image, ImageSourcePropType, StyleSheet } from "react-native";

interface AvatarProps {
  src: ImageSourcePropType;
}

export default function Avatar({ src }: AvatarProps) {
  return <Image style={styles.img} source={src} />;
}

const styles = StyleSheet.create({
  img: { width: 100, height: 100, resizeMode: "cover", borderRadius: 50 },
});
