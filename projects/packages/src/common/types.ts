import { Subject } from "rxjs";

/**
 * Actor type 구분
 * @export
 * @enum {number}
 */
export enum AppearType {
  BASE = "base",
  ONCE = "once",
  LAZY = "lazy"
}

/**
 * 관찰자
 * @interface IStage
 * @template T
 * @property init {method} 초기화
 * @property observe {method} 관찰 대상 등록
 * @property unobserve {method} 관찰 대상 해제
 * @property dispose {method} 파기
 */
export interface IStage<T> {
  /**
   * @param [option] 초기 옵션
   */
  init(option?: StageOption): void;

  /**
   * @param actor 관찰대상
   */
  observe(actor: T): void;

  /**
   * @param actor 관찰해제 대상
   */
  unobserve(actor: T): void;

  /**
   * 파기
   */
  dispose(): void;
}

/**
 * 관찰대상
 * @interface IActor
 * @property element {ActorElement} 관찰 대상이 참조해야하는 DOM
 * @property stage {IStage<any>} 관찰 대상이 속하게 되는 스테이지(관찰자)
 * @property events {Subject<AppearEvent>} 관찰 이벤트 Observable
 * @property isAppear {boolean} 현재 관찰대상의 진입, 이탈 여부
 * @property bind {method} 관찰 대상이 속하게 되는 스테이지(관찰자) 등록.
 * @property appear {method} 스테이지 진입.
 * @property disappear {method} 스테이지 이탈.
 * @property dispose {method} 파기
 */
export interface IActor {
  element: ActorElement;
  stage: IStage<any>;
  events: Subject<AppearEvent>;
  isAppear: boolean;

  /**
   * @param stage 관찰 대상으로 등록될 때 해당 인스턴스를 관찰하는 스테이지
   */
  bind(stage: IStage<IActor>): void;

  /**
   * @param [entry] 진입 당시 관찰 정보
   */
  appear(entry?: IntersectionObserverEntry): void;

  /**
   * @param [entry] 이탈 당시 관찰 정보
   */
  disappear(entry?: IntersectionObserverEntry): void;

  dispose(): void;
}

/**
 * 관찰대상 - 한번만 형
 * @export
 * @interface IOnceActor
 */
export interface IOnceActor {}

/**
 * 관찰대상 - 한번만 느긋하게 형
 * @export
 * @interface ILazyActor
 * @property setCheckoutDelay {method} 느린 감지를 시작하기 전 대기 시간.
 * @property setAppearDelay {method} 지정된 시간 사이에 진입 후 진출을 하는 경우 진입 알림을 하지 않는 대기 시간.
 */
export interface ILazyActor {
  setCheckoutDelay?(delay: number): void;
  setAppearDelay?(delay: number): void;
}

export interface Actor extends IActor, IOnceActor, ILazyActor {}

/**
 * 관찰자, 관찰대상에서 참조되어야 하는 native element 타입
 * @typedef {HTMLElement | Element} ActorElement
 */
export type ActorElement = HTMLElement | Element;

/**
 * 스테이지 초기 옵션.
 * @interface StageOption
 * @property root {Element} mdn 참고
 * @property rootMargin {string} mdn 참고
 * @property threshold {string | array} mdn 참고
 * @extends {IntersectionObserverInit}
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
 */
export interface StageOption extends IntersectionObserverInit {}

/**
 * 관찰대상의 이벤트
 * @implements {AppearEventData<T>}
 * @template T
 */
export class AppearEvent<T = IActor> implements AppearEventData<T> {
  /**
   * @param type 이벤트 타입
   * @param option 이벤트 데이터
   */
  constructor(type: string, option: AppearEventData<T>) {
    const { actor, entry } = option;
    this.type = type;
    this.actor = actor;
    this.entry = entry;
  }

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
}

/**
 * Appear 이벤트의 데이터
 * @interface AppearEventData
 * @property actor {T} 참조되는 관찰대상
 * @property entry {IntersectionObserverEntry} 인터섹션 옵저버의 진입, 이탈 당시 관찰 상태
 * @template T
 */
export interface AppearEventData<T> {
  actor: T;
  entry: IntersectionObserverEntry;
}
