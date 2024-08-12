import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "green" }}
        onPress={props.OnDelete.bind(this, props.passedID)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goaltext}>{props.PassedText}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    width: "100%",
    marginTop: 15,

    borderRadius: 5,
    backgroundColor: "green",
  },
  goaltext: {
    color: "white",
    fontSize: 18,
    padding: 10,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
