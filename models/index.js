const User = require("./User");
const Post = require("./Post");

// create associations
// 一个用户可以发很多帖子。但是一个帖子只属于一个用户
User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Post };
