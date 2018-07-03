var app = require('../../server/server');
/* Costant */
const enable_install = 'enabled';
const delete_install = 'deleted';

module.exports = function(Install) 	{
	/*POST_ api/EloquaApp/Install/enable/{InstallId}/{SiteId}/{SiteName}/{AppId}/{UserId} */
 	Install.enable = function(installId, siteId, siteName, appId, userId, data, req, res, cb) {
		console.log("Install.enable id:"+installId+'@'+siteId);
		app.models.InstallModel.upsert({
			id: installId+'@'+siteId,
			installId: installId, 
			siteId: siteId, 
			siteName: siteName, 
			appId: appId, 
			userId: userId,
			status: enable_install
		}).then(function(installModel) {
			console.log('installModel:',installModel);
			res.send(null);
		});	
	};
	
	Install.remoteMethod(
        'enable', 
        {
		  http: {path: '/enable/:installId/:siteId/:siteName/:appId/:userId', verb: 'post'},  
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
	

	/*/EloquaApp/Install/status/{InstallId}/{SiteId}/{SiteName}/{AppId}/{UserId}*/
 	Install.status = function(installId, siteId, siteName, appId, userId, data, req, res, cb) {
		console.log("Install.status id:"+installId+'@'+siteId); 
		res.send(null);		
	};
	
	Install.remoteMethod(
        'status', 
        {
		  http: {path: '/status/:installId/:siteId/:siteName/:appId/:userId', verb: 'get'},  
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
	
	/*POST_ api/EloquaApp/Install/delete/{InstallId}/{SiteId}/{SiteName}/{AppId}/{UserId}*/
 	Install.delete = function(installId, siteId, siteName, appId, userId, data, req, res, cb) {
		console.log("Install.delete id:"+installId+'@'+siteId);
		app.models.InstallModel.upsert({
			id: installId+'@'+siteId,
			installId: installId, 
			siteId: siteId, 
			siteName: siteName, 
			appId: appId, 
			userId: userId,
			status: delete_install
			}).then(function(installModel) {
				console.log('installModel:',installModel);
				res.send(null);
		});		
	};
	
	Install.remoteMethod(
        'delete', 
        {
		  http: {path: '/delete/:installId/:siteId/:siteName/:appId/:userId', verb: 'post'},  
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


