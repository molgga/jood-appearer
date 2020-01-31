[Doc](../README.md) › [Globals](../globals.md) › [BaseActor](baseactor.md)

# Class: BaseActor

Stage 에 등록될 Actor.
스테이지에 진입, 이탈 시 계속 알려주는 기본형.

## Hierarchy

- **BaseActor**

  ↳ [LazyActor](lazyactor.md)

  ↳ [OnceActor](onceactor.md)

## Implements

- [IActor](../interfaces/iappearactor.md)

## Index

### Constructors

- [constructor](baseactor.md#constructor)

### Properties

- [element](baseactor.md#element)
- [events](baseactor.md#events)
- [isAppear](baseactor.md#isappear)
- [stage](baseactor.md#stage)

### Methods

- [appear](baseactor.md#appear)
- [bind](baseactor.md#bind)
- [dispose](baseactor.md#dispose)
- [disappear](baseactor.md#disappear)
- [dispatch](baseactor.md#dispatch)

## Constructors

### constructor

\+ **new BaseActor**(`element`: [ActorElement](../globals.md#appeareractorelement)): _[BaseActor](baseactor.md)_

_Defined in [projects/packages/src/actor/base-actor.ts:33](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/base-actor.ts#L33)_

**Parameters:**

| Name      | Type                                               | Description                             |
| --------- | -------------------------------------------------- | --------------------------------------- |
| `element` | [ActorElement](../globals.md#appeareractorelement) | 옵저버에 등록되어야 하는 native element |

**Returns:** _[BaseActor](baseactor.md)_

## Properties

### element

• **element**: _[ActorElement](../globals.md#appeareractorelement)_

_Implementation of [IActor](../interfaces/iappearactor.md).[element](../interfaces/iappearactor.md#element)_

_Defined in [projects/packages/src/actor/base-actor.ts:17](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/base-actor.ts#L17)_

옵저버에 등록될 native element

---

### events

• **events**: _Subject‹[AppearEvent](appearevent.md)›_ = new Subject<AppearEvent>()

_Implementation of [IActor](../interfaces/iappearactor.md).[events](../interfaces/iappearactor.md#events)_

_Defined in [projects/packages/src/actor/base-actor.ts:23](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/base-actor.ts#L23)_

이벤트 Observable

**`see`** https://rxjs-dev.firebaseapp.com/guide/subject

---

### isAppear

• **isAppear**: _boolean_ = false

_Implementation of [IActor](../interfaces/iappearactor.md).[isAppear](../interfaces/iappearactor.md#isappear)_

_Defined in [projects/packages/src/actor/base-actor.ts:33](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/base-actor.ts#L33)_

현재 진입 여부 상태

---

### stage

• **stage**: _[IStage](../interfaces/iappearstage.md)‹[BaseActor](baseactor.md)›_

_Implementation of [IActor](../interfaces/iappearactor.md).[stage](../interfaces/iappearactor.md#stage)_

_Defined in [projects/packages/src/actor/base-actor.ts:28](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/base-actor.ts#L28)_

해당 인스턴스가 등록된 스테이지

## Methods

### appear

▸ **appear**(`entry?`: IntersectionObserverEntry): _void_

_Implementation of [IActor](../interfaces/iappearactor.md)_

_Defined in [projects/packages/src/actor/base-actor.ts:68](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/base-actor.ts#L68)_

스테이지 진입

**Parameters:**

| Name     | Type                      |
| -------- | ------------------------- |
| `entry?` | IntersectionObserverEntry |

**Returns:** _void_

---

### bind

▸ **bind**(`stage`: [IStage](../interfaces/iappearstage.md)‹[BaseActor](baseactor.md)›): _void_

_Implementation of [IActor](../interfaces/iappearactor.md)_

_Defined in [projects/packages/src/actor/base-actor.ts:46](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/base-actor.ts#L46)_

해당 인스턴스를 관찰하는 스테이지를 연결

**Parameters:**

| Name    | Type                                                               | Description |
| ------- | ------------------------------------------------------------------ | ----------- |
| `stage` | [IStage](../interfaces/iappearstage.md)‹[BaseActor](baseactor.md)› | 스테이지    |

**Returns:** _void_

---

### dispose

▸ **dispose**(): _void_

_Implementation of [IActor](../interfaces/iappearactor.md)_

_Defined in [projects/packages/src/actor/base-actor.ts:84](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/base-actor.ts#L84)_

**Returns:** _void_

---

### disappear

▸ **disappear**(`entry?`: IntersectionObserverEntry): _void_

_Implementation of [IActor](../interfaces/iappearactor.md)_

_Defined in [projects/packages/src/actor/base-actor.ts:78](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/base-actor.ts#L78)_

스테이지 이탈

**Parameters:**

| Name     | Type                      |
| -------- | ------------------------- |
| `entry?` | IntersectionObserverEntry |

**Returns:** _void_

---

### dispatch

▸ **dispatch**(`type`: string, `entry?`: IntersectionObserverEntry): _void_

_Defined in [projects/packages/src/actor/base-actor.ts:55](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/base-actor.ts#L55)_

진입, 이탈 등 이벤트 알림

**Parameters:**

| Name     | Type                      | Description |
| -------- | ------------------------- | ----------- |
| `type`   | string                    | 이벤트 타입 |
| `entry?` | IntersectionObserverEntry | -           |

**Returns:** _void_
