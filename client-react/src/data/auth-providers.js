import React from "react";

import { Facebook as FacebookIcon } from "mdi-material-ui";
import { Google as GoogleIcon } from "mdi-material-ui";

const authProviders = [
  {
    id: "facebook.com",
    color: "#3c5a99",
    icon: <FacebookIcon />,
    name: "Facebook",
  },
  {
    id: "google.com",
    color: "#4285f4",
    icon: <GoogleIcon />,
    name: "Google",
  },
];

export default authProviders;
