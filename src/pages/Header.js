import React from 'react';
import {
    CCard,
    CCardBody,
    CCol,
    CCardHeader,
    CRow,
} from '@coreui/react';

const Header = () => {
    
    return (
        <div>
            <CRow className="justify-content-center">
                <CCol md="9" lg="7" xl="6">
                <CCard className="mx-4">
                    <CCardBody className="p-4">
                        <h2>Adam's Blog</h2>
                        <p>Blog tagline! Twitter/Instagram/LinkedIn.</p>
                    </CCardBody>
                </CCard>
                </CCol>
            </CRow>
        </div>
    )
}

export default Header;