import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class Details extends Component {
  @service('shopping-cart') cart;

  @action
  changeColor(color) {
    this.args.onChangedColor(color);
  }

  @action
  addToCart() {
    const { name, color, colors, price } = this.args;
    this.cart.addItem({
      name,
      color,
      image: colors.find((colorInfo) => colorInfo.color === color).image,
      price: price.current,
    });
  }
}
