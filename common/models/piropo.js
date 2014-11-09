module.exports = function(Piropo) {
	Piropo.prototype.votoAFavor = function(cb) {
		console.log("this")
		console.log(this)
		this.votoAFavor = this.votoAFavor + 1;
	};
	Piropo.prototype.votoEnContra = function(cb) {
		console.log("this")
		console.log(this)
		this.votoEnContra = this.votoEnContra + 1;
	};
	Piropo.remoteMethod('votoAFavor', {
		isStatic: false,
		accepts: [],
		returns: {
			arg: 'msg',
			type: 'string'
		}
	});
	Piropo.remoteMethod('votoEnContra', {
		isStatic: false,
		accepts: [],
		returns: {
			arg: 'msg',
			type: 'string'
		},
		http: {
			verb: 'get',
			path: '/votoEnContra'
		}
	});
	
	Piropo.beforeRemote('create', function(ctx, piropo, next) {
		ctx.args.data.creado = new Date();
		ctx.args.data.votoAFavor = 0;
		ctx.args.data.votoEnContra = 0;
		next();
	});
};