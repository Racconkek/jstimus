import React from "react";
import { Nav } from 'react-bootstrap';

import './Navigation.css';

export default function Navigation({tasks}) {
    // console.log(tasks);
    return <div className={'NavigationContainer'}>
        <Nav className={'flex-column Navigation'}>
            <Nav.Link href="/" className={'RegularText NavigationText'}>Главная</Nav.Link>
            {tasks && tasks.map(item => <Nav.Link key={item.taskName} href={item.link} className={'RegularText NavigationText'}>{item.taskFullName}</Nav.Link>)}
        </Nav>
    </div>
}
