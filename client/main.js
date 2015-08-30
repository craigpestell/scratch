/**
 * Created by craig on 8/29/15.
 */
"use strict";

var $ = require('jquery');

/*$.ajax({
    url: '/api/users'
})
    .done(function(data){
        $('body').append('Finished querying users<br/>');
        data.forEach(function(val){
            $('body').append(val.email + '<br/>');
        })
    });

$.ajax({
    url: '/api/posts'
})
    .done(function(data){
        $('body').append('Finished querying posts<br/>');
        data.forEach(function(val){
            $('body').append(val.title + '<br/>' + val.content + '<br/><br/>');
        })
    });
*/
$('body').css({'margin-top': '-1000px'}).animate({'margin-top': '0px'});
