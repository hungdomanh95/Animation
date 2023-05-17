// import createContext and useState
import React, { createContext, useState } from 'react';
import {useColorScheme} from 'react-native';
// Initiate context
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    // Manage theme state
    const themeDevice = useColorScheme();
    const [theme, setTheme] = useState(themeDevice);
    return (
        <ThemeContext.Provider
            value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export {
    ThemeContext,
    ThemeProvider
}
