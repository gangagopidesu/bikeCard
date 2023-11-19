import { LightningElement } from 'lwc';

export default class MyPractice extends LightningElement {
    flag=false;
    checkValue(event){
        this.flag = event.target.checked;
    }

}