import '../Componets/Login.css'
function Login(){
    return(
    <section className="login-account-details">
        <div className="login-page-account-details">
            <h3>Login</h3>
            <input type="email" name="Email" id="Email" placeholder="Your Email" /><br/>
            <input type="password" name="Password" id="Password" placeholder="Your Password" /><br/>
            <button>Login</button>
        </div>
        <div className="login-creation-account-details">
            <h3>Create an Account</h3>
            <input type="text" name="Username" id="Username" placeholder="Username"/><br/>
            <input type="email" name="email-create-account" id="email-create-account" placeholder="Your Email" /><br/>
            <input type="password" name="password-create-account" id="password-create-account" placeholder="Your Password" /><br/>
            <input type="password" name="password-conform-create-account" id="password-conform-create-account" placeholder="Confirm Password" /><br/>
            <button>Submit & Register</button>
        </div>
    </section>
    )
}
export default Login