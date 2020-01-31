[Doc](../README.md) › [Globals](../globals.md) › [IActor](iactor.md)

# Interface: IActor

관찰대상

## Hierarchy

* **IActor**

## Implemented by

* [BaseActor](../classes/baseactor.md)
* [LazyActor](../classes/lazyactor.md)
* [OnceActor](../classes/onceactor.md)

## Index

### Properties

* [element](iactor.md#element)
* [events](iactor.md#events)
* [isAppear](iactor.md#isappear)
* [stage](iactor.md#stage)

### Methods

* [appear](iactor.md#appear)
* [bind](iactor.md#bind)
* [disappear](iactor.md#disappear)
* [dispose](iactor.md#dispose)

## Properties

###  element

• **element**: *[ActorElement](../globals.md#actorelement)*

*Defined in [projects/packages/src/common/types.ts:39](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/common/types.ts#L39)*

관찰 대상이 참조해야하는 DOM

___

###  events

• **events**: *Subject‹[AppearEvent](../classes/appearevent.md)›*

*Defined in [projects/packages/src/common/types.ts:49](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/common/types.ts#L49)*

관찰 이벤트 Observable

___

###  isAppear

• **isAppear**: *boolean*

*Defined in [projects/packages/src/common/types.ts:54](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/common/types.ts#L54)*

현재 관찰대상의 진입, 이탈 여부

___

###  stage

• **stage**: *[IStage](istage.md)‹any›*

*Defined in [projects/packages/src/common/types.ts:44](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/common/types.ts#L44)*

관찰 대상이 속하게 되는 스테이지(관찰자)

## Methods

###  appear

▸ **appear**(`entry?`: IntersectionObserverEntry): *void*

*Defined in [projects/packages/src/common/types.ts:68](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/common/types.ts#L68)*

스테이지 진입시 알림.
스테이지에서 호출됨.

**Parameters:**

Name | Type |
------ | ------ |
`entry?` | IntersectionObserverEntry |

**Returns:** *void*

___

###  bind

▸ **bind**(`stage`: [IStage](istage.md)‹[IActor](iactor.md)›): *void*

*Defined in [projects/packages/src/common/types.ts:61](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/common/types.ts#L61)*

관찰 대상이 속하게 되는 스테이지(관찰자) 지정.
스테이지에서 직접 등록됨.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`stage` | [IStage](istage.md)‹[IActor](iactor.md)› |   |

**Returns:** *void*

___

###  disappear

▸ **disappear**(`entry?`: IntersectionObserverEntry): *void*

*Defined in [projects/packages/src/common/types.ts:75](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/common/types.ts#L75)*

스테이지 이탈시 알림.
스테이지에서 호출됨.

**Parameters:**

Name | Type |
------ | ------ |
`entry?` | IntersectionObserverEntry |

**Returns:** *void*

___

###  dispose

▸ **dispose**(): *void*

*Defined in [projects/packages/src/common/types.ts:80](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/common/types.ts#L80)*

파기

**Returns:** *void*
