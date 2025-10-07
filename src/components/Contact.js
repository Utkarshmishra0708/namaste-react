const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4 text-orange-400">Contact Us</h1>
      <form className="flex flex-col w-full md:w-6/12 space-y-4">
        <input
          type="text"
          className="p-2 rounded-lg border border-gray-700 text-black"
          placeholder="Name"
        />
        <input
          type="text"
          className="p-2 rounded-lg border border-gray-700 text-black"
          placeholder="Message"
        />
        <button className="p-2 bg-orange-500 rounded-lg hover:bg-orange-600 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
