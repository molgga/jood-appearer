[Doc](../README.md) › [Globals](../globals.md) › [AppearEvent](appearevent.md)

# Class: AppearEvent <**T**>

관찰대상의 이벤트

**`template`** D

## Type parameters

▪ **T**

## Hierarchy

* **AppearEvent**

## Implements

* [AppearEventData](../interfaces/appeareventdata.md)‹T›

## Index

### Constructors

* [constructor](appearevent.md#constructor)

### Properties

* [actor](appearevent.md#actor)
* [entry](appearevent.md#entry)
* [type](appearevent.md#type)
* [APPEAR](appearevent.md#static-appear)
* [DISAPPEAR](appearevent.md#static-disappear)

## Constructors

###  constructor

\+ **new AppearEvent**(`type`: string, `option`: [AppearEventData](../interfaces/appeareventdata.md)‹T›): *[AppearEvent](appearevent.md)*

Defined in projects/packages/src/core/types.ts:121

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`option` | [AppearEventData](../interfaces/appeareventdata.md)‹T› |

**Returns:** *[AppearEvent](appearevent.md)*

## Properties

###  actor

• **actor**: *T*

*Implementation of [AppearEventData](../interfaces/appeareventdata.md).[actor](../interfaces/appeareventdata.md#actor)*

Defined in projects/packages/src/core/types.ts:116

참조되는 관찰대상

___

###  entry

• **entry**: *IntersectionObserverEntry*

*Implementation of [AppearEventData](../interfaces/appeareventdata.md).[entry](../interfaces/appeareventdata.md#entry)*

Defined in projects/packages/src/core/types.ts:121

인터섹션 옵저버의 진입, 이탈 당시 관찰 상태

___

###  type

• **type**: *string*

Defined in projects/packages/src/core/types.ts:111

이벤트 타입

___

### `Static` APPEAR

▪ **APPEAR**: *string* = "APPEAR"

Defined in projects/packages/src/core/types.ts:101

이벤트 타입 - 진입

___

### `Static` DISAPPEAR

▪ **DISAPPEAR**: *string* = "DISAPPEAR"

Defined in projects/packages/src/core/types.ts:106

이벤트 타입 - 이탈
