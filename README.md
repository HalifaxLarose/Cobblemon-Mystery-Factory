You wake up as a Dragon in a foreign land, with a mysterious voice giving you one command: "save me". In this new World of Cobblemon Mystery Factory, beasts roam free across beautiful landscapes, organizing themselves into guilds to accomplish share goals. You decide that the only way to save this voice is to start the Engineering guild. As you grow your factory, you will be able to automate production of more powerful pokeballs, medicine, tms, and even vitamins and bottle caps to fully strengthen your guildmembers - as well as access to dimensions with rare and unique cobblemon. And you're going to need this strength - you can't recruit higher-level Cobblemon until you defeat rival guildmasters.

More specifically, this modpack will be a cross between a tech pack and a kitchen sink, a lot of both centered around the Create mod. The quest guidebook will be carefully crafted to guide players through the tech tree and the complexities of the Create mod, and side content will reward players with powerful held items and rare TMs. For those who have no interest in playing a tech mod, you will still be able to engage in Cobblemon - pokeballs and items can be found in treasure chests, and there will be an-game shop system. Industry will still be the most powerful option, regardless.


## For Devs

there is a dev template pack with the packwiz command setup, found in the [discord](https://discord.com/channels/1424171691352784988/1426201130966454373) along with a video, all you have to do is follow step 1 to 3, 9 to 12

Manual Setup:
1) Use prism for your launcher.
2) Fork Lizards repo
3) Clone the repo
4) In prism, make a new modpack, select 1.21.1 for game verison, select Neoforge for the loader, select 21.1.213 for Neoforge.
5) Open the modpack folder, and enter in to the minecraft folder
6) Add packwiz-installer-bootstrap.jar from [here](https://github.com/packwiz/packwiz-installer-bootstrap/releases) into that minecraft foleder
7) In prism, edit the instance you just made, then go to settings -> custom commands -> toggle the custom command button
8) In pre launch command, add ``"$INST_JAVA" -jar packwiz-installer-bootstrap.jar http://localhost:8080/pack.toml``
9) Goto where you cloned the repo, and open a termial there. (can type cmd in the search to open it there)
10) Run ``packwiz serve``, you should see ``Loading modpack... Running on port 8080``
11) Launch your modpack in prism.
12) packwiz *should* pull all the files needed from the repo, creating a modpack instance that is upto date with your clone

Once this is done, anytime you want to use that dev instance, make sure to run the ``packwiz serve`` in your repo, so your instances can get any fresh changes

# ALSO
When making a commnit, PLEASE exlude the pack.toml and index.toml, they are local caches that change. they break everythingwhen commited

DM theoverlycaffeinatedtrashpanda on discord if you get stuck at any point
