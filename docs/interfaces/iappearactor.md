[Doc](../README.md) › [Globals](../globals.md) › [IAppearActor](iappearactor.md)

# Interface: IAppearActor

관찰대상

## Hierarchy

* **IAppearActor**

## Implemented by

* [BaseActor](../classes/baseactor.md)
* [LazyActor](../classes/lazyactor.md)
* [OnceActor](../classes/onceactor.md)

## Index

### Properties

* [element](iappearactor.md#element)
* [events](iappearactor.md#events)
* [isAppear](iappearactor.md#isappear)
* [stage](iappearactor.md#stage)

### Methods

* [appear](iappearactor.md#appear)
* [bind](iappearactor.md#bind)
* [destroy](iappearactor.md#destroy)
* [disappear](iappearactor.md#disappear)

## Properties

###  element

• **element**: *[AppearerActorElement](../globals.md#appeareractorelement)*

*Defined in [projects/packages/src/core/types.ts:44](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/core/types.ts#L44)*

관찰 대상이 참조해야하는 DOM

___

###  events

• **events**: *Subject‹[AppearEvent](../classes/appearevent.md)›*

*Defined in [projects/packages/src/core/types.ts:54](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/core/types.ts#L54)*

관찰 이벤트 Observable

___

###  isAppear

• **isAppear**: *boolean*

*Defined in [projects/packages/src/core/types.ts:59](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/core/types.ts#L59)*

현재 관찰대상의 진입, 이탈 여부

___

###  stage

• **stage**: *[IAppearStage](iappearstage.md)‹any›*

*Defined in [projects/packages/src/core/types.ts:49](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/core/types.ts#L49)*

관찰 대상이 속하게 되는 스테이지(관찰자)

## Methods

###  appear

▸ **appear**(`entry?`: IntersectionObserverEntry): *void*

*Defined in [projects/packages/src/core/types.ts:73](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/core/types.ts#L73)*

스테이지 진입시 알림.
스테이지에서 호출됨.

**Parameters:**

Name | Type |
------ | ------ |
`entry?` | IntersectionObserverEntry |

**Returns:** *void*

___

###  bind

▸ **bind**(`stage`: [IAppearStage](iappearstage.md)‹[IAppearActor](iappearactor.md)›): *void*

*Defined in [projects/packages/src/core/types.ts:66](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/core/types.ts#L66)*

관찰 대상이 속하게 되는 스테이지(관찰자) 지정.
스테이지에서 직접 등록됨.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`stage` | [IAppearStage](iappearstage.md)‹[IAppearActor](iappearactor.md)› |   |

**Returns:** *void*

___

###  destroy

▸ **destroy**(): *void*

*Defined in [projects/packages/src/core/types.ts:85](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/core/types.ts#L85)*

파기

**Returns:** *void*

___

###  disappear

▸ **disappear**(`entry?`: IntersectionObserverEntry): *void*

*Defined in [projects/packages/src/core/types.ts:80](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/core/types.ts#L80)*

스테이지 이탈시 알림.
스테이지에서 호출됨.

**Parameters:**

Name | Type |
------ | ------ |
`entry?` | IntersectionObserverEntry |

**Returns:** *void*
