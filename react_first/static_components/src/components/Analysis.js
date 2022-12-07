import styled from "styled-components"
const Container = styled.div`
    background-color: ${props => props.theme.boxBackground};
    transition: all .5s ease;
    grid-area:analysis;
    height:30vh;
    text-align:left;
    color: ${props => props.theme.color};
`;
export default function Analysis (){
    return(

        <Container className = "box analysis" >
            <h4>Sentiment Analysis</h4>
            <div className = "analysisNum">
                <h2>960</h2>
                <h2>122</h2>
                <h2>321</h2>
            </div>
        </Container>
    )
}