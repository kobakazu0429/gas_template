export default class ExtendableError extends Error {
  constructor(message: string) {
    super();
    this.message = message;
    this.stack = new Error().stack;
    this.name = this.constructor.name;
  }
}
