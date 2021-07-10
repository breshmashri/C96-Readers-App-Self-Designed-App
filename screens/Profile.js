import React, { Component } from 'react';
import { View, Text, StyleSheet, ImagePicker } from 'react-native';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>ProfileScreen</Text>
      </View>
    );
  }
}

selectPicture = async () => {
  const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });
  if (!cancelled) {
    this.uploadImage(uri, this.state.userId);
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 0.1,
    fontWeight: 'bold',
  },
});
