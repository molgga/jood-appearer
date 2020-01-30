[Doc](../README.md) › [Globals](../globals.md) › [IAppearStage](iappearstage.md)

# Interface: IAppearStage <**T**>

관찰자

**`template`** T

## Type parameters

▪ **T**

## Hierarchy

* **IAppearStage**

## Implemented by

* [AppearStage](../classes/appearstage.md)

## Index

### Methods

* [destroy](iappearstage.md#destroy)
* [init](iappearstage.md#init)
* [observe](iappearstage.md#observe)
* [unobserve](iappearstage.md#unobserve)

## Methods

###  destroy

▸ **destroy**(): *void*

*Defined in [projects/packages/src/core/types.ts:34](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/core/types.ts#L34)*

파기

**Returns:** *void*

___

###  init

▸ **init**(`option`: [AppearerOption](appeareroption.md)): *void*

*Defined in [projects/packages/src/core/types.ts:17](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/core/types.ts#L17)*

초기화

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`option` | [AppearerOption](appeareroption.md) |   |

**Returns:** *void*

___

###  observe

▸ **observe**(`actor`: T): *void*

*Defined in [projects/packages/src/core/types.ts:23](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/core/types.ts#L23)*

관찰 대상 등록

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`actor` | T |   |

**Returns:** *void*

___

###  unobserve

▸ **unobserve**(`actor`: T): *void*

*Defined in [projects/packages/src/core/types.ts:29](https://github.com/molgga/jood-appearer/blob/4c4cb79/projects/packages/src/core/types.ts#L29)*

관찰 대상 해제

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`actor` | T |   |

**Returns:** *void*
