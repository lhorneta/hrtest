import React from 'react';
import { Text, View } from 'react-native';

export default ({ hiscore }) => (
  <View style={{ height: 200, backgroundColor: '#afa', margin: 10 }}>
    <Text>HiScore placeholder</Text>
    {
      hiscore.length ?
        (<View>
          <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', borderBottomWidth: 1 }}>
            <Text style={{ flex: 1, alignSelf: 'stretch' }} >#</Text>
            <Text style={{ flex: 1, alignSelf: 'stretch' }} >Player</Text>
            <Text style={{ flex: 1, alignSelf: 'stretch' }} >Scores</Text>
          </View>
          {hiscore.map((item, i) => (
            <View key={i} style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
              <Text style={{ flex: 1, alignSelf: 'stretch' }}>{(i) + 1}.</Text>
              <Text style={{ flex: 1, alignSelf: 'stretch' }}>{item.winner}</Text>
              <Text style={{ flex: 1, alignSelf: 'stretch' }}>{item.score}</Text>
            </View>
          ))}
        </View>)
        : null
    }
  </View>
);
