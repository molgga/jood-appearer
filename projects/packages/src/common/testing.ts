/**
 * @ignore
 */
export function sleep(delay = 1) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, delay);
  });
}
