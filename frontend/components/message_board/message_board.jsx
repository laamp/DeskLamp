import React from "react";
import { withRouter } from "react-router-dom";
import { manualSave } from "../../desklamp";
import LoggedInHeaderContainer from '../logged_in_header/logged_in_header_container';
import Loading from "../loading";

class MessageBoardShow extends React.Component {
  constructor(props) {
    super(props);
    manualSave();
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.props.fetchAllPosts(this.props.currentBoardId)
      .then(posts => {
        manualSave();
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <>
        {this.state.loading === true ? <Loading /> : <></>}
        <LoggedInHeaderContainer />
      </>
    );
  }
}

export default withRouter(MessageBoardShow);
