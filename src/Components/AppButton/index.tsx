import {
    StyleProp,
    Text,
    TouchableOpacity,
    ViewStyle,
} from "react-native";

type appButtonProps = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

const AppButton = ({
  title,
  onPress,
  style,
}: appButtonProps) => {
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