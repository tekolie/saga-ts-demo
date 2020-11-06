export const formatName = (name:string) => `My name is ${name}`

export const addOne = (value: number) => value + 1

export const addIsPending = <T>(data: T) => ({
  ...data,
  isPending: true,
});
