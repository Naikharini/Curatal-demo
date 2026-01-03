import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      {/* Optional: Page-specific Navbar */}
      <header className="bg-blue-50 p-4 text-center font-bold"> </header>

      <main className="min-h-[70vh]">
        <Outlet />
      </main>

      {/* Optional: Footer */}
    </div>
  );
};

export default AuthLayout;
