Meteor.pages({
  '/' : {to: 'meetupList', nav: 'meetupList'},
  '/topics' : {to: 'topicList', nav: 'topicList'},
  '*' : {to: '404'}
},{
  defaults: {
    layout: 'layout'
  }
});