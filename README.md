git webhooks

When code git push, host do git pull.

####use

##### set git info , support many git 

    mkdir data
    vi data.js
  
    cp like that :

    module.exports = [
      {
        'gitUrl' : 'git@github.com:ggice/icer.git',
        'path' : '/home/ggice/code/node/icer',
        'do' : 'pm2 restart test',
        'secret' : 'test'
      }
    ];
    
##### run 

    node index.js

##### set post url

    post url like :
    
    http://host:9002/?secret=test
