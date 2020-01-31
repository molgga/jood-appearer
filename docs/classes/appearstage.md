[Doc](../README.md) › [Globals](../globals.md) › [AppearStage](appearstage.md)

# Class: AppearStage <**T**>

화면(지정된 root 영역)에 진입 여부를 판단하고 알리기 위한 클래스.
등록된 Actor(s)를 IntersectionObserver 를 통해 관찰하고 관찰된 상태에 따라 Actor 에게 알림.

**`template`** T Actor

## Type parameters

▪ **T**: *[IActor](../interfaces/iactor.md)*

## Hierarchy

* **AppearStage**

## Implements

* [IStage](../interfaces/istage.md)‹T›

## Index

### Properties

* [actorMap](appearstage.md#protected-actormap)
* [observer](appearstage.md#protected-observer)

### Accessors

* [actorSize](appearstage.md#actorsize)
* [intersectionObserver](appearstage.md#intersectionobserver)

### Methods

* [dispose](appearstage.md#dispose)
* [getActors](appearstage.md#getactors)
* [init](appearstage.md#init)
* [observe](appearstage.md#observe)
* [onObserveEntries](appearstage.md#protected-onobserveentries)
* [unobserve](appearstage.md#unobserve)

## Properties

### `Protected` actorMap

• **actorMap**: *Map‹[ActorElement](../globals.md#actorelement), T›*

*Defined in [projects/packages/src/stage/appear-stage.ts:12](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/stage/appear-stage.ts#L12)*

Actor 맵

___

### `Protected` observer

• **observer**: *IntersectionObserver*

*Defined in [projects/packages/src/stage/appear-stage.ts:18](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/stage/appear-stage.ts#L18)*

IntersectionObserver

**`see`** https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

## Accessors

###  actorSize

• **get actorSize**(): *number*

*Defined in [projects/packages/src/stage/appear-stage.ts:62](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/stage/appear-stage.ts#L62)*

옵저버에 등록(관찰) 중 인 Actor 의 수

**Returns:** *number*

___

###  intersectionObserver

• **get intersectionObserver**(): *IntersectionObserver*

*Defined in [projects/packages/src/stage/appear-stage.ts:77](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/stage/appear-stage.ts#L77)*

생성된 intersection observer 인스턴스

**Returns:** *IntersectionObserver*

## Methods

###  dispose

▸ **dispose**(): *void*

*Implementation of [IStage](../interfaces/istage.md)*

*Defined in [projects/packages/src/stage/appear-stage.ts:103](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/stage/appear-stage.ts#L103)*

파기

**Returns:** *void*

___

###  getActors

▸ **getActors**(): *T[]*

*Defined in [projects/packages/src/stage/appear-stage.ts:70](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/stage/appear-stage.ts#L70)*

등록 되어있는 Actor 를 반환 합니다.

**Returns:** *T[]*

T[]

___

###  init

▸ **init**(`option`: [StageOption](../interfaces/stageoption.md)): *void*

*Implementation of [IStage](../interfaces/istage.md)*

*Defined in [projects/packages/src/stage/appear-stage.ts:24](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/stage/appear-stage.ts#L24)*

초기화

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`option` | [StageOption](../interfaces/stageoption.md) | {} |

**Returns:** *void*

___

###  observe

▸ **observe**(`actor`: T): *void*

*Defined in [projects/packages/src/stage/appear-stage.ts:38](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/stage/appear-stage.ts#L38)*

전달된 actor 를 옵저버에 등록합니다.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`actor` | T | 등록할 Actor  |

**Returns:** *void*

___

### `Protected` onObserveEntries

▸ **onObserveEntries**(`entries`: IntersectionObserverEntry[]): *void*

*Defined in [projects/packages/src/stage/appear-stage.ts:86](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/stage/appear-stage.ts#L86)*

옵저버의 콜백 핸들러

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`entries` | IntersectionObserverEntry[] | 옵저버의 콜백으로 전달받는 엔트리 값  |

**Returns:** *void*

___

###  unobserve

▸ **unobserve**(`actor`: T): *void*

*Defined in [projects/packages/src/stage/appear-stage.ts:51](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/stage/appear-stage.ts#L51)*

전달된 actor 를 옵저버에서 제외합니다.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`actor` | T | 제외할 Actor  |

**Returns:** *void*
