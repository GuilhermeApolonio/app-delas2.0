import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export function Home({ navigation }) {
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.mapDois}
            initialRegion={{
              latitude: -8.05428,
              longitude: -34.8813,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            mapType="standard"
            showsCompass={true}
            showsScale={true}
            showsTraffic={true}
            showsBuildings={true}
            showsIndoors={true}
          ></MapView>

          <View style={styles.buscar}>
            <Entypo
              style={styles.icon}
              name="magnifying-glass"
              size={30}
              color="grey"
            />
            <TextInput
              style={styles.buscarText}
              placeholder="Para onde você quer ir? "
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingTop: 700,
    marginBottom: 122,
  },

  mapDois: {
    ...StyleSheet.absoluteFillObject,
    marginVertical: 0,
    width: 700,
    height: 900,
    margin: 100,
    marginLeft: -100,
    alignItems: 'center',
    alignContent: 'center',
  },

  icon: {
    width: 35,
  },
  buscar: {
    borderWidth: 0,
    borderColor: '#EAEFFF',
    padding: 9,
    marginEnd: 1,
    width: 380,
    borderRadius: 6,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  buscarText: {
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: '#EAEFFF',
    borderRadius: 5,
    paddingHorizontal: 14,
    flexDirection: 'row',
  },
});

export default Home;
