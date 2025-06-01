function createFunctionList() {
  const funcs = [];

  for (let i = 0; i < 5; i++) {
    funcs.push(function() {
      console.log(i);
    });
  }

  return funcs;
}

const functionList = createFunctionList();

functionList[0]();

functionList[1]();

functionList[2]();

functionList[3]();

functionList[4]();
