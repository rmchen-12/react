import React from "react";
import { Link } from "react-router-dom";
import RaiseButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

const HomePage = ({ userId, onSubmitUserId, onChangeUserId }) => (
  <div>
    <TextField
      hintText="Please Key in your Github User Id."
      onChange={onChangeUserId}
    />
    <Link
      to={{
        pathname: "/result",
        search: `?userId=${userId}`
      }}
    >
      <RaiseButton label="Submit!" onClick={onSubmitUserId(userId)} primary />
    </Link>
  </div>
);

export default HomePage;
