import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
      <Image
        source={{uri: 'https://picsum.photos/200'}}
        style={styles.image}
      ></Image>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#7499eb'
  },
  title: { 
    fontSize: 30,
    color: '#fff', 
  },
  image: {
    width: '200', 
    height: '200'
  }
})

export default App;