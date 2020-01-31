import { BaseActor } from "./base-actor";
import { AppearEvent } from "../common/types";

/**
 * Stage 에 등록될 Actor.
 * 스테이지 진입을 한번만 감지한 후 본인 스스로 관찰 해제하는 감지형.
 * (사용 예: 화면 진입시 한번만 애니메이션 한다, 이미지 로드를 한다)
 */
export class OnceActor extends BaseActor {
  appear(entry?: IntersectionObserverEntry) {
    if (this.isAppear) return;
    this.isAppear = true;
    this.dispatch(AppearEvent.APPEAR, entry);
    if (this.stage) {
      this.stage.unobserve(this);
    }
  }
}
