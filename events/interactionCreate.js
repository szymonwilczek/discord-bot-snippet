/**
 *
 * @param {import("../lib/Main")} client
 * @param {import("discord.js").Interaction}interaction
 */
module.exports = (client, interaction) => {
  if (interaction.isCommand()) {
    if (interaction.isContextMenuCommand()) {
      let command = client.contextCommands.find(
        (x) => x.command.name == interaction.commandName
      );
      if (!command || !command.run) {
        return;
      }
      client.commandsRan++;
      command.run(client, interaction, interaction.options);
      return;
    }
    let command = client.slashCommands.find(
      (x) => x.name == interaction.commandName
    );
    if (!command || !command.run) {
      return interaction.reply(
        "Sorry the command you used doesn't have any run function"
      );
    }
    client.commandsRan++;
    command.run(client, interaction, interaction.options);
    return;
  }
};
