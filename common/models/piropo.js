module.exports = function(Piropo) {
	Piropo.prototype.votoAFavor = function(cb) {
		console.log(this)
		this.votoAFavor = this.votoAFavor + 1;
	};
	Piropo.prototype.votoEnContra = function(cb) {
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
		}
	});

};