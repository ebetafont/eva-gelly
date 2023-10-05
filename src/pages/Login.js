
import { useState } from "react"
import { Navigate, Link } from "react-router-dom"
import dataResponse from '../utils/data-users.json'
import {useContext} from 'react'
import {DataContext} from '.././globals/dataContext'
import './stepinside/loginform.css';

export default function Login(){
    const [emailUser, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userL, setUserL] = useState(null)
    const [errorForm, setErrorForm] = useState('')
    const {contextData, setContextData} = useContext(DataContext)
    
    function handleSubmit(e){
        e.preventDefault()
        const user = dataResponse.filter((obj) => obj.email === emailUser && obj.password === password)
            
        if(user.length !== 0){
            let userx = {"name": user[0].name, "email": user[0].email, "password": user[0].password}
            setUserL(userx)
            setContextData({...contextData, logedUser:userx})
            sessionStorage.setItem("logued_user", JSON.stringify(userx))
            setErrorForm('')
            //let valor = JSON.parse(sessionStorage.getItem('logued_user'))
        }else{
            setErrorForm("Ups somehing went wrong, plz try it one more time")
            setEmail('')
            setPassword('')
        }
    } 

    return(
        <>
            {userL && (<Navigate to="/" replace={true} />)}
            <div class={`login-page ${contextData.themeSite}`}>
                <div class="form">
                    <h2>{errorForm !== '' ? errorForm : ''}</h2>
                    <form onSubmit={handleSubmit} class="login-form">
                        <input type="text" value={emailUser} name="E-Mail" placeholder="E-Mail"
                          onChange={(e)=> setEmail(e.target.value)} autoComplete="e-mail" />
                        <input type="password" value={password} name="Password" placeholder="Password"
                            onChange={(e)=> setPassword(e.target.value)} autoComplete="current-password" />
                        <button>Login</button>
                        <p class="message">Not registered? <Link to="/create-account">Create an account</Link></p>
                    </form>
                </div>
            </div>
        </>

    )            


    //linear-gradient(rgba(5,7,12,0.75),rgba(5,7,12,0.75))
    //linear-gradient(rgba(5,7,12,0.75),rgba(5,7,12,0.3))
}