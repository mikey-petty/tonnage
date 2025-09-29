declare module "@sqlite.org/sqlite-wasm" {
  /**
   * Config options available in the Worker1Promiser. The
   * npm package does not define types for thes Worker1Promiser
   * API, so these have been pulled from the official documentation.
   *
   * See the "config" section of the docs:
   * https://sqlite.org/wasm/doc/trunk/api-worker1.md#promiser
   *
   * @export
   * @interface Sqlite3Worker1PromiserConfig
   */
  export interface SQLite3Worker1PromiserConfig {
    /**
     * Called when the async loading of the sqlite3 module and Worker APIs are done.
     * This is the only way of knowing that the loading has completed.
     *
     * Prior to version 3.46, this function was passed no arguments.
     * As of 3.46, onready() is passed the function which gets returned by sqlite3Worker1Promiser(),
     * as accessing it from this callback is more convenient for certain usage patterns.
     * Also as of 3.46, the promiser v2 interface obviates the need for this callback.
     */
    onready?: (promiserFn?: (...args: any[]) => any) => void | Promise<void>;

    /**
     * A Worker instance which loads sqlite3-worker1.js or a functional equivalent.
     * Note that the promiser factory replaces the worker.onmessage property.
     * This config option may alternately be a function, in which case this function
     * re-assigns this property with the result of calling that function, enabling
     * delayed instantiation of a Worker.
     */
    worker?: Worker | (() => Worker);

    /**
     * A function which, when passed an about-to-be-posted message object, generates
     * a unique message ID for the message, which this API then assigns as the
     * messageId property of the message. It must generate unique IDs on each call
     * so that dispatching can work. If not defined, a default generator is used
     * (which should be sufficient for most use cases).
     */
    generateMessageId?: (messageObject: any) => string;

    /**
     * A console.debug()-style function for logging information about Worker messages.
     */
    debug?: (...args: any[]) => void;

    /**
     * A callback which gets passed the message event object for any worker.onmessage()
     * events which are not handled by this proxy. This can be useful in detecting
     * client-side misuse of the Worker. If this handler is not installed, unknown
     * message types will trigger an error response.
     */
    onunhandled?: (event: MessageEvent) => void;
  }

  /**
   * Type Definitions for the Worker1Promiser Initializer
   *
   * See the official docs here:
   * https://sqlite.org/wasm/doc/trunk/api-worker1.md#promiser
   *
   * @export
   * @interface SQLite3Worker1Promiser
   */
  export interface SQLite3Worker1Promiser {
    /**
     * Worker1Promiser initializer that the "onready"
     * callback to "postMessage" when the database has been initialized.
     * This is not as easy to use as v2 below
     *
     * See here for details:
     * https://sqlite.org/wasm/doc/trunk/api-worker1.md#promiser
     *
     * @param {SQLite3Worker1PromiserConfig} [config]
     * @return {*}  {Promise<any>}
     * @memberof SQLite3Worker1Promiser
     */

    (config?: SQLite3Worker1PromiserConfig): Promise<any>;

    /**
     * Worker1Promiser initializer that uses Promises instead of
     * callbacks for asynchronous loading of database. Preferred
     * over the standard SQLite3Worker1Promiser.
     *
     * Note: the "onready" callback is not needed in the config when
     * using this
     *
     * See here for details:
     * https://sqlite.org/wasm/doc/trunk/api-worker1.md#promiser.v2
     *
     * @param {SQLite3Worker1PromiserConfig} [config]
     * @return {*}  {Promise<any>}
     * @memberof SQLite3Worker1Promiser
     */
    v2(config?: SQLite3Worker1PromiserConfig): Promise<any>;
  }

  /**
   * The Worker1Promiser initializer
   *
   * In the official npm package, this is exported via index.mjs
   * and attached to the "globalThis" object. However, there is
   * no type definition for this in the package yet. Hence, the need for
   * being declared here
   *
   * See here for more details:
   * https://sqlite.org/wasm/doc/trunk/api-worker1.md#promiser
   */
  export const sqlite3Worker1Promiser: SQLite3Worker1Promiser;
}
