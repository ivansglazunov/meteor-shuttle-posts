Shuttle.Posts = new Mongo.Collection('shuttle:posts');

Shuttle.Posts.attachRefs();

if (Meteor.isServer)
	Shuttle.Posts.attachUnused();

Shuttle.Posts.attachSchema(new SimpleSchema({
	title: {
		type: String,
		optional: true,
		defaultValue: ''
	},
	body: {
		type: String,
		optional: true,
		defaultValue: '',
		autoform: {
			type: 'summernote',
			settings: {
				height: 150
			}
		}
	}
}));

Shuttle.Posts.attachSchema(Shuttle.insertedSchema);

if (Meteor.isServer) 
	Shuttle.Posts.attachSecure(Shuttle.Fetching, '__fetching');

Shuttle.Posts.attachSchema({
	__fetching: {
		type: [Refs.Schema],
		optional: true
	}
});