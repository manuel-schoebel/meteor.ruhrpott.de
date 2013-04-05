Template.meetupList.meetups = function() {
  return Meetup.find();
  // return [
  // {date: '06.04.2013', time: '10:00 - 14:00', location: 'Unperfekthaus, Essen, Internetsofa'}
  // ];
};

Template.meetupList.events({
  'submit form' : function(evt){
    var data = $(evt.currentTarget).serializeObject();
    Meetup.insert(data);
    return false;
  }
});