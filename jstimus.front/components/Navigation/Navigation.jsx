import React from "react";
import { Nav } from 'react-bootstrap';

import './Navigation.css';

export default function Navigation() {
    return <React.Fragment>
        <Nav className={'flex-column Navigation'}>
            <Nav.Link href="/">Главная</Nav.Link>
            <Nav.Link href="/tasks/RLE">RLE</Nav.Link>
            <Nav.Link href="/tasks/Entropy">Энтропия Шеннона</Nav.Link>
        </Nav>
    </React.Fragment>
}
