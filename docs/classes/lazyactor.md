[Doc](../README.md) › [Globals](../globals.md) › [LazyActor](lazyactor.md)

# Class: LazyActor

Stage 에 등록될 Actor.
스테이지에 진입을 한번만 감지하되, 진입 후 너무 빠르게 이탈시에는 감지 처리를 하지 않는 느린 감지형.
(사용 예: 촘촘한 상품 목록과 같이 빠르게 스크롤 하여 지나칠 수 있는 곳)

## Hierarchy

* [BaseActor](baseactor.md)

  ↳ **LazyActor**

## Implements

* [IActor](../interfaces/iactor.md)

## Index

### Constructors

* [constructor](lazyactor.md#constructor)

### Properties

* [appearDelay](lazyactor.md#private-appeardelay)
* [appearTimer](lazyactor.md#private-appeartimer)
* [checkoutDelay](lazyactor.md#private-checkoutdelay)
* [element](lazyactor.md#element)
* [events](lazyactor.md#events)
* [isAppear](lazyactor.md#isappear)
* [stage](lazyactor.md#stage)

### Methods

* [appear](lazyactor.md#appear)
* [bind](lazyactor.md#bind)
* [clearAppearTimer](lazyactor.md#private-clearappeartimer)
* [disappear](lazyactor.md#disappear)
* [dispatch](lazyactor.md#dispatch)
* [dispose](lazyactor.md#dispose)
* [doAppear](lazyactor.md#private-doappear)
* [setAppearDelay](lazyactor.md#setappeardelay)
* [setCheckoutDelay](lazyactor.md#setcheckoutdelay)

## Constructors

###  constructor

\+ **new LazyActor**(`element`: [ActorElement](../globals.md#actorelement)): *[LazyActor](lazyactor.md)*

*Inherited from [BaseActor](baseactor.md).[constructor](baseactor.md#constructor)*

*Defined in [projects/packages/src/actor/base-actor.ts:28](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/actor/base-actor.ts#L28)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`element` | [ActorElement](../globals.md#actorelement) | 옵저버에 등록되어야 하는 native element  |

**Returns:** *[LazyActor](lazyactor.md)*

## Properties

### `Private` appearDelay

• **appearDelay**: *number* = 150

*Defined in [projects/packages/src/actor/lazy-actor.ts:12](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/actor/lazy-actor.ts#L12)*

___

### `Private` appearTimer

• **appearTimer**: *any* = null

*Defined in [projects/packages/src/actor/lazy-actor.ts:10](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/actor/lazy-actor.ts#L10)*

___

### `Private` checkoutDelay

• **checkoutDelay**: *number* = 1000

*Defined in [projects/packages/src/actor/lazy-actor.ts:11](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/actor/lazy-actor.ts#L11)*

___

###  element

• **element**: *[ActorElement](../globals.md#actorelement)*

*Implementation of [IActor](../interfaces/iactor.md).[element](../interfaces/iactor.md#element)*

*Inherited from [BaseActor](baseactor.md).[element](baseactor.md#element)*

*Defined in [projects/packages/src/actor/base-actor.ts:12](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/actor/base-actor.ts#L12)*

옵저버에 등록될 native element

___

###  events

• **events**: *Subject‹[AppearEvent](appearevent.md)›* = new Subject<AppearEvent>()

*Implementation of [IActor](../interfaces/iactor.md).[events](../interfaces/iactor.md#events)*

*Inherited from [BaseActor](baseactor.md).[events](baseactor.md#events)*

*Defined in [projects/packages/src/actor/base-actor.ts:18](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/actor/base-actor.ts#L18)*

이벤트 Observable

**`see`** https://rxjs-dev.firebaseapp.com/guide/subject

___

###  isAppear

• **isAppear**: *boolean* = false

*Implementation of [IActor](../interfaces/iactor.md).[isAppear](../interfaces/iactor.md#isappear)*

*Inherited from [BaseActor](baseactor.md).[isAppear](baseactor.md#isappear)*

*Defined in [projects/packages/src/actor/base-actor.ts:28](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/actor/base-actor.ts#L28)*

현재 진입 여부 상태

___

###  stage

• **stage**: *[IStage](../interfaces/istage.md)‹[BaseActor](baseactor.md)›*

*Implementation of [IActor](../interfaces/iactor.md).[stage](../interfaces/iactor.md#stage)*

*Inherited from [BaseActor](baseactor.md).[stage](baseactor.md#stage)*

*Defined in [projects/packages/src/actor/base-actor.ts:23](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/actor/base-actor.ts#L23)*

해당 인스턴스가 등록된 스테이지

## Methods

###  appear

▸ **appear**(`entry`: IntersectionObserverEntry): *void*

*Implementation of [IActor](../interfaces/iactor.md)*

*Overrides [BaseActor](baseactor.md).[appear](baseactor.md#appear)*

*Defined in [projects/packages/src/actor/lazy-actor.ts:41](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/actor/lazy-actor.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`entry` | IntersectionObserverEntry |

**Returns:** *void*

___

###  bind

▸ **bind**(`stage`: [IStage](../interfaces/istage.md)‹[BaseActor](baseactor.md)›): *void*

*Implementation of [IActor](../interfaces/iactor.md)*

*Inherited from [BaseActor](baseactor.md).[bind](baseactor.md#bind)*

*Defined in [projects/packages/src/actor/base-actor.ts:41](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/actor/base-actor.ts#L41)*

해당 인스턴스를 관찰하는 스테이지를 연결

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`stage` | [IStage](../interfaces/istage.md)‹[BaseActor](baseactor.md)› | 스테이지  |

**Returns:** *void*

___

### `Private` clearAppearTimer

▸ **clearAppearTimer**(): *void*

*Defined in [projects/packages/src/actor/lazy-actor.ts:34](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/actor/lazy-actor.ts#L34)*

진입 대기 타이머 파기

**Returns:** *void*

___

###  disappear

▸ **disappear**(`entry`: IntersectionObserverEntry): *void*

*Implementation of [IActor](../interfaces/iactor.md)*

*Overrides [BaseActor](baseactor.md).[disappear](baseactor.md#disappear)*

*Defined in [projects/packages/src/actor/lazy-actor.ts:61](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/actor/lazy-actor.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`entry` | IntersectionObserverEntry |

**Returns:** *void*

___

###  dispatch

▸ **dispatch**(`type`: string, `entry?`: IntersectionObserverEntry): *void*

*Inherited from [BaseActor](baseactor.md).[dispatch](baseactor.md#dispatch)*

*Defined in [projects/packages/src/actor/base-actor.ts:50](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/actor/base-actor.ts#L50)*

진입, 이탈 등 이벤트 알림

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | string | 이벤트 타입 |
`entry?` | IntersectionObserverEntry | - |

**Returns:** *void*

___

###  dispose

▸ **dispose**(): *void*

*Implementation of [IActor](../interfaces/iactor.md)*

*Inherited from [BaseActor](baseactor.md).[dispose](baseactor.md#dispose)*

*Defined in [projects/packages/src/actor/base-actor.ts:82](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/actor/base-actor.ts#L82)*

파기

**Returns:** *void*

___

### `Private` doAppear

▸ **doAppear**(`entry`: IntersectionObserverEntry): *void*

*Defined in [projects/packages/src/actor/lazy-actor.ts:53](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/actor/lazy-actor.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`entry` | IntersectionObserverEntry |

**Returns:** *void*

___

###  setAppearDelay

▸ **setAppearDelay**(`delay`: number): *void*

*Defined in [projects/packages/src/actor/lazy-actor.ts:27](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/actor/lazy-actor.ts#L27)*

지정된 시간 사이에 진입 후 진출을 하는 경우 진입 알림을 하지 않는 대기 시간.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`delay` | number | 150 |

**Returns:** *void*

___

###  setCheckoutDelay

▸ **setCheckoutDelay**(`delay`: number): *void*

*Defined in [projects/packages/src/actor/lazy-actor.ts:19](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/actor/lazy-actor.ts#L19)*

느린 감지를 시작하기 전 대기 시간.
지정된 시간 전에 감지된 진입은 느린 감지를 하지 않고 바로 진입을 알림.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`delay` | number | 1000 |

**Returns:** *void*
