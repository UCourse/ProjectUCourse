import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
    selector: 'confirm-dialog',
    templateUrl: './changeProfilePictureDialog.component.html',
    styles: []
})
export class ChangeProfilePictureDialogComponent {

    public title: string;
    public message: string;

    constructor(public dialogRef: MdDialogRef<ChangeProfilePictureDialogComponent>) { }
}