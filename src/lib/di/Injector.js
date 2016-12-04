'use strict';

let instance = null;

export default class Injector {
  constructor() {
    this.dependencies = [];

    if (!instance) {
      instance = this;
    }

    return instance;
  }

  register(key, value) {
    this.dependencies[key] = value;
  }

  resolve(deps, fn, scope) {
    const args = [];

    deps.forEach((dep) => {
      if (this.dependencies[dep]) {
        args.push(dep);
      } else {
        throw new Error(`Can't resolve ${dep}`);
      }
    });

    return (...rest) => fn.apply(scope || {}, args.concat(rest));
  }
}
