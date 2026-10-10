import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
export default function UseState() {
  const [count, setCount] = useState<number>(0);
 return (
    <>
    <TouchableOpacity onPress={() => setCount(count + 1)  } style={{
    backgroundColor: "#e74c3c",
    padding: 12,
    borderRadius: 300,
    width: 110,
    alignItems: "center",
    alignSelf: "center",
  }}>

    <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
      {count}
    </Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => setCount(0)  } style={{
    backgroundColor: "#3498db",
    padding: 12,
    borderRadius: 300,
    width: 90,
    alignItems: "center",
    alignSelf: "center",
  }}>
    <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
      reset
    </Text>
    </TouchableOpacity>
  </>
  );
}