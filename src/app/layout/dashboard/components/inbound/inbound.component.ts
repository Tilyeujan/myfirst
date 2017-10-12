import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
    selector: 'app-inbound',
    templateUrl: './inbound.component.html',
    styleUrls: ['./inbound.component.scss']
})
export class InboundComponent implements OnInit {
    public alerts: Array<any> = [];
    constructor() {
        this.alerts.push({
            id: 1,
            type: 'success',
            message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
        }, {
            id: 2,
            type: 'warning',
            message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
        });
    }

    ngOnInit() {
        setTimeout(function () {
            $(document).ready(function() {
                $('#vocHistory').DataTable( {
                    "order": [[ 3, "desc" ]],
                    "scrollX": true
                } );
            } );
        }, 1000);
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
