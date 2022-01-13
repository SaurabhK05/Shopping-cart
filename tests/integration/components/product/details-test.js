import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | product/details', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('price', {
      original: 100.00,
      current: 69.00,
    });
    this.set('name', 'Boat Wireless EarPhones');
    // this.set('onChangeColor', function(color){
    //   assert.equal(color, 'red');
    // })
    // this.set('color', [{color: 'red'}]);

    await render(hbs `<Product::Details @price={{this.price}}
      @name={{this.name}} />`);

    assert.dom('[data-test-name]').hasText('Boat Wireless EarPhones');
    assert.dom('[data-test-original-price]').hasText('$100.00');
    // await click('[data-test-color]');

    // Template block usage:
  });
});
