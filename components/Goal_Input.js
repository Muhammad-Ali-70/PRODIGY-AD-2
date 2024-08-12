import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState, useEffect } from "react";

export default function GoalInputComponent(props) {
  const [AddGoalText, SetGoalText] = useState("");

  useEffect(() => {
    if (props.editGoal) {
      SetGoalText(props.editGoal.text);
    }
  }, [props.editGoal]);

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
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter Your Goal"
          onChangeText={goalInputHandler}
          value={AddGoalText}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="#6c757d" onPress={props.OnCancel} />
          </View>
          <View style={styles.button}>
            <Button
              title={props.editGoal ? "Edit Goal" : "Add Goal"}
              color="#007bff"
              onPress={AddgoalTextHandler}
            />
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
    backgroundColor: "#e9ecef",
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#007bff",
    width: "100%",
    padding: 16,
    fontSize: 16,
    borderRadius: 8,
    color: "black",
    backgroundColor: "#fff",
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
