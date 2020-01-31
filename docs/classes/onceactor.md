[Doc](../README.md) › [Globals](../globals.md) › [OnceActor](onceactor.md)

# Class: OnceActor

Stage 에 등록될 Actor.
스테이지 진입을 한번만 감지한 후 본인 스스로 관찰 해제하는 감지형.
(사용 예: 화면 진입시 한번만 애니메이션 한다, 이미지 로드를 한다)

## Hierarchy

- [BaseActor](baseactor.md)

  ↳ **OnceActor**

## Implements

- [IActor](../interfaces/iappearactor.md)

## Index

### Constructors

- [constructor](onceactor.md#constructor)

### Properties

- [element](onceactor.md#element)
- [events](onceactor.md#events)
- [isAppear](onceactor.md#isappear)
- [stage](onceactor.md#stage)

### Methods

- [appear](onceactor.md#appear)
- [bind](onceactor.md#bind)
- [dispose](onceactor.md#dispose)
- [disappear](onceactor.md#disappear)
- [dispatch](onceactor.md#dispatch)

## Constructors

### constructor

\+ **new OnceActor**(`element`: [ActorElement](../globals.md#appeareractorelement)): _[OnceActor](onceactor.md)_

_Inherited from [BaseActor](baseactor.md).[constructor](baseactor.md#constructor)_

_Defined in [projects/packages/src/actor/base-actor.ts:33](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/base-actor.ts#L33)_

**Parameters:**

| Name      | Type                                               | Description                             |
| --------- | -------------------------------------------------- | --------------------------------------- |
| `element` | [ActorElement](../globals.md#appeareractorelement) | 옵저버에 등록되어야 하는 native element |

**Returns:** _[OnceActor](onceactor.md)_

## Properties

### element

• **element**: _[ActorElement](../globals.md#appeareractorelement)_

_Implementation of [IActor](../interfaces/iappearactor.md).[element](../interfaces/iappearactor.md#element)_

_Inherited from [BaseActor](baseactor.md).[element](baseactor.md#element)_

_Defined in [projects/packages/src/actor/base-actor.ts:17](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/base-actor.ts#L17)_

옵저버에 등록될 native element

---

### events

• **events**: _Subject‹[AppearEvent](appearevent.md)›_ = new Subject<AppearEvent>()

_Implementation of [IActor](../interfaces/iappearactor.md).[events](../interfaces/iappearactor.md#events)_

_Inherited from [BaseActor](baseactor.md).[events](baseactor.md#events)_

_Defined in [projects/packages/src/actor/base-actor.ts:23](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/base-actor.ts#L23)_

이벤트 Observable

**`see`** https://rxjs-dev.firebaseapp.com/guide/subject

---

### isAppear

• **isAppear**: _boolean_ = false

_Implementation of [IActor](../interfaces/iappearactor.md).[isAppear](../interfaces/iappearactor.md#isappear)_

_Inherited from [BaseActor](baseactor.md).[isAppear](baseactor.md#isappear)_

_Defined in [projects/packages/src/actor/base-actor.ts:33](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/base-actor.ts#L33)_

현재 진입 여부 상태

---

### stage

• **stage**: _[IStage](../interfaces/iappearstage.md)‹[BaseActor](baseactor.md)›_

_Implementation of [IActor](../interfaces/iappearactor.md).[stage](../interfaces/iappearactor.md#stage)_

_Inherited from [BaseActor](baseactor.md).[stage](baseactor.md#stage)_

_Defined in [projects/packages/src/actor/base-actor.ts:28](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/base-actor.ts#L28)_

해당 인스턴스가 등록된 스테이지

## Methods

### appear

▸ **appear**(`entry?`: IntersectionObserverEntry): _void_

_Implementation of [IActor](../interfaces/iappearactor.md)_

_Overrides [BaseActor](baseactor.md).[appear](baseactor.md#appear)_

_Defined in [projects/packages/src/actor/once-actor.ts:10](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/once-actor.ts#L10)_

**Parameters:**

| Name     | Type                      |
| -------- | ------------------------- |
| `entry?` | IntersectionObserverEntry |

**Returns:** _void_

---

### bind

▸ **bind**(`stage`: [IStage](../interfaces/iappearstage.md)‹[BaseActor](baseactor.md)›): _void_

_Implementation of [IActor](../interfaces/iappearactor.md)_

_Inherited from [BaseActor](baseactor.md).[bind](baseactor.md#bind)_

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

_Inherited from [BaseActor](baseactor.md).[dispose](baseactor.md#dispose)_

_Defined in [projects/packages/src/actor/base-actor.ts:84](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/base-actor.ts#L84)_

**Returns:** _void_

---

### disappear

▸ **disappear**(`entry?`: IntersectionObserverEntry): _void_

_Implementation of [IActor](../interfaces/iappearactor.md)_

_Inherited from [BaseActor](baseactor.md).[disappear](baseactor.md#disappear)_

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

_Inherited from [BaseActor](baseactor.md).[dispatch](baseactor.md#dispatch)_

_Defined in [projects/packages/src/actor/base-actor.ts:55](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/base-actor.ts#L55)_

진입, 이탈 등 이벤트 알림

**Parameters:**

| Name     | Type                      | Description |
| -------- | ------------------------- | ----------- |
| `type`   | string                    | 이벤트 타입 |
| `entry?` | IntersectionObserverEntry | -           |

**Returns:** _void_
