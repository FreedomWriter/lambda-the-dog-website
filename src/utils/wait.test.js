import wait from "./wait";

//async test with the done method way
// test("wait for promise to resolve", done => {
//   const result = wait(3).then(result => {
//     expect(result).toBe("hurray!");
//     done();
//   });
// });

//async test with the return Promise way
// test("wait for promise to resolve", () => {
//   return result = wait(3).then(result => {
//     expect(result).toBe("hurray!");
//   });
// });

//async test with async/await
// test("wait for promise to resolve", async () => {
//   const result = await wait(3);
//   expect(result).toBe("hurray!");
// });

//spy enhanced test with async/await
jest.useFakeTimers();

test("wait for promise to resolve", async () => {
  const spy = jest.fn();

  const waitFn = wait(3, spy);

  jest.runAllTimers();

  const result = await waitFn;

  expect(result).toBe("hurray!");

  expect(spy).toHaveBeenCalledWith("resolve finished");
  expect(spy).toHaveBeenCalledTimes(1);
});
