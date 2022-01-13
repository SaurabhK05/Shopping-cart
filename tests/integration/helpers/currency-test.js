import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | currency', function (hooks) {
  setupRenderingTest(hooks);

  // TODO: Replace this with your real tests.
  test('it renders', async function (assert) {
    this.set('value', 199);
    this.set('sign', '$');

    await render(hbs`{{currency value sign=sign}}`);
    // await this.pauseTest();
    assert.dom(this.element).hasText('199');
  });
});
