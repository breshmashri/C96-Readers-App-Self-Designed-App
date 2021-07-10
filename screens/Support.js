import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Support extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>SupportScreen</Text>
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
