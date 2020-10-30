import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Notification,
  ContainerNotification,
  ContainerImage,
  NotificationTitle,
  NotificationSubtitle,
} from "./elements";

const ImageDinosaur = ({ fill = "rgb(83,83,83)" }) => (
  <svg width="100%" height="100%" viewBox="0 0 1103 1259" version="1.1">
    <g id="Artboard1" transform="matrix(1,0,0,1,70.4392,-678.632)">
      <rect
        x="-70.439"
        y="678.632"
        width="1102.2"
        height="1258.45"
        fill="white"
      />
      <g transform="matrix(1,0,0,1,-79.8144,674.964)">
        <path
          d="M51.825,786.944L51.825,526.404L93.987,526.404L93.987,572.89L161.014,572.89L161.014,626.944L211.825,626.944L211.825,678.836L305.879,678.836L305.879,628.025L381.554,628.025L381.554,576.133L469.122,576.133L469.122,526.404L513.446,526.404L513.446,71.269L557.77,71.269L557.77,44.242L1025.88,44.242L1025.88,72.35L1069.12,72.35L1069.12,357.755L754.527,357.755L754.527,433.431L929.662,433.431L929.662,488.566L703.716,488.566L703.716,623.701L815.068,623.701L815.068,730.728L771.824,730.728L771.824,683.16L702.635,683.16L702.635,785.863L656.149,785.863L656.149,892.89L602.095,892.89L602.095,944.782L536.149,944.782L536.149,1185.86L604.257,1185.86L604.257,1221.54L499.392,1221.54L499.392,1051.81L470.203,1051.81L470.203,1001L420.473,1001L420.473,1046.4L343.717,1046.4L343.717,1085.32L407.5,1085.32L407.5,1122.08L309.122,1122.08L309.122,1005.32L245.338,1005.32L245.338,952.35L185.879,952.35L185.879,895.052L142.636,895.052L142.636,843.16L90.744,843.16L90.744,790.187L51.825,786.944ZM610.419,114.458L665.77,114.458L665.77,175.863L611.284,175.863L610.419,114.458Z"
          fill={fill}
        />
      </g>
    </g>
  </svg>
);

const NotificationConnection = () => {
  const notify = ({
    fill = "rgb(83,83,83)",
    message = { title: "", subtitle: "" },
  }) =>
    toast(
      <ContainerNotification>
        <ContainerImage>
          <ImageDinosaur fill={fill} />
        </ContainerImage>
        <Notification>
          <NotificationTitle>{message.title}</NotificationTitle>
          <NotificationSubtitle>{message.subtitle}</NotificationSubtitle>
        </Notification>
      </ContainerNotification>
    );

  const offline = () =>
    notify({
      fill: "rgb(83,83,83)",
      message: {
        title: "You're Offline",
        subtitle:
          "Some parts of this site may be unavailable until you come backonline",
      },
    });

  const online = () =>
    notify({
      fill: "#81C784",
      message: {
        title: "You're Online",
        subtitle: "Welcome back to join",
      },
    });

  useEffect(() => {
    window.addEventListener("offline", offline);
    window.addEventListener("online", online);
    return () => {
      window.removeEventListener("offline", offline);
      window.removeEventListener("online", online);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <ToastContainer
      style={{ padding: 0, backgroundColor: "transparent" }}
      position="bottom-left"
      autoClose={4000}
      closeOnClick={false}
      closeButton={false}
    />
  );
};

export default NotificationConnection;
