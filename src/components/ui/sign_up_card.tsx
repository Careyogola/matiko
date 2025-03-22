import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  password: string;
}

function SignUp() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  function register(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Registering with:", formData);
    // Implement authentication logic
  }

  function Auth() {
    console.log("Google Authentication");
    // Implement Google authentication logic
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="border border-gray-200 w-fit rounded flex flex-col gap-2.5 items-center py-5 px-6">
        <h2 className="text-xl font-semibold text-gray-300 text-center mt-2">Welcome to Matiko!</h2>
        <h5 className="text-center text-gray-400 text-medium">Create an account</h5>

        <form onSubmit={register} className="flex flex-col gap-y-2.5 p-4">
          <label htmlFor="name" className="text-gray-400 font-medium">Name</label>
          <input 
            type="text" 
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Carey Ogola"
            className="p-2 border border-gray-300 w-96 rounded"
          />

          <label htmlFor="email" className="text-gray-400 font-medium">Email</label>
          <input 
            type="email" 
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="eg.abc@gmail.com"
            className="p-2 border border-gray-300 w-96 rounded"
          />

          <label htmlFor="password" className="text-gray-400 font-medium">Password</label>
          <input 
            type="password" 
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="123school@!"
            maxLength={12}
            className="p-2 border border-gray-300 w-96 rounded"
          />

          <button 
            type="submit"
            className="p-2 w-full border border-gray-300 rounded bg-gray-800 transition text-gray-200 cursor-pointer mt-2"
          >
            Sign Up
          </button>
        </form>

        <button 
          onClick={Auth} 
          className="flex flex-row items-center justify-center gap-1.5 py-2 px-3 border border-gray-300 w-full rounded cursor-pointer bg-gray-800 transition text-gray-200"
        >
          Log in with <FcGoogle size={20}/>
        </button>
      </div>
    </div>
  );
}

export default SignUp;
