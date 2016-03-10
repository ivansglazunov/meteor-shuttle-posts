Package.describe({
  name: 'ivansglazunov:shuttle-posts',
  version: '0.0.3',
  summary: 'DEPRECATED',
  git: 'https://github.com/ivansglazunov/meteor-shuttle-posts.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use('ecmascript');
  api.use('mongo');
  api.use('accounts-base');
  
	api.use('ivansglazunov:inserted@0.0.2');
  api.use('ivansglazunov:shuttle-rights@0.0.1');
  api.use('aldeed:collection2@2.8.0');

  api.addFiles([
    'posts.js'
  ]);
});
