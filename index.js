
import { AppRegistry, Platform, Text, TextInput } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

Text.defaultProps = Text.defaultProps || {}
Text.defaultProps.style = {
    fontFamily: Platform.select({
        ios: 'Rubik-Medium',
        android: 'RubikMedium'
    })
}

TextInput.defaultProps = TextInput.defaultProps || {}
TextInput.defaultProps.style = {
    fontFamily: Platform.select({
        ios: 'Rubik-Medium',
        android: 'RubikMedium'
    })
}

AppRegistry.registerComponent(appName, () => App);
