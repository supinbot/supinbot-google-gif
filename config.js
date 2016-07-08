module.exports = function(config) {
	return config.loadConfig({
		api_key: {
			doc: 'Your Google API Key',
			format: String,
			default: null,
			env: 'SUPINBOT_GOOGLE_SEARCH_API'
		},
		cx: {
			doc: 'Your custom Search Engine ID',
			format: String,
			default: null,
			env: 'SUPINBOT_GOOGLE_SEARCH_ID'
		}
	});
};
