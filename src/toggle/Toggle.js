import React from "react";
import { connect } from "react-redux";
import { toggleMessage } from "./actions";
import { bindActionCreators } from "redux";

const Toggle = ({ messageVisibility, toggleMessage }) => {
  return (
    <div>
      {messageVisibility && <p>This will be shown when visibility is true</p>}
      <button onClick={toggleMessage}>Toggle me</button>
    </div>
  );
};

const mapStateToProps = state => ({
  messageVisibility: state.toggle.messageVisibility
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleMessage
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
