import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
class dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: false,
      widths: 80,
      message: "Add To Friend",
      button1: "buttonTrue",
      backgroundColor: "#800000",
      condition: 1,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  async handleButtonClick() {
    if (this.state.button1 === "buttonTrue") {
      this.setState({
        open: true,
        widths: 165,
        message: "DoubleChick To Message",
        backgroundColor: "blue",
        button1: "buttonFalse",
        condition : 0
      });
    }
  }
  handleChat = (event) => {
    this.props.getchat();
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ open: false });
  };

  render() {
    return (
      <>
        <Card
          style={{
            maxWidth: 180,
            height: 270,
            marginLeft: 80,
            marginTop: 120,
            boxShadow: " 0 4px 8px 0 rgba(0,0,0,0.2)",
            transition: "0.3s",
          }}
        >
          <div>
            <CardActionArea>
              <Tooltip title="Welcome To Chat System Appliction" arrow>
                <div className="xyz">
                  {this.state.condition === 1 ? (
                    <img
                      className="imagePath"
                      src={this.props.value.IMAGEURL}
                      style={{
                        height: "160px",
                        width: "70%",
                        marginTop: "1%",
                        marginLeft: "15%",
                      }}
                      alt="no Cover"
                    />
                  ) : (
                    <>
                      <h3
                        style={{
                          backgroundColor: "transparent",
                          fontStyle: "arial",
                          display: "flex",
                          justifyContent: "center",
                          marginTop: "-0%",
                          marginLeft: 11,
                          marginRight: 13,
                        }}
                      >
                        Message Count:{this.state.condition}
                      </h3>
                      <img
                        className="imagePath"
                        src={this.props.value.IMAGEURL}
                        style={{
                          backgroundColor: "transparent",
                          height: "140px",
                          width: "70%",
                          marginTop: "-6%",
                          marginLeft: "15%",
                        }}
                      />
                    </>
                  )}
                </div>
              </Tooltip>
              <CardContent>
                <Typography
                  style={{
                    fontFamily: "Times New Roman",
                    color: "black",
                    marginTop: -10,
                    fontSize: 17,
                    marginLeft: 10,
                  }}
                >
                  Name:- {this.props.value.NAME}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography
                  style={{
                    fontFamily: "Times New Roman",
                    color: "black",
                    marginTop: -30,
                    fontSize: 15,
                    marginLeft: 10,
                  }}
                >
                  NO. :- {this.props.value.MOBILENO}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="bookdiv">
              <div className="button1">
                <Button
                  onClick={this.handleButtonClick}
                  onDoubleClick={this.handleChat}
                  style={{
                    border: "none",
                    backgroundColor: this.state.backgroundColor,
                    color: "white",
                    textDecoration: "none",
                    display: "inlineBlock",
                    transitionDuration: 0.4,
                    marginTop: -40,
                    width: 165,
                    height: 40,
                    fontSize: "0.60em",
                  }}
                >
                  {this.state.message}
                </Button>
              </div>

              <div className="button2">
                <Snackbar
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  open={this.state.open}
                  autoHideDuration={2000}
                  onClose={this.handleClose}
                  ContentProps={{
                    "aria-describedby": "message-id",
                  }}
                  message={
                    <span id="message-id">
                      Name : {this.props.value.NAME}
                      <br></br>Successfully Added In FriendList
                    </span>
                  }
                  action={[
                    <IconButton
                      key="close"
                      aria-label="Close"
                      color="inherit"
                      onClick={this.handleClose}
                    >
                      <CloseIcon />
                    </IconButton>,
                  ]}
                />
              </div>
              <div></div>
            </CardActions>
          </div>
        </Card>
      </>
    );
  }
}
export default dashboard;
