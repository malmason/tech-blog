// import models
// const { json } = require('sequelize/types');
const Blogpost = require('./Blogpost');
const Comment = require('./Comment');
const User = require('./User');

// Comments belongs to Blogpost
Comment.belongsTo(Blogpost, {
  foreignKey: 'blog_id',
});

// Posts have many comments
Blogpost.hasMany(Comment, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE',
});

// User has many posts
User.hasMany(Blogpost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// Posts belong to 1 user
Blogpost.belongsTo(User, {
  foreignKey: 'user_id',
});

// User has many comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// Comment belongs to 1 user
Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = {
  Blogpost,
  Comment, 
  User,
};