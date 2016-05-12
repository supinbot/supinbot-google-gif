var google = require('googleapis');

module.exports = function(SupinBot) {
	var config = require('./config')(SupinBot.config);

	SupinBot.CommandManager.addCommand('googlegif', function(user, channel, args, argsStr) {
		google.customsearch('v1').cse.list({
			q: argsStr,
			fileType: 'gif',
			searchType: 'image',
			num: 1,
			fields: 'items(link,title)',
			cx: config.get('cx'),
			key: config.get('api_key')
		}, function(err, res) {
			if (err) {
				SupinBot.log.error('Google Search API: ' + err);
				SupinBot.postMessage(channel.id, 'Google Search API: ' + err);
				return;
			}

			if (res.items && res.items.length) {
				SupinBot.postMessage(channel.id, null, {
					attachments: [
						{
							title: res.items[0].title,
							image_url: res.items[0].link
						}
					]
				});
			} else {
				SupinBot.postMessage(channel.id, null, {
					attachments: [
						{
							title: 'Gif not found :(',
							color: '#EA4335'
						}
					]
				});
			}
		});
	})
	.setDescription('Posts the first gif found on Google Image in the channel.')
	.addArgument('Search Query', 'string');

	SupinBot.CommandManager.addCommand('googleimg', function(user, channel, args, argsStr) {
		google.customsearch('v1').cse.list({
			q: argsStr,
			searchType: 'image',
			num: 1,
			fields: 'items(link,title)',
			cx: config.get('cx'),
			key: config.get('api_key')
		}, function(err, res) {
			if (err) {
				SupinBot.log.error('Google Search API: ' + err);
				SupinBot.postMessage(channel.id, 'Google Search API: ' + err);
				return;
			}

			if (res.items && res.items.length) {
				SupinBot.postMessage(channel.id, null, {
					attachments: [
						{
							title: res.items[0].title,
							image_url: res.items[0].link
						}
					]
				});
			} else {
				SupinBot.postMessage(channel.id, null, {
					attachments: [
						{
							title: 'Image not found :(',
							color: '#EA4335'
						}
					]
				});
			}
		});
	})
	.setDescription('Posts the first image found on Google Image in the channel.')
	.addArgument('Search Query', 'string');
};
