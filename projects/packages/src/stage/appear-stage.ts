import { IStage, StageOption, Actor, ActorElement } from "../common/types";

/**
 * 화면(지정된 root 영역)에 진입 여부를 판단하고 알리기 위한 클래스.
 * 등록된 Actor(s)를 IntersectionObserver 를 통해 관찰하고 관찰된 상태에 따라 Actor 에게 알림.
 * @template T Actor
 */
export class AppearStage<T extends Actor = Actor> implements IStage<T> {
  /**
   * Actor 맵
   */
  protected actorMap: Map<ActorElement, T>;

  /**
   * IntersectionObserver
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
   */
  protected observer: IntersectionObserver;

  /**
   * 초기화
   * @param [option] 초기 옵션. 인터섹션 옵저버는 생성시에만 옵션 지정이 가능
   */
  init(option: StageOption = {}): void {
    if (!this.observer) {
      this.actorMap = new Map<ActorElement, T>();
      this.observer = new IntersectionObserver(
        this.onObserveEntries.bind(this),
        option
      );
    }
  }

  /**
   * 전달된 actor 를 옵저버에 등록합니다.
   * @param actor 등록할 Actor
   */
  observe(actor: T): void {
    const { element } = actor;
    if (this.actorMap && !this.actorMap.has(element)) {
      actor.bind(this);
      this.actorMap.set(element, actor);
      this.intersectionObserver.observe(element);
    }
  }

  /**
   * 전달된 actor 를 옵저버에서 제외합니다.
   * @param actor 제외할 Actor
   */
  unobserve(actor: T): void {
    const { element } = actor;
    if (this.actorMap && this.actorMap.has(element)) {
      this.actorMap.delete(element);
      this.intersectionObserver.unobserve(element);
    }
  }

  /**
   * 옵저버에 등록(관찰) 중 인 Actor 의 수
   */
  get actorSize() {
    return this.actorMap ? this.actorMap.size : 0;
  }

  /**
   * 등록 되어있는 Actor 를 반환 합니다.
   * @returns T[]
   */
  getActors(): T[] {
    return Array.from(this.actorMap ? this.actorMap.values() : []);
  }

  /**
   * 생성된 intersection observer 인스턴스
   */
  get intersectionObserver(): IntersectionObserver {
    if (!this.observer) throw new Error("uninitialize");
    return this.observer;
  }

  /**
   * 옵저버의 콜백 핸들러
   * @param entries 옵저버의 콜백으로 전달받는 엔트리 값
   */
  protected onObserveEntries(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (!this.actorMap) return;
      const { isIntersecting, target } = entry;
      const actor = this.actorMap.get(target);
      if (actor) {
        if (isIntersecting) {
          actor.appear(entry);
        } else {
          actor.disappear(entry);
        }
      }
    });
  }

  /**
   * 파기
   */
  dispose(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    if (this.actorMap) {
      this.actorMap.clear();
      this.actorMap = null;
    }
  }
}
