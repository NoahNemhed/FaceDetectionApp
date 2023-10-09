import React from 'react'

class Register extends React.Component  {

  constructor(props) {
    super(props)
    this.state =  {
        email: "",
        password: "",
        name: "",
        signUpError: null
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitRegister = () => {
    if (this.state.email === "" || this.state.name === "" || this.state.password === "") {
      this.setState({ signUpError: 'Invalid input' });
    } else {
      fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        })
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Registration failed'); // Throw an error if the response is not OK
          }
          return response.json();
        })
        .then(user => {
          console.log(user);
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        })
        .catch(error => {
          console.error(error.message);
          this.setState({ signUpError: 'Registration failed. Please try again later.' });
        });
    }
  }
  

  render () {
    const {onRouteChange} = this.props
    return (
      <section className="container mx-auto ">
         
         <div
           className="g-6 flex justify-center h-screen items-center pb-12  ">
           <div className="md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <div>
              <h1 className='text-neutral-50 text-2xl text-center'>Register</h1>
            </div>
             <form>      
             {this.state.signUpError && (
             <p className="text-red-500">{this.state.signUpError}</p>
            )}
             <div className="relative mb-6" data-te-input-wrapper-init>
               <label
                   for="exampleFormControlInput2"
                   className="pointer-events-none left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-100 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                   >Name
                 </label>
                 <input
                 onChange={this.onNameChange}
                   
                   type="text"
                   className="text-neutral-300  peer block rounded border border-neutral-500 w-full bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                   id="exampleFormControlInput2"
                   placeholder="First Name"
                   required
                    />
               </div>
      
               <div className="relative mb-6" data-te-input-wrapper-init>
               <label
                   for="exampleFormControlInput2"
                   className="pointer-events-none left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-100 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                   >Email address
                 </label>
                 <input
                 required
                   onChange={this.onEmailChange}
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
                   onClick={this.onSubmitRegister}
                   type="button"
                   className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                   data-te-ripple-init
                   data-te-ripple-color="light">
                   Register
                 </button>
      
                 <div className='flex justify-evenly'>
                 <p className="mb-0 mt-2 pt-1 text-sm font-semibold text-neutral-300 flex gap-x-6">
                   Already have an account?
                   <button
                   
                     onClick={() => onRouteChange('signin')}
                     className="text-neutral-300 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-300 active:text-neutral-300"
                     >Login</button
                   >
                 </p>
                 </div>
      
               </div>
             </form>
           </div>
       </div>
      </section>
        )
  }
}

export default Register
