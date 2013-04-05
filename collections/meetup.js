Meetup = new Meteor.Collection('meetup');

Meetup.allow({
  insert: function(userId, meetup){
    return (userId) ? true : false;
  },
  remove: function(userId, meetup){
    return (userId) ? true : false;
  }
});