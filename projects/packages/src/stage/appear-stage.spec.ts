import { sleep } from "../common/testing";
import { AppearStage } from "./appear-stage";
import { BaseActor } from "../actor/base-actor";

describe("AppearStage", () => {
  let stage: AppearStage;

  beforeEach(() => {
    stage = new AppearStage();
  });

  afterEach(() => {
    stage.dispose();
    stage = null;
  });

  it("init options", () => {
    const rootEl: any = document.createElement("div");
    stage.init({
      root: rootEl,
      rootMargin: "100px 200px 300px 400px",
      threshold: 0.5
    });

    expect(stage.intersectionObserver.root).toBe(rootEl);
    expect(stage.intersectionObserver.rootMargin).toBe(
      "100px 200px 300px 400px"
    );
    expect(stage.intersectionObserver.thresholds).toEqual([0.5]);

    stage.init({
      rootMargin: "already init. not updated."
    });

    expect(stage.intersectionObserver.root).toBe(rootEl);
    expect(stage.intersectionObserver.rootMargin).toBe(
      "100px 200px 300px 400px"
    );
    expect(stage.intersectionObserver.thresholds).toEqual([0.5]);
    expect(stage.intersectionObserver.rootMargin).toBe(
      "100px 200px 300px 400px"
    );
  });

  it("init option: threshold array", () => {
    stage.init({
      threshold: [0, 0.25, 0.5, 1] // 가시성(intersectionRatio)이 0, 0.25, 0.5, 1 를 지날 때(작아지든 커지든 0.51 -> 0.5, 0.49 -> 0.5) 트리거
    });
    expect(stage.intersectionObserver.thresholds).toEqual([0, 0.25, 0.5, 1]);
  });

  it("observe, unobserve 시 관찰 대상 수 확인", () => {
    stage.init();
    const dom1 = document.createElement("div");
    const actor1 = new BaseActor(dom1);
    expect(stage.actorSize).toBe(0);
    stage.observe(actor1);
    expect(stage.actorSize).toBe(1);
    stage.unobserve(actor1);
    expect(stage.actorSize).toBe(0);
  });

  it("observe 시 등록된 actor 확인", () => {
    stage.init();
    const dom1 = document.createElement("div");
    const actor1 = new BaseActor(dom1);
    const dom2 = document.createElement("div");
    const actor2 = new BaseActor(dom2);

    stage.observe(actor1);
    stage.observe(actor2);
    expect(stage.actorSize).toBe(2);
    expect(stage.getActors()).toEqual([actor1, actor2]);
  });

  it("동일한 DOM observe 시 중복 등록 안되는것 확인", () => {
    stage.init();
    const dom1 = document.createElement("div");
    const actor1 = new BaseActor(dom1);
    const actor2 = new BaseActor(dom1);

    stage.observe(actor1);
    stage.observe(actor2);
    expect(stage.actorSize).toBe(1);
    expect(stage.getActors()).toEqual([actor1]);
  });

  it("observe 등록 되자마자 intesection 콜백 호출 되는지 확인", async () => {
    // @ts-ignore
    const handle = spyOn(stage, "onObserveEntries");

    stage.init();
    const dom1 = document.createElement("div");
    const actor1 = new BaseActor(dom1);
    stage.observe(actor1);

    expect(handle.calls.count()).toBe(0);
    await sleep(1);
    expect(handle.calls.count()).toBe(1);
  });
});
