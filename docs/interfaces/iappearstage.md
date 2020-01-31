[Doc](../README.md) › [Globals](../globals.md) › [IStage](iappearstage.md)

# Interface: IStage <**T**>

관찰자

**`template`** T

## Type parameters

▪ **T**

## Hierarchy

- **IStage**

## Implemented by

- [AppearStage](../classes/appearstage.md)

## Index

### Methods

- [dispose](iappearstage.md#dispose)
- [init](iappearstage.md#init)
- [observe](iappearstage.md#observe)
- [unobserve](iappearstage.md#unobserve)

## Methods

### dispose

▸ **dispose**(): _void_

_Defined in [projects/packages/src/core/types.ts:34](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/core/types.ts#L34)_

파기

**Returns:** _void_

---

### init

▸ **init**(`option`: [StageOption](appeareroption.md)): _void_

_Defined in [projects/packages/src/core/types.ts:17](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/core/types.ts#L17)_

초기화

**Parameters:**

| Name     | Type                             | Description |
| -------- | -------------------------------- | ----------- |
| `option` | [StageOption](appeareroption.md) |             |

**Returns:** _void_

---

### observe

▸ **observe**(`actor`: T): _void_

_Defined in [projects/packages/src/core/types.ts:23](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/core/types.ts#L23)_

관찰 대상 등록

**Parameters:**

| Name    | Type | Description |
| ------- | ---- | ----------- |
| `actor` | T    |             |

**Returns:** _void_

---

### unobserve

▸ **unobserve**(`actor`: T): _void_

_Defined in [projects/packages/src/core/types.ts:29](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/core/types.ts#L29)_

관찰 대상 해제

**Parameters:**

| Name    | Type | Description |
| ------- | ---- | ----------- |
| `actor` | T    |             |

**Returns:** _void_
