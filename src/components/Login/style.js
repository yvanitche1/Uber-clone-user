import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "70%",
    marginTop: "5%",
    // backgroundColor: "#ffffff",
  },

  textLabel: {
    color: "#ffffff",
    fontSize: 20,
  },

  textInput: {
    height: 50,
    backgroundColor: 'rgba(255,255,255,5)',
    paddingLeft: 10,
    marginBottom: 15,
    borderRadius: 5,
    fontSize: 15,
    backgroundColor: "#ffffff"
  },

  errorText: {
    fontSize: 10,
    color: "#ffffff",
    alignSelf: 'center',
    marginTop: 30
  },

  buttonText: {
    textAlign: 'center',
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },

  buttonContainer: {
    backgroundColor: "#3B3B98",
    padding: 5,
    borderRadius: 20,
  }
})

export default style;