import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | shopping', function (hooks) {
  setupApplicationTest(hooks);

  test('it is able to add items in shopping cart page', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/');
    await click('[data-test-product="1"]');

    assert.strictEqual(currentURL(), '/items/1');
    await click('[data-test-add-to-cart]');

    await click('[data-test-add-to-cart-button]');

    assert.strictEqual(currentURL(), '/shopping-cart');

    assert.dom('h4').hasText("Beats Solo Wireless Headphones");

    assert.dom('i').hasText("$99.98");
    
    // await this.pauseTest();
  });
});
