[Doc](../README.md) › [Globals](../globals.md) › [BaseActor](baseactor.md)

# Class: BaseActor

Stage 에 등록될 Actor.
스테이지에 진입, 이탈 시 계속 알려주는 기본형.

## Hierarchy

* **BaseActor**

  ↳ [LazyActor](lazyactor.md)

  ↳ [OnceActor](onceactor.md)

## Implements

* [IAppearActor](../interfaces/iappearactor.md)

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
* [destroy](baseactor.md#destroy)
* [disappear](baseactor.md#disappear)
* [dispatch](baseactor.md#dispatch)

## Constructors

###  constructor

\+ **new BaseActor**(`element`: [AppearerActorElement](../globals.md#appeareractorelement)): *[BaseActor](baseactor.md)*

*Defined in [projects/packages/src/actor/base-actor.ts:33](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/base-actor.ts#L33)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`element` | [AppearerActorElement](../globals.md#appeareractorelement) | 옵저버에 등록되어야 하는 native element  |

**Returns:** *[BaseActor](baseactor.md)*

## Properties

###  element

• **element**: *[AppearerActorElement](../globals.md#appeareractorelement)*

*Implementation of [IAppearActor](../interfaces/iappearactor.md).[element](../interfaces/iappearactor.md#element)*

*Defined in [projects/packages/src/actor/base-actor.ts:17](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/base-actor.ts#L17)*

옵저버에 등록될 native element

___

###  events

• **events**: *Subject‹[AppearEvent](appearevent.md)›* = new Subject<AppearEvent>()

*Implementation of [IAppearActor](../interfaces/iappearactor.md).[events](../interfaces/iappearactor.md#events)*

*Defined in [projects/packages/src/actor/base-actor.ts:23](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/base-actor.ts#L23)*

이벤트 Observable

**`see`** https://rxjs-dev.firebaseapp.com/guide/subject

___

###  isAppear

• **isAppear**: *boolean* = false

*Implementation of [IAppearActor](../interfaces/iappearactor.md).[isAppear](../interfaces/iappearactor.md#isappear)*

*Defined in [projects/packages/src/actor/base-actor.ts:33](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/base-actor.ts#L33)*

현재 진입 여부 상태

___

###  stage

• **stage**: *[IAppearStage](../interfaces/iappearstage.md)‹[BaseActor](baseactor.md)›*

*Implementation of [IAppearActor](../interfaces/iappearactor.md).[stage](../interfaces/iappearactor.md#stage)*

*Defined in [projects/packages/src/actor/base-actor.ts:28](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/base-actor.ts#L28)*

해당 인스턴스가 등록된 스테이지

## Methods

###  appear

▸ **appear**(`entry?`: IntersectionObserverEntry): *void*

*Implementation of [IAppearActor](../interfaces/iappearactor.md)*

*Defined in [projects/packages/src/actor/base-actor.ts:68](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/base-actor.ts#L68)*

스테이지 진입

**Parameters:**

Name | Type |
------ | ------ |
`entry?` | IntersectionObserverEntry |

**Returns:** *void*

___

###  bind

▸ **bind**(`stage`: [IAppearStage](../interfaces/iappearstage.md)‹[BaseActor](baseactor.md)›): *void*

*Implementation of [IAppearActor](../interfaces/iappearactor.md)*

*Defined in [projects/packages/src/actor/base-actor.ts:46](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/base-actor.ts#L46)*

해당 인스턴스를 관찰하는 스테이지를 연결

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`stage` | [IAppearStage](../interfaces/iappearstage.md)‹[BaseActor](baseactor.md)› | 스테이지  |

**Returns:** *void*

___

###  destroy

▸ **destroy**(): *void*

*Implementation of [IAppearActor](../interfaces/iappearactor.md)*

*Defined in [projects/packages/src/actor/base-actor.ts:84](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/base-actor.ts#L84)*

**Returns:** *void*

___

###  disappear

▸ **disappear**(`entry?`: IntersectionObserverEntry): *void*

*Implementation of [IAppearActor](../interfaces/iappearactor.md)*

*Defined in [projects/packages/src/actor/base-actor.ts:78](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/base-actor.ts#L78)*

스테이지 이탈

**Parameters:**

Name | Type |
------ | ------ |
`entry?` | IntersectionObserverEntry |

**Returns:** *void*

___

###  dispatch

▸ **dispatch**(`type`: string, `entry?`: IntersectionObserverEntry): *void*

*Defined in [projects/packages/src/actor/base-actor.ts:55](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/actor/base-actor.ts#L55)*

진입, 이탈 등 이벤트 알림

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | string | 이벤트 타입 |
`entry?` | IntersectionObserverEntry | - |

**Returns:** *void*
