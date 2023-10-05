
import {useContext} from 'react'
import {DataContext} from '../globals/dataContext'
import { Navigate, Outlet } from 'react-router-dom'

export function ProtectRoute({children}){
    const {contextData} = useContext(DataContext)
    const userLoged = contextData.logedUser
  
    //userLoged ? console.log(userLoged.name) : console.log("No estas logeado")

    if(!userLoged){
        return <Navigate to="/login" replace={true} />
    } else {
        return children ? children : <Outlet />
    }


}