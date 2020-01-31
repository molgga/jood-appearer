import { ActorElement, AppearEvent, IActor, IStage } from "../common/types";
import { Subject } from "rxjs";

/**
 * Stage 에 등록될 Actor.
 * 스테이지에 진입, 이탈 시 계속 알려주는 기본형.
 * @class BaseActor
 * @implements {IActor}
 */
export class BaseActor implements IActor {
  /**
   * @param element 옵저버에 등록되어야 하는 native element
   */
  constructor(element: ActorElement) {
    this.element = element;
  }

  /**
   * 옵저버에 등록될 native element
   */
  element: ActorElement;

  /**
   * 이벤트 Observable
   * @see https://rxjs-dev.firebaseapp.com/guide/subject
   */
  events: Subject<AppearEvent> = new Subject<AppearEvent>();

  /**
   * 해당 인스턴스가 등록된 스테이지
   */
  stage: IStage<BaseActor>;

  /**
   * 현재 진입 여부 상태
   */
  isAppear: boolean = false;

  /**
   * 해당 인스턴스를 관찰하는 스테이지를 연결
   * @param stage 스테이지
   */
  bind(stage: IStage<BaseActor>) {
    this.stage = stage;
  }

  /**
   * 진입, 이탈 등 이벤트 알림
   * @param type 이벤트 타입
   * @param [entry] 상태 변경시 관찰된 상태
   */
  dispatch(type: string, entry?: IntersectionObserverEntry) {
    this.events.next(
      new AppearEvent(type, {
        actor: this,
        entry
      })
    );
  }

  /**
   * 스테이지 진입
   * @param [entry] 스테이지 진입시 관찰 상태
   */
  appear(entry?: IntersectionObserverEntry): void {
    if (this.isAppear) return;
    this.isAppear = true;
    this.dispatch(AppearEvent.APPEAR, entry);
  }

  /**
   * 스테이지 이탈
   * @param [entry] 스테이지 이탈시 관찰 상태
   */
  disappear(entry?: IntersectionObserverEntry): void {
    if (!this.isAppear) return;
    this.isAppear = false;
    this.dispatch(AppearEvent.DISAPPEAR, entry);
  }

  /**
   * 파기
   */
  dispose() {
    if (this.stage) {
      this.stage.unobserve(this);
    }
  }
}
