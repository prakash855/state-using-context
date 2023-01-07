import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <Box sx={{ margin: "1rem" }}>
        <NavLink className="list" activeClassName="active" to="/">
          Products
        </NavLink>
        {` `}
        <NavLink className="list" activeClassName="active" to="/favourites">
          Favourites
        </NavLink>
      </Box>
    </header>
  );
};

export default Navigation;
