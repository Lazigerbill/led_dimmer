// Content in the lib folder is available to both client and server 
// will be first loaded before anything else, great place for helper methods


// default layout for all routes here:
Router.configure({ 
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() { return Meteor.subscribe('posts'); }
});

// old version:
Router.map(function() { 
	this.route('postsList', {path: '/'});
	this.route('postPage', {
	path: '/posts/:_id',
	data: function() {return Posts.findOne(this.params._id);}
	})
});

// Router.route('/', function(){
// 	this.render('postsList');
// },{
// 	name: 'postsList'
// });

// Router.route('/posts/:_id', function(){
// 	this.render('postPage'); 
// },{
// 	data: function() {return Posts.findOne(this.params._id);
// })
