import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
        font-size: 18px;
    }
`;

const List = styled.ul`
    margin: 20px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;

    @media screen and (min-width: 1280px){
        padding: 50px 0 50px;
        margin: 0 auto;
        width: 50%;
        justify-content: space-around;
    } 
`

export {
    List,
    NavL,
}