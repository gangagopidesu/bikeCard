import { LightningElement,api,wire } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FIRST_NAME from '@salesforce/schema/Contact.FirstName';
import LAST_NAME from '@salesforce/schema/Contact.LastName';
import Email from '@salesforce/schema/Contact.email';
//import getContacts from '@saleforce/apex/ContactController.getContacts';
import getContacts from '@salesforce/apex/ContactController.getContacts';


const COLUMNS = [
    {label : 'FirstName', fieldName : FIRST_NAME.fieldApiName ,type : 'text'},
    {label : 'LastName', fieldName : LAST_NAME.fieldApiName, type : 'text'},
    {label : 'Email',fieldName : Email.fieldApiName, type:'email'}
];

export default class ContactList extends LightningElement {

    @api columns =COLUMNS;

    @wire(getContacts) contacts;
}