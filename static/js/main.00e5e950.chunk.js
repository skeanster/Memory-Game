(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{10:function(e,c,r){},12:function(e,c,r){"use strict";r.r(c);var i=r(1),d=r.n(i),t=r(3),a=r.n(t),n=(r(9),r(10),r(0)),o=function(){return Object(n.jsxs)("div",{className:"App-header",children:[Object(n.jsx)("div",{children:"Memory Game"}),Object(n.jsx)("div",{class:"subHeader",children:"(Don't Pick the same option twice...)"})]})},s=r(4),l=function(e){var c=e.currentScore,r=e.highscore;return Object(n.jsxs)("div",{className:"scoreboard",children:[Object(n.jsxs)("div",{children:["Current Score: ",c]}),Object(n.jsxs)("div",{children:["High Score: ",r]})]})},h=function(e){var c=e.pieces,r=-1;return Object(n.jsx)("div",{className:"gameboard",children:c.map((function(e){return Object(n.jsxs)("div",{id:++r,class:"gamePiece",children:[Object(n.jsx)("div",{class:"piecePicture",id:e.id}),Object(n.jsx)("div",{class:"pieceTitle",children:e.id})]},e.id)}))})},u=function(){var e=Object(i.useState)([{score:0},{highscore:0},{boardArray:[{id:"Helmet",clicked:!1},{id:"Shiny-Shield",clicked:!1},{id:"Ace",clicked:!1},{id:"Castle",clicked:!1},{id:"Pierced-Shield",clicked:!1},{id:"Terraria",clicked:!1},{id:"Arrows",clicked:!1},{id:"Treasure",clicked:!1}]}]),c=Object(s.a)(e,2),r=c[0],d=c[1];return Object(i.useEffect)((function(){var e=function(e){!0!==function(e){return!0===r[2].boardArray[e.target.id].clicked?(alert("Not quite, try again!"),d([{score:0},{highscore:r[0].score<r[1].highscore?r[1].highscore:r[0].score},{boardArray:[{id:"Helmet",clicked:!1},{id:"Shiny-Shield",clicked:!1},{id:"Ace",clicked:!1},{id:"Castle",clicked:!1},{id:"Pierced-Shield",clicked:!1},{id:"Terraria",clicked:!1},{id:"Arrows",clicked:!1},{id:"Treasure",clicked:!1}]}]),!0):void 0}(e)&&(function(e){var c=r[2].boardArray.slice();c[e.target.id].clicked=!0;for(var i,t=c.length;0!==t;){i=Math.floor(Math.random()*t),t--;var a=[c[i],c[t]];c[t]=a[0],c[i]=a[1]}d([{score:r[0].score+1},{highscore:r[1].highscore},{boardArray:c}])}(e),function(){if(!0===r[2].boardArray[0].clicked&&!0===r[2].boardArray[1].clicked&&!0===r[2].boardArray[2].clicked&&!0===r[2].boardArray[3].clicked&&!0===r[2].boardArray[4].clicked&&!0===r[2].boardArray[5].clicked&&!0===r[2].boardArray[6].clicked&&!0===r[2].boardArray[7].clicked)alert("You win!"),d([{score:0},{highscore:8},{boardArray:[{id:"Helmet",clicked:!1},{id:"Shiny-Shield",clicked:!1},{id:"Ace",clicked:!1},{id:"Castle",clicked:!1},{id:"Pierced-Shield",clicked:!1},{id:"Terraria",clicked:!1},{id:"Arrows",clicked:!1},{id:"Treasure",clicked:!1}]}])}())};return document.querySelectorAll(".gamePiece").forEach((function(c){return c.addEventListener("click",e)})),function(){document.querySelectorAll(".gamePiece").forEach((function(c){return c.removeEventListener("click",e)}))}}),[r]),Object(n.jsxs)("div",{className:"main",children:[Object(n.jsx)(l,{currentScore:r[0].score,highscore:r[1].highscore}),Object(n.jsx)(h,{pieces:r[2].boardArray})]})},b=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(o,{}),Object(n.jsx)(u,{})]})},j=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,13)).then((function(c){var r=c.getCLS,i=c.getFID,d=c.getFCP,t=c.getLCP,a=c.getTTFB;r(e),i(e),d(e),t(e),a(e)}))};a.a.render(Object(n.jsx)(d.a.StrictMode,{children:Object(n.jsx)(b,{})}),document.getElementById("root")),j()},9:function(e,c,r){}},[[12,1,2]]]);
//# sourceMappingURL=main.00e5e950.chunk.js.map