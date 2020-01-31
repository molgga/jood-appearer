[Doc](../README.md) › [Globals](../globals.md) › [LazyActor](lazyactor.md)

# Class: LazyActor

Stage 에 등록될 Actor.
스테이지에 진입을 한번만 감지하되, 진입 후 너무 빠르게 이탈시에는 감지 처리를 하지 않는 느린 감지형.
(사용 예: 촘촘한 상품 목록과 같이 빠르게 스크롤 하여 지나칠 수 있는 곳)

## Hierarchy

- [BaseActor](baseactor.md)

  ↳ **LazyActor**

## Implements

- [IActor](../interfaces/iappearactor.md)

## Index

### Constructors

- [constructor](lazyactor.md#constructor)

### Properties

- [appearDelay](lazyactor.md#private-appeardelay)
- [appearTimer](lazyactor.md#private-appeartimer)
- [checkoutDelay](lazyactor.md#private-checkoutdelay)
- [element](lazyactor.md#element)
- [events](lazyactor.md#events)
- [isAppear](lazyactor.md#isappear)
- [stage](lazyactor.md#stage)

### Methods

- [appear](lazyactor.md#appear)
- [appearCheckout](lazyactor.md#private-appearcheckout)
- [bind](lazyactor.md#bind)
- [clearAppearTimer](lazyactor.md#private-clearappeartimer)
- [dispose](lazyactor.md#dispose)
- [disappear](lazyactor.md#disappear)
- [dispatch](lazyactor.md#dispatch)
- [setAppearDelay](lazyactor.md#setappeardelay)
- [setCheckoutDelay](lazyactor.md#setcheckoutdelay)

## Constructors

### constructor

\+ **new LazyActor**(`element`: [ActorElement](../globals.md#appeareractorelement)): _[LazyActor](lazyactor.md)_

_Inherited from [BaseActor](baseactor.md).[constructor](baseactor.md#constructor)_

_Defined in [projects/packages/src/actor/base-actor.ts:33](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/base-actor.ts#L33)_

**Parameters:**

| Name      | Type                                               | Description                             |
| --------- | -------------------------------------------------- | --------------------------------------- |
| `element` | [ActorElement](../globals.md#appeareractorelement) | 옵저버에 등록되어야 하는 native element |

**Returns:** _[LazyActor](lazyactor.md)_

## Properties

### `Private` appearDelay

• **appearDelay**: _number_ = 150

_Defined in [projects/packages/src/actor/lazy-actor.ts:12](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/lazy-actor.ts#L12)_

---

### `Private` appearTimer

• **appearTimer**: _any_ = null

_Defined in [projects/packages/src/actor/lazy-actor.ts:10](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/lazy-actor.ts#L10)_

---

### `Private` checkoutDelay

• **checkoutDelay**: _number_ = 1000

_Defined in [projects/packages/src/actor/lazy-actor.ts:11](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/lazy-actor.ts#L11)_

---

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

▸ **appear**(`entry`: IntersectionObserverEntry): _void_

_Implementation of [IActor](../interfaces/iappearactor.md)_

_Overrides [BaseActor](baseactor.md).[appear](baseactor.md#appear)_

_Defined in [projects/packages/src/actor/lazy-actor.ts:41](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/lazy-actor.ts#L41)_

**Parameters:**

| Name    | Type                      |
| ------- | ------------------------- |
| `entry` | IntersectionObserverEntry |

**Returns:** _void_

---

### `Private` appearCheckout

▸ **appearCheckout**(`entry`: IntersectionObserverEntry): _void_

_Defined in [projects/packages/src/actor/lazy-actor.ts:53](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/lazy-actor.ts#L53)_

**Parameters:**

| Name    | Type                      |
| ------- | ------------------------- |
| `entry` | IntersectionObserverEntry |

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

### `Private` clearAppearTimer

▸ **clearAppearTimer**(): _void_

_Defined in [projects/packages/src/actor/lazy-actor.ts:34](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/lazy-actor.ts#L34)_

진입 대기 타이머 파기

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

▸ **disappear**(`entry`: IntersectionObserverEntry): _void_

_Implementation of [IActor](../interfaces/iappearactor.md)_

_Overrides [BaseActor](baseactor.md).[disappear](baseactor.md#disappear)_

_Defined in [projects/packages/src/actor/lazy-actor.ts:61](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/lazy-actor.ts#L61)_

**Parameters:**

| Name    | Type                      |
| ------- | ------------------------- |
| `entry` | IntersectionObserverEntry |

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

---

### setAppearDelay

▸ **setAppearDelay**(`delay`: number): _void_

_Defined in [projects/packages/src/actor/lazy-actor.ts:27](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/lazy-actor.ts#L27)_

지정된 시간 사이에 진입 후 진출을 하는 경우 진입 알림을 하지 않는 대기 시간.

**Parameters:**

| Name    | Type   | Default |
| ------- | ------ | ------- |
| `delay` | number | 150     |

**Returns:** _void_

---

### setCheckoutDelay

▸ **setCheckoutDelay**(`delay`: number): _void_

_Defined in [projects/packages/src/actor/lazy-actor.ts:19](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/lazy-actor.ts#L19)_

느린 감지를 시작하기 전 대기 시간.
지정된 시간 전에 감지된 진입은 느린 감지를 하지 않고 바로 진입을 알림.

**Parameters:**

| Name    | Type   | Default |
| ------- | ------ | ------- |
| `delay` | number | 1000    |

**Returns:** _void_
