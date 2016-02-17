Shuttle.Posts = new Mongo.Collection('shuttle:posts');

if (Meteor.isServer) Shuttle.Unused.watch(Shuttle.Posts);

if (Meteor.isServer) Shuttle.Fetching.secureCollection(Shuttle.Posts, '_fetching');

Shuttle.Posts.attachSchema({ _inserted: { type: insertedSchema() } });

Shuttle.Posts.attachSchema(new SimpleSchema({
	title: {
		type: String,
		optional: true,
		defaultValue: ''
	},
	body: {
		type: String,
		optional: true,
		defaultValue: ''
	}
}));