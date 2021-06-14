/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return;
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```

  sails.bcrypt = require('bcryptjs');
  var salt = await sails.bcrypt.genSalt(10);

  if (await Restaurant.count() > 0) {
    return generateUsers();
  }

  await Restaurant.createEach([
    { title: "Fresh ingredients!", restaurant: "Above & Beyond", region: "Kowloon", mall: "Harbour City", image: "https://www1.pchouse.com.cn/penguin-m1.jpg", quota: 16, coins: 300, deal_valid_till: "2021-07-24", detail: "17 Science Museum Rd, Tsim Sha Tsui" },

    { title: "Traditional Japanese cuisine.", restaurant: "Sagano", region: "Kowloon", mall: "Time Square", image: "https://img.zcool.cn/community/01bf56554940660000019ae9a70c30.jpg@1280w_1l_2o_100sh.jpg", quota: 10, coins: 200, deal_valid_till: "2021-08-06", detail: "1/F New World Millennium Hong Kong Hotel, 72 Mody Road, Tsim Sha Tsui" },

    { title: "Delicious afternoon tea!", restaurant: "Amber's Table", region: "Kowloon", mall: "Elements", image: "https://gavindesign.com/wp-content/uploads/2020/10/20201011_003006_064.jpg", quota: 22, coins: 150, deal_valid_till: "2021-09-05", detail: "Whampoa Garden Site 4 Palm Mansions Block 1" },

    { title: "Two people to eat, 20% discount.", restaurant: "Sabatini Ristorante Italiano", region: "Kowloon", mall: "Festival Walk", image: "https://gavindesign.com/wp-content/uploads/2020/11/20201109_231239_067.jpg", quota: 7, coins: 140, deal_valid_till: "2021-10-29", detail: "69 Mody Rd, Tsim Sha Tsui East" },

    { title: "Delicious buffet buffet", restaurant: "Promenade", region: "Kowloon", mall: " MegaBox ", image: "https://img.zcool.cn/community/013dec5b99e56fa801213dead833c4.jpg@1280w_1l_2o_100sh.jpg", quota: 3, coins: 100, deal_valid_till: "2021-11-21", detail: "  Wing On Plaza, UG 1-5 & 31, 62 Mody Rd, Tsim Sha Tsui" },

    { title: "Vegetarian from India", restaurant: "Sangeetha Vegetarian", region: "HK Island", mall: "Pacific Place", image: "https://www.hkgulan.com/upload/image/20190216/1550281590111710.jpg", quota: 23, coins: 90, deal_valid_till: "2021-11-01", detail: "2/F, The Lamma City, 761 Nathan Road, Mong Kok" },

    { title: "American flavor", restaurant: "Mezzo", region: "HK Island", mall: " IFC Mall ", image: "https://gavindesign.com/wp-content/uploads/2020/10/20201011_003006_062.jpg", quota: 33, coins: 300, deal_valid_till: "2021-10-25", detail: " 70 Mody Rd, Tsim Sha Tsui East" },

    { title: "Indian & Middle-Eastern Cuisine", restaurant: "Ebeneezer's Kebabs & Pizzeria", region: "New Territories", mall: "APM", image: "https://img.zcool.cn/community/016d3f5b717d74a801215c8f17699c.jpg@1280w_1l_2o_100sh.jpg", quota: 12, coins: 80, deal_valid_till: "2021-10-29", detail: "G05, The Chinese University of Hong Kong, Li Wai Chun Building, Chung Chi Rd, Sha Tin" },

    { title: "A variety of delicious wines,", restaurant: "Meraviglia Bar", region: "New Territories", mall: "New Town Plaza", image: "https://5b0988e595225.cdn.sohucs.com/images/20171005/9bee1aaba1064c729ff84a030d0214dc.jpeg", quota: 25, coins: 60, deal_valid_till: "2021-10-22", detail: "Lakeside 2, 10 Science and Technology W Ave, Sha Tin" },

    { title: "Delicious roast duck", restaurant: "Sha Tin 18", region: "New Territories", mall: "Tsuen Wan Plaza", image: "https://www.xiuxianshipin.com/storage/uploads/image/2019/07/16/153d38f086dd107b82a15140d7daaba9.jpg", quota: 11, coins: 100, deal_valid_till: "2021-10-21", detail: "4/F, 18 Chak Cheung St, Ma Liu Shui" },



   	{ title: "Fresh ingredients!", restaurant: "Hestia Kitchen", region: "Kowloon", mall: "Harbour City", image: "https://www.le-jehanne.com/assets/images/restaurant.jpg", quota: 16, coins: 300, deal_valid_till: "2021-07-24", detail: "17 Science Museum Rd, Tsim Sha Tsui" },

    { title: "Traditional Japanese cuisine.", restaurant: "Sup", region: "Kowloon", mall: "Time Square", image: "https://media-cdn.tripadvisor.com/media/photo-s/1a/18/3a/cb/restaurant-le-47.jpg", quota: 10, coins: 200, deal_valid_till: "2021-08-06", detail: "1/F New World Millennium Hong Kong Hotel, 72 Mody Road, Tsim Sha Tsui" },

    { title: "Delicious afternoon tea!", restaurant: "Matsumoto", region: "HK Island", mall: "Elements", image: "https://www.ahstatic.com/photos/a7l6_rsr001_00_p_1024x768.jpg", quota: 22, coins: 150, deal_valid_till: "2021-09-05", detail: "Whampoa Garden Site 4 Palm Mansions Block 1" },

    { title: "Two people to eat, 20% discount.", restaurant: "Arbor", region: "HK Island", mall: "Festival Walk", image: "https://c.ndtvimg.com/2020-01/hqocblio_restaurant-_625x300_14_January_20.jpg", quota: 7, coins: 140, deal_valid_till: "2021-10-29", detail: "69 Mody Rd, Tsim Sha Tsui East" },

    { title: "Delicious buffet buffet", restaurant: "Café Landmark", region: "HK Island", mall: " MegaBox ", image: "https://www.collinsdictionary.com/images/full/restaurant_135621509.jpg", quota: 3, coins: 100, deal_valid_till: "2021-11-21", detail: "  Wing On Plaza, UG 1-5 & 31, 62 Mody Rd, Tsim Sha Tsui" },

    { title: "Vegetarian from India", restaurant: "kikusan", region: "HK Island", mall: "Pacific Place", image: "https://www.elitetraveler.com/wp-content/uploads/2007/02/Alain-Ducasse-scaled.jpg", quota: 23, coins: 90, deal_valid_till: "2021-11-01", detail: "2/F, The Lamma City, 761 Nathan Road, Mong Kok" },

    { title: "American flavor", restaurant: "Glasshouse", region: "HK Island", mall: " IFC Mall ", image: "https://duongrestaurantsaigon.com/wp-content/uploads/2020/05/duong-restaurant-saigon.jpg", quota: 33, coins: 300, deal_valid_till: "2021-10-25", detail: " 70 Mody Rd, Tsim Sha Tsui East" },

    { title: "Indian & Middle-Eastern Cuisine", restaurant: "Man Wah", region: "New Territories", mall: "APM", image: "https://zellersrestaurants.com/wp-content/uploads/2019/11/Restaurant.jpg", quota: 12, coins: 80, deal_valid_till: "2021-10-29", detail: "G05, The Chinese University of Hong Kong, Li Wai Chun Building, Chung Chi Rd, Sha Tin" },

    { title: "A variety of delicious wines,", restaurant: "Ta Vie", region: "New Territories", mall: "New Town Plaza", image: "https://media-cdn.tripadvisor.com/media/photo-s/1b/67/cc/f8/chestnut-restaurant.jpg", quota: 25, coins: 60, deal_valid_till: "2021-10-22", detail: "Lakeside 2, 10 Science and Technology W Ave, Sha Tin" },

    { title: "Delicious roast duck", restaurant: "Ronin", region: "New Territories", mall: "Tsuen Wan Plaza", image: "https://www.ahstatic.com/photos/a477_rsr002_00_p_1024x768.jpg", quota: 11, coins: 100, deal_valid_till: "2021-10-21", detail: "4/F, 18 Chak Cheung St, Ma Liu Shui" },



	{ title: "Fresh ingredients!", restaurant: "Kyoto Joe", region: "Kowloon", mall: "Harbour City", image: "https://media.timeout.com/images/105239239/image.jpg", quota: 16, coins: 300, deal_valid_till: "2021-07-24", detail: "17 Science Museum Rd, Tsim Sha Tsui" },

    { title: "Traditional Japanese cuisine.", restaurant: "KALE", region: "Kowloon", mall: "Time Square", image: "https://cdn2.lamag.com/wp-content/uploads/sites/6/2020/05/jason-leung-poI7DelFiVA-unsplash-1068x712.jpg", quota: 10, coins: 200, deal_valid_till: "2021-08-06", detail: "1/F New World Millennium Hong Kong Hotel, 72 Mody Road, Tsim Sha Tsui" },

    { title: "Delicious afternoon tea!", restaurant: "ISOLA bar grill", region: "Kowloon", mall: "Elements", image: "https://www.ahstatic.com/photos/5394_rsr001_00_p_1024x768.jpg", quota: 22, coins: 150, deal_valid_till: "2021-09-05", detail: "Whampoa Garden Site 4 Palm Mansions Block 1" },

    { title: "Two people to eat, 20% discount.", restaurant: "Smashed by Electric Ave", region: "New Territories", mall: "Festival Walk", image: "https://www.zzyqzs.com/uploads/allimg/191115/1-191115161921C2.jpg", quota: 7, coins: 140, deal_valid_till: "2021-10-29", detail: "69 Mody Rd, Tsim Sha Tsui East" },

    { title: "Delicious buffet buffet", restaurant: "Summer Palace", region: "New Territories", mall: " MegaBox ", image: "https://media.timeout.com/images/105757491/image.jpg", quota: 3, coins: 100, deal_valid_till: "2021-11-21", detail: "  Wing On Plaza, UG 1-5 & 31, 62 Mody Rd, Tsim Sha Tsui" },

    { title: "Vegetarian from India", restaurant: "AMMO", region: "HK Island", mall: "Pacific Place", image: "https://media-cdn.tripadvisor.com/media/photo-s/1a/b2/c8/eb/lounge-area.jpg", quota: 23, coins: 90, deal_valid_till: "2021-11-01", detail: "2/F, The Lamma City, 761 Nathan Road, Mong Kok" },

    { title: "American flavor", restaurant: "Urban Bakery", region: "HK Island", mall: " IFC Mall ", image: "https://s3.us-east-1.amazonaws.com/co-assets/assets/images/restaurant.jpg", quota: 33, coins: 300, deal_valid_till: "2021-10-25", detail: " 70 Mody Rd, Tsim Sha Tsui East" },

    { title: "Indian & Middle-Eastern Cuisine", restaurant: "Sevva", region: "New Territories", mall: "APM", image: "https://www.ahstatic.com/photos/5555_rsr001_00_p_1024x768.jpg", quota: 12, coins: 80, deal_valid_till: "2021-10-29", detail: "G05, The Chinese University of Hong Kong, Li Wai Chun Building, Chung Chi Rd, Sha Tin" },

    { title: "A variety of delicious wines,", restaurant: "Brickhouse", region: "New Territories", mall: "New Town Plaza", image: "https://www.bauervenezia.com/wp-content/uploads/2020/09/Settimo-Cielo-Rooftop_1-1.jpg", quota: 25, coins: 60, deal_valid_till: "2021-10-22", detail: "Lakeside 2, 10 Science and Technology W Ave, Sha Tin" },

    { title: "Delicious roast duck", restaurant: "MADERA", region: "New Territories", mall: "Tsuen Wan Plaza", image: "https://www.telegraph.co.uk/content/dam/Travel/hotels/2020/march/opheem-birmingham-restaurants-2-xlarge.jpg", quota: 11, coins: 100, deal_valid_till: "2021-10-21", detail: "4/F, 18 Chak Cheung St, Ma Liu Shui" },
    // etc.
  ]);

  return generateUsers();

  async function generateUsers() {

    if (await User.count() > 0) {
      return;
    }

    var hash = await sails.bcrypt.hash('123456', salt);

    await User.createEach([
      { username: "admin", password: hash, role: "admin", curr_coins: 10000 },
      { username: "member", password: hash, role: "member", curr_coins: 10000 },
      { username: "sundi", password: hash, role: "admin", curr_coins: 100000 },
      // etc.
    ]);

    const restaurant1 = await Restaurant.findOne({ restaurant: "Sagano" });
    const restaurant2 = await Restaurant.findOne({ restaurant: "Promenade" });
    const sundi = await User.findOne({ username: "sundi" });

  }

};
