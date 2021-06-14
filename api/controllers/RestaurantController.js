/**
 * RestaurantController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

//const Restaurant = require("../models/Restaurant");

module.exports = {
    // list
    list: async function(req, res) {

        const restaurants = await Restaurant.find();
        const group = {};

    //   dictionary of keys(region) : restruant
        restaurants.forEach(item => {
          if (!group[item.region]) {
            group[item.region] = [];
          }

          if (group[item.region].length <= 50) {
            group[item.region].push(item);
          }
          //group[item.region].push(item);
        });
        
        res.view('pages/homepage', {
          restaurants: group
        });
      },

    // create

    // update

    // delete

    // detail

    // search

};

