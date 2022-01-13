import Route from '@ember/routing/route';


export default class IndexRoute extends Route {

  async model() {
    let response = await fetch('/api/product.json');
    let { data } = await response.json();
    // console.log(data);
    return data;
  }
}
