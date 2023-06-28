import React from 'react'
import PageNotFound from './pageNotFound';

const AdminProtectedRoute = ({children}) => {
 
    const userRole = sessionStorage.getItem("userRole");
    if(userRole=== 'ADMIN'){
        return children
    }
    return <PageNotFound/>
}

export default AdminProtectedRoute