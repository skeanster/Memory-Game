(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{10:function(e,c,r){},12:function(e,c,r){"use strict";r.r(c);var i=r(1),d=r.n(i),t=r(3),n=r.n(t),a=(r(9),r(10),r(0)),o=function(){return Object(a.jsxs)("div",{className:"App-header",children:[Object(a.jsx)("div",{children:"Memory Game"}),Object(a.jsx)("div",{class:"subHeader",children:"(Don't Pick the same option twice...)"})]})},s=r(4),l=function(e){var c=e.currentScore,r=e.highscore;return Object(a.jsxs)("div",{className:"scoreboard",children:[Object(a.jsxs)("div",{children:["Current Score: ",c]}),Object(a.jsxs)("div",{children:["High Score: ",r]})]})},h=function(e){var c=e.pieces,r=-1;return Object(a.jsx)("div",{className:"gameboard",children:c.map((function(e){return Object(a.jsxs)("div",{id:++r,class:"gamePiece",children:[Object(a.jsx)("div",{class:"piecePicture",id:e.id}),Object(a.jsx)("div",{class:"pieceTitle",children:e.id})]},e.id)}))})},u=function(){var e=Object(i.useState)([{score:0},{highscore:0},{boardArray:[{id:"Helmet",clicked:!1},{id:"Shiny-Shield",clicked:!1},{id:"Ace",clicked:!1},{id:"Castle",clicked:!1},{id:"Pierced-Shield",clicked:!1},{id:"Terraria",clicked:!1},{id:"Arrows",clicked:!1},{id:"Treasure",clicked:!1}]}]),c=Object(s.a)(e,2),r=c[0],d=c[1];return Object(i.useEffect)((function(){var e=function(e){!0!==function(e){return!0===r[2].boardArray[e.target.id].clicked?(alert("lose"),d([{score:0},{highscore:r[0].score<r[1].highscore?r[1].highscore:r[0].score},{boardArray:[{id:"Helmet",clicked:!1},{id:"Shiny-Shield",clicked:!1},{id:"Ace",clicked:!1},{id:"Castle",clicked:!1},{id:"Pierced-Shield",clicked:!1},{id:"Terraria",clicked:!1},{id:"Arrows",clicked:!1},{id:"Treasure",clicked:!1}]}]),!0):void 0}(e)&&(function(e){var c=r[2].boardArray.slice();c[e.target.id].clicked=!0;for(var i,t=c.length;0!==t;){i=Math.floor(Math.random()*t),t--;var n=[c[i],c[t]];c[t]=n[0],c[i]=n[1]}d([{score:r[0].score+1},{highscore:r[1].highscore},{boardArray:c}])}(e),function(){if(!0===r[2].boardArray[0].clicked&&!0===r[2].boardArray[1].clicked&&!0===r[2].boardArray[2].clicked&&!0===r[2].boardArray[3].clicked&&!0===r[2].boardArray[4].clicked&&!0===r[2].boardArray[5].clicked&&!0===r[2].boardArray[6].clicked&&!0===r[2].boardArray[7].clicked)alert("win"),d([{score:0},{highscore:8},{boardArray:[{id:"Helmet",clicked:!1},{id:"Shiny-Shield",clicked:!1},{id:"Ace",clicked:!1},{id:"Castle",clicked:!1},{id:"Pierced-Shield",clicked:!1},{id:"Terraria",clicked:!1},{id:"Arrows",clicked:!1},{id:"Treasure",clicked:!1}]}])}())};return document.querySelectorAll(".gamePiece").forEach((function(c){return c.addEventListener("click",e)})),function(){document.querySelectorAll(".gamePiece").forEach((function(c){return c.removeEventListener("click",e)}))}}),[r]),Object(a.jsxs)("div",{className:"main",children:[Object(a.jsx)(l,{currentScore:r[0].score,highscore:r[1].highscore}),Object(a.jsx)(h,{pieces:r[2].boardArray})]})},b=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(o,{}),Object(a.jsx)(u,{})]})},j=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,13)).then((function(c){var r=c.getCLS,i=c.getFID,d=c.getFCP,t=c.getLCP,n=c.getTTFB;r(e),i(e),d(e),t(e),n(e)}))};n.a.render(Object(a.jsx)(d.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root")),j()},9:function(e,c,r){}},[[12,1,2]]]);
//# sourceMappingURL=main.d435161c.chunk.js.map