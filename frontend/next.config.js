require("dotenv").config();

module.exports = {
    env: {
        REACT_APP_RECAPTCHA_SITE_KEY: process.env.REACT_APP_RECAPTCHA_SITE_KEY,
    },
};
