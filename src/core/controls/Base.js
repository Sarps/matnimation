import { Viewport } from "../viewports";

export default class Base {
  /**
   *
   * @param {Viewport} viewport
   */
  constructor(viewport) {
    this.captureInputs(viewport);
  }

  /**
   *
   * @param {Viewport} viewport
   */
  // eslint-disable-next-line no-unused-vars
  captureInputs(viewport) {}
}
