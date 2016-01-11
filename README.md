git webhooks

####use

    mkdir data
    vi data.js
  
    cp like that :

    module.exports = [
      {
        'gitUrl' : 'git@github.com:ggice/icer.git',
        'path' : '/home/ggice/code/node/icer',
        'secret' : 'test'
      }
    ];