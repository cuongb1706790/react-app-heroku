import React from "react";
import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import NotificationsNone from "@material-ui/icons/NotificationsNone";
import {
  ChatBubbleOutline,
  PowerSettingsNew,
  SearchOutlined,
} from "@material-ui/icons";

// makeStyles -> override
// withStyles -> add new style
const useStyles = makeStyles({
  root: {
    background: "#fff",
    transform: "translateZ(0)",
  },
  searchInput: {
    opacity: "0.6",
    padding: "0px 8px",
    fontSize: "0.8rem",
    "&:hover": {
      backgroundColor: "#f2f2f2",
    },
    "& .MuiSvgIcon-root": {
      marginRight: "8px",
    },
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <InputBase
              placeholder="Search topics"
              className={classes.searchInput}
              startAdornment={<SearchOutlined fontSize="small" />}
            />
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <NotificationsNone fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={4} color="primary">
                <ChatBubbleOutline fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNew fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
