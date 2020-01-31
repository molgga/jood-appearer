[Doc](../README.md) › [Globals](../globals.md) › [AppearStage](appearstage.md)

# Class: AppearStage <**T**>

화면(지정된 root 영역)에 진입 여부를 판단하고 알리기 위한 클래스.
등록된 Actor(s)를 IntersectionObserver 를 통해 관찰하고 관찰된 상태에 따라 Actor 에게 알림.

**`template`** T Actor

## Type parameters

▪ **T**: _[IActor](../interfaces/iappearactor.md)_

## Hierarchy

- **AppearStage**

## Implements

- [IStage](../interfaces/iappearstage.md)‹T›

## Index

### Properties

- [actorMap](appearstage.md#protected-actormap)
- [observer](appearstage.md#protected-observer)

### Accessors

- [actorSize](appearstage.md#actorsize)
- [intersectionObserver](appearstage.md#intersectionobserver)

### Methods

- [dispose](appearstage.md#dispose)
- [getActors](appearstage.md#getactors)
- [init](appearstage.md#init)
- [observe](appearstage.md#observe)
- [onObserveEntries](appearstage.md#protected-onobserveentries)
- [unobserve](appearstage.md#unobserve)

## Properties

### `Protected` actorMap

• **actorMap**: _Map‹[ActorElement](../globals.md#appeareractorelement), T›_

_Defined in [projects/packages/src/stage/appear-stage.ts:18](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/stage/appear-stage.ts#L18)_

Actor 맵

---

### `Protected` observer

• **observer**: _IntersectionObserver_

_Defined in [projects/packages/src/stage/appear-stage.ts:24](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/stage/appear-stage.ts#L24)_

IntersectionObserver

**`see`** https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

## Accessors

### actorSize

• **get actorSize**(): _number_

_Defined in [projects/packages/src/stage/appear-stage.ts:80](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/stage/appear-stage.ts#L80)_

옵저버에 등록(관찰) 중 인 Actor 의 수

**Returns:** _number_

---

### intersectionObserver

• **get intersectionObserver**(): _IntersectionObserver_

_Defined in [projects/packages/src/stage/appear-stage.ts:95](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/stage/appear-stage.ts#L95)_

생성된 intersection observer 인스턴스

**Returns:** _IntersectionObserver_

## Methods

### dispose

▸ **dispose**(): _void_

_Implementation of [IStage](../interfaces/iappearstage.md)_

_Defined in [projects/packages/src/stage/appear-stage.ts:43](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/stage/appear-stage.ts#L43)_

파기

**Returns:** _void_

---

### getActors

▸ **getActors**(): _T[]_

_Defined in [projects/packages/src/stage/appear-stage.ts:88](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/stage/appear-stage.ts#L88)_

등록 되어있는 Actor 를 반환 합니다.

**Returns:** _T[]_

T[]

---

### init

▸ **init**(`option`: [StageOption](../interfaces/appeareroption.md)): _void_

_Implementation of [IStage](../interfaces/iappearstage.md)_

_Defined in [projects/packages/src/stage/appear-stage.ts:30](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/stage/appear-stage.ts#L30)_

초기화

**Parameters:**

| Name     | Type                                           | Default |
| -------- | ---------------------------------------------- | ------- |
| `option` | [StageOption](../interfaces/appeareroption.md) | {}      |

**Returns:** _void_

---

### observe

▸ **observe**(`actor`: T): _void_

_Defined in [projects/packages/src/stage/appear-stage.ts:56](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/stage/appear-stage.ts#L56)_

전달된 actor 를 옵저버에 등록합니다.

**Parameters:**

| Name    | Type | Description  |
| ------- | ---- | ------------ |
| `actor` | T    | 등록할 Actor |

**Returns:** _void_

---

### `Protected` onObserveEntries

▸ **onObserveEntries**(`entries`: IntersectionObserverEntry[]): _void_

_Defined in [projects/packages/src/stage/appear-stage.ts:104](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/stage/appear-stage.ts#L104)_

옵저버의 콜백 핸들러

**Parameters:**

| Name      | Type                        | Description                          |
| --------- | --------------------------- | ------------------------------------ |
| `entries` | IntersectionObserverEntry[] | 옵저버의 콜백으로 전달받는 엔트리 값 |

**Returns:** _void_

---

### unobserve

▸ **unobserve**(`actor`: T): _void_

_Defined in [projects/packages/src/stage/appear-stage.ts:69](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/stage/appear-stage.ts#L69)_

전달된 actor 를 옵저버에서 제외합니다.

**Parameters:**

| Name    | Type | Description  |
| ------- | ---- | ------------ |
| `actor` | T    | 제외할 Actor |

**Returns:** _void_
