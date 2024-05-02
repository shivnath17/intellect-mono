import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Svg, Circle as SvgCircle, Text as SVGText } from 'react-native-svg';

type Props = {
  count: number;
  step: number;
};

const Circle = ({ count = 2, step = 5 }: Props) => {
  return (
    <View style={styles.container}>
      <Svg width={'100%'} height={'100%'} viewBox="0 0 100 100">
        {/* <!-- Outer circle --> */}
        <SvgCircle
          // className="text-gray-200 stroke-current outer__circle"
          stroke-dasharray="4"
          cx="58"
          cy="58"
          r="48"
          fill="transparent"
        />

        {/* <!-- Inner circle --> */}
        <SvgCircle
          // className="text-brand-900 stroke-current mask__circle"
          stroke-width="10"
          cx="45"
          cy="45"
          r="35"
          fill="transparent"
        />

        {/* <!-- Progress circle --> */}
        <SvgCircle
          // className="text-gray-200 stroke-current ring__circle"
          stroke-width="4"
          stroke-linecap="round"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          stroke-dasharray="251.2"
          stroke-dashoffset={251.2 - (251.2 * (count * step)) / 100}
        />

        {/* <!-- Center circle --> */}
        <SvgCircle
          // className="bg__circle"
          cx="40"
          cy="40"
          r="30"
          fill={'#58a4b8'}
        />

        {/* <!-- Center text --> */}
        <SVGText
          x="50"
          y="50"
          font-family="Verdana"
          font-size="12"
          text-anchor="middle"
          fill="white"
          alignment-baseline="middle">
          {count}
        </SVGText>
      </Svg>
    </View>
  );
};

export default Circle;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    position: 'relative',
    height: 240,
    width: 240,
  },
  outerCircle: {
    transition: 'stroke-dashoffset 0.35s',
    transform: 'rotate(-90deg)',
    transforOrigin: '50% 58%',
  },
});
