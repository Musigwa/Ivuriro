import BoardingScreen from './screens/boarding';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { lightTheme, darkTheme } from './assets/themes';
import { useColorScheme } from 'react-native';

// export default () => {
//   return (
//     <SafeAreaProvider>
//       <SafeAreaView style={{ flex: 1 }}>
//         <BoardingScreen />
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// };

export default () => {
  const colorScheme = useColorScheme();

  const paperTheme = colorScheme === 'dark' ? { ...darkTheme } : { ...lightTheme };
  return (
    // <StoreProvider store={store}>
    <PaperProvider theme={paperTheme}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <BoardingScreen />
        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>
    // </StoreProvider>
  );
};
