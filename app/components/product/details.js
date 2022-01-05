import Component from '@glimmer/component';
import {action} from '@ember/object';
export default class Details extends Component{

    @action 
    changeColor(color){
        this.args.onChangedColor(color);
    }
}