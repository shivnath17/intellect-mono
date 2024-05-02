/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import React from 'react';
import { mockArray, Constants } from 'utils';

type Props = {
  max: number;
  value: number;
  onChange: (value: number) => void;
};

const Strength = (props: Props) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.label}>
          {Constants.STRENGTH_BAR_CONFIG[props.value].title}
        </Text>
        {mockArray(props.max)
          .reverse()
          .map((num: number) => {
            return (
              <TouchableHighlight
                key={num}
                onPress={() => props.onChange(num)}
                style={[
                  styles.bar,
                  {
                    width: Constants.STRENGTH_BAR_CONFIG[num].width,
                    backgroundColor: num <= props.value ? '#59a4b9' : '#bcdee5',
                  },
                ]}>
                <></>
              </TouchableHighlight>
            );
          })}
      </View>
    </>
  );
};

export default Strength;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
  },
  bar: {
    height: 30,
    marginTop: 14,
    borderRadius: 10,
  },
});
