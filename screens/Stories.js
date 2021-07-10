import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Stories extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>StoriesScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 0.1,
    fontWeight: 'bold',
  },
});
