import {useContext } from 'react';
import { ThemeContext } from '../context-store/context';

const useTheme = () => {
  const {theme} = useContext(ThemeContext);
  const lightTheme = {
    mainColor: 'red',
  };
  const darkTheme = {
    mainColor: 'green',
  };
  const colorMode = theme === "light" ? lightTheme : darkTheme
  return {colorMode}
};

export default useTheme;

