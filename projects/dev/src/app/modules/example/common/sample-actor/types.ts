import { Actor } from "projects/packages/src/public-api";

export enum SampleActorType {
  BASE = "base",
  ONCE = "once",
  LAZY = "lazy",
}

export enum SampleActorEventType {
  ATTACH = "ATTACH",
  DETACH = "DETACH",
}

export interface SampleActorEvent {
  type: SampleActorEventType;
  actor: Actor;
}
