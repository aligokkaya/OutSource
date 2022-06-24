import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

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
import Deposit from './src/screens/Deposit/Deposit';
import DepositAccount from './src/screens/Deposit/DepositAccount';
import DepositTargetAccount from './src/screens/Deposit/DepositTargetAccount';
import DepositSummary from './src/screens/Deposit/DepositSummary';
import DepositSuccess from './src/screens/Deposit/DepositSuccess';
import DepositSelectBank from './src/screens/Deposit/DepositSelectBank';
import BankInformation from './src/screens/Deposit/BankInformation';
import Chat from './src/screens/Messages/Chat';
import GroupChat from './src/screens/Messages/GroupChat';
import ChatProfile from './src/screens/Messages/ChatProfile';
import GroupProfile from './src/screens/Messages/GroupProfile';
import NewChat from './src/screens/Messages/NewChat';
import NewGroupChat from './src/screens/Messages/NewGroupChat';
import CreateNewGroupChat from './src/screens/Messages/CreateNewGroupChat';
import PayShareBill from './src/screens/Messages/PayShareBill';
import Beginner from './src/screens/Profile/Beginner';
import Advanced from './src/screens/Profile/Advanced';
import Settings from './src/screens/Profile/Settings/Settings';
import PersonelInformation from './src/screens/Profile/Settings/PersonalInformation';
import NotificationSettings from './src/screens/Profile/Settings/NotificationSettings';
import ResetPasswordStep3 from './src/screens/Profile/ResetPassword/ResetPasswordStep3';
import ResetPasswordStep2 from './src/screens/Profile/ResetPassword/ResetPasswordStep2';
import ResetPasswordStep1 from './src/screens/Profile/ResetPassword/ResetPasswordStep1';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ActionSheetProvider>
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

          <Stack.Screen name='Deposit' component={Deposit} />
          <Stack.Screen name='DepositAccount' component={DepositAccount} />
          <Stack.Screen name='DepositTargetAccount' component={DepositTargetAccount} />
          <Stack.Screen name='DepositSummary' component={DepositSummary} />
          <Stack.Screen name='DepositSuccess' component={DepositSuccess} />
          <Stack.Screen name='DepositSelectBank' component={DepositSelectBank} />
          <Stack.Screen name='BankInformation' component={BankInformation} />

          <Stack.Screen name='Chat' component={Chat} />
          <Stack.Screen name='GroupChat' component={GroupChat} />
          <Stack.Screen name='ChatProfile' component={ChatProfile} />
          <Stack.Screen name='GroupProfile' component={GroupProfile} />
          <Stack.Screen name='NewChat' component={NewChat} />
          <Stack.Screen name='NewGroupChat' component={NewGroupChat} />
          <Stack.Screen name='CreateNewGroupChat' component={CreateNewGroupChat} />
          <Stack.Screen name='PayShareBill' component={PayShareBill} />

          <Stack.Screen name='Beginner' component={Beginner} />
          <Stack.Screen name='Advanced' component={Advanced} />
          <Stack.Screen name="Settings" component={Settings}/>
          <Stack.Screen name="PersonelInformation" component={PersonelInformation}/>
          <Stack.Screen name="NotificationSettings" component={NotificationSettings}/>
          <Stack.Screen name="ResetPasswordStep1" component={ResetPasswordStep1}/>
          <Stack.Screen name="ResetPasswordStep2" component={ResetPasswordStep2}/>
          <Stack.Screen name="ResetPasswordStep3" component={ResetPasswordStep3}/>


        </Stack.Navigator>
      </NavigationContainer>
    </ActionSheetProvider>
  );
};


export default App;
