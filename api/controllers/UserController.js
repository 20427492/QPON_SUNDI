/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const User = require("../models/User");

module.exports = {

    // login

    // logout

    // signup
    signup: async function (req, res) {

        //error: username or password is null
        if ( !req.body.username || !req.body.password ) return res.badRequest();

        var user = await User.findOne({username: req.body.username});

        // error: username has been used
        if (user) return req.status(401).json("The username has been used.");

        var newUsername = req.body.username;
        var newPassword = req.body.password;

        // hash password
        sails.bcrypt = require('bcryptjs');
        var salt = await sails.bcrypt.genSalt(10);
        var hash = await sails.bcrypt.hash(newPassword, salt);

        //create new user
        await User.createEach([
            {username: newUsername, password: hash, role: "member", curr_coins: 10000 },
            // etc.
        ])

        return res.json("Success Create!");
    },


};

