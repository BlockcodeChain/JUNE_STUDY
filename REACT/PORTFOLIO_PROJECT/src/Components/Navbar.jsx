import { Link } from "react-scroll";

const navItems = [
  { name: "HOME", to: "home" },
  { name: "ABOUT", to: "about" },
  { name: "PROJECTS", to: "projects" },
  { name: "CONTACT", to: "contact" },
];

const Navbar = () => {
  return (
    <nav
      className="
        fixed top-5 left-1/2 -translate-x-1/2
        z-50
        flex h-16 w-[90%] max-w-7xl
        items-center justify-between
        rounded-2xl
        border border-white/10
        bg-white/10
        px-6
        shadow-md shadow-black/20
        backdrop-blur-lg text-black
      "
    >
      {/* Logo */}
      <h1
        className="
          cursor-pointer
          bg-linear-to-r
          from-blue-500
          via-cyan-400
          to-indigo-500
          bg-clip-text
          text-3xl
          font-extrabold
          tracking-wider
          text-transparent
          transition-transform
          duration-300
          hover:scale-105
        "
      >
        ISHI
      </h1>

      {/* Navigation */}
      <ul className="flex items-center gap-8 text-white">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.to}
              smooth={true}
              duration={700}
              offset={-80}
              spy={true}
              activeClass="text-cyan-400"
              className="
                relative
                cursor-pointer
                font-medium
                tracking-wide
                transition-all
                duration-300
                hover:text-cyan-400

                after:absolute
                after:left-0
                after:-bottom-1
                after:h-0.5
                after:w-0
                after:bg-cyan-400
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;