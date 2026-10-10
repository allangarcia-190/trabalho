import { useState } from "react";
import {
    Button,
    FlatList,
    Image,
    ScrollView,
    Text,
    TextInput,
    View,
} from "react-native";

import AppButton from "../../Components/AppButtonProps";
import Card from "../../Components/CardProps";
import Header from "../../Components/Header/index";
import UseState from "../../Components/UseState";

type Tarefa = {
  id: string;
  title: string;
  concluida: boolean;
};

const HomeScreen = () => {
  const nome = "Roberto";
  const idade = 8;

  const [curso, setCurso] = useState("Pobre");
  const [email, setEmail] = useState<string>("");
  const [novaTarefa, setNovaTarefa] = useState("");

  const [tarefas, setTarefas] = useState<Tarefa[]>([
    {
      id: "1",
      title: "Tarefa 1",
      concluida: false,
    },
    {
      id: "2",
      title: "Tarefa 2",
      concluida: false,
    },
    {
      id: "3",
      title: "Tarefa 3",
      concluida: true,
    },
  ]);

  const adicionarTarefa = () => {
    const titulo = novaTarefa.trim();

    if (!titulo) return;

    setTarefas((atuais) => [
      ...atuais,
      {
        id: String(Date.now()),
        title: titulo,
        concluida: false,
      },
    ]);

    setNovaTarefa("");
  };

  const concluirTarefa = (id: string) => {
    setTarefas((atuais) =>
      atuais.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa
      )
    );
  };

  const eliminarTarefa = (id: string) => {
    setTarefas((atuais) =>
      atuais.filter((tarefa) => tarefa.id !== id)
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        <Header
          title="Texto Grande"
          subtitle="Texto Pequeno"
        />

        <Text>{nome}</Text>
        <Text>{idade + 10}</Text>
        <Text>{curso}</Text>
        <Text>{email}</Text>

        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Digite o email"
          keyboardType="email-address"
          autoCapitalize="none"
          style={{
            borderWidth: 1,
            borderColor: "#999",
            borderRadius: 8,
            padding: 10,
            marginVertical: 10,
          }}
        />

        <Button
          onPress={() => setCurso("sem teto")}
          title="Resultado do trabalho"
        />

        <Image
          source={{
            uri: "https://m.media-amazon.com/images/I/61yYhyyG3VL._AC_UF894,1000_QL80_.jpg",
          }}
          style={{
            width: 250,
            height: 250,
            borderRadius: 175,
            alignSelf: "center",
            marginTop: 40,
          }}
        />

        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Pedro no parque
        </Text>

        <Image
          source={{
            uri: "https://m.magazineluiza.com.br/a-static/420x420/estatua-de-pato-musculoso-fofo-decoracao-3d-para-mesa-figurinha-divertida-para-estante-decoracao-none/aliexpress/207363034/6750ed32792d4fbbbaa107f01ac4d4df.jpeg",
          }}
          style={{
            width: 250,
            height: 250,
            borderRadius: 175,
            alignSelf: "center",
            marginTop: 40,
          }}
        />

        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 30,
          }}
        >
          Pedro após parque
        </Text>

        <AppButton
          style={{
            borderRadius: 8,
            backgroundColor: "#007bff",
            width: 200,
            alignSelf: "center",
            marginBottom: 20,
          }}
          title="Abre"
          onPress={() => alert("Botão pressionado!")}
        />

        <TextInput
          value={novaTarefa}
          onChangeText={setNovaTarefa}
          placeholder="Escreve uma nova tarefa"
          onSubmitEditing={adicionarTarefa}
          style={{
            borderWidth: 1,
            borderColor: "#999",
            borderRadius: 8,
            padding: 10,
            marginVertical: 10,
          }}
        />

        <AppButton
          onPress={adicionarTarefa}
          title="Adicionar Tarefa"
        />

        <FlatList
          data={tarefas}
          style={{ marginHorizontal: 10 }}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              concluida={item.concluida}
              onConcluir={() => concluirTarefa(item.id)}
              onDelete={() => eliminarTarefa(item.id)}
            />
          )}
          ListEmptyComponent={
            <Text style={{ textAlign: "center", marginTop: 20 }}>
              Não existem tarefas.
            </Text>
          }
        />

        <UseState />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;