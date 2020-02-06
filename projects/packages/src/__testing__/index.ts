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

/**
 * @ignore
 */
export function createEntry(config: any = {}) {
  const {
    isIntersecting = true,
    target = null,
    time = 0,
    intersectionRatio = 0,
    boundingClientRect = {},
    intersectionRect = {},
    rootBounds = {}
  } = config;
  return {
    isIntersecting,
    target,
    time,
    intersectionRatio,
    boundingClientRect,
    intersectionRect,
    rootBounds
  };
}
