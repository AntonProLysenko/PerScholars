import styled from "styled-components"
const Container = styled.div`
    background-color: ${props => props.theme.boxBackground};
    transition: all .5s ease;
    grid-area:visitors;
    height:50vh ;
    position: relative;
    color: ${props => props.theme.color};
`;
export default function Visitors (){
    return(

        <Container className = "box visitors">
            <div className = "title">
                <h4>Website Visitors</h4>
                <h2>821</h2>
            </div>

            <div className = "graph">

            </div>
        </Container>
    )
}