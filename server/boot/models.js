 
module.exports = function hooks(server) {
	var Piropo = server.models.piropo;
	var Voto = server.models.voto;

	Piropo.afterRemote('create', function(ctx, piropo, next) {
		/*

		var elPiropo = piropo
		var elIdDelPiropo = piropo.id;
		var obVoto = {
			favor:0,
    		contra: 0,
    		piropoId: elIdDelPiropo
		};
		Voto.create(obVoto,function(err,voto){
			if(err){
				console.log(err);
			}else{
				var elIdDelVoto = voto.id
				var pi = new Piropo(piropo);
				pi["votoId"] = elIdDelVoto;
				Piropo.upsert(pi,function(err,repiropo){
					console.log("/////////////////////");
				});
			}
		});
		*/
		next();
	});

};