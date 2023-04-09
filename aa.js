const add = (a, b) => {
  return a + b;
};

const func = (a) => {
  return a();
};
func(add);
