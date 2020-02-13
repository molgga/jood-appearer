import { BaseActor } from "./base-actor";
import { AppearEvent, ILazyActor } from "../common/types";

/**
 * Stage 에 등록될 Actor.
 * 스테이지에 진입을 한번만 감지하되, 진입 후 너무 빠르게 이탈시에는 감지 처리를 하지 않는 느린 감지형.
 * (사용 예: 촘촘한 상품 목록과 같이 빠르게 스크롤 하여 지나칠 수 있는 곳)
 * @class LazyActor
 * @extends {BaseActor}
 */
export class LazyActor extends BaseActor implements ILazyActor {
  private appearTimer: any = null;
  private checkoutDelay: number = 1000;
  private appearDelay: number = 150;

  /**
   * 느린 감지를 시작하기 전 대기 시간.
   * 지정된 시간 전에 감지된 진입은 느린 감지를 하지 않고 바로 진입을 알림.
   * @param [delay=1000]
   */
  setCheckoutDelay(delay: number = 1000) {
    this.checkoutDelay = delay;
  }

  /**
   * 지정된 시간 사이에 진입 후 진출을 하는 경우 진입 알림을 하지 않는 대기 시간.
   * @param [delay=150]
   */
  setAppearDelay(delay: number = 150) {
    this.appearDelay = delay;
  }

  /**
   * 진입 대기 타이머 파기
   */
  private clearAppearTimer() {
    if (this.appearTimer) {
      clearTimeout(this.appearTimer);
      this.appearTimer = null;
    }
  }

  /**
   * 스테이지 진입. 진입 후 일정시간 (appearDelay) 전에 이탈하는 경우는 진입으로 취급하지 않음.
   * @override
   * @param [entry]
   */
  appear(entry: IntersectionObserverEntry) {
    this.clearAppearTimer();
    if (this.isAppear) return;
    if (this.checkoutDelay <= entry.time) {
      this.appearTimer = setTimeout(() => {
        this.doAppear(entry);
      }, this.appearDelay);
    } else {
      this.doAppear(entry);
    }
  }

  /**
   * 실제 진입 처리.
   * @private
   * @param entry
   */
  private doAppear(entry: IntersectionObserverEntry) {
    this.isAppear = true;
    this.dispatch(AppearEvent.APPEAR, entry);
    if (this.stage) {
      this.stage.unobserve(this);
    }
  }

  /**
   * 스테이지 이탈.
   * @override
   * @param entry
   */
  disappear(entry: IntersectionObserverEntry) {
    this.clearAppearTimer();
    if (!this.isAppear) return;
    this.isAppear = false;
    this.dispatch(AppearEvent.DISAPPEAR, entry);
  }
}
