import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
    selector: 'app-customer-history',
    templateUrl: './customer-history.component.html',
    styleUrls: ['./customer-history.component.scss']
})
export class CustomerHistoryComponent implements OnInit {
    constructor() {

    }

    ngOnInit() {
        setTimeout(function () {
            $(document).ready(function() {
                $('#example').DataTable( {
                    "order": [[ 3, "desc" ]],
                    "scrollX": true
                } );
            } );
        }, 1000);
    }
}
