module.exports = function(Piropo) {
	
	Piropo.searchIgnoreCase = function(searchParameter, cb) {
        var pattern = new RegExp(searchParameter+"$", "i"); /* case-insensitive RegExp search */ 
        ob = {
                order:"votoAFavor DESC",
                limit:10,
                where:
                {
                    textoUpperCase:
                    {
                        like: searchParameter.toUpperCase()
                    }
                }
        };
        console.log(ob)
		Piropo.find(ob,function(err,piropos){
		    if(err){
		        cb(null,[]);    
		    }else{
                cb(null,piropos);
		    }
		});
	};
	
	Piropo.prototype.addVotoAFavor = function(cb) {
		this.votoAFavor = this.votoAFavor + 1;
		this.votoTotal = this.votoAFavor - this.votoEnContra;
		this.updateAttributes(this,function(err,data){
			cb(null,data);
		});
	};

	Piropo.prototype.addVotoEnContra = function(cb) {
		this.votoEnContra = this.votoEnContra + 1;
		this.votoTotal = this.votoAFavor - this.votoEnContra;
		this.updateAttributes(this,function(err,data){
			cb(null,data);
		});
	};
	
	Piropo.remoteMethod('addVotoAFavor', {
		isStatic: false,
		accepts: [],
		returns: {
			arg: 'msg',
			type: 'string'
		}
	}); 
	Piropo.remoteMethod('addVotoEnContra', {
		isStatic: false,
		accepts: [],
		returns: {
			arg: 'msg',
			type: 'string' 
		}
	});  
	
	Piropo.remoteMethod('searchIgnoreCase', {
		isStatic: true,
        http: {verb: 'get'},
		accepts: {
            arg:'searchParameter',
            type:'string'
		},
		returns: {
			arg: 'piropos',
			type: 'string'
		}
	}); 
	
	Piropo.beforeRemote('create', function(ctx, piropo, next) {
		ctx.args.data.creado = new Date();
		ctx.args.data.votoAFavor = ctx.args.data.votoEnContra = ctx.args.data.votoTotal=0;
		var texto = ctx.args.data.texto.trim().replace("\n", "").split(" ").join("-");
		ctx.args.data.seoencoded = encodeURIComponent(texto).replace(/'/g,"%27").replace(/"/g,"%22");
		ctx.args.data.seo = texto;
		ctx.args.data.textoUpperCase = texto.toUpperCase();
		next();
	});
	
	
	var delPrototipo = false;
	var remoto = true;
	
};