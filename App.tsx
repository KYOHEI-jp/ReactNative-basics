import React from 'react';
import { RootNavigator } from './navigations/RootNavigator';

export default function App() {
  return (
    <RootNavigator />
    // flex-1でバックグラウンド全体、背景全部にgray-300、縦真ん中、横中央寄せ
    // <View style={tw('flex-1 bg-gray-300 justify-center items-center')}>
    //   <Text>Open up App.tsx to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     // flexは画面全体を指す
//     flex: 1,
//     backgroundColor: 'gray',
//     // 主軸に対して横の位置決め
//     alignItems: 'center',
//     // 主軸は縦になってる(Column)
//     justifyContent: 'center',
//   },
// });
