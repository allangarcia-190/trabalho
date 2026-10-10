import {
    StyleProp,
    Text,
    TouchableOpacity,
    ViewStyle,
} from "react-native";

type AppButtonProps = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

const AppButton = ({
  title,
  onPress,
  style,
}: AppButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor: "#2b362d",
          padding: 10,
          borderRadius: 6,
          alignItems: "center",
        },
        style,
      ]}
    >
      <Text
        style={{
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;