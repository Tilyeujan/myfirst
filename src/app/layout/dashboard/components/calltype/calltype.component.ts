import { Component, OnInit } from '@angular/core';
import {forEach} from "@angular/router/src/utils/collection";
import {CallTypesServiceService} from "./call-types-service.service";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-calltype',
    templateUrl: './calltype.component.html',
    styleUrls: ['./calltype.component.scss'],
    providers: [CallTypesServiceService]
})
export class CalltypeComponent implements OnInit {

    public callTypes: Array<any> = [];
    public callTypes2: Array<any> = [];
    public callTypes3: Array<any> = [];
    public callTypes4: Array<any> = [];

    constructor(private callTypeService: CallTypesServiceService) {

    }

    ngOnInit() {
        this.callTypeService.getCallTypeJson("calltype1.json").then(value => {
            this.callTypes = this.callTypeService.callTypes;
        });
    }

    /**
     * Get Call Types
     *
     * @param e
     */
    getCallType2(e){
        var that = this;
        that.callTypes2 = [];
        that.callTypes3 = [];
        that.callTypes4 = [];

        this.callTypeService.getCallTypeJson("calltype2.json").then(value => {
            this.callTypeService.callTypes.forEach(function (value) {
                if (value.parentId == e)
                    that.callTypes2.push(value);
            });
        });
    }

    getCallType3(e){
        var that = this;
        that.callTypes3 = [];
        that.callTypes4 = [];

        this.callTypeService.getCallTypeJson("calltype3.json").then(value => {
            this.callTypeService.callTypes.forEach(function (value) {
                if (value.parentId == e)
                    that.callTypes3.push(value);
            });
        });
    }


    getCallType4(e){
        var that = this;
        that.callTypes4 = [];

        this.callTypeService.getCallTypeJson("calltype4.json").then(value => {
            this.callTypeService.callTypes.forEach(function (value) {
                if (value.parentId == e)
                    that.callTypes4.push(value);
            });
        });
    }

}
