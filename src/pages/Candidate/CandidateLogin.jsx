const CandidateLogin = () => {
  return (
    <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6">Candidate Login</h2>

      <input
        type="email"
        placeholder="Email"
        className="w-full border p-3 rounded mb-4"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border p-3 rounded mb-6"
      />

      <button className="w-full bg-blue-600 text-white py-3 rounded font-semibold">
        Sign In
      </button>
    </div>
  );
};

export default CandidateLogin;
