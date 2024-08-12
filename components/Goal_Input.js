import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

export default function GoalInputComponent(props) {
  const [AddGoalText, SetGoalText] = useState("");

  function goalInputHandler(enteredText) {
    SetGoalText(enteredText);
  }

  function AddgoalTextHandler() {
    props.AddGoal(AddGoalText);
    SetGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputAreaView}>
        <Image
          source={require("../assets/images/goal3.png")}
          style={styles.Image}
        ></Image>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Your Goal"
          onChangeText={goalInputHandler}
          value={AddGoalText}
        ></TextInput>

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color="#3369ff"
              onPress={props.OnCancel}
            ></Button>
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              color="#f13a3a"
              onPress={AddgoalTextHandler}
            ></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputAreaView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a3eaa3",
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#f13a3a",
    width: "100%",
    padding: 16,
    fontSize: 16,
    borderRadius: 8,
    color: "black",
    backgroundColor: "#fbfbfb",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    marginHorizontal: 10,
    width: "35%",
    marginVertical: 30,
  },
  Image: {
    height: 150,
    width: 150,
    marginBottom: 20,
  },
});
