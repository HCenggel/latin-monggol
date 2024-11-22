import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {egesig} from "../../enums/letter";
import {FormsModule} from "@angular/forms";
import {LIST, LIST2} from "./data";

@Component({
    selector: 'app-index',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './index.component.html',
    styleUrl: './index.component.scss'
})
export class IndexComponent implements OnInit {
    constructor() {
    }

    ngOnInit(): void {

    }

    public list: any[] = LIST;
    public list2: any[] = LIST2;
}
