
import { Navigate, Link } from "react-router-dom"
import './stepinside/loginform.css';


export default function CreateAccount(){

    
    return (
        <>
            <div class="login-page">
                <div class="form">
                    
                    <form class="register-form">
                        <input type="text" placeholder="name"/>
                        <input type="password" placeholder="password"/>
                        <input type="text" placeholder="email address"/>
                        <button>create</button>
                        <p class="message">Already registered? <Link to="/create-account">Sign In</Link></p>
                    </form>
                </div>
            </div>
        </>
    )
}