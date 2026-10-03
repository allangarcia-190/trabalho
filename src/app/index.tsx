
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

interface BotaoProps {
  text:string;
  onPress:() => void;
}

const HomeScreen = ({onPress, text} : BotaoProps) => {
  const nome ="Roberto";
  const idade=8;
  const [curso, setCurso]= useState("Pobre");
  const [email, seteMail] = useState<string>("")
  return (
    <View>
      <Text>{nome}</Text>
      <Text>{idade+10}</Text>
      <Text>{curso}</Text>
      <Text>{email}</Text>
      <TextInput
        value={email}
        onChangeText={seteMail}
        placeholder="digite o email"
        ></TextInput>
      <Button onPress={() => setCurso("sem teto")} title="{resultado do trabalho }"/>  
    
    
    </View>
  )
}

export default HomeScreen
