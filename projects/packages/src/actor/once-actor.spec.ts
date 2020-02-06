import { AppearStage } from "../stage/appear-stage";
import { OnceActor } from "./once-actor";

describe("OnceActor", () => {
  let stage: AppearStage;
  let dom: HTMLElement;
  let actor: OnceActor;

  beforeEach(() => {
    stage = new AppearStage();
    dom = document.createElement("div");
    actor = new OnceActor(dom);
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
    actor.appear(null);
    expect(stage.actorSize).toBe(0);
  });

  it("appear 중복 호출 안되는것 확인", () => {
    stage.init();
    stage.observe(actor);

    const handle = spyOn(actor, "dispatch");
    actor.appear(null);
    expect(handle.calls.count()).toBe(1);
    actor.appear(null);
    expect(handle.calls.count()).toBe(1);
  });

  it("appear stage에 등록 안된 상태에서 unobserve 안되는것 확인", () => {
    const handle = spyOn(stage, "unobserve");
    stage.init();

    actor.appear(null);
    expect(handle.calls.count()).toBe(0);
  });
});
