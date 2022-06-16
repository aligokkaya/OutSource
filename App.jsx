import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from './src/components/TabNavigator';
import Notifications from './src/screens/Notifications';
import ShareDetails from './src/screens/ShareDetails';
import CreateShare from './src/screens/CreateShare';
import Expenses from './src/screens/Expenses';
import Accounts from './src/screens/Accounts';
import CreateAccount from './src/screens/CreateAccount';
import Account from './src/screens/Account';
import SendMoney from './src/screens/SendMoney/SendMoney';
import SendMoneySelected from './src/screens/SendMoney/SendMoneySelected';
import SendMoneyFilled from './src/screens/SendMoney/SendMoneyFilled';
import SendMoneyVerify from './src/screens/SendMoney/SendMoneyVerify';
import SendMoneySummary from './src/screens/SendMoney/SendMoneySummary';
import SendMoneySuccess from './src/screens/SendMoney/SendMoneySuccess';
import RequestMoney from './src/screens/SendMoney/RequestMoney';
import RequestMoneyFilled from './src/screens/SendMoney/RequestMoneyFilled';
import RequestMoneySummary from './src/screens/SendMoney/RequestMoneySummary';
import RequestMoneySuccess from './src/screens/SendMoney/RequestMoneySuccess';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name='Home' component={TabNavigator} />
        <Stack.Screen name='Notification' component={Notifications} />
        <Stack.Screen name='ShareDetails' component={ShareDetails} />
        <Stack.Screen name='CreateShare' component={CreateShare} />
        <Stack.Screen name='Expenses' component={Expenses} />
        <Stack.Screen name='Accounts' component={Accounts} />
        <Stack.Screen name='Account' component={Account} />
        <Stack.Screen name='CreateAccount' component={CreateAccount} />

        <Stack.Screen name='SendMoney' component={SendMoney} />
        <Stack.Screen name='SendMoneySelected' component={SendMoneySelected} />
        <Stack.Screen name='SendMoneyFilled' component={SendMoneyFilled} />
        <Stack.Screen name='SendMoneyVerify' component={SendMoneyVerify} />
        <Stack.Screen name='SendMoneySummary' component={SendMoneySummary} />
        <Stack.Screen name='SendMoneySuccess' component={SendMoneySuccess} />

        <Stack.Screen name='RequestMoney' component={RequestMoney} />
        <Stack.Screen name='RequestMoneyFilled' component={RequestMoneyFilled} />
        <Stack.Screen name='RequestMoneySummary' component={RequestMoneySummary} />
        <Stack.Screen name='RequestMoneySuccess' component={RequestMoneySuccess} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
