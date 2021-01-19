(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{17:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),o=a(7),s=a.n(o),i=(a(17),a(3)),l=a(4),u=a(6),m=a(5),h=a(8),d=(a(18),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={imageName:""},e.handleNameChange=function(t){e.setState({imageName:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.imageName.trim()?(e.props.onSubmit(e.state.imageName),e.setState({imageName:""})):h.b.warning("Please fill in the search field!")},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("header",{className:"Searchbar",children:Object(n.jsxs)("form",{onSubmit:this.handleSubmit,className:"SearchForm",children:[Object(n.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(n.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(n.jsx)("input",{value:this.state.imageName,onChange:this.handleNameChange,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})})}}]),a}(r.Component)),j=a(10),b=document.querySelector("#modal-root"),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.srcModal,a=e.alt;return Object(o.createPortal)(Object(n.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(n.jsx)("div",{className:"Modal",children:Object(n.jsx)("img",{src:t,alt:a})})}),b)}}]),a}(r.Component),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.src,a=e.alt,r=e.srcModal,c=this.state.showModal;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("li",{className:"ImageGalleryItem",children:Object(n.jsx)("img",{onClick:this.toggleModal,src:t,alt:a,className:"ImageGalleryItem-image"})}),c&&Object(n.jsx)(g,{onClose:this.toggleModal,srcModal:r,alt:a})]})}}]),a}(r.Component);var f=function(e){var t=e.images;return Object(n.jsx)("div",{className:"ImageGalleryContainer",children:Object(n.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(n.jsx)(p,{src:e.webformatURL,srcModal:e.largeImageURL,alt:e.tags},e.id)}))})})};var O={fetchImages:function(e,t){return fetch("".concat("https://pixabay.com/api","/?q=").concat(e,"&page=").concat(t,"&key=").concat("19886282-56444a5241ae61181bc861379","&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return t.ok?t.json():Promise.reject(new Error("There are no ".concat(e," images")))}))}},v=a.p+"static/media/error.71eb184f.jpg";function y(){return Object(n.jsx)("div",{role:"alert",children:Object(n.jsx)("img",{src:v,width:"800",alt:"bad cat",className:"ImageError"})})}var x=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).timer=function(){setTimeout((function(){window.scrollBy({top:document.documentElement.scrollHeight,behavior:"smooth"})}),700)},e.scroll=function(){e.props.onClick(),e.timer()},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"BtnContainer",children:Object(n.jsx)("button",{onClick:this.scroll,className:"Button",type:"button",children:"Load more"})})}}]),a}(r.Component),w=a(11),N=a.n(w),k=(a(40),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)(N.a,{type:"ThreeDots",color:"#00BFFF",height:400,width:200})}}]),a}(r.Component)),C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[],status:"idle",page:1},e.onClickLoadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=e.imageName,r=this.props.imageName,c=this.state.page,o=t.page;n===r&&o===c||(this.setState({status:"pending"}),O.fetchImages(r,c).then((function(e){0!==e.total&&a.setState((function(t){return{images:[].concat(Object(j.a)(t.images),Object(j.a)(e.hits)),status:"resolved"}}))})).catch((function(e){return a.setState({error:e,status:"rejected"})}))),n!==r&&this.setState({page:1,images:[]})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.status;return"idle"===a?Object(n.jsx)("div",{className:"IdleMessage",children:"Please enter data to search field"}):"pending"===a?Object(n.jsx)(k,{}):"rejected"===a?Object(n.jsx)(y,{}):0===t.total?Object(n.jsx)("div",{children:"Image was not found. Please, change your request and try again."}):"resolved"===a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(f,{images:t}),Object(n.jsx)(x,{onClick:this.onClickLoadMore,page:this.state.page})]}):void 0}}]),a}(r.Component),S=(a(41),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={imageName:""},e.handleFormSubmit=function(t){e.setState({imageName:t})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(d,{onSubmit:this.handleFormSubmit}),Object(n.jsx)(C,{imageName:this.state.imageName}),Object(n.jsx)(h.a,{autoClose:3e3})]})}}]),a}(r.Component));s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.160b742d.chunk.js.map