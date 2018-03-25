import React, { Component } from 'react';
import { View, Text, Pano, AppRegistry, asset } from 'react-vr';
import './env';

import WeatherCard from './vr/components/WeatherCard';

class WeatherSimulator extends Component {
  constructor() {
    super();

    this.state = {
      weatherObject: {
        name: '',
        main: {
          temp: 0
        },
        weather: [
          {description: ''}
        ],
        wind: {
          deg: 1,
          speed: 1
        }
      }
    }
  }
  
  componentDidMount() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=${API_KEY}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => this.setState({weatherObject: json}));
  }

  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
      }}>
        <Pano source={asset('lombard-vr.jpg')}></Pano>
        <WeatherCard weatherObject={this.state.weatherObject}/>
      </View>
    )
  }
};

AppRegistry.registerComponent('WeatherSimulator', () => WeatherSimulator);
