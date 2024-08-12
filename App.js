import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/Goal_Item";
import GoalInputComponent from "./components/Goal_Input";

export default function App() {
  const [courseGoals, SetCourseGoals] = useState([]);
  const [ModalIsVisible, SetModalisVisible] = useState(false);
  const [editGoalId, setEditGoalId] = useState(null);

  function StartModalVisibility(goalId = null) {
    setEditGoalId(goalId);
    SetModalisVisible(true);
  }

  function CancelModalVisibilty() {
    SetModalisVisible(false);
    setEditGoalId(null);
  }

  function AddOrEditGoalText(enteredText) {
    if (editGoalId) {
      SetCourseGoals((currentCourseGoals) =>
        currentCourseGoals.map((goal) =>
          goal.indexNumber === editGoalId
            ? { ...goal, text: enteredText }
            : goal
        )
      );
    } else {
      SetCourseGoals((currentCourseGoals) => [
        ...currentCourseGoals,
        { text: enteredText, indexNumber: Math.random().toString() },
      ]);
    }
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
            color="#007bff"
            onPress={() => StartModalVisibility()}
          />
        </View>

        <GoalInputComponent
          AddGoal={AddOrEditGoalText}
          visible={ModalIsVisible}
          OnCancel={CancelModalVisibilty}
          editGoal={courseGoals.find((goal) => goal.indexNumber === editGoalId)}
        />

        <View style={styles.goalListContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(EachItem) => {
              return (
                <GoalItem
                  PassedText={EachItem.item.text}
                  OnDelete={DeleteGoalHandler}
                  onEdit={() => StartModalVisibility(EachItem.item.indexNumber)}
                  passedID={EachItem.item.indexNumber}
                />
              );
            }}
            keyExtractor={(item) => item.indexNumber}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    paddingTop: 50,
    paddingHorizontal: 18,
  },
  goalListContainer: {
    flex: 6,
  },
  TopButtonView: {
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: "#dee2e6",
  },
});
