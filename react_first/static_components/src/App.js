
import {useState} from "react"
import {ThemeProvider} from "styled-components"


import Main from "./components/Main"
import './App.css';





const LightTheme ={
  bodyBackground:"linear-gradient(to bottom right, hsl(188deg 91% 74%), rgb(234 194 200))",
  pageBackground:"rgb(177 241 216)",
  boxBackground:" rgb(234 194 200)",
  sidebarBackground:"rgb(177 241 216)",
  color:"rgb(62 61 84)",

  buttonColor:"#dc658b",
}

const DarkTheme={
  bodyBackground:"linear-gradient(110.6deg, rgb(156, 116, 129) -18.3%, rgb(67, 54, 74) 16.4%, rgb(47, 48, 67) 68.2%, rgb(27, 23, 36) 99.1%);",
  pageBackground:"rgb(62 61 84)",
  boxBackground:"rgb(39 46 58)",
  sidebarBackground:"rgb(62 61 84)",
  color:"white",

  buttonColor:"rgb(0 215 192)",  
}

const themes ={
  light:LightTheme,
  dark:DarkTheme
}

function App() {
  const[theme,setTheme] = useState('light')
  return (
    <ThemeProvider theme ={themes[theme]}>
        <Main className = "container" theme ={theme} setTheme={setTheme}/>
    </ThemeProvider>
  );
}

export default App;
