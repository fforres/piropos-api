module.exports = function(Voto) {

	Voto.beforeRemote('create', function(ctx, piropo, next) {
		ctx.args.data.creado = new Date();
		next();
	});
};