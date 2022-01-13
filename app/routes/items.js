import Route from '@ember/routing/route';
// import { products } from '../public/api/product';

export default class ItemsRoute extends Route {
  async model(params) {
    let response = await fetch(`/api/product.json`);
    // console.log(items_id);
    let { data } = await response.json();

    const { items_id } = params;
    // const product = data.find(({ id }) => id === items_id);

    return { data, item:data[items_id-1]};
    // console.log();
    return data[items_id-1];
  }
  
  

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.color = model.item.colors[0].color;
  }
}
