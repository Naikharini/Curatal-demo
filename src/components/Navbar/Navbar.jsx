import curatalLogo from "../../assets/curatalLogo.jpg";
import chalcuratal from "../../assets/chalcuratal.jpg";


const NavbarMenu = [
  { id: 1, title: "Find Talent", path: "/" },
  { id: 2, title: "Solutions", path: "/" },
  { id: 3, title: "Affiliates", path: "/" },
  { id: 4, title: "Sign In", path: "/" },
  { id: 5, title: "For Candidates", path: "/" },
 
];

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-1">
          <img
            src={curatalLogo}
            alt="Curatal Logo"
            className="h-10 object-contain"
          />
        </div>

        {/* Center Menu */}
        <ul className="hidden md:flex items-center gap-8 text-blue-900 font-medium">
          {NavbarMenu.map((menu) => (
            <li key={menu.id}>
              <a
                href={menu.path}
                className="hover:text-blue-600 transition"
              >
                {menu.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          <img
            src={chalcuratal}
            alt="chalcuratal"
            className="h-10 object-contain"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
