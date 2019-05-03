interface Component {
  readonly name: string;
}

interface ComponentClass<T extends Component> {
  readonly name: string;
  readonly tag?: string;
  new (): T;
}

export { Component, ComponentClass };
