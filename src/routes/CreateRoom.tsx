import React from "react";
import { v1 as uuid } from "uuid";

import { RouteComponentProps } from 'react-router-dom';

const CreateRoom = (props: RouteComponentProps) => {
  function create() {
    const id = uuid();
    props.history.push(`/room/${id}`);
  }

  return (
    <button onClick={create}>Create room</button>
  );
};

export default CreateRoom;
