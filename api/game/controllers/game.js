"use strict";

module.exports = {
  async populate(ctx) {
    console.log("Starting to populate...");

    await strapi.services.game.populate();

    return ctx.send("Finished populating!");
  },
};
