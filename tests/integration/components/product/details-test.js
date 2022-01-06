import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | product/details', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('price', {
      original: 100,
      current: 69,
    });
    await render(hbs`<Product::Details @price={{this.price}}/>`);
    assert.dom('[data-test-original-price]').hasText('$100.00');

    // Template block usage:
  });
});
