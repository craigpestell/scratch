(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
/**
 * Created by craig on 8/29/15.
 */
"use strict";

var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
