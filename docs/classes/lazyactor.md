[Doc](../README.md) › [Globals](../globals.md) › [LazyActor](lazyactor.md)

# Class: LazyActor

Stage 에 등록될 Actor.
스테이지에 진입을 한번만 감지하되, 진입 후 너무 빠르게 이탈시에는 감지 처리를 하지 않는 느린 감지형.
(사용 예: 촘촘한 상품 목록과 같이 빠르게 스크롤 하여 지나칠 수 있는 곳)

## Hierarchy

* [BaseActor](baseactor.md)

  ↳ **LazyActor**

## Implements

* [IAppearActor](../interfaces/iappearactor.md)

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
* [appearCheckout](lazyactor.md#private-appearcheckout)
* [bind](lazyactor.md#bind)
* [clearAppearTimer](lazyactor.md#private-clearappeartimer)
* [destroy](lazyactor.md#destroy)
* [disappear](lazyactor.md#disappear)
* [dispatch](lazyactor.md#dispatch)
* [setAppearDelay](lazyactor.md#setappeardelay)
* [setCheckoutDelay](lazyactor.md#setcheckoutdelay)

## Constructors

###  constructor

\+ **new LazyActor**(`element`: [AppearerActorElement](../globals.md#appeareractorelement)): *[LazyActor](lazyactor.md)*

*Inherited from [BaseActor](baseactor.md).[constructor](baseactor.md#constructor)*

Defined in projects/packages/src/actor/base-actor.ts:33

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`element` | [AppearerActorElement](../globals.md#appeareractorelement) | 옵저버에 등록되어야 하는 native element  |

**Returns:** *[LazyActor](lazyactor.md)*

## Properties

### `Private` appearDelay

• **appearDelay**: *number* = 150

Defined in projects/packages/src/actor/lazy-actor.ts:12

___

### `Private` appearTimer

• **appearTimer**: *any* = null

Defined in projects/packages/src/actor/lazy-actor.ts:10

___

### `Private` checkoutDelay

• **checkoutDelay**: *number* = 1000

Defined in projects/packages/src/actor/lazy-actor.ts:11

___

###  element

• **element**: *[AppearerActorElement](../globals.md#appeareractorelement)*

*Implementation of [IAppearActor](../interfaces/iappearactor.md).[element](../interfaces/iappearactor.md#element)*

*Inherited from [BaseActor](baseactor.md).[element](baseactor.md#element)*

Defined in projects/packages/src/actor/base-actor.ts:17

옵저버에 등록될 native element

___

###  events

• **events**: *Subject‹[AppearEvent](appearevent.md)›* = new Subject<AppearEvent>()

*Implementation of [IAppearActor](../interfaces/iappearactor.md).[events](../interfaces/iappearactor.md#events)*

*Inherited from [BaseActor](baseactor.md).[events](baseactor.md#events)*

Defined in projects/packages/src/actor/base-actor.ts:23

이벤트 Observable

**`see`** https://rxjs-dev.firebaseapp.com/guide/subject

___

###  isAppear

• **isAppear**: *boolean* = false

*Implementation of [IAppearActor](../interfaces/iappearactor.md).[isAppear](../interfaces/iappearactor.md#isappear)*

*Inherited from [BaseActor](baseactor.md).[isAppear](baseactor.md#isappear)*

Defined in projects/packages/src/actor/base-actor.ts:33

현재 진입 여부 상태

___

###  stage

• **stage**: *[IAppearStage](../interfaces/iappearstage.md)‹[BaseActor](baseactor.md)›*

*Implementation of [IAppearActor](../interfaces/iappearactor.md).[stage](../interfaces/iappearactor.md#stage)*

*Inherited from [BaseActor](baseactor.md).[stage](baseactor.md#stage)*

Defined in projects/packages/src/actor/base-actor.ts:28

해당 인스턴스가 등록된 스테이지

## Methods

###  appear

▸ **appear**(`entry`: IntersectionObserverEntry): *void*

*Implementation of [IAppearActor](../interfaces/iappearactor.md)*

*Overrides [BaseActor](baseactor.md).[appear](baseactor.md#appear)*

Defined in projects/packages/src/actor/lazy-actor.ts:41

**Parameters:**

Name | Type |
------ | ------ |
`entry` | IntersectionObserverEntry |

**Returns:** *void*

___

### `Private` appearCheckout

▸ **appearCheckout**(`entry`: IntersectionObserverEntry): *void*

Defined in projects/packages/src/actor/lazy-actor.ts:53

**Parameters:**

Name | Type |
------ | ------ |
`entry` | IntersectionObserverEntry |

**Returns:** *void*

___

###  bind

▸ **bind**(`stage`: [IAppearStage](../interfaces/iappearstage.md)‹[BaseActor](baseactor.md)›): *void*

*Implementation of [IAppearActor](../interfaces/iappearactor.md)*

*Inherited from [BaseActor](baseactor.md).[bind](baseactor.md#bind)*

Defined in projects/packages/src/actor/base-actor.ts:46

해당 인스턴스를 관찰하는 스테이지를 연결

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`stage` | [IAppearStage](../interfaces/iappearstage.md)‹[BaseActor](baseactor.md)› | 스테이지  |

**Returns:** *void*

___

### `Private` clearAppearTimer

▸ **clearAppearTimer**(): *void*

Defined in projects/packages/src/actor/lazy-actor.ts:34

진입 대기 타이머 파기

**Returns:** *void*

___

###  destroy

▸ **destroy**(): *void*

*Implementation of [IAppearActor](../interfaces/iappearactor.md)*

*Inherited from [BaseActor](baseactor.md).[destroy](baseactor.md#destroy)*

Defined in projects/packages/src/actor/base-actor.ts:84

**Returns:** *void*

___

###  disappear

▸ **disappear**(`entry`: IntersectionObserverEntry): *void*

*Implementation of [IAppearActor](../interfaces/iappearactor.md)*

*Overrides [BaseActor](baseactor.md).[disappear](baseactor.md#disappear)*

Defined in projects/packages/src/actor/lazy-actor.ts:61

**Parameters:**

Name | Type |
------ | ------ |
`entry` | IntersectionObserverEntry |

**Returns:** *void*

___

###  dispatch

▸ **dispatch**(`type`: string, `entry?`: IntersectionObserverEntry): *void*

*Inherited from [BaseActor](baseactor.md).[dispatch](baseactor.md#dispatch)*

Defined in projects/packages/src/actor/base-actor.ts:55

진입, 이탈 등 이벤트 알림

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | string | 이벤트 타입 |
`entry?` | IntersectionObserverEntry | - |

**Returns:** *void*

___

###  setAppearDelay

▸ **setAppearDelay**(`delay`: number): *void*

Defined in projects/packages/src/actor/lazy-actor.ts:27

지정된 시간 사이에 진입 후 진출을 하는 경우 진입 알림을 하지 않는 대기 시간.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`delay` | number | 150 |

**Returns:** *void*

___

###  setCheckoutDelay

▸ **setCheckoutDelay**(`delay`: number): *void*

Defined in projects/packages/src/actor/lazy-actor.ts:19

느린 감지를 시작하기 전 대기 시간.
지정된 시간 전에 감지된 진입은 느린 감지를 하지 않고 바로 진입을 알림.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`delay` | number | 1000 |

**Returns:** *void*
