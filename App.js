import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartIndex from './templates/startIndex';
import Mypage from './templates/mypage';
import Alert from './templates/alert';

export default function App() {
  return (
    <View>
      <StatusBar style="auto"></StatusBar>
      {/* <StartIndex></StartIndex> */}
      {/* <Mypage></Mypage> */}
      <Alert></Alert>
    </View>
  );
}