import styled from "styled-components"

const Container = styled.div`
    background-color: ${props => props.theme.sidebarBackground};
    transition: all .5s ease;
    margin:0;
	padding:0;
    grid-area:sidebar;
    display:flex;
    flex-direction: column;
    justify-content: center;
    color: ${props => props.theme.color};
`;




export default function Sidebar (){
    return(

        <Container className = "box sidebar">
                <div className = "links">
                    <h4>Dashboard</h4>
                    <h4>Widget</h4>
                    <h4>Reviews</h4>
                    <h4>Custumers</h4>
                    <h4>Online Analysys</h4>
                    <h4>Setting</h4>
                </div>
         </Container>
    )
}

