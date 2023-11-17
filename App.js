import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartIndex from './templates/startIndex';
import Mypage from './templates/mypage';

export default function App() {
  return (
    <View>
      <StatusBar style="auto"></StatusBar>
      <Mypage></Mypage>
    </View>
  );
}
