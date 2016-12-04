import Injector from './lib/di/Injector';

class Tester {
  write() {
    return 'Hello!';
  }
}

const DI = new Injector();

DI.register('tester', new Tester());
