import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer O6lhPW9fq0nguNpT80GZwXRpyv-6fLIcX0GKtrICq5Up6Xxwd66Oucb95RdhX6SYGyduDHwBRXRQU-i28LdKa4aP7T1H5eRzPlm8qUMNDtBB0e5ssMQPEyVfjxi_XnYx",
  },
});
