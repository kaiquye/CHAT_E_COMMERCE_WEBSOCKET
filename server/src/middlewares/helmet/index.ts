import helmet from "helmet";

function helmetConfig() {
  return helmet({ referrerPolicy: { policy: "no-referrer" } }); // adcionar mais confiurações
}

export default helmetConfig;
