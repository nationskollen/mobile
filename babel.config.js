module.exports = function (api) {
    api.cache(true);
plugins : [
    [
	'module resolver',
	{
	    alias : {
assets : './assets/' 
},
},
],
] 
    return {
        presets: ["babel-preset-expo"],
    };
};


