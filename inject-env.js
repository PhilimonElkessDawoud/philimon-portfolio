const fs = require("fs");

const envFile = `
window.__env = {
  emailjsServiceId: "${process.env.NG_APP_EMAILJS_SERVICE_ID}",
  emailjsTemplateId: "${process.env.NG_APP_EMAILJS_TEMPLATE_ID}",
  emailjsPublicKey: "${process.env.NG_APP_EMAILJS_PUBLIC_KEY}"
};
`;

fs.writeFileSync("src/assets/env.js", envFile);