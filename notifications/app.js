const { Webhook, MessageBuilder } = require('discord-webhook-node');
const monitor = require('node-docker-monitor')

//const twoPolkadot = new Webhook('https://discord.com/api/webhooks/911385896690008154/Fb6jDwkzjce4KsDbYhLp32pPzzubqqAjjS7ntuS-Mwc6QHLv6hdp2tMeWkTWAVtgTepT');
const onePolkadot = new Webhook('https://discord.com/api/webhooks/911399776078135316/VRSqbhrJnJI_auwAfvu6amFL-FHw_vO6K96-kPxoS3woe-3VNBH0wBNqZxRiGskdTia-');

monitor({
      onContainerUp: function(container) {
          console.log('Container up: ', container)

          const embed = new MessageBuilder()
            .setTitle(container.Name)
            .addField('State : ',container.State)
            .addField('Status: ',container.Status)
            .setDescription(container.Id)
            .setColor('#00FF00')
            .setTimestamp()

          onePolkadot.send(embed).catch(err => console.log(err))

      },

      onContainerDown: function(container) {
          console.log('Container down: ', container)

          const embed = new MessageBuilder()
            .setTitle(container.Name)
            .addField('State : ',container.State)
            .addField('Status: ',container.Status)
            .setDescription(container.Id)
            .setColor('#FF0000')
            .setTimestamp()

          onePolkadot.send(embed).catch(err => console.log(err))
      }
});