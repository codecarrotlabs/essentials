export type OnlyRequired<T, R extends keyof T> = Required<Pick<T, R>> &
  Partial<Omit<T, R>>;
