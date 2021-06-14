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
        if (!restaurant) return res.status(401).json("Created failed");

        res.view('pages/detail', {
            restaurant: restaurant
        });

    },

    //admin
    admin: async function (req, res) {
        const restaurants = await Restaurant.find();
        return res.view('pages/admin', {
            restaurants
        });
    },

    //updateRead
    updateRead: async function (req, res) {
        const id = req.param('id');
        const restaurant = await Restaurant.findOne({ id });
        res.view('pages/update', {
            restaurant
        });
    },

    // update
    update: async function (req, res) {
        
        var updateRestaurant = await Restaurant.updateOne(req.params.id).set(req.body);
        if(!updateRestaurant) return res.status(401).json("Updated failed");

        /*一种可行的返回特定id的detail页面方法
        path = "/detail?id="+req.params.id;
        return res.redirect(path);*/

        res.view('pages/detail', {
            restaurant: updateRestaurant
        });


    },

    // delete
    delete: async function (req, res) {
        
        var deleteRestaurant = await Restaurant.destroyOne(req.params.id);
        if(!deleteRestaurant) return res.status(401).json("Deleted failed");

    },


    //search




};

