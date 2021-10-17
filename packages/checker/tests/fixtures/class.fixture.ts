function classDeco(): ClassDecorator {
  return () => {};
}

function methodDeco(): MethodDecorator {
  return () => {};
}

function propDeco(): PropertyDecorator {
  return () => {};
}

const nonFactoryDeco: ClassDecorator = () => {};

@classDeco()
@nonFactoryDeco
class Foo {
  @propDeco()
  prop1: number;
  static prop2: string;
  private readonly prop3: string;
  public prop4: string;
  protected prop5: string;

  @methodDeco()
  public method1() {}

  private async method2() {}

  protected async method3() {}

  static method4() {}

  method5() {}
}

class Bar {}
