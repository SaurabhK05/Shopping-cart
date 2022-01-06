import Route from '@ember/routing/route';
import { products } from '../data/product';

export default class ItemsRoute extends Route {
  model(params) {
    const { items_id } = params;
    const product = products.find(({ id }) => id === items_id);
    console.log(product);
    return product;
  }
  

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.color = model.colors[0].color;
  }
}
