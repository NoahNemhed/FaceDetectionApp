import React from 'react'

class Signin extends React.Component  {
  constructor(props) {
    super(props)
    this.state =  {
        signInEmail: "",
        signInPassword: "",
        signInError: null
    }
  }
  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('https://face-detection-api-hdw7.onrender.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
        else{
          this.setState({ signInError: 'Incorrect credentials' });
        }
      })
  }

  render() {
    const { onRouteChange } = this.props
    return (
      <section className="container mx-auto ">
         
          <div
            className="g-6 flex justify-center h-screen items-center pb-12  ">
      
           
            <div className="md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <div>
              <h1 className='text-neutral-50 text-2xl text-center'>Login</h1>
            </div>
              <form>  
              {this.state.signInError && (
              <p className="text-red-500">{this.state.signInError}</p>
              )}    
                <div className="relative mb-6" data-te-input-wrapper-init>
                <label
                    for="exampleFormControlInput2"
                    className="pointer-events-none left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-100 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >Email address
                  </label>
                  <input
                    onChange={this.onEmailChange}
                    required
                    type="text"
                    className="text-neutral-300  peer block  rounded border border-neutral-500 w-full bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput2"
                    placeholder="Email address" />
                </div>
      
             
                <div className="relative mb-6" data-te-input-wrapper-init>
                <label
                    for="exampleFormControlInput22"
                    className="pointer-events-none  left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-100 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >Password
                  </label>
                  <input
                    required
                    onChange={this.onPasswordChange}
                    type="password"
                    className="text-neutral-300 peer block min-h-[auto] w-full rounded  border border-neutral-500  bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput22"
                    placeholder="Password" />
                </div>
      
                
                <div className="text-center lg:text-left">
                  <button
                    onClick={this.onSubmitSignIn}
                    type="button"
                    className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    Login
                  </button>
      
                  <div className='flex justify-evenly'>
                  <p className="mb-0 mt-2 pt-1 text-sm font-semibold text-neutral-300 flex gap-x-6">
                    Don't have an account?
                    <button
                      onClick={() => onRouteChange('register')}
                      className="text-neutral-300 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-300 active:text-neutral-300"
                      >Register
                      </button
                    >
                  </p>
                  </div>
      
                </div>
              </form>
            </div>
        </div>
      </section>
        );
  }
  
}


export default Signin;