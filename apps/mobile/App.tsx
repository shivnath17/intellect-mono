/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import Strength from './src/components/strength';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [strength, setStrength] = useState(1);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{ flex: 1 }}
        style={backgroundStyle}> */}
      <View
        style={[
          { backgroundColor: isDarkMode ? Colors.black : Colors.white },
          styles.container,
        ]}>
        <Strength
          max={5}
          value={strength}
          onChange={(value: number) => setStrength(value)}
        />
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
