import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function PublicHeader() {
  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{ left: 0, right: 0, top: 0 }}
    >
      <Toolbar disableGutters sx={{ minHeight: 64 }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
          }}
        >
          <Box display="flex" alignItems="center" gap={2}>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/022/791/223/small/blog-site-blogger-png.png"
              alt="logo"
              width="32"
              height="32"
              style={{ display: "block" }}
            />
            <Typography variant="h6">BlogApp</Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={2}>
            <Button 
              component={Link} 
              to="/" 
              color="inherit"
              sx={{ textTransform: "none" }}
            >
              Home
            </Button>
            <Button 
              component={Link} 
              to="/auth/login" 
              color="inherit"
              sx={{ textTransform: "none" }}
            >
              Login
            </Button>
            <Button 
              component={Link} 
              to="/auth/register" 
              color="inherit"
              variant="outlined"
              sx={{ textTransform: "none" }}
            >
              Registro
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}