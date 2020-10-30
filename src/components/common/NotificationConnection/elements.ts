import styled from "styled-components";

export const ContainerImage = styled.div`
  height: 70px;
  width: 70px;
  padding: 0 10px;
`;
export const Notification = styled.div`
  padding-left: 16px;
  width: calc(100% - 70px);
`;

export const NotificationTitle = styled.h3`
  font-size: 14px;
  font-family: sans-serif;
  color: rgb(83, 83, 83);
`;
export const NotificationSubtitle = styled.p`
  font-size: 12px;
  font-family: sans-serif;
  color: gray;
`;

export const ContainerNotification = styled.div`
  color: black;
  display: flex;
  align-items: center;
`;
