[Doc](../README.md) › [Globals](../globals.md) › [IStage](istage.md)

# Interface: IStage <**T**>

관찰자

**`template`** T

## Type parameters

▪ **T**

## Hierarchy

* **IStage**

## Implemented by

* [AppearStage](../classes/appearstage.md)

## Index

### Methods

* [dispose](istage.md#dispose)
* [init](istage.md#init)
* [observe](istage.md#observe)
* [unobserve](istage.md#unobserve)

## Methods

###  dispose

▸ **dispose**(): *void*

*Defined in [projects/packages/src/common/types.ts:29](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/common/types.ts#L29)*

파기

**Returns:** *void*

___

###  init

▸ **init**(`option`: [StageOption](stageoption.md)): *void*

*Defined in [projects/packages/src/common/types.ts:12](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/common/types.ts#L12)*

초기화

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`option` | [StageOption](stageoption.md) |   |

**Returns:** *void*

___

###  observe

▸ **observe**(`actor`: T): *void*

*Defined in [projects/packages/src/common/types.ts:18](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/common/types.ts#L18)*

관찰 대상 등록

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`actor` | T |   |

**Returns:** *void*

___

###  unobserve

▸ **unobserve**(`actor`: T): *void*

*Defined in [projects/packages/src/common/types.ts:24](https://github.com/molgga/jood-appearer/blob/fe8cce9/projects/packages/src/common/types.ts#L24)*

관찰 대상 해제

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`actor` | T |   |

**Returns:** *void*
