import cors from "cors";

function corsConfig() {
  let config = {
    origin: "*", // mudar
    methods: "GET,POST, PATCH, DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200,
  };

  return cors(config);
}

export default corsConfig;
