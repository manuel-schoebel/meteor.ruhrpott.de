Topic = new Meteor.Collection('topic');

Topic.allow({
  insert: function(userId, topic){
    return (userId) ? true : false;
  },
  update: function(userId, meetup, fields, modifier){
    return (userId) ? true: false;
  },
  remove: function(userId, meetup){
    return (userId) ? true : false;
  }
});