import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";

import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
// import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    paddingRight: theme.spacing(2),
  },
  companyIcon: {
    padding: theme.spacing(2),
    boxSizing: "content-box",
  },
}));

const NavigatonBar = () => {
  const classes = useStyles();

  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);

  const count = 3; // TODO: will be in redux

  // const handleMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <AppBar position="static">
      <Toolbar className={classes.navBar}>
        <Link to="/" className={classes.title}>
          <MenuIcon className={classes.companyIcon} />
          <Typography variant="h6">OMG</Typography>
        </Link>
        <div className={classes.grow} />
        <IconButton aria-label="message" component={Link} to={"/"}>
          <Badge color="secondary" badgeContent={count}>
            <MailIcon />
          </Badge>
        </IconButton>
        {/* <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton> */}
        {/* <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem
            key={1}
            onClick={handleClose}
          >
            testing
          </MenuItem>
        </Menu> */}
      </Toolbar>
    </AppBar>
  );
};

export default NavigatonBar;
