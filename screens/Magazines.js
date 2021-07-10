import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Magazines extends Component {
  constructor() {
    super();
    this.state = {
      magazine: '',
    };
  }

  getMagazine = async () => {
    var url = 'https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139';
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          magazine: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  componentDidMount = () => {
    this.getMagazine();
  };

  render() {
    if (this.state.magazine === '') {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <Text style={styles.title}>Magazines</Text>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    borderWidth: 1,
    alignItems: 'center',
  },
  title: {
    marginTop: 50,
    fontSize: 30,
    fontWeight: '550',
  },
});
