[Doc](../README.md) › [Globals](../globals.md) › [BaseActor](baseactor.md)

# Class: BaseActor

Stage 에 등록될 Actor.
스테이지에 진입, 이탈 시 계속 알려주는 기본형.

## Hierarchy

* **BaseActor**

  ↳ [LazyActor](lazyactor.md)

  ↳ [OnceActor](onceactor.md)

## Implements

* [IActor](../interfaces/iactor.md)

## Index

### Constructors

* [constructor](baseactor.md#constructor)

### Properties

* [element](baseactor.md#element)
* [events](baseactor.md#events)
* [isAppear](baseactor.md#isappear)
* [stage](baseactor.md#stage)

### Methods

* [appear](baseactor.md#appear)
* [bind](baseactor.md#bind)
* [disappear](baseactor.md#disappear)
* [dispatch](baseactor.md#dispatch)
* [dispose](baseactor.md#dispose)

## Constructors

###  constructor

\+ **new BaseActor**(`element`: [ActorElement](../globals.md#actorelement)): *[BaseActor](baseactor.md)*

*Defined in [projects/packages/src/actor/base-actor.ts:28](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/actor/base-actor.ts#L28)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`element` | [ActorElement](../globals.md#actorelement) | 옵저버에 등록되어야 하는 native element  |

**Returns:** *[BaseActor](baseactor.md)*

## Properties

###  element

• **element**: *[ActorElement](../globals.md#actorelement)*

*Implementation of [IActor](../interfaces/iactor.md).[element](../interfaces/iactor.md#element)*

*Defined in [projects/packages/src/actor/base-actor.ts:12](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/actor/base-actor.ts#L12)*

옵저버에 등록될 native element

___

###  events

• **events**: *Subject‹[AppearEvent](appearevent.md)›* = new Subject<AppearEvent>()

*Implementation of [IActor](../interfaces/iactor.md).[events](../interfaces/iactor.md#events)*

*Defined in [projects/packages/src/actor/base-actor.ts:18](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/actor/base-actor.ts#L18)*

이벤트 Observable

**`see`** https://rxjs-dev.firebaseapp.com/guide/subject

___

###  isAppear

• **isAppear**: *boolean* = false

*Implementation of [IActor](../interfaces/iactor.md).[isAppear](../interfaces/iactor.md#isappear)*

*Defined in [projects/packages/src/actor/base-actor.ts:28](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/actor/base-actor.ts#L28)*

현재 진입 여부 상태

___

###  stage

• **stage**: *[IStage](../interfaces/istage.md)‹[BaseActor](baseactor.md)›*

*Implementation of [IActor](../interfaces/iactor.md).[stage](../interfaces/iactor.md#stage)*

*Defined in [projects/packages/src/actor/base-actor.ts:23](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/actor/base-actor.ts#L23)*

해당 인스턴스가 등록된 스테이지

## Methods

###  appear

▸ **appear**(`entry?`: IntersectionObserverEntry): *void*

*Implementation of [IActor](../interfaces/iactor.md)*

*Defined in [projects/packages/src/actor/base-actor.ts:63](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/actor/base-actor.ts#L63)*

스테이지 진입

**Parameters:**

Name | Type |
------ | ------ |
`entry?` | IntersectionObserverEntry |

**Returns:** *void*

___

###  bind

▸ **bind**(`stage`: [IStage](../interfaces/istage.md)‹[BaseActor](baseactor.md)›): *void*

*Implementation of [IActor](../interfaces/iactor.md)*

*Defined in [projects/packages/src/actor/base-actor.ts:41](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/actor/base-actor.ts#L41)*

해당 인스턴스를 관찰하는 스테이지를 연결

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`stage` | [IStage](../interfaces/istage.md)‹[BaseActor](baseactor.md)› | 스테이지  |

**Returns:** *void*

___

###  disappear

▸ **disappear**(`entry?`: IntersectionObserverEntry): *void*

*Implementation of [IActor](../interfaces/iactor.md)*

*Defined in [projects/packages/src/actor/base-actor.ts:73](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/actor/base-actor.ts#L73)*

스테이지 이탈

**Parameters:**

Name | Type |
------ | ------ |
`entry?` | IntersectionObserverEntry |

**Returns:** *void*

___

###  dispatch

▸ **dispatch**(`type`: string, `entry?`: IntersectionObserverEntry): *void*

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

*Defined in [projects/packages/src/actor/base-actor.ts:82](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/actor/base-actor.ts#L82)*

파기

**Returns:** *void*
