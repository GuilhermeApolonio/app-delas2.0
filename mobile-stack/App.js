import { StyleSheet} from 'react-native';
import Auth from './src/pages/Auth';
import { React } from "react";


export default function App() {
  return (
    <Auth/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
