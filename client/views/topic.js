Template.topicList.topics = function () {
  return Topic.find({}, {sort: {votes: -1}});
  // return [
  // {name: 'transitions', votes: 2}, 
  // {name: 'spark engine', votes: 4}
  // ];
};


Template.topicList.events({
  'submit form' : function(evt){
    var data = $(evt.currentTarget).serializeObject();
    data.votes = 0;
    Topic.insert(data);
    return false;
  },
  'click .vote' : function(evt){
    var id = $(evt.currentTarget).attr('data-id');
    Topic.update({_id: id}, {$inc: {votes: 1}});
  }
});