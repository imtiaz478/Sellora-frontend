import React, {  useState } from 'react';

const SignUp = () => {
   
    const [formData, setFormData] = useState({
        username: '',     
        email: '',
        password: ''  
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const response = await fetch("http://127.0.0.1:5000/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });
    
        const data = await response.json();
    
        if (response.ok) {
          alert("Registration successful");
          window.location.href = "/login";
        } else {
          alert(data.error || "Registration not done");
        }
      };

    return (
        <div>
             <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-200">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">

        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Create Account 
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-gray-600 mb-1">Username</label>
            <input
              type="text"
              name="username"
              required
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-orange-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
            
        </div>
    );
};

export default SignUp;