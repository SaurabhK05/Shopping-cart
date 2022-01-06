import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class CartController extends Controller {
  @service('shopping-cart') cart;

  get subtotal() {
    return this.model.reduce((acc, items) => {
      return acc + items.price;
    }, 0);
  }
  get tax() {
    return 0.09 * this.subtotal;
  }
  get total() {
    return this.tax + this.subtotal;
  }
}
