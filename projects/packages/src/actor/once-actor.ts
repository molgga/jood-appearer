import { BaseActor } from "./base-actor";
import { AppearEvent, IOnceActor } from "../common/types";

/**
 * Stage 에 등록될 Actor.
 * 스테이지 진입을 한번만 감지한 후 본인 스스로 관찰 해제하는 감지형.
 * (사용 예: 화면 진입시 한번만 애니메이션 한다, 이미지 로드를 한다)
 * @class OnceActor
 * @extends {BaseActor}
 */
export class OnceActor extends BaseActor implements IOnceActor {
  /**
   * 스테이지 진입. 진입시 자동 관찰 해제.
   * @override
   * @param [entry]
   */
  appear(entry?: IntersectionObserverEntry): void {
    if (this.isAppear) return;
    this.isAppear = true;
    this.dispatch(AppearEvent.APPEAR, entry);
    if (this.stage) {
      this.stage.unobserve(this);
    }
  }
}
