(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{368:function(t,e,o){"use strict";o.r(e);var n={components:{},computed:{ticketsUrl:function(){return"https://www.woutick.es/evento/516/entradas-pulpocon-20"}}},r=o(8),l=Object(r.a)(n,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{attrs:{id:"hero"}},[e("a",{attrs:{id:"home"}}),this._v(" "),e("div",{staticClass:"cover"}),this._v(" "),e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"content"},[e("div",{staticClass:"container-fluid-1440"},[e("h1",{staticClass:"hero-title"},[e("img",{attrs:{src:"/logoHoriz.png",alt:"PHPulpo Con 2019"}})])])])])])}],!1,null,null,null).exports,c={components:{}},d=Object(r.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("section",{staticClass:"section",attrs:{id:"presentation"}},[o("div",{staticClass:"container-fluid-900"},[o("div",{staticClass:"late-motiv",domProps:{innerHTML:t._s(t.$t("lateMotiv"))}}),t._v(" "),o("h3",{staticClass:"section-subtitle"},[t._v("\n        "+t._s(t.$t("stayConnected"))+"\n      ")]),t._v(" "),t._m(0)])]),t._v(" "),t._m(1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"grid-row contact"},[e("div",{staticClass:"col-xs-12 col-sm-12"},[e("a",{attrs:{href:"mailto:hello@pulpocon.es"}},[e("i",{staticClass:"fa fa-envelope"}),this._v(" hello@pulpocon.es\n          ")])]),this._v(" "),e("div",{staticClass:"col-xs-12 col-sm-6"},[e("a",{attrs:{href:"https://twitter.com/phpulpocon"}},[e("i",{staticClass:"fab fa-twitter"}),this._v(" PHPulpocon\n          ")])]),this._v(" "),e("div",{staticClass:"col-xs-12 col-sm-6"},[e("a",{attrs:{href:"https://www.instagram.com/pulpocon20/"}},[e("i",{staticClass:"fab fa-instagram"}),this._v(" pulpocon20\n          ")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"section blue"},[o("div",{staticClass:"container-fluid-900"},[o("h2",{staticClass:"section-title"},[t._v("\n        PulpoCon19\n      ")]),t._v(" "),o("div",{staticClass:"center"},[o("div",{staticClass:"responsive-embed-wrapper mb-5"},[o("iframe",{attrs:{src:"https://replay.teltek.es/iframe/magic/k9if8dwmhpcg0s440404k4ggssok848",id:"pumukitiframe",frameborder:"0",border:"0",width:"100%",height:"315",allowfullscreen:""}})]),t._v(" "),o("p",[t._v("En 2019 "),o("strong",[t._v("PulpoCon")]),t._v(", en su primera edición, reunió a más de 200 personas.")]),t._v(" "),o("a",{staticClass:"btn btn-xlg",attrs:{href:"https://2019.pulpocon.es",target:"_blank"}},[t._v("\n            PulpoCon 19\n          ")])])])])}],!1,null,null,null).exports,h={name:"Sponsor",props:{sponsor:{type:Object,required:!0}}},v=Object(r.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sponsor"},[e("a",{attrs:{href:this.sponsor.url,title:this.sponsor.name,target:"_blank"}},[e("img",{attrs:{src:this.sponsor.logo,alt:this.sponsor.name}})])])}),[],!1,null,null,null).exports,_={components:{Sponsor:v},computed:{sponsors:function(){return this.$store.state.sponsors},images:function(){return this.$store.state.locationImages}}},f={},m={components:{Sponsor:v},computed:{sponsors:function(){return this.$store.state.sponsors}}},C={},w={components:{Presentation:d,Location:Object(r.a)(_,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("section",{staticClass:"section blue",attrs:{id:"location"}},[o("div",{staticClass:"container-fluid-1440"},[o("h2",{staticClass:"section-title"},[o("i",{staticClass:"fa fa-map-pin"}),t._v("  "+t._s(t.$t("menu.location"))+"\n      ")])]),t._v(" "),o("div",{staticClass:"content-wrapper container-fluid-1440"},[t._m(0),t._v(" "),o("div",{staticClass:"grid-row"},[o("div",{staticClass:"col-xs-12 col-sm-6"},[o("div",{staticClass:"gallery grid-row"},t._l(t.images,(function(t,e){return o("div",{key:e,staticClass:"col-xs-6 mb-2"},[o("img",{attrs:{src:t.src,alt:"Auditorio Sede Afundación"}})])})),0)]),t._v(" "),o("div",{staticClass:"col-xs-12 col-sm-6"},[o("div",{staticClass:"map-wrapper"},[o("no-ssr",[o("iframe",{attrs:{width:"100%",height:"407",src:"https://maps.google.com/maps?width=100%&height=600&hl=es&q=Sede%20Afundacion%20Vigo+(PHPulpo%20Con)&ie=UTF8&t=&z=17&iwloc=B&output=embed",frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0"}},[o("a",{attrs:{href:"https://www.mapsdirections.info/calcular-ruta.html"}},[t._v("mapas y direcciones")])])])],1)])]),t._v(" "),t._m(1)])]),t._v(" "),t.sponsors.bronze.slice(0,5).length>0?o("section",{staticClass:"section"},[o("div",{staticClass:"container-fluid-1440"},[o("carousel",{staticClass:"sponsors",attrs:{autoplay:!0,perPage:5,"per-page-custom":[[0,1],[769,5]]}},t._l(t.sponsors.bronze.slice(0,5),(function(t,e){return o("slide",{key:e},[o("sponsor",{attrs:{sponsor:t}})],1)})),1)],1)]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"summary"},[e("h3",[e("a",{attrs:{href:"https://www.afundacion.org/es/centros/centro/centro_social_afundacion_vigo",target:"_blank"}},[this._v("\n            Auditorio Sede Afundación Vigo\n            "),e("i",{staticClass:"fa fa-info-circle"})])]),this._v(" "),e("h4",[this._v("\n          c/ Policarpo Sanz, 24 - 26, Vigo. 36202, Pontevedra\n        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"info"},[e("ul",[e("li",{staticClass:"bybus"},[e("i",{staticClass:"fa fa-bus"}),this._v(" "),e("strong",[this._v("Autobús urbano")]),this._v(" "),e("br"),this._v("\n            Líneas: C3, CAC, C7, L11, 12B, C4A, C5A, C4B, L8, C5B, 12A, C9A. L17, C9A, C15C. "),e("a",{attrs:{href:"https://moovitapp.com/?to=R%C3%BAa%20Policarpo%20Sanz%2024&tll=42.237556_-8.722738&customerId=5546&metroId=3841&lang=es"}},[this._v("Calcular ruta")])])])])}],!1,null,null,null).exports,Sponsorization:Object(r.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("section",{staticClass:"section blue",attrs:{id:"sponsorization"}},[o("div",{staticClass:"container-fluid-1440"},[o("h2",{staticClass:"section-title"},[o("i",{staticClass:"fas fa-award"}),t._v(" "+t._s(t.$t("sponsorization"))+"\n      ")])]),t._v(" "),o("div",{staticClass:"content-wrapper container-fluid-1440"},[o("div",{staticClass:"summary center"},[o("p",{domProps:{innerHTML:t._s(t.$t("section.sponsorization"))}}),t._v(" "),o("div",{staticClass:"cta"},[o("a",{staticClass:"btn btn-alt btn-uppercase btn-xlg",attrs:{href:"http://bit.ly/dossierPulpoCon19"}},[o("i",{staticClass:"fa fa-download"}),t._v(" "+t._s(t.$t("download-dossier"))+"\n          ")])])])])])])}),[],!1,null,null,null).exports,Hero:l,Supporters:Object(r.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section",attrs:{id:"supporters"}},[e("div",{staticClass:"container-fluid-1440"},[e("h3",{staticClass:"mb-1"},[this._v(this._s(this.$t("sponsors.supporter")))]),this._v(" "),e("carousel",{staticClass:"sponsors",attrs:{autoplay:!0,perPage:6,"per-page-custom":[[0,1],[769,6]]}},this._l(this.sponsors.supporter,(function(t,o){return e("slide",{key:o},[e("sponsor",{attrs:{sponsor:t}})],1)})),1)],1)])}),[],!1,null,null,null).exports,CallForPapers:Object(r.a)(C,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("section",{staticClass:"section",attrs:{id:"call-for-papers"}},[o("div",{staticClass:"container-fluid-1440"},[o("h2",{staticClass:"section-title"},[o("i",{staticClass:"fas fa-paper"}),t._v(" "+t._s(t.$t("menu.callforpapers"))+"\n      ")])]),t._v(" "),o("div",{staticClass:"content-wrapper container-fluid-1440"},[o("div",{staticClass:"summary center"},[t._l(t.$t("section.callforpapers"),(function(text,e){return o("p",{key:e,domProps:{innerHTML:t._s(text)}})})),t._v(" "),o("div",{staticClass:"cta"},[o("a",{staticClass:"btn btn-alt btn-uppercase btn-xlg",attrs:{href:"http://bit.ly/pulpoCon20CFP"}},[o("i",{staticClass:"far fa-plus-square"}),t._v(" "+t._s(t.$t("callforpapers"))+"\n          ")])])],2)])])])}),[],!1,null,null,null).exports},data:function(){return{show:{hype:!0,presentation:!0,tickets:!1,callforpapers:!0,sponsorization:!1,location:!0,supporters:!1}}},head:function(){return{meta:[{hid:"og:title",property:"og:title",content:"PulpoCon 20"},{hid:"og:description",property:"og:description",content:"Pulpo Con es una conferencia que se celebrará en Vigo el 5 de Septiembre de 2020 que acercará el movimiento “crafter” y el “clean code” a la comunidad de desarrolladores de Galicia y su área de influencia."},{hid:"og:image",property:"og:image",content:"https://pulpocon.es/og-image.jpg"},{property:"twitter:card",content:"summary_large_image"}]}}},$=Object(r.a)(w,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"web-wrapper"},[o("hero"),t._v(" "),t.show.presentation?o("presentation"):t._e(),t._v(" "),t.show.sponsorization?o("sponsorization"):t._e(),t._v(" "),t.show.callforpapers?o("call-for-papers"):t._e(),t._v(" "),t.show.location?o("location"):t._e(),t._v(" "),t.show.supporters?o("supporters"):t._e()],1)}),[],!1,null,null,null);e.default=$.exports}}]);