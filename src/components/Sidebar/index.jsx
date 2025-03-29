import { NavLink } from "react-router-dom";
import { useState } from "react";

export const SideBar = () => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (link) => {
    setHovered(link);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const getStyle = (isActive, isHovered) => ({
    display: "flex",
    alignItems: "center",
    gap: "0.3rem",
    color: isHovered || isActive ? "#dde2ff" : "black",
    backgroundColor: isActive || isHovered ? "black" : "transparent",
    borderRadius: "14px",
    // border: isActive ? '20x solid black' : 'no',
    padding: "0.5rem",
    transform: isHovered ? "scale(1.1)" : "scale(1)",
    transition: "background-color 0.3s, color 0.3s, border 0.3s",
  });

  const getHoverProps = (link) => ({
    onMouseEnter: () => handleMouseEnter(link),
    onMouseLeave: handleMouseLeave,
  });

  return (
    <>
      <div style={{ display: "flex", height: "100vh", }}>
        <aside
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            gap: "10px",
            width: "145px",
            backgroundColor: hovered !== null ? "#dde2ff" : "transparent",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            borderRight: "2px solid #000",
            height: "100%",
            
          }}
        >
          <NavLink
            to="/"
            style={({ isActive }) => getStyle(isActive, hovered === "home")}
            {...getHoverProps("home")}
          >
            <span class="material-symbols-outlined">home</span>
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/archive"
            style={({ isActive }) => getStyle(isActive, hovered === "archive")}
            {...getHoverProps("archive")}
          >
            <span class="material-symbols-outlined">archive</span>
            <span>Archive</span>
          </NavLink>

          <NavLink
            to="/important"
            style={({ isActive }) =>
              getStyle(isActive, hovered === "important")
            }
            {...getHoverProps("important")}
          >
            <span class="material-symbols-outlined">label_important</span>
            <span>Important</span>
          </NavLink>

          <NavLink
            to="/bin"
            style={({ isActive }) => getStyle(isActive, hovered === "bin")}
            {...getHoverProps("bin")}
          >
            <span class="material-symbols-outlined">
              <span>delete</span>
            </span>
            <span>Bin</span>
          </NavLink>
        </aside>
       
      </div>
    </>
  );
};
