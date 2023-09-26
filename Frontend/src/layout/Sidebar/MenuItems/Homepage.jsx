// assets

import {
  AirportShuttleOutlined,
  Home,
  Medication,
  Person,
} from "@mui/icons-material";

// constant

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const Homepage = {
  id: "",
  title: "General",
  type: "group",
  children: [
    {
      id: "",
      title: "Home",
      type: "item",
      url: "/",
      icon: <Home />,
      breadcrumbs: false,
    },
    {
      id: "fundpost",
      title: "Raise Fund",
      type: "item",
      url: "/fundpost",
      icon: <AirportShuttleOutlined />,
      breadcrumbs: false,
    },
    {
      id: "bloodpost",
      title: "Find Blood",
      type: "item",
      url: "/bloodpost",
      icon: <AirportShuttleOutlined />,
      breadcrumbs: false,
    },
    {
      id: "ambulance",
      title: "Ambulance",
      type: "item",
      url: "/ambulance",
      icon: <AirportShuttleOutlined />,
      breadcrumbs: false,
    },
    {
      id: "doctorList",
      title: "Doctors",
      type: "item",
      url: "/doctorList",
      icon: <AirportShuttleOutlined />,
      breadcrumbs: false,
    },
    {
      id: "appointments",
      title: "Appointments",
      type: "item",
      url: "/appointments",
      icon: <Medication />,
      breadcrumbs: false,
    },
    {
      id: "userprofile",
      title: "My Profile",
      type: "item",
      url: "/userprofile",
      icon: <Person />,
      breadcrumbs: false,
    },
  ],
};

export default Homepage;
