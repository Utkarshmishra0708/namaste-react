import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-red-500 mb-2">Oops!!!</h1>
      <h2 className="text-xl mb-2">Something went wrong!!</h2>
      <h3 className="text-gray-300">
        {err?.status}: {err?.statusText}
      </h3>
    </div>
  );
};

export default Error;
