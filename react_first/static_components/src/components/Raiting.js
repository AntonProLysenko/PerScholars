import styled from "styled-components"
const Container = styled.div`
    background-color: ${props => props.theme.boxBackground};
    transition: all .5s ease;
    grid-area:raiting;
    text-align: left;
    color: ${props => props.theme.color};
`;
export default function Reviews (){
    return(

        <Container className = "box raiting">
            <h4>Average Raiting</h4>
            <h2>4.6</h2>
        </Container>
    )
}