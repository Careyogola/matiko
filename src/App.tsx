


function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="shadow border border-gray-200 w-96 rounded flex flex-col ">
    <form className="flex flex-col gap-y-2.5 p-4">
    <label htmlFor="name">Name</label>
    <input 
        type="text" 
        id="name" 
        required
        placeholder="Your Name"
        className="p-2 border border-gray-300 rounded-md"
    />
    <label htmlFor="framework">Email</label>
    <input 
        type="select" 
        id="choose framework"
        required
        placeholder="Your email address"
        className="p-2 border border-gray-300 rounded-md"
      />
      <label htmlFor="framework">Password</label>
    <input 
        type="select" 
        id="choose framework"
        placeholder="123school@!"
        className="p-2 border border-gray-300 rounded-md"
      />
      <button 
          type="submit"
          className="p-2 bg-inherit lg:w-44 border border-gray-300 shadow rounded"
          >Submit</button>
    </form>
    </div>
    </div>
  )
}

export default App
