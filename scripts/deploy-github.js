const ghPages = require('gh-pages')

ghPages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/krishnavk/krishnavk.github.io.git',
  },
  () => {
    console.log('Deployed to github')
  }
)
