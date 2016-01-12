module.exports = function(config) {
	return config.loadConfig('google-gif.json', {
		api_key: {
			doc: 'Your Google API Key',
			format: String,
			default: null
		},
		cx: {
			doc: 'Your custom Search Engine ID',
			format: String,
			default: null
		}
	});
};
