import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { useDispatch } from "react-redux";
import { loginInfos, logout } from "../redux/features/loginInfoSlice";
import { getAuth, signOut } from "firebase/auth";


const Navbar = () => {
  // const loginInformation = true
  const { loginInformation } = useSelector((state) => state.loginInfos);
  const navigate = useNavigate();

  const dispatch = useDispatch()

  const logoutfunc = async () => {
    try {
      const auth = getAuth()
      await signOut(auth);
      dispatch(logout());
      alert("logout");
    } catch (error) {
      console.log(error.message);
    }
  }


  return (
    <>
      {loginInformation ||(
       
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <RateReviewIcon />
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, cursor:"pointer"  }  }
          
                onClick={() => navigate("/home")}
              >
                home
              </Typography>
              <Button color="inherit" onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button color="inherit" onClick={() => navigate("/register")}>
                register
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
)}

      {loginInformation &&
      
      (
       
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <RateReviewIcon />
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, cursor:"pointer"  }  }
          
                onClick={() => navigate("/home")}
              >
                blog
              </Typography>
              <Button color="inherit" onClick={() => logoutfunc()   }>
                Logout
              </Button>
              <Button color="inherit" onClick={() => navigate("/register")}>
                register
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
)
      
      
      
      
      
      }
    </>
  );
};

export default Navbar;