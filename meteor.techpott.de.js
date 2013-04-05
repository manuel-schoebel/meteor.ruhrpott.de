if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return 'Hello Meteor Ruhrpott';
    //var greeting = Session.get('greeting') || 'empty';
    //return greeting;
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
    // ,
    // 'mouseover input' : function () {
    //   console.log("hover");
    // }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    console.log('Meteor started');
  });
}