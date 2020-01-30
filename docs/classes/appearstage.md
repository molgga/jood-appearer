[Doc](../README.md) › [Globals](../globals.md) › [AppearStage](appearstage.md)

# Class: AppearStage <**T**>

화면(지정된 root 영역)에 진입 여부를 판단하고 알리기 위한 클래스.
등록된 Actor(s)를 IntersectionObserver 를 통해 관찰하고 관찰된 상태에 따라 Actor 에게 알림.

**`template`** T Actor

## Type parameters

▪ **T**: *[IAppearActor](../interfaces/iappearactor.md)*

## Hierarchy

* **AppearStage**

## Implements

* [IAppearStage](../interfaces/iappearstage.md)‹T›

## Index

### Properties

* [actorMap](appearstage.md#protected-actormap)
* [observer](appearstage.md#protected-observer)

### Accessors

* [actorSize](appearstage.md#actorsize)
* [intersectionObserver](appearstage.md#intersectionobserver)

### Methods

* [destroy](appearstage.md#destroy)
* [getActors](appearstage.md#getactors)
* [init](appearstage.md#init)
* [observe](appearstage.md#observe)
* [onObserveEntries](appearstage.md#protected-onobserveentries)
* [unobserve](appearstage.md#unobserve)

## Properties

### `Protected` actorMap

• **actorMap**: *Map‹[AppearerActorElement](../globals.md#appeareractorelement), T›*

*Defined in [projects/packages/src/stage/appear-stage.ts:18](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/stage/appear-stage.ts#L18)*

Actor 맵

___

### `Protected` observer

• **observer**: *IntersectionObserver*

*Defined in [projects/packages/src/stage/appear-stage.ts:24](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/stage/appear-stage.ts#L24)*

IntersectionObserver

**`see`** https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

## Accessors

###  actorSize

• **get actorSize**(): *number*

*Defined in [projects/packages/src/stage/appear-stage.ts:80](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/stage/appear-stage.ts#L80)*

옵저버에 등록(관찰) 중 인 Actor 의 수

**Returns:** *number*

___

###  intersectionObserver

• **get intersectionObserver**(): *IntersectionObserver*

*Defined in [projects/packages/src/stage/appear-stage.ts:95](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/stage/appear-stage.ts#L95)*

생성된 intersection observer 인스턴스

**Returns:** *IntersectionObserver*

## Methods

###  destroy

▸ **destroy**(): *void*

*Implementation of [IAppearStage](../interfaces/iappearstage.md)*

*Defined in [projects/packages/src/stage/appear-stage.ts:43](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/stage/appear-stage.ts#L43)*

파기

**Returns:** *void*

___

###  getActors

▸ **getActors**(): *T[]*

*Defined in [projects/packages/src/stage/appear-stage.ts:88](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/stage/appear-stage.ts#L88)*

등록 되어있는 Actor 를 반환 합니다.

**Returns:** *T[]*

T[]

___

###  init

▸ **init**(`option`: [AppearerOption](../interfaces/appeareroption.md)): *void*

*Implementation of [IAppearStage](../interfaces/iappearstage.md)*

*Defined in [projects/packages/src/stage/appear-stage.ts:30](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/stage/appear-stage.ts#L30)*

초기화

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`option` | [AppearerOption](../interfaces/appeareroption.md) | {} |

**Returns:** *void*

___

###  observe

▸ **observe**(`actor`: T): *void*

*Defined in [projects/packages/src/stage/appear-stage.ts:56](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/stage/appear-stage.ts#L56)*

전달된 actor 를 옵저버에 등록합니다.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`actor` | T | 등록할 Actor  |

**Returns:** *void*

___

### `Protected` onObserveEntries

▸ **onObserveEntries**(`entries`: IntersectionObserverEntry[]): *void*

*Defined in [projects/packages/src/stage/appear-stage.ts:104](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/stage/appear-stage.ts#L104)*

옵저버의 콜백 핸들러

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`entries` | IntersectionObserverEntry[] | 옵저버의 콜백으로 전달받는 엔트리 값  |

**Returns:** *void*

___

###  unobserve

▸ **unobserve**(`actor`: T): *void*

*Defined in [projects/packages/src/stage/appear-stage.ts:69](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/stage/appear-stage.ts#L69)*

전달된 actor 를 옵저버에서 제외합니다.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`actor` | T | 제외할 Actor  |

**Returns:** *void*
