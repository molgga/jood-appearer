import { sleep, createEntry } from "../__testing__";
import { AppearStage } from "../stage/appear-stage"; //"projects/packages/src/stage/appear-stage";
import { AppearEvent } from "../common/types";
import { BaseActor } from "./base-actor";

describe("BaseActor", () => {
  let stage: AppearStage;
  let dom: HTMLElement;
  let actor: BaseActor;
  let entry: IntersectionObserverEntry | any;

  beforeEach(() => {
    stage = new AppearStage();
    dom = document.createElement("div");
    actor = new BaseActor(dom);
    entry = createEntry({ target: dom });
  });

  afterEach(() => {
    actor.dispose();
    actor = null;
    stage.dispose();
    stage = null;
  });

  it("최초 생성시 값 확인", () => {
    expect(actor.element).toBe(dom);
    expect(actor.isAppear).toBe(false);
  });

  it("stage observe 등록시 연결된 stage 확인", () => {
    stage.init();
    stage.observe(actor);
    expect(actor.stage).toBe(stage);
  });

  it("appear, disappear 호출시 진입 여부 상태 확인", () => {
    stage.init();
    stage.observe(actor);
    expect(actor.isAppear).toBe(false);
    actor.appear(null);
    expect(actor.isAppear).toBe(true);
    actor.disappear(null);
    expect(actor.isAppear).toBe(false);
  });

  it("appear, disappear 호출시 이벤트에 전달되는 값 확인", () => {
    stage.init();
    stage.observe(actor);

    let subscription = actor.events.subscribe((evt: AppearEvent) => {
      expect(evt.type).toBe(AppearEvent.APPEAR);
      expect(evt.actor).toBe(actor);
      expect(evt.entry).toBe(entry);
    });
    actor.appear(entry);
    subscription.unsubscribe();

    subscription = actor.events.subscribe((evt: AppearEvent) => {
      expect(evt.type).toBe(AppearEvent.DISAPPEAR);
      expect(evt.actor).toBe(actor);
      expect(evt.entry).toBe(entry);
    });
    entry.isIntersecting = false;
    actor.disappear(entry);
    subscription.unsubscribe();
  });

  it("appear, disappear 호출시 stage 등록 상태 확인", () => {
    stage.init();
    stage.observe(actor);
    expect(actor.stage).toBe(stage);
    expect(stage.actorSize).toBe(1);
    actor.appear(null);
    expect(stage.actorSize).toBe(1);
    actor.disappear(null);
    expect(stage.actorSize).toBe(1);
  });

  it("appear 되지 않은 상태에서 disapper 되지 않는것 확인", async () => {
    let isCalled = false;
    const subscription = actor.events.subscribe((evt: AppearEvent) => {
      isCalled = true;
    });
    actor.disappear(entry);

    await sleep(10);

    expect(isCalled).toBe(false);
    subscription.unsubscribe();
  });

  it("appear 중복 진입 안된는것 확인", () => {
    stage.init();
    stage.observe(actor);

    const handle = spyOn(actor, "dispatch");

    actor.appear(null);
    expect(handle.calls.count()).toBe(1);
    actor.appear(null);
    expect(handle.calls.count()).toBe(1);

    actor.disappear(null);
    expect(handle.calls.count()).toBe(2);
    actor.appear(null);
    expect(handle.calls.count()).toBe(3);
  });
});
