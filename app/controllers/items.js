import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
// import { products } from '../../public/api/product';

export default class ItemController extends Controller {
  @tracked color = this.model.item.colors[0].color;

  get productImage() {
    return this.model.item.colors.find(({ color }) => color === this.color).image;
  }
  @action
  onChangedColor(newColor) {
    this.color = newColor;
  }

  
}
