import styled from 'styled-components';

const Container = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 50px 100px;

    @media screen and (min-width: 1280px){
        margin: 0 auto;
        width: 1280px;
    } 
`;

export {
    Container
}