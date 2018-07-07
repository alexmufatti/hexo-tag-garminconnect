'use strict';

hexo.extend.tag.register('garmin', function(args, content){

        var config = hexo.config.tagGarmin || {};
        config.width = config.width || "100%";
        config.is_captioned = config.captioned || true;

        var postId = "";
        var returnHTML = "";

        // advanced argument "key:value"
        for (var i in args) {
            var arg = args[i];
            if(arg.startsWith('id:')) {
                postId = arg.slice(3).trim();
            }else if(arg.startsWith('url:')) {
                var postURL = arg.slice(4).trim();
                postId = postURL.match(/https\:\/\/www\.instagram\.com\/p\/([0-9a-zA-Z-_]+)/)[1]
            }else if(arg.startsWith('width:')) {
                config.width = arg.slice(6).trim();
            }else if(arg.startsWith('captioned:')) {
                config.is_captioned = arg.slice(10).trim()=='true'?true:false;
            }
        }

        // common argument "value"
        for (var i in args) {
            var arg = args[i];
            if(["true", "false"].indexOf(arg)>-1) {
                config.is_captioned = ["true", "false"].indexOf(arg)==0? true : false;
            }else if(postId.length==0 && arg.match(/https\:\/\/www\.instagram\.com\/p\/[0-9a-zA-Z-_]+/)) {
                postId = arg.match(/https\:\/\/www\.instagram\.com\/p\/([0-9a-zA-Z-_]+)/)[1];
            }else if(postId.length==0 && arg.length>4 && arg.match(/([0-9a-zA-Z-_]+)/)) {
                postId = arg.match(/([0-9a-zA-Z-_]+)/)[1];
            }else if(arg.length < 4 && arg.match(/([0-9]+\%)/)) {
                config.width = arg.match(/([0-9]+\%)/)[1];
            }
        }
        if(postId.length==0) return returnHTML;
         
        // generate html
        if(postId != ""){
                returnHTML = '<div class="instagram-wrapper"><iframe src=\'https://connect.garmin.com/modern/activity/embed/'+postId+'\' width=\'465\' height=\'500\' frameborder=\'0\'></iframe>';
        }
          return returnHTML;
},{
  async: true,
  ends: false
});

