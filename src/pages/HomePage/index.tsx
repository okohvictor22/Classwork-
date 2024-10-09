import './index.css';

const HomePage = () => {
    return (
        <main>
        <img src="remitel-logo.png" alt=""/>
        <div>
                <h1>
                     Sign up
                </h1>
                <p className="form">
                     Fill the form to register the account
                 </p>
        </div>
        <form>
            <div>
        <label htmlFor="email" id="test">Email</label>
         <br/>
        <input type="text" name="email" id="email" placeholder="Please enter your email"/>
        <br/>
    
        <label htmlFor="password" id="web">Password</label>
        <br/>
        <input type="password" name="password" id="password" placeholder="Please enter password"/>
    </div>
    </form>
    <div>
        <p className="character">
            Must contain at least 8 characters
        </p>
    
        <p id="service">
            By signing up you agree to <a href="#">Terms of Service</a>
        </p>
    </div>
        <button>
                Sign up        
            </button>
        <p id="lower">
            Already have an account? <a href="#">Login</a>
        </p>
        <footer>
            <p>
            Powered by <span>mySME</span>
         </p>
        
            <p>
            Retail Management Software
            </p>
        </footer>  
        </main>
    );
};

export default HomePage;