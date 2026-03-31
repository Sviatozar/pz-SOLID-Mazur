export interface IWorker {
  work(): void;
  eat(): void;
  sleep(): void;
  manage(): void;
  code(): void;
  design(): void;
  test(): void;
}

export class Developer implements IWorker {
  work(): void {
    console.log('Developer is working');
  }

  eat(): void {
    console.log('Developer is eating');
  }

  sleep(): void {
    console.log('Developer is sleeping');
  }

  manage(): void {
    throw new Error('Developer cannot manage');
  }

  code(): void {
    console.log('Developer is coding');
  }

  design(): void {
    throw new Error('Developer cannot design');
  }

  test(): void {
    console.log('Developer is testing');
  }
}
