import { Link } from "react-router-dom";

function Header({page}) {
    return (
      <div className="p-8 justify-between flex sm:flex-col sm:gap-5">
        <h1 className="text-tertiary text-4xl sm:text-2xl">PRANAYKAMINENY</h1>
        <div className="p-2 justify-between flex space-x-10 sm:space-x-4">
            <Link to="/">
                <h1 className={`text-xl sm:xl ${page === "intro" ? 'text-black' : 'text-gray-500'} cursor-pointer hover:text-black`}>Intro</h1>
            </Link>

            <Link to="/experience">
                <h1 className={`text-xl sm:xl ${page === "experience" ? 'text-black' : 'text-gray-500'} cursor-pointer hover:text-black`}>Experience</h1>
            </Link>
            
            <Link to="/projects">
                <h1 className={`text-xl sm:xl ${page === "projects" ? 'text-black' : 'text-gray-500'} cursor-pointer hover:text-black`}>Projects</h1>
            </Link>
        </div>
      </div>
    );
  }
  
  export default Header;
  