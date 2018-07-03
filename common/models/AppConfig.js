
module.exports = function(AppConfig) {

	/*GET_: /api/EloquaConfig/Install/config/{InstallId}/{SiteId}/{SiteName}/{AppId}/{UserId}  */
 	AppConfig.configApp = function(installId,siteId ,siteName,appId,userId, data, req, res, cb) {

        res.send('OK');

	};

	/*GET_: /api/EloquaConfig/Install/config/{InstallId}/{SiteId}/{SiteName}/{AppId}/{UserId}  */
	AppConfig.remoteMethod(
        'configApp',
        {
		  http: {path: '/config/:installId/:siteId/:siteName/:appId/:userId', verb: 'get'},
		  accepts: [
			{arg: 'installId', type: 'string' , http: { source: 'path' } },
			{arg: 'siteId', type: 'string' , http: { source: 'path' } },
			{arg: 'siteName', type: 'string' , http: { source: 'path' } },
			{arg: 'appId', type: 'string' , http: { source: 'path' } },
			{arg: 'userId', type: 'string' , http: { source: 'path' } },
			{arg: 'data', type: 'object', http: { source: 'body' }},
			{arg: 'req', type: 'object', 'http': {source: 'req'}},
			{arg: 'res', type: 'object', 'http': {source: 'res'}}
		 ],
         returns: { type: 'Object', root: true}
        }
    );

};


