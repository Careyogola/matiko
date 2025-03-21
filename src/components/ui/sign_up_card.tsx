

function SignUp(){
    return(
        <div className="w-full h-screen flex items-center justify-center">
      <div className="border border-gray-200 w-fit rounded flex flex-col items-center py-2.5">
        <h2 className="text-xl font-semibold text-gray-300 text-center mt-2.5">Welcome to Matiko!</h2>
        <h5 className="text-center text-gray-400 text-medium">Create account</h5>
    <form className="flex flex-col gap-y-2.5 p-4">
    <label htmlFor="name">Name</label>
    <input 
        type="text" 
        id="name" 
        required
        placeholder="Carey Ogola"
        className="p-2 border border-gray-300 w-96 rounded"
    />
    <label htmlFor="email">Email</label>
    <input 
        type="email" 
        id="email"
        required
        placeholder="eg.abc@gmail.com"
        className="p-2 border border-gray-300 w-96 rounded"
      />
      <label htmlFor="password">Password</label>
    <input 
        type="password" 
        id="password"
        placeholder="123school@!"
        maxLength={12}
        className="p-2 border border-gray-300 w-96 rounded"
      />
      
    </form>
    <button 
          type="submit"
        //   onClick={submitForm}
          className="p-2 bg-inherit lg:w-44 border border-gray-300 rounded hover:bg-gray-800 transition hover:text-gray-200 cursor-pointer"
          >Sign up
      </button>
    </div>
    </div>
    )
}
export default SignUp