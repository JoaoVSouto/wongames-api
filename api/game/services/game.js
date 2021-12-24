"use strict";

const axios = require("axios");

module.exports = {
  async populate() {
    const gogApiUrl = `https://www.gog.com/games/ajax/filtered?mediaType=game&page=1&sort=popularity`;

    const {
      data: { products },
    } = await axios.get(gogApiUrl);
  },
};
