import * as React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
export default class RecentPass extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text style={styles.text}>Welcome To passcode Gen</Text>
        <TouchableOpacity
        style={styles.button}
          onPress={() => {
            this.props.navigation.navigate("RecentPasscode");
          }}
        >
          <Text style={styles.buttonText}>Click to relocate</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "grey",
    alignItems: "center",
    width: 190,
    height: 50,
    alignSelf: "center",
    justifyContent:'center',
    borderRadius:2,
    borderWidth:2
  },
  text: {
    alignSelf: "center",
    marginTop: 50,
    padding: 20,
    fontSize: 30,
    
  },
  buttonText: {
    textAlign:'center',
    
    color:'orange',
  },
});
