import Route from '@ember/routing/route';

export default class ItemsRoute extends Route {
  model(params) {
    const { items_id } = params;
    // const product = products.find(({ id }) => id === item_id);
    // console.log(product);
    return items_id;
  }
}
