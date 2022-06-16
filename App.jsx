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
import WithdrawMoney from './src/screens/WithdrawMoney/WithdrawMoney';
import CreateWithdrawRequest from './src/screens/WithdrawMoney/CreateWithdrawRequest';
import WithdrawVerify from './src/screens/WithdrawMoney/WithdrawVerify';
import WithdrawSummary from './src/screens/WithdrawMoney/WithdrawSummary';
import WithdrawSuccess from './src/screens/WithdrawMoney/WithdrawSuccess';
import QRTransactions from './src/screens/QRTransactions/QRTransactions';
import YourQR from './src/screens/QRTransactions/YourQR';
import SendMoneyWithQR from './src/screens/QRTransactions/SendMoneyWithQr';
import QRScanned from './src/screens/QRTransactions/QRScanned';
import QRRequestMoney from './src/screens/QRTransactions/QRRequestMoney';
import QRRequestScan from './src/screens/QRTransactions/QRRequestScan';
import QRRequestScanned from './src/screens/QRTransactions/QRRequestScanned';
import QRPayment from './src/screens/QRTransactions/QRPayment';
import NewFastTransaction from './src/screens/WithdrawMoney/NewFastTransaction';
import FastTransaction from './src/screens/WithdrawMoney/FastTransaction';

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

        <Stack.Screen name='WithdrawMoney' component={WithdrawMoney} />
        <Stack.Screen name='CreateWithdrawRequest' component={CreateWithdrawRequest} />
        <Stack.Screen name='WithdrawVerify' component={WithdrawVerify} />
        <Stack.Screen name='WithdrawSummary' component={WithdrawSummary} />
        <Stack.Screen name='WithdrawSuccess' component={WithdrawSuccess} />

        <Stack.Screen name='QRTransactions' component={QRTransactions} />
        <Stack.Screen name='YourQR' component={YourQR} />
        <Stack.Screen name='SendMoneyWithQR' component={SendMoneyWithQR} />
        <Stack.Screen name='QRScanned' component={QRScanned} />
        <Stack.Screen name='QRRequestMoney' component={QRRequestMoney} />
        <Stack.Screen name='QRRequestScan' component={QRRequestScan} />
        <Stack.Screen name='QRRequestScanned' component={QRRequestScanned} />
        <Stack.Screen name='QRPayment' component={QRPayment} />

        <Stack.Screen name='NewFastTransaction' component={NewFastTransaction} />
        <Stack.Screen name='FastTransaction' component={FastTransaction} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
