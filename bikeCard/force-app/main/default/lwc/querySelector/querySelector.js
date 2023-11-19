import { LightningElement } from 'lwc';

export default class QuerySelector extends LightningElement {
    
    fname = "Gangaraju";
    lname = "Gopidesu";

    changeHandler(event){
        var input = event.template.QuerySelectorAll('lightning-input');
        input.forEach(function(element){
            if(element.name=="firstname"){

                this.fname = element.value;
            }
            else if(element.name=="lastname"){
                this.lname = element.value;
            }
        },this);
    }

    }

