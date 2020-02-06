import { sleep } from "../__testing__";
import { AppearStage } from "../stage/appear-stage";
import { AppearEvent } from "../common/types";
import { LazyActor } from "./lazy-actor";

describe("LazyActor", () => {
  let stage: AppearStage;
  let dom: HTMLElement;
  let actor: LazyActor;
  let entry: IntersectionObserverEntry | any;

  beforeEach(() => {
    stage = new AppearStage();
    dom = document.createElement("div");
    actor = new LazyActor(dom);
    entry = {
      isIntersecting: false,
      target: dom,
      time: 0,
      intersectionRatio: 0,
      boundingClientRect: {},
      intersectionRect: {},
      rootBounds: {}
    };
  });

  afterEach(() => {
    actor.dispose();
    actor = null;
    stage.dispose();
    stage = null;
  });

  it("appear 호출시 stage 의 관찰 대상에서 자동으로 제외 되는지 확인", () => {
    stage.init();
    stage.observe(actor);
    expect(actor.stage).toBe(stage);
    expect(stage.actorSize).toBe(1);
    actor.appear(entry);
    expect(stage.actorSize).toBe(0);
  });

  it("지정된 checkoutDelay 이전에 appear 되는 경우 진입 상태로 바로 전환 되는지 확인", () => {
    actor.setCheckoutDelay(100);

    expect(actor.isAppear).toBe(false);
    entry.time = 0;
    actor.appear(entry);
    expect(actor.isAppear).toBe(true);
  });

  it("지정된 checkoutDelay 이후에 appear 되는 경우 appearDelay 후에 진입 상태로 전환 되는지 확인", async () => {
    actor.setCheckoutDelay(200);
    actor.setAppearDelay(100);

    entry.time = 220;
    actor.appear(entry);

    expect(actor.isAppear).toBe(false);
    await sleep(110);
    expect(actor.isAppear).toBe(true);
  });

  it("지정된 appearDelay 사이에 appear, disappear 가 호출되는 경우 상태 진입 상태로 전환이 되지 않는것 확인", async () => {
    actor.setCheckoutDelay(200);
    actor.setAppearDelay(100);

    let isCalled = false;
    const subscription = actor.events.subscribe((evt: AppearEvent) => {
      isCalled = true;
    });

    expect(actor.isAppear).toBe(false);

    entry.time = 210;
    actor.appear(entry);
    expect(isCalled).toBe(false);

    await sleep(10);

    actor.disappear(entry);
    expect(isCalled).toBe(false);

    await sleep(10);

    actor.appear(entry);
    expect(isCalled).toBe(false);

    await sleep(110);

    expect(isCalled).toBe(true);

    subscription.unsubscribe();
  });

  it("checkoutDelay 설정 확인", async () => {
    const DEFAULT_VALUE = 1000;
    // @ts-ignore
    expect(actor.checkoutDelay).toBe(DEFAULT_VALUE);

    actor.setCheckoutDelay(200);
    // @ts-ignore
    expect(actor.checkoutDelay).toBe(200);

    actor.setCheckoutDelay(undefined);
    // @ts-ignore
    expect(actor.checkoutDelay).toBe(DEFAULT_VALUE);
  });

  it("appearDelay 설정 확인", async () => {
    const DEFAULT_VALUE = 150;
    // @ts-ignore
    expect(actor.appearDelay).toBe(DEFAULT_VALUE);

    actor.setAppearDelay(200);
    // @ts-ignore
    expect(actor.appearDelay).toBe(200);

    actor.setAppearDelay(undefined);
    // @ts-ignore
    expect(actor.appearDelay).toBe(DEFAULT_VALUE);
  });
});
