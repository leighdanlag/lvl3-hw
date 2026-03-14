const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="bg-white shadow-md rounded-2xl p-10 max-w-2xl">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 mb-4">
          This page demonstrates a basic About component built with TypeScript
          and styled using Tailwind CSS.
        </p>
        <p className="text-gray-600">
          It's clean, responsive, and ready to plug into a React Router setup.
        </p>
      </div>
    </div>
  );
};

export default About;