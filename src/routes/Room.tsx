import React from "react";

import { RouteComponentProps } from 'react-router-dom';

interface RoomRouterProps {
  roomId: string;
}

interface Props extends RouteComponentProps<RoomRouterProps> {}

class Room extends React.Component<Props> {
  render() {
    return <div>room: {this.getRoomId()}</div>;
  }

  getRoomId(): string {
    return this.props.match.params.roomId;
  }
}

export default Room;
