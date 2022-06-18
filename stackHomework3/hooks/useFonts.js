import * as Font from "expo-font";
 
export default useFonts = async () =>
  await Font.loadAsync({
    'MouseMemoirs': require('../assets/fonts/MouseMemoirs-Regular.ttf'),
  });