const { Webhook } = require('discord-webhook-node');

const twoPolkadot = new Webhook('https://discord.com/api/webhooks/911385896690008154/Fb6jDwkzjce4KsDbYhLp32pPzzubqqAjjS7ntuS-Mwc6QHLv6hdp2tMeWkTWAVtgTepT');
//const onePolkadot = new Webhook('https://discord.com/api/webhooks/911399776078135316/VRSqbhrJnJI_auwAfvu6amFL-FHw_vO6K96-kPxoS3woe-3VNBH0wBNqZxRiGskdTia-');

monitor({
      onContainerUp: function(container) {
          console.log('Container up: ', container)
          //Sends a success message
            twoPolkadot.success('**Container Up**', container.Name, container);

      },
   
      onContainerDown: function(container) {
          console.log('Container down: ', container)
          twoPolkadot.warning('**Container down**', container.Name, container);
      }
  });