import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/Goal_Item";
import GoalInputComponent from "./components/Goal_Input";

export default function App() {
  const [courseGoals, SetCourseGoals] = useState([]);

  const [ModalIsVisible, SetModalisVisible] = useState(false);

  function StartModalVisibility() {
    SetModalisVisible(true);
  }

  function CancelModalVisibilty() {
    SetModalisVisible(false);
  }

  function AddButtonGoalText(enteredText) {
    // SetCourseGoals([... courseGoals,AddGoalText]);

    SetCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredText, indexNumber: Math.random().toString() },
    ]);
    CancelModalVisibilty();
  }

  function DeleteGoalHandler(ParameterID) {
    SetCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter(
        (goal) => goal.indexNumber !== ParameterID
      );
    });
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appcontainer}>
        <View style={styles.TopButtonView}>
          <Button
            title="Add New Goal"
            color="#f13a3a"
            onPress={StartModalVisibility}
          ></Button>
        </View>

        <GoalInputComponent
          AddGoal={AddButtonGoalText}
          visible={ModalIsVisible}
          OnCancel={CancelModalVisibilty}
        />

        <View style={styles.goalListContainer}>
          {/* <Text style={styles.headingtext}>List of Goals</Text> */}
          <FlatList
            data={courseGoals}
            renderItem={(EachItem) => {
              return (
                <GoalItem
                  PassedText={EachItem.item.text}
                  OnDelete={DeleteGoalHandler}
                  passedID={EachItem.item.indexNumber}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.indexNumber;
            }}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    flex: 1,
    backgroundColor: "#e4e4e4",
    paddingTop: 50,
    paddingHorizontal: 18,
  },
  inputAreaView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    width: "70%",
    marginRight: 10,
    padding: 7,
    fontSize: 16,
  },
  goalListContainer: {
    flex: 6,
  },

  headingtext: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  TopButtonView: {
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
});
