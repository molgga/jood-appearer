# @jood/appearer

intersection observer 활용.

| Quick            | description             | link                                                                          |
| ---------------- | ----------------------- | ----------------------------------------------------------------------------- |
| `@jood/appearer` | npm package             | [link](https://www.npmjs.com/package/@jood/appearer)                          |
| `packages`       | library packages source | [link](https://github.com/molgga/jood-appearer/tree/master/projects/packages) |
| `Doc:api`        | api document            | [link](https://molgga.github.io/jood-appearer)                                |

---

### AppearStage

한 개의 뷰포트

### Actors

- BaseActor: 기본형. 화면에 진입, 이탈 이벤트를 전달 받을 수 있다.
- OnceActor: 1번만. 화면에 진입할 때 한번만 appear 이벤트가 트리거 된다.(트리거 후 자동 관찰해제)
- LazyActor: 1번만. OnceActor 와 동일하나 진입 후 이탈이 지정된 시간 보다 짧으면 진입으로 취급하지 않는다.

### example

```typescript
import { AppearStage, AppearEvent, BaseActor } from "@jood/appearer";

const someStage = new AppearStage();
someStage.init();

const baseActor = new BaseActor(document.querySelector(".my-some-box1"));
someStage.observe(baseActor);

const subscription = baseActor.events.subscribe((evt: AppearEvent) => {
  if (evt.type === AppearEvent.APPEAR) {
    // image.src = 'real-src';
    // showAnimationStart();
    // fetchMore();
    // ...
  } else if (evt.type === AppearEvent.DISAPPEAR) {
    // hideAnimationStart();
    // ...
  }
});
```

---

```typescript
import { AppearStage, OnceActor } from "@jood/appearer";

const someStage = new AppearStage();
someStage.init();

const onceActor = new OnceActor(document.querySelector(".my-some-box1"));
someStage.observe(onceActor);

const subscription = onceActor.events.subscribe((evt: AppearEvent) => {
  image.src = "real-src";
  subscription.unsubscribe();
  onceActor.dispose();
});
```

---

```typescript
import { AppearStage, AppearEvent, LazyActor } from "@jood/appearer";

const someStage = new AppearStage();
someStage.init();

const myList = new OnceActor(document.querySelectorAll(".my-some-box"));
myList.forEach(elBox => {
  const lazyActor = new LazyActor(elBox);
  someStage.observe(lazyActor);

  const subscription = lazyActor.events.subscribe((evt: AppearEvent) => {
    const { element } = evt.actor;
    element.classList.add("is-active");
    subscription.unsubscribe();
    lazyActor.dispose();
  });
});
```

---

```typescript
import { AppearStage, AppearEvent, LazyActor } from "@jood/appearer";

const elHorizontalContainer = document.querySelector(".my-horizonta-container");
const someStage = new AppearStage();

/**
 * Intersection observer options
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
 **/
someStage.init({
  root: elHorizontalContainer,
  rootMargin: "0 25% 0 25%"
});

const myBoxList = elHorizontalContainer.querySelectorAll(".my-some-box");
myBoxList.forEach(elBox => {
  const lazyActor = new LazyActor(elBox);
  someStage.observe(lazyActor);

  const subscription = lazyActor.events.subscribe((evt: AppearEvent) => {
    const { element } = evt.actor;
    element.classList.add("is-active");
    subscription.unsubscribe();
    lazyActor.dispose();
  });
});
```

---

```typescript
import { AppearStage, AppearEvent, LazyActor } from '@jood/appearer';

let isLoading = false;

const someStage = new AppearStage();
someStage.init({
  rootMargin: '0 0 50% 0',
});

const myInfiniteLoading = new BaseAppear(document.querySelector('.my-list-foot-loading'));
someStage.observe(myInfiniteLoading);

const subscription = myInfiniteLoading.events.subscribe((evt: AppearEvent) => {
  if (evt.type === AppearEvent.APPEAR) {
    fetchMore();
  }
});

function fetchMore() {
  if (isLoading === true) return;
  isLoading = true;
  fetch(...).then((result) => {
    isLoading = false;
  });
}
```

<style>
table {
  width:100%;
}
</style>
