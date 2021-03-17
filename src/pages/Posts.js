import React from 'react';
import {
    CCard,
    CCardBody,
    CCol,
    CCardHeader,
    CRow,
} from '@coreui/react';

const Posts = () => {
    
    return (
        <div>
            <CRow className="justify-content-center">
                <CCol md="9" lg="7" xl="6">
                <CCard className="mx-4">
                    <CCardHeader className="p-4">
                        <h2>Blog Title 1</h2>
                    </CCardHeader>
                    <CCardBody className="p-4">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                           et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse 
                            cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                            qui officia deserunt mollit anim id est laborum.</p>
                    </CCardBody>
                </CCard>
                </CCol>
            </CRow>
            <CRow className="justify-content-center">
                <CCol md="9" lg="7" xl="6">
                <CCard className="mx-4">
                    <CCardHeader className="p-4">
                        <h2>Blog Title 2</h2>
                    </CCardHeader>
                    <CCardBody className="p-4">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                           et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse 
                            cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                            qui officia deserunt mollit anim id est laborum.</p>
                    </CCardBody>
                </CCard>
                </CCol>
            </CRow>
        </div>
    )
}

export default Posts;