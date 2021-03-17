import React from 'react';
import Posts from './Posts';
import Header from './Header';
import {
    CContainer,
} from '@coreui/react';

const Home = () => {
    
    return (
        <div className="c-app c-default-layout flex-row align-items-center">
            <CContainer>
                <Header />
                <Posts />
            </CContainer>
        </div>
    )
}

export default Home;