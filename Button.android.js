const React = require('react');
const ReactNative = require('react-native');
const {
    TouchableHighlight,
  View,
} = ReactNative;

const Button = (props) => {
  return <TouchableHighlight underlayColor={'transparent'}
    delayPressIn={0}

    {...props}
  >
    {props.children}
  </TouchableHighlight>;
};

module.exports = Button;
