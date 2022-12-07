import styled from "styled-components"
const Container = styled.div`
    background-color: ${props => props.theme.boxBackground};
    transition: all .5s ease;
    grid-area:reviews;
    text-align: left;
    color: ${props => props.theme.color};
`;
export default function Reviews (){
    return(

    <Container  className = "box reviews">
        <h4>Reviews</h4>
        <h2>1,281</h2>
     </Container>
    )
}