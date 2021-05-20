import React from "react";
import { Nav } from 'react-bootstrap';

import './Navigation.css';

export default function Navigation() {
    return <div className={'NavigationContainer'}>
        <Nav className={'flex-column Navigation'}>
            <Nav.Link href="/" className={'RegularText NavigationText'}>Главная</Nav.Link>
            <Nav.Link href="/tasks/RLE" className={'RegularText NavigationText'}>RLE</Nav.Link>
            <Nav.Link href="/tasks/Entropy" className={'RegularText NavigationText'}>Энтропия Шеннона</Nav.Link>
        </Nav>
    </div>
}
