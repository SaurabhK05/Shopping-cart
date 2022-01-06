import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | general-component', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<GeneralComponent />`);

    // await click('[data-test-add-to-cart-button]');
    // await this.pauseTest();

    // assert.dom(this.element).hasText('');

    // // Template block usage:
    // await render(hbs`
    //   <GeneralComponent>
    //     template block text
    //   </GeneralComponent>
    // `);

    // assert.dom(this.element).hasText('template block text');
  });
});
