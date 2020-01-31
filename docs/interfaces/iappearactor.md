[Doc](../README.md) › [Globals](../globals.md) › [IActor](iappearactor.md)

# Interface: IActor

관찰대상

## Hierarchy

- **IActor**

## Implemented by

- [BaseActor](../classes/baseactor.md)
- [LazyActor](../classes/lazyactor.md)
- [OnceActor](../classes/onceactor.md)

## Index

### Properties

- [element](iappearactor.md#element)
- [events](iappearactor.md#events)
- [isAppear](iappearactor.md#isappear)
- [stage](iappearactor.md#stage)

### Methods

- [appear](iappearactor.md#appear)
- [bind](iappearactor.md#bind)
- [dispose](iappearactor.md#dispose)
- [disappear](iappearactor.md#disappear)

## Properties

### element

• **element**: _[ActorElement](../globals.md#appeareractorelement)_

_Defined in [projects/packages/src/core/types.ts:44](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/core/types.ts#L44)_

관찰 대상이 참조해야하는 DOM

---

### events

• **events**: _Subject‹[AppearEvent](../classes/appearevent.md)›_

_Defined in [projects/packages/src/core/types.ts:54](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/core/types.ts#L54)_

관찰 이벤트 Observable

---

### isAppear

• **isAppear**: _boolean_

_Defined in [projects/packages/src/core/types.ts:59](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/core/types.ts#L59)_

현재 관찰대상의 진입, 이탈 여부

---

### stage

• **stage**: _[IStage](iappearstage.md)‹any›_

_Defined in [projects/packages/src/core/types.ts:49](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/core/types.ts#L49)_

관찰 대상이 속하게 되는 스테이지(관찰자)

## Methods

### appear

▸ **appear**(`entry?`: IntersectionObserverEntry): _void_

_Defined in [projects/packages/src/core/types.ts:73](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/core/types.ts#L73)_

스테이지 진입시 알림.
스테이지에서 호출됨.

**Parameters:**

| Name     | Type                      |
| -------- | ------------------------- |
| `entry?` | IntersectionObserverEntry |

**Returns:** _void_

---

### bind

▸ **bind**(`stage`: [IStage](iappearstage.md)‹[IActor](iappearactor.md)›): _void_

_Defined in [projects/packages/src/core/types.ts:66](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/core/types.ts#L66)_

관찰 대상이 속하게 되는 스테이지(관찰자) 지정.
스테이지에서 직접 등록됨.

**Parameters:**

| Name    | Type                                                 | Description |
| ------- | ---------------------------------------------------- | ----------- |
| `stage` | [IStage](iappearstage.md)‹[IActor](iappearactor.md)› |             |

**Returns:** _void_

---

### dispose

▸ **dispose**(): _void_

_Defined in [projects/packages/src/core/types.ts:85](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/core/types.ts#L85)_

파기

**Returns:** _void_

---

### disappear

▸ **disappear**(`entry?`: IntersectionObserverEntry): _void_

_Defined in [projects/packages/src/core/types.ts:80](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/core/types.ts#L80)_

스테이지 이탈시 알림.
스테이지에서 호출됨.

**Parameters:**

| Name     | Type                      |
| -------- | ------------------------- |
| `entry?` | IntersectionObserverEntry |

**Returns:** _void_
