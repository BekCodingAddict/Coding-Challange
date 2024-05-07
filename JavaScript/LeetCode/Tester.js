const tester = (callback, input = 0, output) => {
  callback === output
    ? console.log(`input:${input} is passed!`)
    : console.log(`input:${input} is failed!`);
};

export default tester;
