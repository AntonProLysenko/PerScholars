import styled from "styled-components"
import {CgSun} from "react-icons/cg"
import {HiMoon} from "react-icons/hi"

import Sidebar from "./Sidebar"
import Reviews from "./Reviews"
import Raiting from "./Raiting"
import Analysis from "./Analysis"
import Visitors from "./Visitors"





const Toggle = styled.button`
    cursor: pointer;
    height: 50px;
    width: 50px;   
    border-radius: 50%;
    border: none;
    background-color: ${props => props.theme.buttonColor};
    color: ${props => props.theme.pageBackground};
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`;

const Page = styled.div`
  
  background-color: ${props => props.theme.pageBackground};
  transition: all .5s ease;
`;

const Body = styled.div`
    
    background-image: ${props => props.theme.bodyBackground};
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover;

    width: 100vw;
	height: 100vh;
	text-align: center;
    position: relative;
    font-family:'Courier New', Courier, monospace;
`;


export default function Main(props){
    function changeTheme(){
        if(props.theme === 'light'){
            props.setTheme("dark")
        }else{
            props.setTheme('light')
        }
    }
    
    const icon = props.theme === "light"? <HiMoon size ={40}/>:<CgSun size ={40}/>
   
    return(
        <Body className="body">
            <Page className = "container">

                    <Sidebar />
                    <Reviews/> 
                    <Raiting/> 
                    <Analysis/> 
                    <Visitors/> 

                    <Toggle onClick={changeTheme}>
                        {icon}
                    </Toggle>
            </Page>
        </Body>
    )
}