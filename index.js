var garmin = function(args, content){

        var postId = "";
        var returnHTML = "";

        // advanced argument "key:value"
        for (var i in args) {
            var arg = args[i];
            if(arg.startsWith('id:')) {
                postId = arg.slice(3).trim();
            }else if(arg.startsWith('url:')) {
                var postURL = arg.slice(4).trim();
                postId = postURL.match(/https\:\/\/connect\.garmin\.com\/modern\/activity\/([0-9a-zA-Z-_]+)/)[1]
            }
        }

        // common argument "value"
        for (var i in args) {
            var arg = args[i].trim();
            if(postId.length==0 && arg.match(/https\:\/\/connect\.garmin\.com\/modern\/activity\/[0-9a-zA-Z-_]+/)) {
                postId = arg.match(/https\:\/\/connect\.garmin\.com\/modern\/activity\/([0-9a-zA-Z-_]+)/)[1];
            }else if(postId.length==0 && arg.length>4 && arg.match(/([0-9a-zA-Z-_]+)/)) {
                postId = arg.match(/([0-9a-zA-Z-_]+)/)[1];
            }
        }
        if(postId.length==0) return returnHTML;
         
        // generate html
        if(postId != ""){
                returnHTML = '<div class="garmin-wrapper"><iframe src=\'https://connect.garmin.com/modern/activity/embed/'+postId+'\' width=\'465\' height=\'500\' frameborder=\'0\'></iframe>';
        }
          return returnHTML;
};

if (typeof hexo === 'object') {
  hexo.extend.tag.register('garmin', garmin ,{
    async: true,
    ends: false
  });
}

if ( typeof module === 'object' && module.exports) {
    module.exports.garmin = garmin;
}

