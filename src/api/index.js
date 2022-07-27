//
// mock api
//

import axios from "axios";

// Create instance called instance
const api = axios.create({
  baseURL: "https://react-chakra-ui-components.stackblitz.io/",
  headers: {
    "content-type": "application/json"
  }
});
