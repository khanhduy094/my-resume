
import SettingsIcon from '@mui/icons-material/Settings';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import ProjectDetail from "./pages/ProjectDetail";
import Resume from "./pages/Resume/Resume";
function App() {
  const [move, setMove] = useState(false);
  const [colorTheme, setColorTheme] = useState("theme-main");

  useEffect(() => {
    const currentColor = localStorage.getItem("color-theme");
    if (currentColor) {
      setColorTheme(currentColor);
    }
  }, []);

  const handleClick = (theme) => {
    setColorTheme(theme);
    localStorage.setItem("color-theme",theme);
  };

  const handleSettingColor = () => {
    setMove((move) => !move);
    if (!move) {
      document.querySelector(".changecolor").classList.add("active");
    } else {
      document.querySelector(".changecolor").classList.remove("active");
    }
  };

  return (
    <div className={`App ${colorTheme}`}>
      <Container className={"top_60 body_container"}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Profile />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={9}>
            {/* <BrowserRouter> */}
            <Header />
            <div className="main_content container_shadow">
              <Switch>
                <Route path="/portfolio">
                  <Portfolio />
                </Route>
                <Route path="/resume">
                  <Resume />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/project/:slug">
                  <ProjectDetail />
                </Route>
                
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
            {/* </BrowserRouter> */}

            <Footer />
          </Grid>
        </Grid>
      </Container>

      {/* change color */}

      <div className="changecolor">
        <div className="changecolor_setting" onClick={handleSettingColor}>
          <SettingsIcon />
        </div>
        <h5 className="changecolor_text">SET A COLOR</h5>
        <Grid container spacing={1} className="changecolor_list">
          <Grid 
            item 
            className={`changecolor_item ${colorTheme === "theme-main" ? "active" : null}`} 
            id="theme-main"
            onClick={() => handleClick("theme-main")} 
            >
            
          </Grid>

          <Grid 
            item 
            className={`changecolor_item ${colorTheme === "theme-red" ? "active" : null}`} 
            id="theme-red"
            onClick={() => handleClick("theme-red")} 
            >
             
          </Grid>
          <Grid 
            item 
            className={`changecolor_item ${colorTheme === "theme-blue" ? "active" : null}`} 
            id="theme-blue"
            onClick={() => handleClick("theme-blue")}  
            >
               
          </Grid>
          <Grid 
            item 
            className={`changecolor_item ${colorTheme === "theme-gray" ? "active" : null}`} 
            id="theme-gray"
            onClick={() => handleClick("theme-gray")}
            >
                  
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
