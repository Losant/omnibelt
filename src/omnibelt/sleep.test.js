const {
  compose, subtract, __, curry
} = require('@pnpm/ramda');
const present = require('present');
const round = require('./round');
const within = require('./within');
const sleep = require('./sleep');

// duration :: Number -> Number -> Number
const duration = curry(
  (start, end) =>
    compose(
      round(0),
      subtract(__, start)
    )(end)
);

const VARIANCE = 10;

const harness = async (timeToSleep) => {
  const withinVariance = within(timeToSleep - VARIANCE, timeToSleep + VARIANCE);

  const start = present();
  await sleep(timeToSleep);
  const end = present();
  const runtime = duration(start, end);

  expect(withinVariance(runtime)).toBe(true);
};

// TODO: test this better
it('sleeps', async () => {
  await harness(750);
  await harness(1000);
});
