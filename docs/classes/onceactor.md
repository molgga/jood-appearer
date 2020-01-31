[Doc](../README.md) › [Globals](../globals.md) › [OnceActor](onceactor.md)

# Class: OnceActor

Stage 에 등록될 Actor.
스테이지 진입을 한번만 감지한 후 본인 스스로 관찰 해제하는 감지형.
(사용 예: 화면 진입시 한번만 애니메이션 한다, 이미지 로드를 한다)

## Hierarchy

* [BaseActor](baseactor.md)

  ↳ **OnceActor**

## Implements

* [IActor](../interfaces/iactor.md)

## Index

### Constructors

* [constructor](onceactor.md#constructor)

### Properties

* [element](onceactor.md#element)
* [events](onceactor.md#events)
* [isAppear](onceactor.md#isappear)
* [stage](onceactor.md#stage)

### Methods

* [appear](onceactor.md#appear)
* [bind](onceactor.md#bind)
* [disappear](onceactor.md#disappear)
* [dispatch](onceactor.md#dispatch)
* [dispose](onceactor.md#dispose)

## Constructors

###  constructor

\+ **new OnceActor**(`element`: [ActorElement](../globals.md#actorelement)): *[OnceActor](onceactor.md)*

*Inherited from [BaseActor](baseactor.md).[constructor](baseactor.md#constructor)*

*Defined in [projects/packages/src/actor/base-actor.ts:28](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/actor/base-actor.ts#L28)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`element` | [ActorElement](../globals.md#actorelement) | 옵저버에 등록되어야 하는 native element  |

**Returns:** *[OnceActor](onceactor.md)*

## Properties

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

▸ **appear**(`entry?`: IntersectionObserverEntry): *void*

*Implementation of [IActor](../interfaces/iactor.md)*

*Overrides [BaseActor](baseactor.md).[appear](baseactor.md#appear)*

*Defined in [projects/packages/src/actor/once-actor.ts:10](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/actor/once-actor.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`entry?` | IntersectionObserverEntry |

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

###  disappear

▸ **disappear**(`entry?`: IntersectionObserverEntry): *void*

*Implementation of [IActor](../interfaces/iactor.md)*

*Inherited from [BaseActor](baseactor.md).[disappear](baseactor.md#disappear)*

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
