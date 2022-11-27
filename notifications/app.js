const { Webhook, MessageBuilder } = require('discord-webhook-node');
const monitor = require('node-docker-monitor')

const onePolkadot = new Webhook('discord-webhook-url');

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