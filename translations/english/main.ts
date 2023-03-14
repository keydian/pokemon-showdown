import type {Translations} from '../../server/chat';

export const translations: Translations = {
	name: "English",
	strings: {
		"namelocked": "",
		"locked": "",

		"autoconfirmed": "",
		"trusted": "",

		"Please follow the rules:": "",
		"[TN: Link to the PS rules for your language (path after pokemonshowdown.com]/rules": "",
		"Global Rules": "",
		"${room} room rules": "",

		"<strong>Global ranks</strong>": "",
		"+ <strong>Global Voice</strong> - They can use ! commands like !groups": "",
		"% <strong>Global Driver</strong> - The above, and they can also lock users and check for alts": "",
		"@ <strong>Global Moderator</strong> - The above, and they can globally ban users": "",
		"* <strong>Global Bot</strong> - An automated account that can use HTML anywhere": "",
		"&amp; <strong>Global Administrator</strong> -  They can do anything, like change what this message says and promote users globally": "",

		"<strong>Room ranks</strong>": "",
		"^ <strong>Prize Winner</strong> - They don't have any powers beyond a symbol.": "",
		"+ <strong>Voice</strong> - They can use ! commands like !groups": "",
		"% <strong>Driver</strong> - The above, and they can mute and warn": "",
		"@ <strong>Moderator</strong> - The above, and they can room ban users": "",
		"* <strong>Bot</strong> - An automated account that can mute, warn, and use HTML": "",
		"# <strong>Room Owner</strong> - They are leaders of the room and can almost totally control it": "",

		"/help OR /h OR /? - Gives you help.": "",
		"For an overview of room commands, use /roomhelp": "",
		"For details of a specific command, use something like: /help data": "",

		"COMMANDS": "",
		"BATTLE ROOM COMMANDS": "",
		"OPTION COMMANDS": "",
		"INFORMATIONAL/RESOURCE COMMANDS": "",
		"DATA COMMANDS": "",
		"DRIVER COMMANDS": "",
		"MODERATOR COMMANDS": "",
		"ADMIN COMMANDS": "",

		"(replace / with ! to broadcast. Broadcasting requires: + % @ # &)": "",

		"<strong>Room punishments</strong>:": "",
		"<strong>warn</strong> - Displays a popup with the rules.": "",
		"<strong>mute</strong> - Mutes a user (makes them unable to talk) for 7 minutes.": "",
		"<strong>hourmute</strong> - Mutes a user for 60 minutes.": "",
		"<strong>ban</strong> - Bans a user (makes them unable to join the room) for 2 days.": "",
		"<strong>weekban</strong> - Bans a user from the room for a week.": "",
		"<strong>blacklist</strong> - Bans a user for a year.": "",

		"<strong>Global punishments</strong>:": "",
		"<strong>lock</strong> - Locks a user (makes them unable to talk in any rooms or PM non-staff) for 2 days.": "",
		"<strong>weeklock</strong> - Locks a user for a week.": "",
		"<strong>namelock</strong> - Locks a user and prevents them from having a username for 2 days.": "",
		"<strong>globalban</strong> - Globally bans (makes them unable to connect and play games) for a week.": "",

		"<strong>Indefinite global punishments</strong>:": "",
		"<strong>permalock</strong> - Issued for repeated instances of bad behavior and is rarely the result of a single action. ": "",
		'These can be appealed in the <a href="https://www.smogon.com/forums/threads/discipline-appeal-rules.3583479/">Discipline Appeal</a>': '',
		" forum after at least 3 months without incident.": "",
		"<strong>permaban</strong> - Unappealable global ban typically issued for the most severe cases of offensive/inappropriate behavior.": "",

		"<strong>Room drivers (%)</strong> can use:": "",
		"- /warn OR /k <em>username</em>: warn a user and show the Pok&eacute;mon Showdown rules": "",
		"- /mute OR /m <em>username</em>: 7 minute mute": "",
		"- /hourmute OR /hm <em>username</em>: 60 minute mute": "",
		"- /unmute <em>username</em>: unmute": "",
		"- /hidetext <em>username</em>: hide a user's messages from the room": "",
		"- /announce OR /wall <em>message</em>: make an announcement": "",
		"- /modlog <em>username</em>: search the moderator log of the room": "",
		"- /modnote <em>note</em>: add a moderator note that can be read through modlog": "",

		"<strong>Room moderators (@)</strong> can also use:": "",
		"- /roomban OR /rb <em>username</em>: ban user from the room": "",
		"- /roomunban <em>username</em>: unban user from the room": "",
		"- /roomvoice <em>username</em>: appoint a room voice": "",
		"- /roomdevoice <em>username</em>: remove a room voice": "",
		"- /staffintro <em>intro</em>: set the staff introduction that will be displayed for all staff joining the room": "",
		"- /roomsettings: change a variety of room settings, namely modchat": "",

		"<strong>Room owners (#)</strong> can also use:": "",
		"- /roomintro <em>intro</em>: set the room introduction that will be displayed for all users joining the room": "",
		"- /rules <em>rules link</em>: set the room rules link seen when using /rules": "",
		"- /roommod, /roomdriver <em>username</em>: appoint a room moderator/driver": "",
		"- /roomdemod, /roomdedriver <em>username</em>: remove a room moderator/driver": "",
		"- /roomdeauth <em>username</em>: remove all room auth from a user": "",
		"- /declare <em>message</em>: make a large blue declaration to the room": "",
		"- !htmlbox <em>HTML code</em>: broadcast a box of HTML code to the room": "",
		"- !showimage <em>[url], [width], [height]</em>: show an image to the room": "",
		"- /roomsettings: change a variety of room settings, including modchat, capsfilter, etc": "",

		"More detailed help can be found in the <a href=\"https://www.smogon.com/forums/posts/6774654/\">roomauth guide</a>": "",

		"Tournament Help:": "",
		"- /tour create <em>format</em>, elimination: create a new single elimination tournament in the current room.": "",
		"- /tour create <em>format</em>, roundrobin: create a new round robin tournament in the current room.": "",
		"- /tour end: forcibly end the tournament in the current room": "",
		"- /tour start: start the tournament in the current room": "",
		"- /tour banlist [pokemon], [talent], [...]: ban moves, abilities, Pokémon or items from being used in a tournament (it must be created first)": "",

		"More detailed help can be found in the <a href=\"https://www.smogon.com/forums/posts/6777489/\">tournaments guide</a>": "",

		"Your status cannot be updated while you are locked or semilocked.": "",
		"Your status is too long; it must be under ${maxLength} characters.": "",
		"Your status contains a banned word.": "",
		"Your status has been set to: ${target}.": "",
		"You are now marked as busy.": "",
		"You are now marked as away. Send a message or use /back to indicate you are back.": "",
		"You are already marked as back.": "",
		"You are no longer marked as busy.": "",

		"You must choose a name before you can talk.": "",
		"You are ${lockType} and can't talk in chat. ${lockExpiration}": "",
		"Get help with [TN: your lock]this": "",
		"You are muted and cannot talk in this room.": "",
		"Because moderated chat is set, your account must be at least one week old and you must have won at least one ladder game to speak in this room.": "",
		"Because moderated chat is set, your account must be staff in a public room or have a global rank to speak in this room.": "",
		"Because moderated chat is set, you must be of rank ${groupName} or higher to speak in this room.": "",
		"Your message can't be blank.": "",
		"Your message is too long: ": "",
		"Your message contains banned characters.": "",
		"This room has slow-chat enabled. You can only talk once every ${time} seconds.": "",
		"Your username contains a phrase banned by this room.": "",
		"Your status message contains a phrase banned by this room.": "",

		"You are ${lockType} and can only private message members of the global moderation team. ${lockExpiration}": "",
		"Get help with this": "",
		"The user \"${targetUser.name}\" is locked and cannot be PMed.": "",
		"On this server, you must be of rank ${groupName} or higher to PM users.": "",
		"This user is blocking private messages right now.": "",
		"This ${Config.groups[targetUser.group].name} is too busy to answer private messages right now. Please contact a different staff member.": "",
		"If you need help, try opening a <a href=\"view-help-request\" class=\"button\">help ticket</a>": "",
		"You are blocking private messages right now.": "",
		"You are blocking challenges right now.": "",

		"Your message contained banned words in this room.": "",
		"You can't send the same message again so soon.": "",
		"Due to this room being a high traffic room, your message must contain at least two letters.": "",

		"You are already blocking private messages! To unblock, use /unblockpms": "",
		"You are now blocking private messages, except from staff and ${rank}.": "",
		"You are now blocking private messages, except from staff and ${status} users.": "",
		"You are now blocking private messages, except from staff.": "",
		"You are not blocking private messages! To block, use /blockpms": "",
		"You are no longer blocking private messages.": "",
		"You are now blocking all incoming challenge requests.": "",
		"You are already blocking challenges!": "",
		"You are already available for challenges!": "",
		"You are available for challenges from now on.": "",
		"You are now blocking challenges, except from staff and ${rank}.": "",
		"You are now blocking challenges, except from staff and ${status} users.": "",

		"Staff FAQ": "",
		"You cannot broadcast all FAQs at once.": "",
		"A user is autoconfirmed when they have won at least one rated battle and have been registered for one week or longer. In order to prevent spamming and trolling, most chatrooms only allow autoconfirmed users to chat. If you are not autoconfirmed, you can politely PM a staff member (staff have %, @, or # in front of their username) in the room you would like to chat and ask them to disable modchat. However, staff are not obligated to disable modchat.": "",
		"How the ladder works": "",
		"Tiering FAQ": "",
		"Badge FAQ": "",
		"Common misconceptions about our RNG": "",
		"To join a room tournament, click the <strong>Join!</strong> button or type the command <code>/tour join</code> in the room's chat. You can check if your team is legal for the tournament by clicking the <strong>Validate</strong> button once you've joined and selected a team. To battle your opponent in the tournament, click the <strong>Ready!</strong> button when it appears. There are two different types of room tournaments: elimination (if a user loses more than a certain number of times, they are eliminated) and round robin (all users play against each other, and the user with the most wins is the winner).": "",
		"Frequently Asked Questions": "",

		"Invalid room.": "",

		"pages/faq": "",
		"pages/ladderhelp": "",
		"pages/rng": "",
		"pages/staff": "",

		"- We log PMs so you can report them - staff can't look at them without permission unless there's a law enforcement reason.": "",
		"- We log IPs to enforce bans and mutes.": "",
		"- We use cookies to save your login info and teams, and for Google Analytics and AdSense.": "",
		'- For more information, you can read our <a href="https://${Config.routes.root}/privacy">full privacy policy.</a>': '',
	},
};
