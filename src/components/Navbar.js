import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonConteiner } from './Button';


export default class Navbar extends Component{
    render(){
        return (
            <NavWrapper className="navbar navbar-expend-sm  navbar-dark px-sm-5">
            
            <Link to='/'>
            <i class="fas fa-mobile-alt fa-3x"></i>
            </Link>
            <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
            products
            </Link>
            </li>
            </ul>
            <Link to="/cart" className="ml-auto">
            <ButtonConteiner>
            <span className="mr-2">
            <i class="fas fa-cart-plus" />
            </span>
            my cart
            </ButtonConteiner>
            </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link {
        color: var(--mainWhite) !important;
        front-size: 1.3rem;
        text-transform: capitalize ;
    }
`