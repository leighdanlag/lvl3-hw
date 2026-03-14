import { Outlet } from "react-router";

const Home = () => {

  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome Home</h1>
        <p className="text-gray-600 text-lg">
          This is the home page of our simple React Router example.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
