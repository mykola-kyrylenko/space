import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Container = styled.nav`

    @media screen and (min-width: 320px){
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        height: 60px;
    }

    @media screen and (min-width: 480px){
        height: 80px;
    }

    /* @media screen and (min-width: 768px){

    } */

    @media screen and (min-width: 1280px){
        height: 80px;
    }

`;

const NavBtn = styled.div`

    @media screen and (min-width: 320px){
        width: 30%;
        display: flex;
        justify-content: space-between;
        font-size: 12px;
    }

    @media screen and (min-width: 768px){
        font-size: 24px;
        width: 30%;
    }

    @media screen and (min-width: 1280px){
        width: 20%
    }
`;

const NavL = styled(NavLink)`

    @media screen and (min-width: 320px){
        color: white;
        font-weight: 700;
        display: inline-block;
        
        :active,:hover,:focus{
            color: #0260da;
            text-decoration: underline;
        }
    }

    @media screen and (min-width: 480px){
        font-size: 18px;
    }

    @media screen and (min-width: 768px){
        font-size: 24px;
    }

    @media screen and (min-width: 1280px){
        width: 20%;
        margin: 50px
    }
`;

export {
    Container,
    NavBtn,
    NavL,
};