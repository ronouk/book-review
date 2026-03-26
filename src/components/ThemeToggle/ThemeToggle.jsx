import { useEffect, useState } from "react";
import { FaCloudMoon, FaCloudSun } from "react-icons/fa";

const ThemeToggle = () => {
  // Initialize theme from localStorage or default to "light"
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // Update the data-theme attribute on the html tag whenever the theme changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <label className="swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input 
        type="checkbox"
        onChange={handleToggle} 
        checked={theme === "dark"} 
      />

      {/* sun icon (shows when theme is light) */}
      <FaCloudSun className="swap-on h-8 w-8 fill-current" title="Toggle to Dark" />

      {/* moon icon (shows when theme is dark) */}
      <FaCloudMoon className="swap-off h-8 w-8 fill-current" title="Toggle to Light" />
    </label>
  );
};

export default ThemeToggle;