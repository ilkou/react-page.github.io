(this["webpackJsonp@react-page/examples"]=this["webpackJsonp@react-page/examples"]||[]).push([[56],{1392:function(e,n,r){"use strict";r.r(n);var t=r(336),a=r(1395),o=r(337),i=r(1363),l=r(1387),p=r(322),d=r(1120),s=r.n(d),c=r(1121),g=r.n(c),u=r(753),h=r.n(u),C=r(76),v=r(0),m=r.n(v),f=r(57),y=function(){var e=function(n,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])})(n,r)};return function(n,r){function t(){this.constructor=n}e(n,r),n.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)}}(),E=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.handleChangePickerBackgroundColor=function(e){return n.props.onChangeBackgroundColorPreview&&n.props.onChangeBackgroundColorPreview(e)},n.handleChangePickerBackgroundColorComplete=function(e){n.props.onChangeBackgroundColorPreview&&n.props.onChangeBackgroundColorPreview(void 0),n.props.onChange({backgroundColor:e})},n}return y(n,e),n.prototype.render=function(){var e=this.props,n=e.backgroundColorPreview,r=e.state.backgroundColor,t=void 0===r?this.props.defaultBackgroundColor:r;return m.a.createElement("div",{style:{display:"flex"}},m.a.createElement(C.b,{color:n||t,onChange:this.handleChangePickerBackgroundColor,onDialogOpen:this.props.ensureModeOn,onChangeComplete:this.handleChangePickerBackgroundColorComplete,style:{margin:"auto"}}))},n}(v.Component),O=r(809),P=function(){var e=function(n,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])})(n,r)};return function(n,r){function t(){this.constructor=n}e(n,r),n.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)}}(),w=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.handleChangeBackground=function(e){n.props.ensureModeOn(),n.props.onChange({background:e.target.value})},n.handleChangeIsParallax=function(e){n.props.ensureModeOn(),n.props.onChange({isParallax:void 0!==n.props.state.isParallax&&!n.props.state.isParallax})},n.handleImageLoaded=function(e){n.props.ensureModeOn(),n.props.onImageLoaded(e)},n.handleImageUploaded=function(e){n.props.onImageUploaded(),n.props.onChange({background:e.url})},n}return P(n,e),n.prototype.render=function(){var e=this.props.state,n=e.isParallax,r=void 0===n||n,a=e.background,i=void 0===a?"":a;return v.createElement("div",null,v.createElement("div",{style:{display:"flex"}},this.props.imageUpload&&v.createElement(v.Fragment,null,v.createElement(C.c,{imageUpload:this.props.imageUpload,imageLoaded:this.handleImageLoaded,imageUploaded:this.handleImageUploaded}),v.createElement(p.a,{variant:"body1",style:{marginLeft:"20px",marginRight:"20px"}},"OR")),v.createElement(O.a,{placeholder:"http://example.com/image.png",label:this.props.imageUpload?"I have a URL":"Image URL",style:{width:"256px"},value:i,onChange:this.handleChangeBackground})),v.createElement("br",null),v.createElement("div",{style:{display:"flex"}},v.createElement(t.a,{control:v.createElement(o.a,{onChange:this.handleChangeIsParallax,checked:r}),label:"Is parallax"})))},n}(v.Component),_=r(339),b=r(222),G=r(507),M=r.n(G),k=function(){var e=function(n,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])})(n,r)};return function(n,r){function t(){this.constructor=n}e(n,r),n.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)}}(),x=function(){return(x=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var a in n=arguments[r])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)},D=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.addGradient=function(){n.props.ensureModeOn(),n.props.onChange({gradients:(n.props.state.gradients?n.props.state.gradients:[]).concat({deg:45,opacity:1})})},n.handleChangeDeg=function(e,r){return function(){n.props.onChangeGradientDegPreview&&n.props.onChangeGradientDegPreview(void 0,void 0),n.props.onChange({gradients:(n.props.state.gradients?n.props.state.gradients:[]).map((function(n,t){return t===e?x(x({},n),{deg:r}):n}))})}},n.handleChangeDegPreview=function(e){return function(r,t){n.props.onChangeGradientDegPreview&&n.props.onChangeGradientDegPreview(t,e)}},n.handleChangeOpacity=function(e,r){return function(){n.props.onChangeGradientOpacityPreview&&n.props.onChangeGradientOpacityPreview(void 0,void 0),n.props.onChange({gradients:(n.props.state.gradients?n.props.state.gradients:[]).map((function(n,t){return t===e?x(x({},n),{opacity:r}):n}))})}},n.handleChangeOpacityPreview=function(e){return function(r,t){n.props.onChangeGradientOpacityPreview&&n.props.onChangeGradientOpacityPreview(t,e)}},n.handleChangeGradientColor=function(e,r){return function(t){n.props.onChangeGradientColorPreview&&n.props.onChangeGradientColorPreview(void 0,void 0,void 0),n.props.onChange({gradients:[].concat(n.props.state.gradients?n.props.state.gradients:[]).map((function(n,a){return a===e?x(x({},n),{colors:(n.colors?n.colors:[]).map((function(e,n){return n===r?x(x({},e),{color:t}):e}))}):n}))})}},n.handleChangeGradientColorPreview=function(e,r){return function(t){n.props.onChangeGradientColorPreview&&n.props.onChangeGradientColorPreview(t,e,r)}},n.addColor=function(e){return function(){n.props.ensureModeOn(),n.props.onChange({gradients:(n.props.state.gradients?n.props.state.gradients:[]).map((function(r,t){return t===e?x(x({},r),{colors:(r.colors?r.colors:[]).concat({color:(r.colors?r.colors:[]).length%2===e%2?n.props.defaultGradientColor:n.props.defaultGradientSecondaryColor})}):r}))})}},n.removeColor=function(e,r){return function(){n.props.onChange({gradients:[].concat(n.props.state.gradients?n.props.state.gradients:[]).map((function(n,t){return t===e?x(x({},n),{colors:(n.colors?n.colors:[]).filter((function(e,n){return n!==r}))}):n}))})}},n.removeGradient=function(e){return function(){n.props.onChange({gradients:[].concat(n.props.state.gradients?n.props.state.gradients:[]).filter((function(n,r){return r!==e}))})}},n}return k(n,e),n.prototype.render=function(){var e=this,n=this.props,r=n.gradientDegPreview,t=n.gradientDegPreviewIndex,o=n.gradientOpacityPreview,i=n.gradientOpacityPreviewIndex,l=n.gradientColorPreview,d=n.gradientColorPreviewIndex,s=n.gradientColorPreviewColorIndex,c=n.state.gradients,g=void 0===c?[]:c;return v.createElement("div",null,g.map((function(n,c){var g=n.colors?n.colors:[],u=c===t&&void 0!==r?r:n.deg,h=c===i&&void 0!==o?o:n.opacity;return v.createElement("div",{key:c,style:{marginBottom:"8px",borderLeft:"2px",borderLeftStyle:"solid",paddingLeft:"8px"}},v.createElement("div",null,v.createElement(p.a,{variant:"body1",id:"linear-gradient-degree-label"},e.props.translations.gradientRotation," (",u,e.props.translations.degrees,")"),v.createElement(a.a,{"aria-labelledby":"linear-gradient-degree-label",value:u,onChange:e.handleChangeDegPreview(c),onChangeCommitted:e.handleChangeDeg(c,u),step:5,min:0,max:360})),v.createElement("div",null,v.createElement(p.a,{variant:"body1",id:"linear-gradient-opacity-label"},e.props.translations.gradientOpacity," (",(100*h).toFixed(0),"%)"),v.createElement(a.a,{"aria-labelledby":"linear-gradient-opacity-label",value:h,onChange:e.handleChangeOpacityPreview(c),onChangeCommitted:e.handleChangeOpacity(c,h),step:.01,min:0,max:1})),g.map((function(n,r){var t=c===d&&r===s&&void 0!==l?l:n.color;return v.createElement(v.Fragment,{key:r},v.createElement(C.b,{style:{marginLeft:"8px"},color:t,onChange:e.handleChangeGradientColorPreview(c,r),onChangeComplete:e.handleChangeGradientColor(c,r)}),v.createElement(b.a,{"aria-label":"Delete",onClick:e.removeColor(c,r)},v.createElement(M.a,null)))})),v.createElement(_.a,{variant:"contained",onClick:e.addColor(c),style:{marginLeft:"8px"}},e.props.translations.addColor),v.createElement(b.a,{"aria-label":"Delete",onClick:e.removeGradient(c)},v.createElement(M.a,null)))})),v.createElement("div",{style:{display:"flex"}},v.createElement(_.a,{style:{margin:"auto"},variant:"contained",onClick:this.addGradient,disabled:g.length>5},this.props.translations.addGradient)))},n}(v.Component),I=function(){var e=function(n,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])})(n,r)};return function(n,r){function t(){this.constructor=n}e(n,r),n.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)}}(),L=function(){return(L=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var a in n=arguments[r])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)},A=function(e){function n(n){var r=e.call(this,n)||this;return r.renderModeSwitch=function(){var e=r.props.state.modeFlag,n=void 0===e?r.props.defaultModeFlag:e,a=r.props.translations.onOff;switch(r.state.mode){case f.a.COLOR_MODE_FLAG:case f.a.IMAGE_MODE_FLAG:case f.a.GRADIENT_MODE_FLAG:break;default:a="Unknown mode"}return v.createElement(t.a,{control:v.createElement(o.a,{onChange:r.props.handleChangeModeSwitch(r.state.mode,n),checked:Boolean(n&r.state.mode)}),label:a})},r.renderUI=function(){switch(r.state.mode){case f.a.COLOR_MODE_FLAG:return v.createElement(v.Fragment,null,r.renderModeSwitch(),v.createElement(E,L({},r.props,{ensureModeOn:r.ensureModeOn(f.a.COLOR_MODE_FLAG),onChangeBackgroundColorPreview:r.props.handleChangeBackgroundColorPreview,backgroundColorPreview:r.props.backgroundColorPreview})));case f.a.GRADIENT_MODE_FLAG:return v.createElement(v.Fragment,null,r.renderModeSwitch(),v.createElement(D,L({},r.props,{ensureModeOn:r.ensureModeOn(f.a.GRADIENT_MODE_FLAG),gradientDegPreview:r.props.gradientDegPreview,gradientDegPreviewIndex:r.props.gradientDegPreviewIndex,gradientOpacityPreview:r.props.gradientOpacityPreview,gradientOpacityPreviewIndex:r.props.gradientOpacityPreviewIndex,gradientColorPreview:r.props.gradientColorPreview,gradientColorPreviewIndex:r.props.gradientColorPreviewIndex,gradientColorPreviewColorIndex:r.props.gradientColorPreviewColorIndex,onChangeGradientDegPreview:r.props.handleChangeGradientDegPreview,onChangeGradientOpacityPreview:r.props.handleChangeGradientOpacityPreview,onChangeGradientColorPreview:r.props.handleChangeGradientColorPreview})));case f.a.IMAGE_MODE_FLAG:default:return v.createElement(v.Fragment,null,r.renderModeSwitch(),v.createElement(w,L({},r.props,{onImageLoaded:r.props.handleImageLoaded,onImageUploaded:r.props.handleImageUploaded,ensureModeOn:r.ensureModeOn(f.a.IMAGE_MODE_FLAG)})))}},r.ensureModeOn=function(e){return function(){var n=r.props.state.modeFlag,t=void 0===n?r.props.defaultModeFlag:n;0===(t&e)&&r.props.handleChangeModeSwitch(e,t)()}},r.handleChangeMode=function(e,n){return r.setState({mode:n})},r.state={mode:n.defaultMode},r}return I(n,e),n.prototype.render=function(){var e=this,n=this.props,r=n.focused,d=n.remove,c=n.state,u=c.hasPadding,m=void 0===u?this.props.defaultHasPadding:u,y=c.modeFlag,E=void 0===y?this.props.defaultModeFlag:y,O=c.darken,P=void 0===O?this.props.defaultDarken:O,w=c.lighten,_=void 0===w?this.props.defaultLighten:w,b=void 0!==this.props.darkenPreview?this.props.darkenPreview:P,G=void 0!==this.props.lightenPreview?this.props.lightenPreview:_;return v.createElement(C.a,L({open:r,title:this.props.translations.pluginName,icon:this.props.IconComponent,onDelete:d},this.props),v.createElement(l.a,{value:this.state.mode,onChange:this.handleChangeMode,centered:!0},(this.props.enabledModes&f.a.IMAGE_MODE_FLAG)>0&&v.createElement(i.a,{icon:v.createElement(h.a,{color:(E&f.a.IMAGE_MODE_FLAG)>0?"secondary":void 0}),label:this.props.translations.imageMode,value:f.a.IMAGE_MODE_FLAG}),(this.props.enabledModes&f.a.COLOR_MODE_FLAG)>0&&v.createElement(i.a,{icon:v.createElement(s.a,{color:(E&f.a.COLOR_MODE_FLAG)>0?"secondary":void 0}),label:this.props.translations.colorMode,value:f.a.COLOR_MODE_FLAG}),(this.props.enabledModes&f.a.GRADIENT_MODE_FLAG)>0&&v.createElement(i.a,{icon:v.createElement(g.a,{color:(E&f.a.GRADIENT_MODE_FLAG)>0?"secondary":void 0}),label:this.props.translations.gradientMode,value:f.a.GRADIENT_MODE_FLAG})),this.renderUI(),v.createElement("br",null),v.createElement("div",{style:{display:"flex"}},v.createElement("div",{style:{flex:"1",marginRight:"8px"}},v.createElement(p.a,{variant:"body1",id:"linear-gradient-darken-label"},this.props.translations.darken," (",(100*b).toFixed(0),"%)"),v.createElement(a.a,{"aria-labelledby":"linear-gradient-darken-label",value:b,onChange:function(n,r){return e.props.handleChangeDarkenPreview(r instanceof Array?r[0]:r)},onChangeCommitted:this.props.handleChangeDarken,step:.01,min:0,max:1})),v.createElement("div",{style:{flex:"1",marginLeft:"8px"}},v.createElement(p.a,{variant:"body1",id:"linear-gradient-lighten-label"},this.props.translations.lighten," (",(100*G).toFixed(0),"%)"),v.createElement(a.a,{"aria-labelledby":"linear-gradient-lighten-label",value:G,onChange:function(n,r){return e.props.handleChangeLightenPreview(r instanceof Array?r[0]:r)},onChangeCommitted:this.props.handleChangeLighten,step:.01,min:0,max:1}))),v.createElement("div",{style:{display:"flex"}},v.createElement(t.a,{control:v.createElement(o.a,{onChange:this.props.handleChangeHasPadding,checked:m}),label:this.props.translations.usePadding})))},n}(v.Component);n.default=A}}]);
//# sourceMappingURL=56.63b807ef.chunk.js.map