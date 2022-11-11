import { NativeBaseProvider, StatusBar } from "native-base";
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Loading } from './src/components/Loading';
import { SignIn } from './src/screens/SignIn';
import { THEME } from "./src/styles/theme";
import { AuthContextProvider } from "./src/contexts/AuthContext";

export default function App() {

  const [fontLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold })

  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>
       <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="#105846"
       />

      { fontLoaded ? <SignIn /> : <Loading /> }
      
      </AuthContextProvider>
    </NativeBaseProvider>
   
  );
}
