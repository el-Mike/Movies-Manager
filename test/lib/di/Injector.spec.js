import Injector from '../../../src/lib/di/Injector';

describe('Injector', () => {
  it('should be an instance of Injector class', () => {
    const injector = new Injector();

    expect(injector).toEqual(jasmine.any(Injector));
  });

  it('should be a singleton', () => {
    const injector1 = new Injector();
    const injector2 = new Injector();

    expect(injector1 === injector2).toBe(true);
  });

  describe('Register function', () => {
    it('should store register value in deps property', () => {
      const injector = new Injector();
      const dummyObject = {
        name: 'Dummy',
        testVal: 8
      };

      injector.register('dummyObject', dummyObject);

      expect(injector.dependencies['dummyObject']).toEqual(dummyObject);
      expect(injector.dependencies['dummyObject'].name).toEqual('Dummy');
      expect(injector.dependencies['dummyObject'].testVal).toEqual(8);
    });
  });

  describe('Resolve function', () => {
    it('should be a function', () => {
      const injector = new Injector();

      expect(injector.resolve).toEqual(jasmine.any(Function));
    });

    it('should invoke a function', () => {
      const injector = new Injector();

      let testVal = null;

      const testObject = {
        testFn: (dep1, dep2) => {
          testVal = dep1 * dep2;
        }
      };

      spyOn(testObject, 'testFn');

      injector.resolve([], testObject.testFn)();

      expect(testObject.testFn).toHaveBeenCalled();
    });
  });
});
