// import lib
import React from 'react';
import { 
  Text,
  View,
  StyleSheet } from 'react-native';
// make component
const Header = (props) => {
  const { viewStyle, textStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 0.2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
  }
});

// make component available to other
export default Header;
