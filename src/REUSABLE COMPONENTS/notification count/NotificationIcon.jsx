import React, { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import axios from "axios";
import "./nav.css";

const NotificationIcon = (prop) => {
  const [jobNotifications, setJobNotifications] = useState([]);
  const [jobNotificationCount, setJobNotificationCount] = useState(0);

  useEffect(() => {
    async function fetchJobNotifications() {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/user-jobs?type=Notifications",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("eze-token")}`,
            },
          }
        );
        setJobNotifications(response.data.data);
        setJobNotificationCount(response.data.data.length);
      } catch (error) {
        console.log(error);
      }
    }
    fetchJobNotifications();

    function listenForJobNotifications() {
      const socket = new WebSocket("ws://localhost:4000/api/notifications");

      socket.onmessage = (event) => {
        const jobNotification = JSON.parse(event.data);
        setJobNotifications((jobNotifications) => [
          ...jobNotifications,
          jobNotification,
        ]);
        setJobNotificationCount((count) => count + 1);
      };

      socket.onclose = () => {
        console.log("WebSocket connection closed");
      };

      socket.onerror = (error) => {
        console.log(error);
      };
    }

    listenForJobNotifications();
  }, []);

  return (
    <div className="notification-icon ">
      <FaBell />
      {jobNotificationCount > 0 && (
        <span className="count border-4">2{jobNotificationCount}</span>
      )}
    </div>
  );
};

export default NotificationIcon;
