import SlVideoProgressBar from './video-progress-bar.component.js';

export * from './video-progress-bar.component.js';
export default SlVideoProgressBar;

SlVideoProgressBar.define('sl-video-progress-bar');

declare global {
  interface HTMLElementTagNameMap {
    'sl-video-progress-bar': SlVideoProgressBar;
  }
}
