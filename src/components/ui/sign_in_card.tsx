import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Signing in with:", formData);
    // Implement authentication logic here
  }


  return (
    <div className="w-full h-screen flex flex-col gap-4 items-center justify-center">
      <div className="border border-gray-200 w-fit rounded flex flex-col items-center py-2.5">
        <h2 className="text-xl font-semibold text-gray-300 text-center mt-2.5">
          Welcome to Matiko!
        </h2>
        <h5 className="text-center text-gray-400 text-medium">Log in to your account</h5>

        <form onSubmit={submitForm} className="flex flex-col gap-y-2.5 p-4">
        
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="eg.abc@gmail.com"
            className="p-2 border border-gray-300 w-96 rounded"
          />

          <label htmlFor="password">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="123school@!"
              maxLength={12}
              className="p-2 border border-gray-300 w-96 rounded pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

         
          <button
            type="submit"
            
            className="p-2 mt-4 w-44border border-gray-300 rounded bg-gray-800 transition text-gray-200 cursor-pointer"
          >
            Log in
          </button>
        </form>
      </div>
      {/* <Link to="/dashboard">Dashboard</Link> */}
    </div>
  );
}

export default SignIn;
