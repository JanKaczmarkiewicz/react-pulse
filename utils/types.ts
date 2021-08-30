type Await<T> = T extends PromiseLike<infer U> ? U : T;
export type AwaitReturnType<F extends (...args: any) => any> = Await<
  ReturnType<F>
>;
