import Toolbar from "@material-ui/core/Toolbar";
import { fade } from "@material-ui/core/styles/colorManipulator";
import React from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
const styles = (theme) => ({
  root: {
    width: "100%",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "40%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "30%",
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputInput: {
    paddingLeft: theme.spacing.unit * 10,
  },
});

class navBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Search: "",
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar
          position="static"
          style={{
            backgroundColor: "#800000",
            position: "fixed",
            marginTop: "2.5%",
          }}
        >
          <Toolbar>
            <div
              className={classes.search}
              color="inherit"
              style={{ backgroundColor: "white" }}
            >
              <div className={classes.searchIcon}>
                <SearchIcon style={{ width: 400 }} style={{ color: "black" }} />
              </div>
              <InputBase
                style={{ color: "black" }}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <PopupState variant="popover" popupId="demo-popup-popover">
              {(popupState) => (
                <div>
                    <IconButton color="inherit">
                      <Badge badgeContent={3} color="secondary">
                        Message
                      </Badge>
                    </IconButton>
                  <Button {...bindTrigger(popupState)} color="inherit">
                    <IconButton color="inherit" onClick={this.onSubmit}>
                      <Badge badgeContent={0} color="secondary">
                        Profile
                      </Badge>
                    </IconButton>
                  </Button>
                  <Popover
                    style={{ marginRight: "" }}
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                  >
                    <Box p={2}>
                      <Typography>Name : {this.props.admin.name}</Typography>
                      <Typography>
                        Eamil-Id : {this.props.admin.email}
                      </Typography>
                    </Box>
                  </Popover>
                </div>
              )}
            </PopupState>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
navBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(navBar);
