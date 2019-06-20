import React from "react";
import { withRouter } from "react-router-dom";
import { manualSave } from "../../desklamp";
import LoggedInHeaderContainer from "../logged_in_header/logged_in_header_container";
import Loading from "../loading";

class MessageBoardPost extends React.Component {
  constructor(props) {
    super(props);
    manualSave();
  }

  render() {
    return (
      <>
        <LoggedInHeaderContainer />
        <h1>Message board post</h1>
      </>
    );
  }
}

export default withRouter(MessageBoardPost);
