import { Subject } from "rxjs";

/**
 * 스테이지 초기 옵션
 */
export interface AppearerOption extends IntersectionObserverInit {}

/**
 * 관찰자
 * @template T
 */
export interface IAppearStage<T> {
  /**
   * 초기화
   * @param option
   */
  init(option: AppearerOption): void;

  /**
   * 관찰 대상 등록
   * @param actor
   */
  observe(actor: T): void;

  /**
   * 관찰 대상 해제
   * @param actor
   */
  unobserve(actor: T): void;

  /**
   * 파기
   */
  destroy(): void;
}

/**
 * 관찰대상
 */
export interface IAppearActor {
  /**
   * 관찰 대상이 참조해야하는 DOM
   */
  element: AppearerActorElement;

  /**
   * 관찰 대상이 속하게 되는 스테이지(관찰자)
   */
  stage: IAppearStage<any>;

  /**
   * 관찰 이벤트 Observable
   */
  events: Subject<AppearEvent>;

  /**
   * 현재 관찰대상의 진입, 이탈 여부
   */
  isAppear: boolean;

  /**
   * 관찰 대상이 속하게 되는 스테이지(관찰자) 지정.
   * 스테이지에서 직접 등록됨.
   * @param stage
   */
  bind(stage: IAppearStage<IAppearActor>): void;

  /**
   * 스테이지 진입시 알림.
   * 스테이지에서 호출됨.
   * @param [entry]
   */
  appear(entry?: IntersectionObserverEntry): void;

  /**
   * 스테이지 이탈시 알림.
   * 스테이지에서 호출됨.
   * @param [entry]
   */
  disappear(entry?: IntersectionObserverEntry): void;

  /**
   * 파기
   */
  destroy(): void;
}

/**
 * 관찰자, 관찰대상에서 참조되어야 하는 native element 타입
 */
export type AppearerActorElement = HTMLElement | Element;

/**
 * 관찰대상의 이벤트
 * @template D
 */
export class AppearEvent<T = IAppearActor> implements AppearEventData<T> {
  /**
   * 이벤트 타입 - 진입
   */
  static readonly APPEAR: string = "APPEAR";

  /**
   * 이벤트 타입 - 이탈
   */
  static readonly DISAPPEAR: string = "DISAPPEAR";

  /**
   * 이벤트 타입
   */
  type: string;

  /**
   * 참조되는 관찰대상
   */
  actor: T;

  /**
   * 인터섹션 옵저버의 진입, 이탈 당시 관찰 상태
   */
  entry: IntersectionObserverEntry;

  constructor(type: string, option: AppearEventData<T>) {
    const { actor, entry } = option;
    this.type = type;
    this.actor = actor;
    this.entry = entry;
  }
}

export interface AppearEventData<T> {
  /**
   * 참조되는 관찰대상
   */
  actor: T;

  /**
   * 인터섹션 옵저버의 진입, 이탈 당시 관찰 상태
   */
  entry: IntersectionObserverEntry;
}
