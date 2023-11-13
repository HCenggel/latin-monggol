import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {egesig} from "../../enums/letter";
import {FormsModule} from "@angular/forms";

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

    public egesig: Array<[string, string]> = egesig;
    public latinToMonggol: any = {};
    public valueLatin = 'minw saihan monggol oron';
    public valueMonggol = '';

    ngOnInit(): void {
        this.egesig.forEach((res: [string, string]): void => {
            this.latinToMonggol[res[1]] = res[0];
        })
        console.log(this.latinToMonggol)
    }

    valueLatinChange(): void {
        // const newMGStr: any = this.valueLatin.replace(/(zqi|cqi|sqi|eqr|eqr) /gi, '$1, ');
        const letterArry: any = this.valueLatin.split('');
        let mgWord: string = '';
        letterArry.forEach((v: string): void => {
            console.log(v.toUpperCase())
            if (this.latinToMonggol[v.toUpperCase()]) {
                mgWord += this.latinToMonggol[v.toUpperCase()];
            } else {
                mgWord += v;
            }
        })
        this.valueMonggol = mgWord;
        console.log(letterArry);
        console.log(mgWord)
    }
}

/*
请使用js实现如下要求，
有一段文字，kjaah shfd gjlqkd hadt hfzqijhg kdfjh skjshdfh，所有'sqi '的后面都插入一个逗号，
* */
