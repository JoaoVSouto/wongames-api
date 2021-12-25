"use strict";

module.exports = {
  async populate(ctx) {
    console.log("Starting to populate...");

    await strapi.services.game.populate(ctx.query);

    return ctx.send("Finished populating!");
  },
};
