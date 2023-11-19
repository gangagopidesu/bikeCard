import { LightningElement } from 'lwc';

export default class MyFirstWebComponent extends LightningElement {

    @track 
    contacts = [
        {
            Id: 1,
            Name: 'Amy Taylor',
            Title: 'VP of Engineering',
        },
        {

            ID:2,
            Name: 'Michael Jones',
            Title: 'VP of Sales',
        },
        {
            ID: 3,
            Name: 'Jennifer Wu',
            Title: 'CEO',
        }
    ];
}