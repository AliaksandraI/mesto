!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t),n.d(t,"api",(function(){return N}));n(0);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n,r,o,i,u,a,c,s,l){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._id=t,this._name=n,this._link=r,this._isLiked=o,this._likeCount=u,this._cardSelector=a,this._handleCardClick=c,this._handleLikeClick=s,this._isRemovable=i,this._handleCardDelete=l}var t,n,o;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._handleLikeClick(e)})),this._element.querySelector(".elements__item-picture").addEventListener("click",(function(t){e._handleCardClick&&(t.preventDefault(),e._handleCardClick(e._link,e._name))})),this._element.querySelector(".elements__delete-button").addEventListener("click",(function(t){t.preventDefault(),e._cardElementToBeDeleted=t.target.parentElement.parentElement,e._handleCardDelete(e)}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._deleteButton=this._element.querySelector(".elements__delete-button"),this._likeButton=this._element.querySelector(".elements__heart-button"),this._element.querySelector(".elements__item-title").textContent=this._name,this._element.querySelector(".elements__item-picture").src=this._link,this._likeElement=this._element.querySelector(".elements__likes"),this._isRemovable||this._deleteButton.classList.add("elements__delete-button_inactive"),this.setLikeCount(this._likeCount),this.toggleLike(this._isLiked),this._setEventListeners(),this._element}},{key:"getId",value:function(){return this._id}},{key:"isLiked",value:function(){return this._isLiked}},{key:"setLikeCount",value:function(e){this._likeCount=e,0===this._likeCount?this._likeElement.textContent=" ":this._likeElement.textContent=e}},{key:"toggleLike",value:function(e){this._isLiked=e,this._likeButton.classList.toggle("elements__heart-button_active",e)}},{key:"delete",value:function(){this._cardElementToBeDeleted&&this._cardElementToBeDeleted.remove()}}])&&r(t.prototype,n),o&&r(t,o),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(t),this._profession=document.querySelector(n),this._avatar=document.querySelector(r),this._id=null}var t,n,r;return t=e,(n=[{key:"setAvatar",value:function(e){this._avatar.src=e}},{key:"getUserInfo",value:function(){return{name:this._name.textContent,profession:this._profession.textContent}}},{key:"setUserInfo",value:function(e,t,n){this._name.textContent=e,this._profession.textContent=t,this._id=n}},{key:"getId",value:function(){return this._id}}])&&i(t.prototype,n),r&&i(t,r),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n,r;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"_clear",value:function(){this._container.innerHTML=""}},{key:"setItems",value:function(e){this._items=e}},{key:"renderItems",value:function(){var e=this;this._clear(),this._items.forEach((function(t){e._renderer(t)}))}}])&&a(t.prototype,n),r&&a(t,r),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._closeButton=this._popupElement.querySelector(".popup__close-button"),this._documentEscHandler=this._handleEscClose.bind(this),this._popupClickHandler=this._onPopupClick.bind(this)}var t,n,r;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_onPopupClick",value:function(e){e.target.classList.contains("popup")&&this.close()}},{key:"_setEventListeners",value:function(){var e=this;this._closeButton.addEventListener("click",(function(t){t.preventDefault(),e.close()}))}},{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._documentEscHandler),this._popupElement.addEventListener("mousedown",this._popupClickHandler)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._documentEscHandler),this._popupElement.removeEventListener("mousedown",this._popupClickHandler)}}])&&s(t.prototype,n),r&&s(t,r),e}();function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t,n){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(i,e);var t,n,r,o=_(i);function i(e){var t,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(n=o.call(this,e))._name=n._popupElement.querySelector(".popup__title_picture"),n._image=n._popupElement.querySelector(".popup__image"),m((t=y(n),v(i.prototype)),"_setEventListeners",t).call(t),n}return t=i,(n=[{key:"open",value:function(e,t){this._image.src=e,this._name.textContent=t,m(v(i.prototype),"open",this).call(this)}}])&&p(t.prototype,n),r&&p(t,r),i}(l);function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t,n){return(E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return S(this,n)}}function S(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(i,e);var t,n,r,o=C(i);function i(e,t,n,r){var u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(u=o.call(this,e))._submitFormCallback=t,u._inputList=Array.from(u._popupElement.querySelectorAll(n.inputSelector)),u._popupForm=u._popupElement.querySelector(".popup__container"),u._submitButton=u._popupElement.querySelector(".popup__button"),u._formValidator=r(n,u._popupForm),u._formValidator.enableValidation(),u._setEventListeners(),u}return t=i,(n=[{key:"_getInputValues",value:function(){return this._inputList.map((function(e){return e.value}))}},{key:"setInputValues",value:function(e){var t=this;e.forEach((function(e,n){return t._inputList[n].value=e}))}},{key:"_onSubmitAddCardPopupForm",value:function(){if(!this._popupElement.querySelector(".form__submit_inactive")){this._submitButton.textContent="Сохранение...";var e=this._getInputValues();this._submitFormCallback(e)}}},{key:"_setEventListeners",value:function(){var e=this;E(O(i.prototype),"_setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(){e._onSubmitAddCardPopupForm()}))}},{key:"open",value:function(e){this._submitButton.textContent="Сохранить",E(O(i.prototype),"open",this).call(this),this._formValidator.resetFormErrors(e),this._popupForm.reset()}}])&&g(t.prototype,n),r&&g(t,r),i}(l);function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n,r;return t=e,(n=[{key:"_get",value:function(e){return fetch("".concat(this._baseUrl,"/").concat(e),{headers:{authorization:this._headers.authorization}}).then((function(e){return e.ok?e.json():Promise.reject(new Error("Ошибка: ".concat(e.status)))}))}},{key:"getUserInfo",value:function(){return this._get("users/me")}},{key:"getInitialCards",value:function(){return this._get("cards")}},{key:"updateUserInfo",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject(new Error("Ошибка: ".concat(e.status)))}))}},{key:"addNewCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject(new Error("Ошибка: ".concat(e.status)))}))}},{key:"_updateCardLike",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:t,headers:{authorization:this._headers.authorization}}).then((function(e){return e.ok?e.json():Promise.reject(new Error("Ошибка: ".concat(e.status)))}))}},{key:"likeCard",value:function(e){return this._updateCardLike(e,"PUT")}},{key:"dislikeCard",value:function(e){return this._updateCardLike(e,"DELETE")}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._headers.authorization}}).then((function(e){return e.ok?Promise.resolve():Promise.reject(new Error("Ошибка: ".concat(e.status)))}))}},{key:"updateUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?Promise.resolve():Promise.reject(new Error("Ошибка: ".concat(e.status)))}))}}])&&j(t.prototype,n),r&&j(t,r),e}();function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t,n){return(T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=U(e);if(t){var o=U(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return x(this,n)}}function x(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(i,e);var t,n,r,o=B(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e))._confirmButton=t._popupElement.querySelector(".popup__button"),t._setEventListeners(),t}return t=i,(n=[{key:"open",value:function(e){T(U(i.prototype),"open",this).call(this),this._onConfirmCallback=e}},{key:"_setEventListeners",value:function(){var e=this;T(U(i.prototype),"_setEventListeners",this).call(this),this._confirmButton.addEventListener("click",(function(t){t.preventDefault(),e._onConfirmCallback&&e._onConfirmCallback()}))}}])&&R(t.prototype,n),r&&R(t,r),i}(l);function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var V=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._validationOptions=t,this._formElement=n,this._formInputs=Array.from(this._formElement.querySelectorAll(this._validationOptions.inputSelector)),this._button=this._formElement.querySelector(this._validationOptions.submitButtonSelector)}var t,n,r;return t=e,(n=[{key:"_toggleErrorBasedOnValidity",value:function(e,t){var n=this._formElement.querySelector("#".concat(e.id,"-error"));n.textContent=t?"":e.validationMessage,e.classList.toggle("form__input_type_error",!t),n.classList.toggle("form__input-error_active",!t)}},{key:"_hasInvalidInput",value:function(){return this._formInputs.some((function(e){return!e.validity.valid}))}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonInactivity(this._hasInvalidInput()),this._formInputs.forEach((function(t){t.addEventListener("input",(function(){e._toggleErrorBasedOnValidity(t,t.validity.valid),e._toggleButtonInactivity(e._hasInvalidInput())}))}))}},{key:"_toggleButtonInactivity",value:function(e){this._button.classList.toggle(this._validationOptions.inactiveButtonClass,e)}},{key:"resetFormErrors",value:function(e){var t=this;this._formInputs.forEach((function(e){t._toggleErrorBasedOnValidity(e,!0)})),this._toggleButtonInactivity(e)}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&A(t.prototype,n),r&&A(t,r),e}(),F={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit",inactiveButtonClass:"form__submit_inactive"};function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return z(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var M=document.querySelector(".profile__edit-button"),N=new P({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-12",headers:{authorization:"f4b731d6-2118-4fcc-9305-6dde1beafd26","Content-Type":"application/json"}});function J(e,t){return new V(e,t)}var $=new u(".profile__name",".profile__profession",".profile__image"),G=new L(".popup_profile",(function(e){var t=H(e,2),n=t[0],r=t[1];N.updateUserInfo(n,r).then((function(e){$.setUserInfo(e.name,e.about,e._id)})).catch((function(e){console.log(e)})).finally((function(){G.close()}))}),F,J),K=new L(".popup_avatar",(function(e){var t=e[0];N.updateUserAvatar(t).then((function(){$.setAvatar(t)})).catch((function(e){console.log(e)})).finally((function(){K.close()}))}),F,J),Q=new b(".popup_picture"),W=new D(".popup_check"),X=document.querySelector(".profile__image"),Y=document.querySelector(".profile__add-button"),Z=new L(".popup_card",(function(e){var t=H(e,2),n=t[0],r=t[1];N.addNewCard(n,r).then((function(e){ee(e._id,e.name,e.link,e.likes,e.owner._id)})).catch((function(e){console.log(e)})).finally((function(){Z.close()}))}),F,J);function ee(e,t,n,r,i){var u,a=!1,c=$.getId(),s=i==c;for(u=0;u<r.length;u++)if(r[u]._id==c){a=!0;break}var l=new o(e,t,n,a,s,r.length,"#card-template",re,oe,ne).generateCard();te.addItem(l)}var te=new c({items:[],renderer:function(e){ee(e._id,e.name,e.link,e.likes,e.owner._id)}},".elements");function ne(e){W.open((function(){N.deleteCard(e.getId()).then((function(){e.delete()})).catch((function(e){console.log(e)})).finally((function(){W.close()}))}))}function re(e,t){Q.open(e,t)}function oe(e){(e.isLiked()?N.dislikeCard(e.getId()):N.likeCard(e.getId())).then((function(t){e.setLikeCount(t.likes.length),e.toggleLike(!e.isLiked())})).catch((function(e){console.log(e)}))}X.addEventListener("click",(function(){K.open(!0)})),M.addEventListener("click",(function(){G.open(!1);var e=$.getUserInfo();G.setInputValues([e.name,e.profession])})),Y.addEventListener("click",(function(){Z.open(!0)})),N.getUserInfo().then((function(e){$.setUserInfo(e.name,e.about,e._id),$.setAvatar(e.avatar)})).catch((function(e){console.log(e)})),N.getInitialCards().then((function(e){te.setItems(e),te.renderItems()})).catch((function(e){console.log(e)}))}]);