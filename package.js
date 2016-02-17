Package.describe({
  name: 'ivansglazunov:shuttle-posts',
  version: '0.0.0',
  summary: '',
  git: 'https://github.com/ivansglazunov/meteor-shuttle-posts.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use('ecmascript');
  api.use('mongo');
  api.use('accounts-base');
  api.use('ivansglazunov:refs@0.0.1');
  api.use('ivansglazunov:trees@1.1.3');
  api.use('ivansglazunov:shuttle@0.0.0');
  api.use('aldeed:collection2@2.8.0');
  api.use('aldeed:autoform@5.8.1');
  api.use('mpowaga:autoform-summernote@0.4.3');

  api.addFiles([
    'posts.js'
  ]);
});
