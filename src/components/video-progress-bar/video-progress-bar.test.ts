import '../../../dist/shoelace.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<sl-video-progress-bar>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <sl-video-progress-bar></sl-video-progress-bar> `);

    expect(el).to.exist;
  });
});
