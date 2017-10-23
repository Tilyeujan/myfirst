webpackJsonp(["dashboard.module"],{

/***/ "../../../../../src/app/layout/dashboard/components/calltype/call-types-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallTypesServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CallTypesServiceService = (function () {
    function CallTypesServiceService(_http) {
        this._http = _http;
        this._callTypes = [];
    }
    CallTypesServiceService.prototype.getCallTypeJson = function (e) {
        var _this = this;
        var promise = new Promise((function (resolve, reject) {
            try {
                _this._http.get('https://arp2.herokuapp.com/assets/json/' + e).subscribe(function (data) {
                    // Read the result field from the JSON response.
                    _this._callTypes = data['result'];
                    resolve();
                }, function (err) {
                    console.log("Error occured.");
                });
            }
            catch (ex) {
                console.log(ex);
                reject();
            }
        }));
        return promise;
    };
    Object.defineProperty(CallTypesServiceService.prototype, "callTypes", {
        get: function () {
            return this._callTypes;
        },
        set: function (value) {
            this._callTypes = value;
        },
        enumerable: true,
        configurable: true
    });
    return CallTypesServiceService;
}());
CallTypesServiceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], CallTypesServiceService);

var _a;
//# sourceMappingURL=call-types-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/components/calltype/calltype.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"padding-top: 5px;\">\n    <div class=\"col-lg-9 col-md-8 col-sm-12\">\n        <div class=\"row\">\n\n            <div class=\"col-lg-3 col-md-6 col-sm-12\">\n                <div class=\"card text-white\">\n                    <div class=\"card-header bg-primary\">Ангилал - 1</div>\n                    <div class=\"card-body\">\n                        <div class=\"list-group\">\n                            <div class=\"div-scroll\">\n                                <a *ngFor=\"let type of callTypes\" href=\"javascript:void(0)\"\n                                   class=\"list-group-item list-group-item-action\"\n                                   (click)=\"getCallType2(type.id)\">{{type.text}}</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-lg-3 col-md-6 col-sm-12\">\n                <div class=\"card text-white\">\n                    <div class=\"card-header bg-primary\">Ангилал - 2</div>\n                    <div class=\"card-body\">\n                        <div class=\"list-group\">\n                            <div class=\"div-scroll\">\n                                <a *ngFor=\"let type of callTypes2\"\n                                   href=\"javascript:void(0)\"\n                                   class=\"list-group-item list-group-item-action\"\n                                   (click)=\"getCallType3(type.id)\">{{type.text}}</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-lg-3 col-md-6 col-sm-12\">\n                <div class=\"card text-white\">\n                    <div class=\"card-header bg-primary\">Ангилал - 3</div>\n                    <div class=\"card-body\">\n                        <div class=\"list-group\">\n                            <div class=\"div-scroll\">\n                                <a *ngFor=\"let type of callTypes3\"\n                                   href=\"javascript:void(0)\"\n                                   class=\"list-group-item list-group-item-action\"\n                                   (click)=\"getCallType4(type.id)\">{{type.text}}</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-lg-3 col-md-6 col-sm-12\">\n                <div class=\"card text-white\">\n                    <div class=\"card-header bg-primary\">Ангилал - 4</div>\n                    <div class=\"card-body\">\n                        <div class=\"list-group\">\n                            <div class=\"div-scroll\">\n                                <a *ngFor=\"let type of callTypes4\"\n                                   href=\"javascript:void(0)\"\n                                   class=\"list-group-item list-group-item-action\">{{type.text}}</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col\">\n        <div class=\"card\" style=\"padding: 10px; height: 286px; overflow-y: auto\">\n            <div class=\"card-body\" style=\"border: 0px;\">\n                <h4 class=\"card-title\">Хэрэглээний зээл</h4>\n                <ul>\n                    <li>Тийзний зээл </li>\n                    <li>ТЭТГЭВРИЙН ЗЭЭЛ</li>\n                    <li>ОЮУТНЫ ХӨГЖЛИЙН ЗЭЭЛ</li>\n                    <li>ӨРХИЙН ЗЭЭЛ</li>\n                    <li>ХАДГАЛАМЖ БАРЬЦААЛСАН ЗЭЭЛ</li>\n                    <li>ХЭРЭГЛЭЭНИЙ ЗЭЭЛ</li>\n                    <li>АВТОМАШИНЫ ЗЭЭЛ</li>\n                    <li>ЦАЛИНГИЙН ЗЭЭЛ</li>\n                </ul>\n                <a href=\"#\" class=\"btn btn-primary\">Дэлгэрэнгүй</a>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/components/calltype/calltype.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".div-scroll::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n  background-color: #F5F5F5; }\n\n.div-scroll::-webkit-scrollbar {\n  width: 3px;\n  color: #ccc;\n  background-color: #ccc; }\n\n.div-scroll::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\n  background-color: #ccc; }\n\n.div-scroll {\n  height: 235px;\n  overflow-y: auto; }\n\n.div-scroll a {\n  padding: 5px; }\n\n.card-body {\n  border: 1px #3ca2e0 solid;\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/components/calltype/calltype.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalltypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__call_types_service_service__ = __webpack_require__("../../../../../src/app/layout/dashboard/components/calltype/call-types-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalltypeComponent = (function () {
    function CalltypeComponent(callTypeService) {
        this.callTypeService = callTypeService;
        this.callTypes = [];
        this.callTypes2 = [];
        this.callTypes3 = [];
        this.callTypes4 = [];
    }
    CalltypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.callTypeService.getCallTypeJson("calltype1.json").then(function (value) {
            _this.callTypes = _this.callTypeService.callTypes;
        });
    };
    /**
     * Get Call Types
     *
     * @param e
     */
    CalltypeComponent.prototype.getCallType2 = function (e) {
        var _this = this;
        var that = this;
        that.callTypes2 = [];
        that.callTypes3 = [];
        that.callTypes4 = [];
        this.callTypeService.getCallTypeJson("calltype2.json").then(function (value) {
            _this.callTypeService.callTypes.forEach(function (value) {
                if (value.parentId == e)
                    that.callTypes2.push(value);
            });
        });
    };
    CalltypeComponent.prototype.getCallType3 = function (e) {
        var _this = this;
        var that = this;
        that.callTypes3 = [];
        that.callTypes4 = [];
        this.callTypeService.getCallTypeJson("calltype3.json").then(function (value) {
            _this.callTypeService.callTypes.forEach(function (value) {
                if (value.parentId == e)
                    that.callTypes3.push(value);
            });
        });
    };
    CalltypeComponent.prototype.getCallType4 = function (e) {
        var _this = this;
        var that = this;
        that.callTypes4 = [];
        this.callTypeService.getCallTypeJson("calltype4.json").then(function (value) {
            _this.callTypeService.callTypes.forEach(function (value) {
                if (value.parentId == e)
                    that.callTypes4.push(value);
            });
        });
    };
    return CalltypeComponent;
}());
CalltypeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-calltype',
        template: __webpack_require__("../../../../../src/app/layout/dashboard/components/calltype/calltype.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/dashboard/components/calltype/calltype.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__call_types_service_service__["a" /* CallTypesServiceService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__call_types_service_service__["a" /* CallTypesServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__call_types_service_service__["a" /* CallTypesServiceService */]) === "function" && _a || Object])
], CalltypeComponent);

var _a;
//# sourceMappingURL=calltype.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/components/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-panel card card-default\">\r\n    <div class=\"card-header\">\r\n        <i class=\"fa fa-comments fa-fw\"></i>\r\n        Chat\r\n        <div class=\" pull-right\" ngbDropdown>\r\n            <button class=\"btn btn-secondary btn-sm\" ngbDropdownToggle>\r\n                <span class=\"caret\"></span>\r\n            </button>\r\n            <ul class=\"dropdown-menu dropdown-menu-right\">\r\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\r\n                    <i class=\"fa fa-refresh fa-fw\"></i> Refresh</a>\r\n                </li>\r\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\r\n                    <i class=\"fa fa-check-circle fa-fw\"></i> Available</a>\r\n                </li>\r\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\r\n                    <i class=\"fa fa-times fa-fw\"></i> Busy</a>\r\n                </li>\r\n                <li class=\"divider dropdown-divider\"></li>\r\n                <li role=\"menuitem\">\r\n                    <a href=\"#\" class=\"dropdown-item\">\r\n                        <i class=\"fa fa-times fa-fw\"></i> Busy\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\" class=\"dropdown-item\">\r\n                        <i class=\"fa fa-clock-o fa-fw\"></i> Away\r\n                    </a>\r\n                </li>\r\n                <li class=\"divider\"></li>\r\n                <li>\r\n                  <a href=\"#\" class=\"dropdown-item\">\r\n                    <i class=\"fa fa-sign-out fa-fw\"></i> Sign Out\r\n                  </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <!-- /.panel-heading -->\r\n    <div class=\"card-block\">\r\n        <ul class=\"chat\">\r\n            <li class=\"left clearfix\">\r\n                <span class=\"chat-img pull-left\">\r\n                    <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <strong class=\"primary-font\">Jack Sparrow</strong>\r\n                        <small class=\"pull-right text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 12 mins ago\r\n                        </small>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li>\r\n            <li class=\"right clearfix\">\r\n                <span class=\"chat-img pull-right\">\r\n                    <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <small class=\" text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 13 mins ago\r\n                        </small>\r\n                        <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li>\r\n            <li class=\"left clearfix\">\r\n                <span class=\"chat-img pull-left\">\r\n                    <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <strong class=\"primary-font\">Jack Sparrow</strong>\r\n                        <small class=\"pull-right text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 14 mins ago\r\n                        </small>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li>\r\n            <li class=\"right clearfix\">\r\n                <span class=\"chat-img pull-right\">\r\n                    <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <small class=\" text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 15 mins ago\r\n                        </small>\r\n                        <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <!-- /.card-body -->\r\n    <div class=\"card-footer\">\r\n        <div class=\"input-group\">\r\n            <input id=\"btn-input\" type=\"text\" class=\"form-control input-sm\" placeholder=\"Type your message here...\">\r\n            <span class=\"input-group-btn\">\r\n                <button class=\"btn btn-warning btn-sm\" id=\"btn-chat\">\r\n                    Send\r\n                </button>\r\n            </span>\r\n        </div>\r\n    </div>\r\n    <!-- /.card-footer -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/components/chat/chat.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat-panel .chat-dropdown {\n  margin-top: -3px; }\n\n.chat-panel .chat {\n  height: 350px;\n  overflow-y: scroll;\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n  .chat-panel .chat .left img {\n    margin-right: 15px; }\n  .chat-panel .chat .right img {\n    margin-left: 15px; }\n  .chat-panel .chat li {\n    margin-bottom: 10px;\n    margin-right: 15px;\n    padding-bottom: 5px;\n    border-bottom: 1px dotted #999; }\n\n.chat-panel .card-footer input {\n  padding: 3px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/components/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatComponent = (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () { };
    return ChatComponent;
}());
ChatComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-chat',
        template: __webpack_require__("../../../../../src/app/layout/dashboard/components/chat/chat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/dashboard/components/chat/chat.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ChatComponent);

//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/components/customer-history/customer-history.component.html":
/***/ (function(module, exports) {

module.exports = "<ngb-tabset>\n    <ngb-tab>\n        <ng-template ngbTabTitle>Орсон гарсан дуудлага</ng-template>\n        <ng-template ngbTabContent>\n            <table id=\"example\" class=\"display nowrap\" cellspacing=\"0\" width=\"100%\">\n                <thead>\n                <tr>\n                    <th>Name</th>\n                    <th>Position</th>\n                    <th>Office</th>\n                    <th>Age</th>\n                    <th>Start date</th>\n                    <th>Salary</th>\n                </tr>\n                </thead>\n                <tfoot>\n                <tr>\n                    <th>Name</th>\n                    <th>Position</th>\n                    <th>Office</th>\n                    <th>Age</th>\n                    <th>Start date</th>\n                    <th>Salary</th>\n                </tr>\n                </tfoot>\n                <tbody>\n                <tr>\n                    <td>Tiger Nixon</td>\n                    <td>System Architect</td>\n                    <td>Edinburgh</td>\n                    <td>61</td>\n                    <td>2011/04/25</td>\n                    <td>$320,800</td>\n                </tr>\n                <tr>\n                    <td>Garrett Winters</td>\n                    <td>Accountant</td>\n                    <td>Tokyo</td>\n                    <td>63</td>\n                    <td>2011/07/25</td>\n                    <td>$170,750</td>\n                </tr>\n                <tr>\n                    <td>Ashton Cox</td>\n                    <td>Junior Technical Author</td>\n                    <td>San Francisco</td>\n                    <td>66</td>\n                    <td>2009/01/12</td>\n                    <td>$86,000</td>\n                </tr>\n                <tr>\n                    <td>Cedric Kelly</td>\n                    <td>Senior Javascript Developer</td>\n                    <td>Edinburgh</td>\n                    <td>22</td>\n                    <td>2012/03/29</td>\n                    <td>$433,060</td>\n                </tr>\n                <tr>\n                    <td>Airi Satou</td>\n                    <td>Accountant</td>\n                    <td>Tokyo</td>\n                    <td>33</td>\n                    <td>2008/11/28</td>\n                    <td>$162,700</td>\n                </tr>\n                <tr>\n                    <td>Brielle Williamson</td>\n                    <td>Integration Specialist</td>\n                    <td>New York</td>\n                    <td>61</td>\n                    <td>2012/12/02</td>\n                    <td>$372,000</td>\n                </tr>\n                <tr>\n                    <td>Herrod Chandler</td>\n                    <td>Sales Assistant</td>\n                    <td>San Francisco</td>\n                    <td>59</td>\n                    <td>2012/08/06</td>\n                    <td>$137,500</td>\n                </tr>\n                <tr>\n                    <td>Rhona Davidson</td>\n                    <td>Integration Specialist</td>\n                    <td>Tokyo</td>\n                    <td>55</td>\n                    <td>2010/10/14</td>\n                    <td>$327,900</td>\n                </tr>\n                <tr>\n                    <td>Colleen Hurst</td>\n                    <td>Javascript Developer</td>\n                    <td>San Francisco</td>\n                    <td>39</td>\n                    <td>2009/09/15</td>\n                    <td>$205,500</td>\n                </tr>\n                <tr>\n                    <td>Sonya Frost</td>\n                    <td>Software Engineer</td>\n                    <td>Edinburgh</td>\n                    <td>23</td>\n                    <td>2008/12/13</td>\n                    <td>$103,600</td>\n                </tr>\n                <tr>\n                    <td>Jena Gaines</td>\n                    <td>Office Manager</td>\n                    <td>London</td>\n                    <td>30</td>\n                    <td>2008/12/19</td>\n                    <td>$90,560</td>\n                </tr>\n                <tr>\n                    <td>Quinn Flynn</td>\n                    <td>Support Lead</td>\n                    <td>Edinburgh</td>\n                    <td>22</td>\n                    <td>2013/03/03</td>\n                    <td>$342,000</td>\n                </tr>\n                <tr>\n                    <td>Charde Marshall</td>\n                    <td>Regional Director</td>\n                    <td>San Francisco</td>\n                    <td>36</td>\n                    <td>2008/10/16</td>\n                    <td>$470,600</td>\n                </tr>\n                <tr>\n                    <td>Haley Kennedy</td>\n                    <td>Senior Marketing Designer</td>\n                    <td>London</td>\n                    <td>43</td>\n                    <td>2012/12/18</td>\n                    <td>$313,500</td>\n                </tr>\n                <tr>\n                    <td>Tatyana Fitzpatrick</td>\n                    <td>Regional Director</td>\n                    <td>London</td>\n                    <td>19</td>\n                    <td>2010/03/17</td>\n                    <td>$385,750</td>\n                </tr>\n                <tr>\n                    <td>Michael Silva</td>\n                    <td>Marketing Designer</td>\n                    <td>London</td>\n                    <td>66</td>\n                    <td>2012/11/27</td>\n                    <td>$198,500</td>\n                </tr>\n                <tr>\n                    <td>Paul Byrd</td>\n                    <td>Chief Financial Officer (CFO)</td>\n                    <td>New York</td>\n                    <td>64</td>\n                    <td>2010/06/09</td>\n                    <td>$725,000</td>\n                </tr>\n                <tr>\n                    <td>Gloria Little</td>\n                    <td>Systems Administrator</td>\n                    <td>New York</td>\n                    <td>59</td>\n                    <td>2009/04/10</td>\n                    <td>$237,500</td>\n                </tr>\n                <tr>\n                    <td>Bradley Greer</td>\n                    <td>Software Engineer</td>\n                    <td>London</td>\n                    <td>41</td>\n                    <td>2012/10/13</td>\n                    <td>$132,000</td>\n                </tr>\n                <tr>\n                    <td>Dai Rios</td>\n                    <td>Personnel Lead</td>\n                    <td>Edinburgh</td>\n                    <td>35</td>\n                    <td>2012/09/26</td>\n                    <td>$217,500</td>\n                </tr>\n                <tr>\n                    <td>Jenette Caldwell</td>\n                    <td>Development Lead</td>\n                    <td>New York</td>\n                    <td>30</td>\n                    <td>2011/09/03</td>\n                    <td>$345,000</td>\n                </tr>\n                <tr>\n                    <td>Yuri Berry</td>\n                    <td>Chief Marketing Officer (CMO)</td>\n                    <td>New York</td>\n                    <td>40</td>\n                    <td>2009/06/25</td>\n                    <td>$675,000</td>\n                </tr>\n                <tr>\n                    <td>Caesar Vance</td>\n                    <td>Pre-Sales Support</td>\n                    <td>New York</td>\n                    <td>21</td>\n                    <td>2011/12/12</td>\n                    <td>$106,450</td>\n                </tr>\n                <tr>\n                    <td>Doris Wilder</td>\n                    <td>Sales Assistant</td>\n                    <td>Sidney</td>\n                    <td>23</td>\n                    <td>2010/09/20</td>\n                    <td>$85,600</td>\n                </tr>\n                <tr>\n                    <td>Angelica Ramos</td>\n                    <td>Chief Executive Officer (CEO)</td>\n                    <td>London</td>\n                    <td>47</td>\n                    <td>2009/10/09</td>\n                    <td>$1,200,000</td>\n                </tr>\n                <tr>\n                    <td>Gavin Joyce</td>\n                    <td>Developer</td>\n                    <td>Edinburgh</td>\n                    <td>42</td>\n                    <td>2010/12/22</td>\n                    <td>$92,575</td>\n                </tr>\n                <tr>\n                    <td>Jennifer Chang</td>\n                    <td>Regional Director</td>\n                    <td>Singapore</td>\n                    <td>28</td>\n                    <td>2010/11/14</td>\n                    <td>$357,650</td>\n                </tr>\n                <tr>\n                    <td>Brenden Wagner</td>\n                    <td>Software Engineer</td>\n                    <td>San Francisco</td>\n                    <td>28</td>\n                    <td>2011/06/07</td>\n                    <td>$206,850</td>\n                </tr>\n                <tr>\n                    <td>Fiona Green</td>\n                    <td>Chief Operating Officer (COO)</td>\n                    <td>San Francisco</td>\n                    <td>48</td>\n                    <td>2010/03/11</td>\n                    <td>$850,000</td>\n                </tr>\n                <tr>\n                    <td>Shou Itou</td>\n                    <td>Regional Marketing</td>\n                    <td>Tokyo</td>\n                    <td>20</td>\n                    <td>2011/08/14</td>\n                    <td>$163,000</td>\n                </tr>\n                <tr>\n                    <td>Michelle House</td>\n                    <td>Integration Specialist</td>\n                    <td>Sidney</td>\n                    <td>37</td>\n                    <td>2011/06/02</td>\n                    <td>$95,400</td>\n                </tr>\n                <tr>\n                    <td>Suki Burks</td>\n                    <td>Developer</td>\n                    <td>London</td>\n                    <td>53</td>\n                    <td>2009/10/22</td>\n                    <td>$114,500</td>\n                </tr>\n                <tr>\n                    <td>Prescott Bartlett</td>\n                    <td>Technical Author</td>\n                    <td>London</td>\n                    <td>27</td>\n                    <td>2011/05/07</td>\n                    <td>$145,000</td>\n                </tr>\n                <tr>\n                    <td>Gavin Cortez</td>\n                    <td>Team Leader</td>\n                    <td>San Francisco</td>\n                    <td>22</td>\n                    <td>2008/10/26</td>\n                    <td>$235,500</td>\n                </tr>\n                <tr>\n                    <td>Martena Mccray</td>\n                    <td>Post-Sales support</td>\n                    <td>Edinburgh</td>\n                    <td>46</td>\n                    <td>2011/03/09</td>\n                    <td>$324,050</td>\n                </tr>\n                <tr>\n                    <td>Unity Butler</td>\n                    <td>Marketing Designer</td>\n                    <td>San Francisco</td>\n                    <td>47</td>\n                    <td>2009/12/09</td>\n                    <td>$85,675</td>\n                </tr>\n                <tr>\n                    <td>Howard Hatfield</td>\n                    <td>Office Manager</td>\n                    <td>San Francisco</td>\n                    <td>51</td>\n                    <td>2008/12/16</td>\n                    <td>$164,500</td>\n                </tr>\n                <tr>\n                    <td>Hope Fuentes</td>\n                    <td>Secretary</td>\n                    <td>San Francisco</td>\n                    <td>41</td>\n                    <td>2010/02/12</td>\n                    <td>$109,850</td>\n                </tr>\n                <tr>\n                    <td>Vivian Harrell</td>\n                    <td>Financial Controller</td>\n                    <td>San Francisco</td>\n                    <td>62</td>\n                    <td>2009/02/14</td>\n                    <td>$452,500</td>\n                </tr>\n                <tr>\n                    <td>Timothy Mooney</td>\n                    <td>Office Manager</td>\n                    <td>London</td>\n                    <td>37</td>\n                    <td>2008/12/11</td>\n                    <td>$136,200</td>\n                </tr>\n                <tr>\n                    <td>Jackson Bradshaw</td>\n                    <td>Director</td>\n                    <td>New York</td>\n                    <td>65</td>\n                    <td>2008/09/26</td>\n                    <td>$645,750</td>\n                </tr>\n                <tr>\n                    <td>Olivia Liang</td>\n                    <td>Support Engineer</td>\n                    <td>Singapore</td>\n                    <td>64</td>\n                    <td>2011/02/03</td>\n                    <td>$234,500</td>\n                </tr>\n                <tr>\n                    <td>Bruno Nash</td>\n                    <td>Software Engineer</td>\n                    <td>London</td>\n                    <td>38</td>\n                    <td>2011/05/03</td>\n                    <td>$163,500</td>\n                </tr>\n                <tr>\n                    <td>Sakura Yamamoto</td>\n                    <td>Support Engineer</td>\n                    <td>Tokyo</td>\n                    <td>37</td>\n                    <td>2009/08/19</td>\n                    <td>$139,575</td>\n                </tr>\n                <tr>\n                    <td>Thor Walton</td>\n                    <td>Developer</td>\n                    <td>New York</td>\n                    <td>61</td>\n                    <td>2013/08/11</td>\n                    <td>$98,540</td>\n                </tr>\n                <tr>\n                    <td>Finn Camacho</td>\n                    <td>Support Engineer</td>\n                    <td>San Francisco</td>\n                    <td>47</td>\n                    <td>2009/07/07</td>\n                    <td>$87,500</td>\n                </tr>\n                <tr>\n                    <td>Serge Baldwin</td>\n                    <td>Data Coordinator</td>\n                    <td>Singapore</td>\n                    <td>64</td>\n                    <td>2012/04/09</td>\n                    <td>$138,575</td>\n                </tr>\n                <tr>\n                    <td>Zenaida Frank</td>\n                    <td>Software Engineer</td>\n                    <td>New York</td>\n                    <td>63</td>\n                    <td>2010/01/04</td>\n                    <td>$125,250</td>\n                </tr>\n                <tr>\n                    <td>Zorita Serrano</td>\n                    <td>Software Engineer</td>\n                    <td>San Francisco</td>\n                    <td>56</td>\n                    <td>2012/06/01</td>\n                    <td>$115,000</td>\n                </tr>\n                <tr>\n                    <td>Jennifer Acosta</td>\n                    <td>Junior Javascript Developer</td>\n                    <td>Edinburgh</td>\n                    <td>43</td>\n                    <td>2013/02/01</td>\n                    <td>$75,650</td>\n                </tr>\n                <tr>\n                    <td>Cara Stevens</td>\n                    <td>Sales Assistant</td>\n                    <td>New York</td>\n                    <td>46</td>\n                    <td>2011/12/06</td>\n                    <td>$145,600</td>\n                </tr>\n                <tr>\n                    <td>Hermione Butler</td>\n                    <td>Regional Director</td>\n                    <td>London</td>\n                    <td>47</td>\n                    <td>2011/03/21</td>\n                    <td>$356,250</td>\n                </tr>\n                <tr>\n                    <td>Lael Greer</td>\n                    <td>Systems Administrator</td>\n                    <td>London</td>\n                    <td>21</td>\n                    <td>2009/02/27</td>\n                    <td>$103,500</td>\n                </tr>\n                <tr>\n                    <td>Jonas Alexander</td>\n                    <td>Developer</td>\n                    <td>San Francisco</td>\n                    <td>30</td>\n                    <td>2010/07/14</td>\n                    <td>$86,500</td>\n                </tr>\n                <tr>\n                    <td>Shad Decker</td>\n                    <td>Regional Director</td>\n                    <td>Edinburgh</td>\n                    <td>51</td>\n                    <td>2008/11/13</td>\n                    <td>$183,000</td>\n                </tr>\n                <tr>\n                    <td>Michael Bruce</td>\n                    <td>Javascript Developer</td>\n                    <td>Singapore</td>\n                    <td>29</td>\n                    <td>2011/06/27</td>\n                    <td>$183,000</td>\n                </tr>\n                <tr>\n                    <td>Donna Snider</td>\n                    <td>Customer Support</td>\n                    <td>New York</td>\n                    <td>27</td>\n                    <td>2011/01/25</td>\n                    <td>$112,000</td>\n                </tr>\n                </tbody>\n            </table>\n        </ng-template>\n    </ngb-tab>\n\n    <ngb-tab title=\"Гомдол\">\n        <ng-template ngbTabContent>\n            <p>Content for tab 2</p>\n        </ng-template>\n    </ngb-tab>\n\n    <ngb-tab title=\"Үйлчилгээ\">\n        <ng-template ngbTabContent>\n            <p>Content for tab 3</p>\n        </ng-template>\n    </ngb-tab>\n\n    <ngb-tab title=\"Сошиал түүх\">\n        <ng-template ngbTabContent>\n            <p>Content for tab 3</p>\n        </ng-template>\n    </ngb-tab>\n</ngb-tabset>\n"

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/components/customer-history/customer-history.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tab-content {\n  border-left: 1px #00b3ee solid; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/components/customer-history/customer-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomerHistoryComponent = (function () {
    function CustomerHistoryComponent() {
    }
    CustomerHistoryComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            $(document).ready(function () {
                $('#example').DataTable({
                    "order": [[3, "desc"]],
                    "scrollX": true
                });
            });
        }, 1000);
    };
    return CustomerHistoryComponent;
}());
CustomerHistoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-customer-history',
        template: __webpack_require__("../../../../../src/app/layout/dashboard/components/customer-history/customer-history.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/dashboard/components/customer-history/customer-history.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CustomerHistoryComponent);

//# sourceMappingURL=customer-history.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/components/inbound/inbound.component.html":
/***/ (function(module, exports) {

module.exports = "<app-calltype></app-calltype>\n\n<hr style=\"margin-top: 10px; margin-bottom: 10px;\">\n<!--<div class=\"row\">\n    <div class=\"col-xl-3 col-lg-6\">\n        <app-stat [bgClass]=\"'card-primary'\" [icon]=\"'fa-comments'\" [count]=\"26\" [label]=\"'New Comments!'\" ></app-stat>\n    </div>\n    <div class=\"col-xl-3 col-lg-6\">\n        <app-stat [bgClass]=\"'card-info'\" [icon]=\"'fa-tasks'\" [count]=\"12\" [label]=\"'New task!'\" ></app-stat>\n    </div>\n    <div class=\"col-xl-3 col-lg-6\">\n        <app-stat [bgClass]=\"'card-success'\" [icon]=\"'fa-shopping-cart'\" [count]=\"124\" [label]=\"'New Orders!'\" ></app-stat>\n    </div>\n    <div class=\"col-xl-3 col-lg-6\">\n        <app-stat [bgClass]=\"'card-danger'\" [icon]=\"'fa-support'\" [count]=\"13\" [label]=\"'New Tickets!'\"></app-stat>\n    </div>\n</div>-->\n<!--<ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>-->\n\n<div class=\"row\">\n    <div class=\"col-lg-9 col-md-8 col-sm-12\">\n        <div class=\"row\">\n\n            <div class=\"col-lg-3 col-md-6 col-sm-12\">\n                <form role=\"form\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-6 col-md-12 col-sm-12\">\n                            <fieldset class=\"form-group\">\n                                <label>Холбогдсон дугаар</label>\n                                <input class=\"form-control\">\n                                <!--<p class=\"help-block\">Example block-level help text here.</p>-->\n                            </fieldset>\n                        </div>\n                        <div class=\"col-lg-6 col-md-12 col-sm-12\">\n                            <fieldset class=\"form-group\">\n                                <label>Бүртгэлтэй дугаар</label>\n                                <input class=\"form-control\">\n                                <!--<p class=\"help-block\">Example block-level help text here.</p>-->\n                            </fieldset>\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col-lg-6 col-md-12 col-sm-12\">\n                            <fieldset class=\"form-group\">\n                                <label>Төлөв</label>\n                                <input class=\"form-control\">\n                                <!--<p class=\"help-block\">Example block-level help text here.</p>-->\n                            </fieldset>\n                        </div>\n                        <div class=\"col-lg-6 col-md-12 col-sm-12\">\n                            <fieldset class=\"form-group\">\n                                <label>Хэнд</label>\n                                <input class=\"form-control\">\n                                <!--<p class=\"help-block\">Example block-level help text here.</p>-->\n                            </fieldset>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-6 col-md-12 col-sm-12\">\n                            <fieldset class=\"form-group\">\n                                <label>Мессеж илгээх дугаар</label>\n                                <input class=\"form-control\">\n                                <!--<p class=\"help-block\">Example block-level help text here.</p>-->\n                            </fieldset>\n                        </div>\n                        <div class=\"col-lg-6 col-md-12 col-sm-12\">\n                            <fieldset class=\"form-group\">\n                                <label>Харилцагчийн статус</label>\n                                <input class=\"form-control\">\n                                <!--<p class=\"help-block\">Example block-level help text here.</p>-->\n                            </fieldset>\n                        </div>\n                    </div>\n                    <fieldset class=\"form-group\">\n                        <label>Тайлбар</label>\n                        <textarea class=\"form-control\" rows=\"3\"></textarea>\n                    </fieldset>\n\n                    <button type=\"submit\" class=\"btn btn-primary\">Хадгалах</button>\n                    <button type=\"reset\" class=\"btn btn-secondary\">Шинэчлэх</button>\n\n                </form>\n            </div>\n\n            <div class=\"col-lg-3 col-md-6 col-sm-12\">\n                <div class=\"card \">\n                    <div class=\"card-header text-white bg-primary\">Харилцагчийн мэдээлэл</div><!--Харилцагчийн мэдээлэл-->\n                    <div class=\"card-body \">\n                        <div class=\"list-group\">\n                            <form class=\"div-scroll\" action=\"#\" novalidate=\"\" style=\"border-top-right-radius: 0px; border-top-left-radius: 0px;\">\n\n                                <div class=\"form-group\">\n                                    <label>CIF ID</label>\n                                    <input type=\"text\" class=\"form-control\" required=\"\" placeholder=\"CIF ID\" value=\"R00010001\" disabled>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label>Харилцагчийн овог нэр</label>\n                                    <div>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Харилцагчийн овог нэр\" value=\"Дорж Бат\" disabled>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label>Регистрийн дугаар</label>\n                                    <div>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Регистрийн дугаар\" value=\"УБ00123456\" disabled>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label>Дансны дугаар</label>\n                                    <div>\n                                        <input data-parsley-type=\"digits\" type=\"text\" class=\"form-control\" placeholder=\"Дансны дугаар\" disabled>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label>Картны дугаар</label>\n                                    <select class=\"form-control\">\n                                        <option>10000000121212</option>\n                                        <option>10000000121222</option>\n                                        <option>10000000121232</option>\n                                        <option>10000000121242</option>\n                                        <option>10000000121252</option>\n                                    </select>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label>Гэрийн хаяг</label>\n                                    <div>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Гэрийн хаяг\" disabled>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label>Харилцагч статус</label>\n                                    <div>\n                                        <input type=\"text\" class=\"form-control\" value=\"VIP\" placeholder=\"Харилцагч статус\" disabled>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label>Хүйс</label>\n                                    <div>\n                                        <input type=\"text\" class=\"form-control\" value=\"Эрэгтэй\" placeholder=\"Хүйс\">\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label>Гарын үсэг</label>\n                                    <div>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Гарын үсэг\" disabled>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label>Зураг</label>\n                                    <div>\n                                        <input parsley-type=\"url\" type=\"url\" class=\"form-control\" required=\"\" placeholder=\"URL\">\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label>И-мэйл</label>\n                                    <div>\n                                        <input type=\"email\" class=\"form-control\" value=\"noname@gmail.com\" placeholder=\"И-мэйл\">\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label>Интернет банкны эрхтэй эсэх</label>\n                                    <div>\n                                        <input type=\"text\" class=\"form-control\" value=\"Тийм\" placeholder=\"Интернет банкны эрхтэй эсэх\" disabled>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label>Зээлийн мэдээлэл</label>\n                                    <div>\n                                        <input type=\"text\" class=\"form-control\" value=\"Байхгүй\" placeholder=\"Зээлийн мэдээлэл\" disabled>\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-lg-6 col-md-12 col-sm-12\">\n                <!-- Application Customer History Components -->\n                <app-customer-history></app-customer-history>\n\n                <div class=\"card mb-3\">\n                    <div class=\"card-header\">\n                        Гомдлын шийдвэрлэсэн байдал\n                    </div>\n                    <div class=\"card-block table-responsive\">\n                        <table id=\"vocHistory\" class=\"display nowrap\" cellspacing=\"0\" width=\"100%\">\n                            <thead>\n                            <tr>\n                                <th>Name</th>\n                                <th>Position</th>\n                                <th>Office</th>\n                                <th>Age</th>\n                                <th>Start date</th>\n                                <th>Salary</th>\n                            </tr>\n                            </thead>\n                            <tfoot>\n                            <tr>\n                                <th>Name</th>\n                                <th>Position</th>\n                                <th>Office</th>\n                                <th>Age</th>\n                                <th>Start date</th>\n                                <th>Salary</th>\n                            </tr>\n                            </tfoot>\n                            <tbody>\n                            <tr>\n                                <td>Tiger Nixon</td>\n                                <td>System Architect</td>\n                                <td>Edinburgh</td>\n                                <td>61</td>\n                                <td>2011/04/25</td>\n                                <td>$320,800</td>\n                            </tr>\n                            <tr>\n                                <td>Garrett Winters</td>\n                                <td>Accountant</td>\n                                <td>Tokyo</td>\n                                <td>63</td>\n                                <td>2011/07/25</td>\n                                <td>$170,750</td>\n                            </tr>\n                            <tr>\n                                <td>Ashton Cox</td>\n                                <td>Junior Technical Author</td>\n                                <td>San Francisco</td>\n                                <td>66</td>\n                                <td>2009/01/12</td>\n                                <td>$86,000</td>\n                            </tr>\n                            <tr>\n                                <td>Cedric Kelly</td>\n                                <td>Senior Javascript Developer</td>\n                                <td>Edinburgh</td>\n                                <td>22</td>\n                                <td>2012/03/29</td>\n                                <td>$433,060</td>\n                            </tr>\n                            <tr>\n                                <td>Airi Satou</td>\n                                <td>Accountant</td>\n                                <td>Tokyo</td>\n                                <td>33</td>\n                                <td>2008/11/28</td>\n                                <td>$162,700</td>\n                            </tr>\n                            <tr>\n                                <td>Brielle Williamson</td>\n                                <td>Integration Specialist</td>\n                                <td>New York</td>\n                                <td>61</td>\n                                <td>2012/12/02</td>\n                                <td>$372,000</td>\n                            </tr>\n                            <tr>\n                                <td>Herrod Chandler</td>\n                                <td>Sales Assistant</td>\n                                <td>San Francisco</td>\n                                <td>59</td>\n                                <td>2012/08/06</td>\n                                <td>$137,500</td>\n                            </tr>\n                            <tr>\n                                <td>Rhona Davidson</td>\n                                <td>Integration Specialist</td>\n                                <td>Tokyo</td>\n                                <td>55</td>\n                                <td>2010/10/14</td>\n                                <td>$327,900</td>\n                            </tr>\n                            <tr>\n                                <td>Colleen Hurst</td>\n                                <td>Javascript Developer</td>\n                                <td>San Francisco</td>\n                                <td>39</td>\n                                <td>2009/09/15</td>\n                                <td>$205,500</td>\n                            </tr>\n                            <tr>\n                                <td>Sonya Frost</td>\n                                <td>Software Engineer</td>\n                                <td>Edinburgh</td>\n                                <td>23</td>\n                                <td>2008/12/13</td>\n                                <td>$103,600</td>\n                            </tr>\n                            <tr>\n                                <td>Jena Gaines</td>\n                                <td>Office Manager</td>\n                                <td>London</td>\n                                <td>30</td>\n                                <td>2008/12/19</td>\n                                <td>$90,560</td>\n                            </tr>\n                            <tr>\n                                <td>Quinn Flynn</td>\n                                <td>Support Lead</td>\n                                <td>Edinburgh</td>\n                                <td>22</td>\n                                <td>2013/03/03</td>\n                                <td>$342,000</td>\n                            </tr>\n                            <tr>\n                                <td>Charde Marshall</td>\n                                <td>Regional Director</td>\n                                <td>San Francisco</td>\n                                <td>36</td>\n                                <td>2008/10/16</td>\n                                <td>$470,600</td>\n                            </tr>\n                            <tr>\n                                <td>Haley Kennedy</td>\n                                <td>Senior Marketing Designer</td>\n                                <td>London</td>\n                                <td>43</td>\n                                <td>2012/12/18</td>\n                                <td>$313,500</td>\n                            </tr>\n                            <tr>\n                                <td>Tatyana Fitzpatrick</td>\n                                <td>Regional Director</td>\n                                <td>London</td>\n                                <td>19</td>\n                                <td>2010/03/17</td>\n                                <td>$385,750</td>\n                            </tr>\n                            <tr>\n                                <td>Michael Silva</td>\n                                <td>Marketing Designer</td>\n                                <td>London</td>\n                                <td>66</td>\n                                <td>2012/11/27</td>\n                                <td>$198,500</td>\n                            </tr>\n                            <tr>\n                                <td>Paul Byrd</td>\n                                <td>Chief Financial Officer (CFO)</td>\n                                <td>New York</td>\n                                <td>64</td>\n                                <td>2010/06/09</td>\n                                <td>$725,000</td>\n                            </tr>\n                            <tr>\n                                <td>Gloria Little</td>\n                                <td>Systems Administrator</td>\n                                <td>New York</td>\n                                <td>59</td>\n                                <td>2009/04/10</td>\n                                <td>$237,500</td>\n                            </tr>\n                            <tr>\n                                <td>Bradley Greer</td>\n                                <td>Software Engineer</td>\n                                <td>London</td>\n                                <td>41</td>\n                                <td>2012/10/13</td>\n                                <td>$132,000</td>\n                            </tr>\n                            <tr>\n                                <td>Dai Rios</td>\n                                <td>Personnel Lead</td>\n                                <td>Edinburgh</td>\n                                <td>35</td>\n                                <td>2012/09/26</td>\n                                <td>$217,500</td>\n                            </tr>\n                            <tr>\n                                <td>Jenette Caldwell</td>\n                                <td>Development Lead</td>\n                                <td>New York</td>\n                                <td>30</td>\n                                <td>2011/09/03</td>\n                                <td>$345,000</td>\n                            </tr>\n                            <tr>\n                                <td>Yuri Berry</td>\n                                <td>Chief Marketing Officer (CMO)</td>\n                                <td>New York</td>\n                                <td>40</td>\n                                <td>2009/06/25</td>\n                                <td>$675,000</td>\n                            </tr>\n                            <tr>\n                                <td>Caesar Vance</td>\n                                <td>Pre-Sales Support</td>\n                                <td>New York</td>\n                                <td>21</td>\n                                <td>2011/12/12</td>\n                                <td>$106,450</td>\n                            </tr>\n                            <tr>\n                                <td>Doris Wilder</td>\n                                <td>Sales Assistant</td>\n                                <td>Sidney</td>\n                                <td>23</td>\n                                <td>2010/09/20</td>\n                                <td>$85,600</td>\n                            </tr>\n                            <tr>\n                                <td>Angelica Ramos</td>\n                                <td>Chief Executive Officer (CEO)</td>\n                                <td>London</td>\n                                <td>47</td>\n                                <td>2009/10/09</td>\n                                <td>$1,200,000</td>\n                            </tr>\n                            <tr>\n                                <td>Gavin Joyce</td>\n                                <td>Developer</td>\n                                <td>Edinburgh</td>\n                                <td>42</td>\n                                <td>2010/12/22</td>\n                                <td>$92,575</td>\n                            </tr>\n                            <tr>\n                                <td>Jennifer Chang</td>\n                                <td>Regional Director</td>\n                                <td>Singapore</td>\n                                <td>28</td>\n                                <td>2010/11/14</td>\n                                <td>$357,650</td>\n                            </tr>\n                            <tr>\n                                <td>Brenden Wagner</td>\n                                <td>Software Engineer</td>\n                                <td>San Francisco</td>\n                                <td>28</td>\n                                <td>2011/06/07</td>\n                                <td>$206,850</td>\n                            </tr>\n                            <tr>\n                                <td>Fiona Green</td>\n                                <td>Chief Operating Officer (COO)</td>\n                                <td>San Francisco</td>\n                                <td>48</td>\n                                <td>2010/03/11</td>\n                                <td>$850,000</td>\n                            </tr>\n                            <tr>\n                                <td>Shou Itou</td>\n                                <td>Regional Marketing</td>\n                                <td>Tokyo</td>\n                                <td>20</td>\n                                <td>2011/08/14</td>\n                                <td>$163,000</td>\n                            </tr>\n                            <tr>\n                                <td>Michelle House</td>\n                                <td>Integration Specialist</td>\n                                <td>Sidney</td>\n                                <td>37</td>\n                                <td>2011/06/02</td>\n                                <td>$95,400</td>\n                            </tr>\n                            <tr>\n                                <td>Suki Burks</td>\n                                <td>Developer</td>\n                                <td>London</td>\n                                <td>53</td>\n                                <td>2009/10/22</td>\n                                <td>$114,500</td>\n                            </tr>\n                            <tr>\n                                <td>Prescott Bartlett</td>\n                                <td>Technical Author</td>\n                                <td>London</td>\n                                <td>27</td>\n                                <td>2011/05/07</td>\n                                <td>$145,000</td>\n                            </tr>\n                            <tr>\n                                <td>Gavin Cortez</td>\n                                <td>Team Leader</td>\n                                <td>San Francisco</td>\n                                <td>22</td>\n                                <td>2008/10/26</td>\n                                <td>$235,500</td>\n                            </tr>\n                            <tr>\n                                <td>Martena Mccray</td>\n                                <td>Post-Sales support</td>\n                                <td>Edinburgh</td>\n                                <td>46</td>\n                                <td>2011/03/09</td>\n                                <td>$324,050</td>\n                            </tr>\n                            <tr>\n                                <td>Unity Butler</td>\n                                <td>Marketing Designer</td>\n                                <td>San Francisco</td>\n                                <td>47</td>\n                                <td>2009/12/09</td>\n                                <td>$85,675</td>\n                            </tr>\n                            <tr>\n                                <td>Howard Hatfield</td>\n                                <td>Office Manager</td>\n                                <td>San Francisco</td>\n                                <td>51</td>\n                                <td>2008/12/16</td>\n                                <td>$164,500</td>\n                            </tr>\n                            <tr>\n                                <td>Hope Fuentes</td>\n                                <td>Secretary</td>\n                                <td>San Francisco</td>\n                                <td>41</td>\n                                <td>2010/02/12</td>\n                                <td>$109,850</td>\n                            </tr>\n                            <tr>\n                                <td>Vivian Harrell</td>\n                                <td>Financial Controller</td>\n                                <td>San Francisco</td>\n                                <td>62</td>\n                                <td>2009/02/14</td>\n                                <td>$452,500</td>\n                            </tr>\n                            <tr>\n                                <td>Timothy Mooney</td>\n                                <td>Office Manager</td>\n                                <td>London</td>\n                                <td>37</td>\n                                <td>2008/12/11</td>\n                                <td>$136,200</td>\n                            </tr>\n                            <tr>\n                                <td>Jackson Bradshaw</td>\n                                <td>Director</td>\n                                <td>New York</td>\n                                <td>65</td>\n                                <td>2008/09/26</td>\n                                <td>$645,750</td>\n                            </tr>\n                            <tr>\n                                <td>Olivia Liang</td>\n                                <td>Support Engineer</td>\n                                <td>Singapore</td>\n                                <td>64</td>\n                                <td>2011/02/03</td>\n                                <td>$234,500</td>\n                            </tr>\n                            <tr>\n                                <td>Bruno Nash</td>\n                                <td>Software Engineer</td>\n                                <td>London</td>\n                                <td>38</td>\n                                <td>2011/05/03</td>\n                                <td>$163,500</td>\n                            </tr>\n                            <tr>\n                                <td>Sakura Yamamoto</td>\n                                <td>Support Engineer</td>\n                                <td>Tokyo</td>\n                                <td>37</td>\n                                <td>2009/08/19</td>\n                                <td>$139,575</td>\n                            </tr>\n                            <tr>\n                                <td>Thor Walton</td>\n                                <td>Developer</td>\n                                <td>New York</td>\n                                <td>61</td>\n                                <td>2013/08/11</td>\n                                <td>$98,540</td>\n                            </tr>\n                            <tr>\n                                <td>Finn Camacho</td>\n                                <td>Support Engineer</td>\n                                <td>San Francisco</td>\n                                <td>47</td>\n                                <td>2009/07/07</td>\n                                <td>$87,500</td>\n                            </tr>\n                            <tr>\n                                <td>Serge Baldwin</td>\n                                <td>Data Coordinator</td>\n                                <td>Singapore</td>\n                                <td>64</td>\n                                <td>2012/04/09</td>\n                                <td>$138,575</td>\n                            </tr>\n                            <tr>\n                                <td>Zenaida Frank</td>\n                                <td>Software Engineer</td>\n                                <td>New York</td>\n                                <td>63</td>\n                                <td>2010/01/04</td>\n                                <td>$125,250</td>\n                            </tr>\n                            <tr>\n                                <td>Zorita Serrano</td>\n                                <td>Software Engineer</td>\n                                <td>San Francisco</td>\n                                <td>56</td>\n                                <td>2012/06/01</td>\n                                <td>$115,000</td>\n                            </tr>\n                            <tr>\n                                <td>Jennifer Acosta</td>\n                                <td>Junior Javascript Developer</td>\n                                <td>Edinburgh</td>\n                                <td>43</td>\n                                <td>2013/02/01</td>\n                                <td>$75,650</td>\n                            </tr>\n                            <tr>\n                                <td>Cara Stevens</td>\n                                <td>Sales Assistant</td>\n                                <td>New York</td>\n                                <td>46</td>\n                                <td>2011/12/06</td>\n                                <td>$145,600</td>\n                            </tr>\n                            <tr>\n                                <td>Hermione Butler</td>\n                                <td>Regional Director</td>\n                                <td>London</td>\n                                <td>47</td>\n                                <td>2011/03/21</td>\n                                <td>$356,250</td>\n                            </tr>\n                            <tr>\n                                <td>Lael Greer</td>\n                                <td>Systems Administrator</td>\n                                <td>London</td>\n                                <td>21</td>\n                                <td>2009/02/27</td>\n                                <td>$103,500</td>\n                            </tr>\n                            <tr>\n                                <td>Jonas Alexander</td>\n                                <td>Developer</td>\n                                <td>San Francisco</td>\n                                <td>30</td>\n                                <td>2010/07/14</td>\n                                <td>$86,500</td>\n                            </tr>\n                            <tr>\n                                <td>Shad Decker</td>\n                                <td>Regional Director</td>\n                                <td>Edinburgh</td>\n                                <td>51</td>\n                                <td>2008/11/13</td>\n                                <td>$183,000</td>\n                            </tr>\n                            <tr>\n                                <td>Michael Bruce</td>\n                                <td>Javascript Developer</td>\n                                <td>Singapore</td>\n                                <td>29</td>\n                                <td>2011/06/27</td>\n                                <td>$183,000</td>\n                            </tr>\n                            <tr>\n                                <td>Donna Snider</td>\n                                <td>Customer Support</td>\n                                <td>New York</td>\n                                <td>27</td>\n                                <td>2011/01/25</td>\n                                <td>$112,000</td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col\">\n        <div class=\"card\">\n            <div class=\"card-header text-white bg-primary\">Шалгах алхам</div><!--Харилцагчийн мэдээлэл-->\n            <div class=\"card-body\" style=\"height: 432px; overflow-y: auto; padding: 5px; border: 1px #3ca2e0 solid;\">\n                <p><input type=\"checkbox\"> Шалгах алхам Дугаар 1</p>\n                <p><input type=\"checkbox\"> Шалгах алхам Дугаар 2</p>\n                <p><input type=\"checkbox\"> Шалгах алхам Дугаар 3</p>\n                <p><input type=\"checkbox\"> Шалгах алхам Дугаар 4</p>\n                <p><input type=\"checkbox\"> Шалгах алхам Дугаар 5</p>\n                <p><input type=\"checkbox\"> Шалгах алхам Дугаар 6</p>\n                <p><input type=\"checkbox\"> Шалгах алхам Дугаар 7</p>\n                <p><input type=\"checkbox\"> Шалгах алхам Дугаар 8</p>\n                <p><input type=\"checkbox\"> Шалгах алхам Дугаар 9</p>\n                <p><input type=\"checkbox\"> Шалгах алхам Дугаар 10</p>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/components/inbound/inbound.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".div-scroll::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n  background-color: #F5F5F5; }\n\n.div-scroll::-webkit-scrollbar {\n  width: 3px;\n  color: #ccc;\n  background-color: #ccc; }\n\n.div-scroll::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\n  background-color: #ccc; }\n\n.div-scroll {\n  height: 432px;\n  overflow-y: auto; }\n\nform {\n  border: 1px #3ca2e0 solid;\n  border-radius: 3px;\n  padding: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/components/inbound/inbound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InboundComponent = (function () {
    function InboundComponent() {
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                Voluptates est animi quibusdam praesentium quam, et perspiciatis,\n                consectetur velit culpa molestias dignissimos\n                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum"
        }, {
            id: 2,
            type: 'warning',
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                Voluptates est animi quibusdam praesentium quam, et perspiciatis,\n                consectetur velit culpa molestias dignissimos\n                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum"
        });
    }
    InboundComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            $(document).ready(function () {
                $('#vocHistory').DataTable({
                    "order": [[3, "desc"]],
                    "scrollX": true
                });
            });
        }, 1000);
    };
    InboundComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    return InboundComponent;
}());
InboundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-inbound',
        template: __webpack_require__("../../../../../src/app/layout/dashboard/components/inbound/inbound.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/dashboard/components/inbound/inbound.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], InboundComponent);

//# sourceMappingURL=inbound.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timeline_timeline_component__ = __webpack_require__("../../../../../src/app/layout/dashboard/components/timeline/timeline.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__timeline_timeline_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notification_notification_component__ = __webpack_require__("../../../../../src/app/layout/dashboard/components/notification/notification.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__notification_notification_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat_component__ = __webpack_require__("../../../../../src/app/layout/dashboard/components/chat/chat.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__chat_chat_component__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/components/notification/notification.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-block\">\r\n    <div class=\"list-group\">\r\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-comment fa-fw\"></i> New Comment\r\n            <span class=\"float-right text-muted small\"><em>4 minutes ago</em></span>\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-twitter fa-fw\"></i> 3 New Followers\r\n            <span class=\"float-right text-muted small\"><em>12 minutes ago</em></span>\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-envelope fa-fw\"></i> Message Sent\r\n            <span class=\"float-right text-muted small\"><em>27 minutes ago</em></span>\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-tasks fa-fw\"></i> New Task\r\n            <span class=\"float-right text-muted small\"><em>43 minutes ago</em></span>\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-upload fa-fw\"></i> Server Rebooted\r\n            <span class=\"float-right text-muted small\"><em>11:32 AM</em></span>\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-bolt fa-fw\"></i> Server Crashed!\r\n            <span class=\"float-right text-muted small\"><em>11:13 AM</em></span>\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-warning fa-fw\"></i> Server Not Responding\r\n            <span class=\"float-right text-muted small\"><em>10:57 AM</em></span>\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-shopping-cart fa-fw\"></i> New Order Placed\r\n            <span class=\"float-right text-muted small\"><em>9:49 AM</em></span>\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-money fa-fw\"></i> Payment Received\r\n            <span class=\"float-right text-muted small\"><em>Yesterday</em></span>\r\n        </a>\r\n    </div>\r\n    <!-- /.list-group -->\r\n    <a href=\"#\" class=\"btn btn-default btn-block\">View All Alerts</a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/components/notification/notification.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/components/notification/notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationComponent = (function () {
    function NotificationComponent() {
    }
    NotificationComponent.prototype.ngOnInit = function () { };
    return NotificationComponent;
}());
NotificationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-notification',
        template: __webpack_require__("../../../../../src/app/layout/dashboard/components/notification/notification.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/dashboard/components/notification/notification.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NotificationComponent);

//# sourceMappingURL=notification.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/components/timeline/timeline.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-block\">\r\n    <ul class=\"timeline\">\r\n        <li>\r\n            <div class=\"timeline-badge\"><i class=\"fa fa-check\"></i>\r\n            </div>\r\n            <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                    <p><small class=\"text-muted\"><i class=\"fa fa-clock-o\"></i> 11 hours ago via Twitter</small>\r\n                    </p>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero laboriosam dolor perspiciatis omnis exercitationem. Beatae, officia pariatur? Est cum veniam excepturi. Maiores praesentium, porro voluptas suscipit facere rem dicta, debitis.</p>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <li class=\"timeline-inverted\">\r\n            <div class=\"timeline-badge warning\"><i class=\"fa fa-credit-card\"></i>\r\n            </div>\r\n            <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem quibusdam, tenetur commodi provident cumque magni voluptatem libero, quis rerum. Fugiat esse debitis optio, tempore. Animi officiis alias, officia repellendus.</p>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maiores odit qui est tempora eos, nostrum provident explicabo dignissimos debitis vel! Adipisci eius voluptates, ad aut recusandae minus eaque facere.</p>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <li>\r\n            <div class=\"timeline-badge danger\"><i class=\"fa fa-bomb\"></i>\r\n            </div>\r\n            <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam facilis enim eaque, tenetur nam id qui vel velit similique nihil iure molestias aliquam, voluptatem totam quaerat, magni commodi quisquam.</p>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <li class=\"timeline-inverted\">\r\n            <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates est quaerat asperiores sapiente, eligendi, nihil. Itaque quos, alias sapiente rerum quas odit! Aperiam officiis quidem delectus libero, omnis ut debitis!</p>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <li>\r\n            <div class=\"timeline-badge info\"><i class=\"fa fa-save\"></i>\r\n            </div>\r\n            <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis minus modi quam ipsum alias at est molestiae excepturi delectus nesciunt, quibusdam debitis amet, beatae consequuntur impedit nulla qui! Laborum, atque.</p>\r\n                    <hr>\r\n                    <div class=\"btn-group\">\r\n                        <button type=\"button\" class=\"btn btn-primary btn-sm dropdown-toggle\" data-toggle=\"dropdown\">\r\n                            <i class=\"fa fa-gear\"></i>  <span class=\"caret\"></span>\r\n                        </button>\r\n                        <ul class=\"dropdown-menu\" role=\"menu\">\r\n                            <li><a href=\"#\">Action</a>\r\n                            </li>\r\n                            <li><a href=\"#\">Another action</a>\r\n                            </li>\r\n                            <li><a href=\"#\">Something else here</a>\r\n                            </li>\r\n                            <li class=\"divider\"></li>\r\n                            <li><a href=\"#\">Separated link</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <li>\r\n            <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fuga odio quibusdam. Iure expedita, incidunt unde quis nam! Quod, quisquam. Officia quam qui adipisci quas consequuntur nostrum sequi. Consequuntur, commodi.</p>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <li class=\"timeline-inverted\">\r\n            <div class=\"timeline-badge success\"><i class=\"fa fa-graduation-cap\"></i>\r\n            </div>\r\n            <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt obcaecati, quaerat tempore officia voluptas debitis consectetur culpa amet, accusamus dolorum fugiat, animi dicta aperiam, enim incidunt quisquam maxime neque eaque.</p>\r\n                </div>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/components/timeline/timeline.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".timeline {\n  position: relative;\n  padding: 20px 0 20px;\n  list-style: none; }\n\n.timeline:before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 3px;\n  margin-left: -1.5px;\n  background-color: #eeeeee; }\n\n.timeline > li {\n  position: relative;\n  margin-bottom: 20px; }\n\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table; }\n\n.timeline > li:after {\n  clear: both; }\n\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table; }\n\n.timeline > li:after {\n  clear: both; }\n\n.timeline > li > .timeline-panel {\n  float: left;\n  position: relative;\n  width: 46%;\n  padding: 20px;\n  border: 1px solid #d4d4d4;\n  border-radius: 2px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175); }\n\n.timeline > li > .timeline-panel:before {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 26px;\n  right: -15px;\n  border-top: 15px solid transparent;\n  border-right: 0 solid #ccc;\n  border-bottom: 15px solid transparent;\n  border-left: 15px solid #ccc; }\n\n.timeline > li > .timeline-panel:after {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 27px;\n  right: -14px;\n  border-top: 14px solid transparent;\n  border-right: 0 solid #fff;\n  border-bottom: 14px solid transparent;\n  border-left: 14px solid #fff; }\n\n.timeline > li > .timeline-badge {\n  z-index: 100;\n  position: absolute;\n  top: 16px;\n  left: 50%;\n  width: 50px;\n  height: 50px;\n  margin-left: -25px;\n  border-radius: 50% 50% 50% 50%;\n  text-align: center;\n  font-size: 1.4em;\n  line-height: 50px;\n  color: #fff;\n  background-color: #999999; }\n\n.timeline > li.timeline-inverted > .timeline-panel {\n  float: right; }\n\n.timeline > li.timeline-inverted > .timeline-panel:before {\n  right: auto;\n  left: -15px;\n  border-right-width: 15px;\n  border-left-width: 0; }\n\n.timeline > li.timeline-inverted > .timeline-panel:after {\n  right: auto;\n  left: -14px;\n  border-right-width: 14px;\n  border-left-width: 0; }\n\n.timeline-badge.primary {\n  background-color: #2e6da4 !important; }\n\n.timeline-badge.success {\n  background-color: #3f903f !important; }\n\n.timeline-badge.warning {\n  background-color: #f0ad4e !important; }\n\n.timeline-badge.danger {\n  background-color: #d9534f !important; }\n\n.timeline-badge.info {\n  background-color: #5bc0de !important; }\n\n.timeline-title {\n  margin-top: 0;\n  color: inherit; }\n\n.timeline-body > p,\n.timeline-body > ul {\n  margin-bottom: 0; }\n\n.timeline-body > p + p {\n  margin-top: 5px; }\n\n@media (max-width: 767px) {\n  ul.timeline:before {\n    left: 40px; }\n  ul.timeline > li > .timeline-panel {\n    width: calc(100% - 90px);\n    width: -webkit-calc(100% - 90px); }\n  ul.timeline > li > .timeline-badge {\n    top: 16px;\n    left: 15px;\n    margin-left: 0; }\n  ul.timeline > li > .timeline-panel {\n    float: right; }\n  ul.timeline > li > .timeline-panel:before {\n    right: auto;\n    left: -15px;\n    border-right-width: 15px;\n    border-left-width: 0; }\n  ul.timeline > li > .timeline-panel:after {\n    right: auto;\n    left: -14px;\n    border-right-width: 14px;\n    border-left-width: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/components/timeline/timeline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimelineComponent = (function () {
    function TimelineComponent() {
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    return TimelineComponent;
}());
TimelineComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-timeline',
        template: __webpack_require__("../../../../../src/app/layout/dashboard/components/timeline/timeline.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/dashboard/components/timeline/timeline.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TimelineComponent);

//# sourceMappingURL=timeline.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/layout/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */] }
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    return DashboardRoutingModule;
}());
DashboardRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], DashboardRoutingModule);

//# sourceMappingURL=dashboard-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <ngb-tabset>\r\n        <ngb-tab>\r\n            <ng-template ngbTabTitle>Дуудлагын бүртгэл</ng-template>\r\n            <ng-template ngbTabContent>\r\n                <app-inbound></app-inbound>\r\n            </ng-template>\r\n        </ngb-tab>\r\n\r\n        <ngb-tab title=\"Гомдлын бүртгэл\">\r\n            <ng-template ngbTabContent>\r\n                <p>Content for tab 2</p>\r\n            </ng-template>\r\n        </ngb-tab>\r\n\r\n        <ngb-tab title=\"Дуудлагын жагсаалт\">\r\n            <ng-template ngbTabContent>\r\n                <p>Content for tab 3</p>\r\n            </ng-template>\r\n        </ngb-tab>\r\n\r\n        <ngb-tab title=\"Сошиалиар бүртгэх\">\r\n            <ng-template ngbTabContent>\r\n                <p>Content for tab 3</p>\r\n            </ng-template>\r\n        </ngb-tab>\r\n\r\n        <ngb-tab title=\"Тайлан\">\r\n            <ng-template ngbTabContent>\r\n                <p>Content for tab 3</p>\r\n            </ng-template>\r\n        </ngb-tab>\r\n    </ngb-tabset>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tab-content {\n  padding-top: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/layout/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/dashboard/dashboard.component.scss")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_routing_module__ = __webpack_require__("../../../../../src/app/layout/dashboard/dashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_component__ = __webpack_require__("../../../../../src/app/layout/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components__ = __webpack_require__("../../../../../src/app/layout/dashboard/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_components_modules_stat_stat_module__ = __webpack_require__("../../../../../src/app/shared/components/modules/stat/stat.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_calltype_calltype_component__ = __webpack_require__("../../../../../src/app/layout/dashboard/components/calltype/calltype.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_inbound_inbound_component__ = __webpack_require__("../../../../../src/app/layout/dashboard/components/inbound/inbound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_customer_history_customer_history_component__ = __webpack_require__("../../../../../src/app/layout/dashboard/components/customer-history/customer-history.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbCarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbAlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["d" /* NgbTabsetModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__dashboard_routing_module__["a" /* DashboardRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_components_modules_stat_stat_module__["a" /* StatModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components__["c" /* TimelineComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components__["b" /* NotificationComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components__["a" /* ChatComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_calltype_calltype_component__["a" /* CalltypeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_inbound_inbound_component__["a" /* InboundComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_customer_history_customer_history_component__["a" /* CustomerHistoryComponent */]
        ]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/modules/stat/stat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-inverse {{bgClass}}\">\r\n    <div class=\"card-header\">\r\n        <div class=\"row\">\r\n            <div class=\"col col-xs-3\">\r\n                <i class=\"fa {{icon}} fa-5x\"></i>\r\n            </div>\r\n            <div class=\"col col-xs-9 text-right\">\r\n                <div class=\"d-block huge\">{{count}}</div>\r\n                <div class=\"d-block\">{{label}}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-footer\">\r\n        <span class=\"float-left\">View Details {{data}}</span>\r\n        <a href=\"javascript:void(0)\" class=\"float-right card-inverse\">\r\n            <span ><i class=\"fa fa-arrow-circle-right\"></i></span>\r\n        </a>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/modules/stat/stat.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/modules/stat/stat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatComponent = (function () {
    function StatComponent() {
        this.event = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    StatComponent.prototype.ngOnInit = function () { };
    return StatComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], StatComponent.prototype, "bgClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], StatComponent.prototype, "icon", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], StatComponent.prototype, "count", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], StatComponent.prototype, "label", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], StatComponent.prototype, "data", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], StatComponent.prototype, "event", void 0);
StatComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-stat',
        template: __webpack_require__("../../../../../src/app/shared/components/modules/stat/stat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/components/modules/stat/stat.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], StatComponent);

var _a;
//# sourceMappingURL=stat.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/modules/stat/stat.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stat_component__ = __webpack_require__("../../../../../src/app/shared/components/modules/stat/stat.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StatModule = (function () {
    function StatModule() {
    }
    return StatModule;
}());
StatModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__stat_component__["a" /* StatComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__stat_component__["a" /* StatComponent */]]
    })
], StatModule);

//# sourceMappingURL=stat.module.js.map

/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map