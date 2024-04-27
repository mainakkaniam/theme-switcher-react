import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();//this creates a context

//next lets create and export a custom hook which will return the context 
//value to the caller
export const useTheme = () => {
    return useContext(ThemeContext);//useContext(someContext) basically
    //helps in consuming the value of the context or simply put returns 
    //context value respective to the someContext
}

export const ThemeProvider = ({ children }) => {
    
    //state to remember the mode
    const [isDarkMode, setIsDarkMode] = useState(true);

    //func to change the mode
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    }

    const theme = isDarkMode ? "dark" : "light";

    //here useEffect is used to change the data attribute associated with
    //the document so that based on the data attribute we can switch css
    useEffect(() => {
        console.log(isDarkMode)
        document.documentElement.setAttribute("data-theme",theme);
    }, [isDarkMode]);

    //next you will see we will be wrapping the components under the
    //Provider so that the value passed to it can be consumed inside the
    //components using useContext
    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}