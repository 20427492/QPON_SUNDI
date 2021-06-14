/**
 * RestaurantController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

//const Restaurant = require("../models/Restaurant");

module.exports = {
    // list
    list: async function (req, res) {

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

    // detail
    detail: async function (req, res) {

        const id = req.param('id');
        const target = await Restaurant.find({ id });

        res.view('pages/detail', {
            restaurant: target[0]
        });
    },

    // create

    create: async function (req, res) {

        var restaurant = await Restaurant.create(req.body).fetch();
        return res.redirect('/');

    },

    // update

    // delete

    //search




};

