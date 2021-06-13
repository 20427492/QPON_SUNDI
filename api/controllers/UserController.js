/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

//const User = require("../models/User");

module.exports = {

    // signup
    signup: async function (req, res) {

        if (!req.body.username || !req.body.password) return res.badRequest();

        var user = await User.findOne({ username: req.body.username });

        if (user) return res.status(401).json("The username has been used");

        var newUsername = req.body.username;
        var newPassword = req.body.password;


        sails.bcrypt = require('bcryptjs');
        var salt = await sails.bcrypt.genSalt(10);

        var hash = await  sails.bcrypt.hash(newPassword, salt);

        await User.createEach([
            { username: newUsername, password: hash, role: "vistor", curr_coins: 10000 },
            // etc.
        ]);

        return res.json("Success Create!");
    },



    // login

    // logout


};

