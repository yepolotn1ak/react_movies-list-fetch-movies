(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{14:function(e,t,i){},15:function(e,t,i){},16:function(e,t,i){},18:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var c=i(7),s=i.n(c),n=(i(13),i(8)),a=i(2),r=i(1),l=(i(14),i(15),i(16),i(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(l.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbId)}))})},j=i(6),m=i.n(j);i(18);var b=function(e){var t=e.onMovieAdd,i=void 0===t?function(){}:t,c=Object(r.useState)(""),s=Object(a.a)(c,2),n=s[0],d=s[1],j=Object(r.useState)(!1),b=Object(a.a)(j,2),u=b[0],v=b[1],h=Object(r.useState)(!1),O=Object(a.a)(h,2),x=O[0],f=O[1],p=Object(r.useState)(null),N=Object(a.a)(p,2),g=N[0],y=N[1],w=function(e){if(!e)return null;var t=e.Poster,i=e.Title,c=e.Plot,s=e.imdbID;return{title:i,description:c,imgUrl:"N/A"===t?"https://via.placeholder.com/360x270.png?text=no%20preview":t,imdbUrl:"https://www.imdb.com/title/".concat(s),imdbId:s}}(g);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),v(!0),function(e){return fetch("".concat("https://www.omdbapi.com/?apikey=3567828e","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}(n.toLowerCase().trim()).then((function(e){"Error"in e?(y(null),f(!0)):y(e)})).finally((function(){return v(!1)}))},children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:m()("input",{"is-danger":x}),value:n,onChange:function(e){d(e.target.value),f(!1)}})}),x&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"searchButton",type:"submit",className:m()("button is-light",{"is-loading":u}),disabled:!n.trim(),children:"Find a movie"})}),w&&Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){w&&i(w),y(null),d("")},children:"Add to the list"})})]})]}),w&&Object(l.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),Object(l.jsx)(o,{movie:w})]})]})},u=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),i=t[0],c=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(d,{movies:i})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(b,{onMovieAdd:function(e){c((function(t){return t.find((function(t){return t.imdbId===e.imdbId}))?t:[].concat(Object(n.a)(t),[e])}))}})})]})};s.a.render(Object(l.jsx)(u,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.5cf60ca5.chunk.js.map