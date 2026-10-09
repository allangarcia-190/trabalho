
import { useState } from "react";
import { Button, Image, ScrollView, Text, TextInput, View } from "react-native";
import Header from "../Components/Header";

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
     <View style={{flex:1, backgroundColor:'#fff'}}>
      <ScrollView>
        <Header title="Texto Grande" subtitle="Texto Pequeno" />
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
    
       <Image source={{uri: "https://m.media-amazon.com/images/I/61yYhyyG3VL._AC_UF894,1000_QL80_.jpg"}} style={{width:250, height:250,borderRadius:175, alignSelf:'center', marginTop:200 }}/>
        <Text style={{fontSize:20, fontWeight:'bold', alignItems:'center', textAlign:'center'}}>  "Pedro no parque" </Text>
    
      <Image source={{uri: "https://m.magazineluiza.com.br/a-static/420x420/estatua-de-pato-musculoso-fofo-decoracao-3d-para-mesa-figurinha-divertida-para-estante-decoracao-none/aliexpress/207363034/6750ed32792d4fbbbaa107f01ac4d4df.jpeg"}} style={{width:250, height:250,borderRadius:175, alignSelf:'center', marginTop:200 }}/>
     <Text style={{fontSize:20, fontWeight:'bold', alignItems:'center', textAlign:'center', marginBottom:100}}>  "Pedro apos parque" </Text>
    
    </ScrollView>
    </View>
  )
}

export default HomeScreen
