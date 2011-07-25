/*
 * Globalize Culture si-LK
 *
 * http://github.com/jquery/globalize
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * This file was generated by the Globalize Culture Generator
 * Translation: bugs found in this file need to be fixed in the generator
 */

define(function(require, exports, module) {

(function( window, undefined ) {

var Globalize;

if ( typeof require !== "undefined"
	&& typeof exports !== "undefined"
	&& typeof module !== "undefined" ) {
	// Assume CommonJS
	Globalize = require( "globalize/globalize" );
} else {
	// Global variable
	Globalize = window.Globalize;
}

Globalize.addCultureInfo( "si-LK", "default", {
	name: "si-LK",
	englishName: "Sinhala (Sri Lanka)",
	nativeName: "සිංහල (ශ්‍රී ලංකා)",
	language: "si",
	numberFormat: {
		groupSizes: [3,2],
		negativeInfinity: "-අනන්තය",
		positiveInfinity: "අනන්තය",
		percent: {
			groupSizes: [3,2]
		},
		currency: {
			pattern: ["($ n)","$ n"],
			symbol: "රු."
		}
	},
	calendars: {
		standard: {
			"/": "-",
			firstDay: 1,
			days: {
				names: ["ඉරිදා","සඳුදා","අඟහරුවාදා","බදාදා","බ්‍රහස්පතින්දා","සිකුරාදා","සෙනසුරාදා"],
				namesAbbr: ["ඉරිදා","සඳුදා","කුජදා","බුදදා","ගුරුදා","කිවිදා","ශනිදා"],
				namesShort: ["ඉ","ස","අ","බ","බ්‍ර","සි","සෙ"]
			},
			months: {
				names: ["ජනවාරි","පෙබරවාරි","මාර්තු","අ‌ප්‍රේල්","මැයි","ජූනි","ජූලි","අ‌ගෝස්තු","සැප්තැම්බර්","ඔක්තෝබර්","නොවැම්බර්","දෙසැම්බර්",""],
				namesAbbr: ["ජන.","පෙබ.","මාර්තු.","අප්‍රේල්.","මැයි.","ජූනි.","ජූලි.","අගෝ.","සැප්.","ඔක්.","නොවැ.","දෙසැ.",""]
			},
			AM: ["පෙ.ව.","පෙ.ව.","පෙ.ව."],
			PM: ["ප.ව.","ප.ව.","ප.ව."],
			eras: [{"name":"ක්‍රි.ව.","start":null,"offset":0}],
			patterns: {
				d: "yyyy-MM-dd",
				D: "yyyy MMMM' මස 'dd' වැනිදා 'dddd",
				f: "yyyy MMMM' මස 'dd' වැනිදා 'dddd h:mm tt",
				F: "yyyy MMMM' මස 'dd' වැනිදා 'dddd h:mm:ss tt",
				Y: "yyyy MMMM"
			}
		}
	}
});

}( this )); 
 });
