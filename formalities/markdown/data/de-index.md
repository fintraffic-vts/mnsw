# de-index.json

- Source JSON: [de-index.json](../../schemas/de-index.json)
- Purpose: maps schema tree paths to DE IDs and DE names.

## Formality summary

| Formality | Details | Mappings |
| --- | --- | --- |
| ATA | [Section](#formality-ata) | 5 |
| ATD | [Section](#formality-atd) | 4 |
| CGA | [Section](#formality-cga) | 127 |
| CGD | [Section](#formality-cgd) | 101 |
| COA | [Section](#formality-coa) | 1 |
| CRT | [Section](#formality-crt) | 22 |
| CWA | [Section](#formality-cwa) | 33 |
| CWD | [Section](#formality-cwd) | 33 |
| DUE | [Section](#formality-due) | 24 |
| FRM | [Section](#formality-frm) | 0 |
| HZA | [Section](#formality-hza) | 125 |
| HZD | [Section](#formality-hzd) | 104 |
| MDD | [Section](#formality-mdd) | 21 |
| MDH | [Section](#formality-mdh) | 25 |
| MTS | [Section](#formality-mts) | 29 |
| NOA | [Section](#formality-noa) | 154 |
| NOD | [Section](#formality-nod) | 91 |
| PBK | [Section](#formality-pbk) | 58 |
| PXA | [Section](#formality-pxa) | 50 |
| PXD | [Section](#formality-pxd) | 46 |
| SEC | [Section](#formality-sec) | 43 |
| SHP | [Section](#formality-shp) | 98 |
| SID | [Section](#formality-sid) | 9 |
| SRV | [Section](#formality-srv) | 106 |
| VID | [Section](#formality-vid) | 12 |
| WAR | [Section](#formality-war) | 11 |
| WAS | [Section](#formality-was) | 30 |

<a id="formality-ata"></a>
## ATA

- Mapping count: 5

| Tree path | DE ID | DE name |
| --- | --- | --- |
| ata:ATA > ata:ExchangedDocument > ram:Remarks | DE-003-01 | Remarks |
| ata:ATA > ata:SpecifiedLogisticsTransportMovement > ram:ArrivalTransportEvent > ram:ActualArrivalRelatedDateTime | DE-015-07 | ATA at first port call location |
| ata:ATA > ata:SpecifiedLogisticsTransportMovement > ram:ArrivalTransportEvent > ram:OccurrenceLogisticsLocation > ram:SubordinateLocation > ram:Name | DE-015-04 | Expected first location |
| ata:ATA > ata:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ActualArrivalRelatedDateTime | DE-022-01 | Date and time of arrival - actual |
| ata:ATA > ata:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:MaritimeAnchorageIndicator | DE-014-15 | Call at anchorage indicator |

<a id="formality-atd"></a>
## ATD

- Mapping count: 4

| Tree path | DE ID | DE name |
| --- | --- | --- |
| atd:ATD > atd:ExchangedDocument > ram:Remarks | DE-003-01 | Remarks |
| atd:ATD > atd:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ActualDepartureRelatedDateTime | DE-022-04 | Date and time of departure - actual |
| atd:ATD > atd:SpecifiedLogisticsTransportMovement > ram:DepartureTransportEvent > ram:ActualDepartureRelatedDateTime | DE-016-07 | ATD from last port call location |
| atd:ATD > atd:SpecifiedLogisticsTransportMovement > ram:DepartureTransportEvent > ram:OccurrenceLogisticsLocation > ram:SubordinateLocation > ram:Name | DE-016-03 | Expected last port call location |

<a id="formality-cga"></a>
## CGA

- Mapping count: 127

| Tree path | DE ID | DE name |
| --- | --- | --- |
| cga:CGA > cga:ExchangedDeclaration > ram:StatementTypeCode | DE-003-07 | Declarant statement, coded |
| cga:CGA > cga:ExchangedDocument > ram:AttachedSpecifiedBinaryFile > [items] > ram:Description | DE-003-03 | Attachment description |
| cga:CGA > cga:ExchangedDocument > ram:AttachedSpecifiedBinaryFile > [items] > ram:FileName | DE-003-05 | Attachment file name |
| cga:CGA > cga:ExchangedDocument > ram:AttachedSpecifiedBinaryFile > [items] > ram:MIMECode | DE-003-06 | Attachment MIME type |
| cga:CGA > cga:ExchangedDocument > ram:AttachedSpecifiedBinaryFile > [items] > ram:TypeCode | DE-003-02 | Attachment type, coded |
| cga:CGA > cga:ExchangedDocument > ram:Remarks | DE-003-01 | Remarks |
| cga:CGA > cga:SpecifiedLogisticsTransportEquipment > [items] > ram:CategoryCode | DE-051-22 | Transport equipment category, coded |
| cga:CGA > cga:SpecifiedLogisticsTransportEquipment > [items] > ram:CharacteristicCode | DE-051-13 | Transport equipment size and type, coded |
| cga:CGA > cga:SpecifiedLogisticsTransportEquipment > [items] > ram:GrossVolumeMeasure | DE-051-11 | Container goods volume |
| cga:CGA > cga:SpecifiedLogisticsTransportEquipment > [items] > ram:ID | DE-051-01 | Transport equipment identification number |
| cga:CGA > cga:SpecifiedLogisticsTransportEquipment > [items] > ram:LinearSpatialDimension > ram:TypeCode | DE-051-15 | Container overdimension, coded |
| cga:CGA > cga:SpecifiedLogisticsTransportEquipment > [items] > ram:LinearSpatialDimension > ram:ValueMeasure | DE-051-16 | Oversize measure |
| cga:CGA > cga:SpecifiedLogisticsTransportEquipment > [items] > ram:MaritimeContainerCharacteristicCode | DE-051-17 | Container size and type, coded |
| cga:CGA > cga:SpecifiedLogisticsTransportEquipment > [items] > ram:NetWeightMeasure | DE-051-10 | Container cargo net mass |
| cga:CGA > cga:SpecifiedLogisticsTransportEquipment > [items] > ram:NonSelfPropelledUnitCode | DE-045-32 | Mobile non-self-propelled unit type, coded |
| cga:CGA > cga:SpecifiedLogisticsTransportEquipment > [items] > ram:OperationalStatusCode | DE-051-18 | Transport equipment status, coded |
| cga:CGA > cga:SpecifiedLogisticsTransportEquipment > [items] > ram:OwnerTradeParty > ram:Name | DE-051-12 | Container owner or supplier name |
| cga:CGA > cga:SpecifiedLogisticsTransportEquipment > [items] > ram:SequenceNumeric | DE-001-02 | Sequence number |
| cga:CGA > cga:SpecifiedLogisticsTransportEquipment > [items] > ram:SettingTransportSettingTemperature > ram:ValueMeasure | DE-047-22 | Temperature setting |
| cga:CGA > cga:SpecifiedLogisticsTransportEquipment > [items] > ram:TareWeightMeasure | DE-051-06 | Container tare weight |
| cga:CGA > cga:SpecifiedLogisticsTransportEquipment > [items] > ram:TransportMovementStatusCode | DE-051-18 | Transport equipment status, coded |
| cga:CGA > cga:SpecifiedLogisticsTransportEquipment > [items] > ram:UsedCapacityCode | DE-051-21 | Transport equipment full or empty indicator, coded |
| cga:CGA > cga:SpecifiedLogisticsTransportEquipment > [items] > ram:VerifiedGrossWeightMeasure | DE-051-19 | Verified gross mass |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:LoadingPortOperationsPortOperationEvent > ram:DomesticPassiveTransportMeansUnitQuantity | DE-045-05 | Domestic vehicles to load quantity |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:LoadingPortOperationsPortOperationEvent > ram:ForeignPassiveTransportMeansUnitQuantity | DE-045-03 | Foreign vehicles to load quantity |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:EmptyTransportEquipmentUnitQuantity | DE-045-08 | Number of empty containers TEU on board |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:AttachedAssociatedTransportEquipment > [items] > ram:ID | DE-051-01 | Transport equipment identification number |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:AttachedAssociatedTransportEquipment > [items] > ram:SequenceNumeric | DE-001-02 | Sequence number |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:BrandName | DE-065-07 | Vehicle make |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:CargoDescription | DE-065-23 | Vehicle cargo description |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:DriverQuantity | DE-065-14 | Vehicle number of drivers |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:GrossWeightMeasure | DE-065-12 | Vehicle gross weight |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:LicencePlateID | DE-065-04 | Vehicle license plate number |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:LoadedIndicator | DE-065-10 | Vehicle loaded indicator |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:ModelName | DE-065-08 | Vehicle model |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:NetWeightMeasure | DE-065-11 | Vehicle cargo net weight |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:OnboardTransportPerson > [items] > ram:FamilyName | DE-065-02 | Driver last name |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:OnboardTransportPerson > [items] > ram:GivenName | DE-065-01 | Driver first name |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:OnboardTransportPerson > [items] > ram:TechnicalID | DE-035-40 | Unique passenger technical identifier |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:PreBoardingNotificationID | DE-065-22 | Pre boarding notification number |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:RegistrationTradeCountry > ram:ID | DE-065-13 | Vehicle country of registration, coded |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:ReservationID | DE-065-03 | Vehicle ticket number |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:SequenceNumeric | DE-001-02 | Sequence number |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:ServiceProviderTradeParty > ram:EmailURIUniversalCommunication > ram:URIID | DE-065-21 | Haulier email |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:ServiceProviderTradeParty > ram:Name | DE-065-15 | Haulier name |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:ServiceProviderTradeParty > ram:PostalTradeAddress > ram:CityName | DE-065-18 | Haulier address city name |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:ServiceProviderTradeParty > ram:PostalTradeAddress > ram:CountryID | DE-065-19 | Haulier country, coded |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:ServiceProviderTradeParty > ram:PostalTradeAddress > ram:LineOne | DE-065-16 | Haulier address street and number |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:ServiceProviderTradeParty > ram:PostalTradeAddress > ram:PostcodeCode | DE-065-17 | Haulier address postal code |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:ServiceProviderTradeParty > ram:TelephoneUniversalCommunication > [items] > ram:CompleteNumber | DE-065-20 | Haulier phone number |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:TypeCode | DE-065-09 | Vehicle type, coded |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:VINID | DE-065-05 | Vehicle identification number (VIN) |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:SpecifiedTransportCargo > ram:AssociatedCommodityCargo > [items] > ram:InTransitUnitQuantity | DE-045-26 | Cargo quantity in transit |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:SpecifiedTransportCargo > ram:AssociatedCommodityCargo > [items] > ram:InTransitWeightMeasure | DE-045-27 | Cargo weight in transit |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:SpecifiedTransportCargo > ram:AssociatedCommodityCargo > [items] > ram:TypeCode | DE-045-17 | Type of cargo, coded |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:SpecifiedTransportCargo > ram:AssociatedCommodityCargo > [items] > ram:UnitQuantity | DE-045-22 | Cargo quantity on board |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:SpecifiedTransportCargo > ram:AssociatedCommodityCargo > [items] > ram:WeightMeasure | DE-045-23 | Cargo weight on board |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:TransportEquipmentUnitQuantity | DE-045-07 | Total numbers of containers, TEU |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:UnloadingPortOperationsPortOperationEvent > ram:DomesticPassiveTransportMeansUnitQuantity | DE-045-06 | Domestic vehicles to unload quantity |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:UnloadingPortOperationsPortOperationEvent > ram:ForeignPassiveTransportMeansUnitQuantity | DE-045-04 | Foreign vehicles to unload quantity |
| cga:CGA > cga:SpecifiedLogisticsTransportMovement > ram:PreviousCargoDescription | DE-047-20 | Previous cargo description |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:BoardingStatusCode | DE-047-35 | Cargo boarding status, coded |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:CargoFlowID | DE-045-24 | Cargo flow identification number |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:CargoOperationCode | DE-047-42 | Cargo operation, coded |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:CargoRestrictedIndicator | DE-047-44 | Cargo restricted indicator |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:CarrierAcceptanceLogisticsLocation > ram:CountryID | DE-047-10 | Goods consigned country, coded |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:CarrierAcceptanceLogisticsLocation > ram:Name | DE-047-11 | Goods consigned location name |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:CommercialCode | DE-047-36 | Cargo commercial code |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:CustomsAssociatedManifestDocument > [items] > ram:ID | DE-047-34 | Manifest transit number |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:CustomsAssociatedManifestDocument > [items] > ram:TypeCode | DE-045-01 | Manifest type, coded |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:DeliveryTransportEvent > ram:OccurrenceLogisticsLocation > ram:CountryID | DE-047-08 | Country of delivery, coded |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:DeliveryTransportEvent > ram:OccurrenceLogisticsLocation > ram:Name | DE-047-09 | Place of delivery name |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:FinalDestinationLogisticsLocation > ram:Name | DE-047-12 | Place of destination name |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:FreightForwarderTradeParty > ram:PostalTradeAddress > ram:CountryID | DE-047-24 | Shipper or freight forwarder country, coded |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:FreightForwarderTradeParty > ram:PostalTradeAddress > ram:FreeForm | DE-047-23 | Shipper or freight forwarder name and address |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:GrossWeightMeasure | DE-047-16 | Total gross mass |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:HandlingInstructions > ram:Description | DE-047-32 | Cargo handling installation description |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:HNSCode | DE-047-43 | HNS group, coded |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:HumanitarianAidIndicator | DE-047-29 | Humanitarian aid indicator |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:AssociatedReferencedLogisticsTransportEquipment > [items] > ram:ID | DE-051-01 | Transport equipment identification number |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:AssociatedReferencedLogisticsTransportEquipment > [items] > ram:SequenceNumeric | DE-001-02 | Sequence number |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:GrossVolumeMeasure | DE-048-02 | Cargo item gross volume |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:GrossWeightMeasure | DE-048-03 | Cargo item gross mass |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:LowValueItemQuantity | DE-048-12 | Low value items quantity |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:NatureIdentificationTransportCargo > ram:Identification | DE-048-04 | Description of goods |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:NatureIdentificationTransportCargo > ram:IMSBCBulkClassificationCode | DE-048-15 | Cargo item IMSBC group, coded |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:NetWeightMeasure | DE-048-13 | Cargo item net mass |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:SequenceNumeric | DE-048-01 | Cargo item number |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:TransportLogisticsPackage > [items] > ram:ItemQuantity | DE-048-09 | Cargo Item number of packages |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:TransportLogisticsPackage > [items] > ram:PhysicalLogisticsShippingMarks > ram:Marking | DE-048-08 | Cargo item marks and numbers |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:TransportLogisticsPackage > [items] > ram:TypeCode | DE-048-10 | Cargo Item Package type, coded |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:TypeCode | DE-048-05 | Cargo item HS Code |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:LoadingStatusTypeCode | DE-047-39 | Goods type, coded |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:LoadingTransportEvent > ram:OccurrenceLogisticsLocation > ram:ID | DE-047-01 | Port of loading, coded |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:MandatoryENSDeclarationIndicator | DE-047-33 | Mandatory ENS indicator |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:MilitaryEffectsIndicator | DE-047-30 | Military effects indicator |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:MovementTypeCode | DE-047-41 | Consignment transhipped or export, coded |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:OnCarriageLogisticsTransportMovement > ram:ModeCode | DE-047-28 | Next transport mode, coded |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:OriginalLoadingPortName | DE-047-07 | Original port of loading name |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:PhytosanitaryPlantTypeName | DE-047-46 | Type of plant |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:PortDuesSimplifiedRegimeIndicator | DE-047-37 | Simplified estimation indicator |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:PreCarriageLogisticsTransportMovement > ram:ModeCode | DE-047-27 | Previous transport mode, coded |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:RestrictedCargoPurpose | DE-047-45 | Purpose of restricted cargo |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:SequenceNumeric | DE-001-02 | Sequence number |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:ShipStoresIndicator | DE-047-31 | Supplies indicator |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:TransportContractReferencedDocument > ram:ID | DE-056-02 | Transport contract number |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:TransportContractReferencedDocument > ram:TypeCode | DE-056-03 | Transport document type |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:TransportService > ram:InvoiceeTradeParty > ram:PostalTradeAddress > ram:CountryID | DE-047-26 | Invoicee country, coded |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:TransportService > ram:InvoiceeTradeParty > ram:PostalTradeAddress > ram:FreeForm | DE-047-25 | Invoicee name and address details |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:TransportService > ram:PrepaidIndicator | DE-047-19 | Prepaid indicator |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:TransportService > ram:ServiceRequirementCode | DE-047-21 | Consignment service requirement, coded |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:TransportServicesBuyerTradeParty > ram:DefinedTradeContact > ram:PersonName | DE-056-20 | Account holder contact name |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:TransportServicesBuyerTradeParty > ram:EmailURIUniversalCommunication > [items] > ram:URIID | DE-056-19 | Account holder email |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:TransportServicesBuyerTradeParty > ram:Name | DE-056-09 | Account holder name |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:TransportServicesBuyerTradeParty > ram:OwnedCreditorFinancialAccount > ram:AccountName | DE-056-07 | Account short name |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:TransportServicesBuyerTradeParty > ram:OwnedCreditorFinancialAccount > ram:ProprietaryID | DE-056-08 | Account reference number |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:TransportServicesBuyerTradeParty > ram:PostalTradeAddress > ram:AdditionalStreetName | DE-056-11 | Account holder address street additional line |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:TransportServicesBuyerTradeParty > ram:PostalTradeAddress > ram:BuildingNumber | DE-056-12 | Account holder address number |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:TransportServicesBuyerTradeParty > ram:PostalTradeAddress > ram:CityName | DE-056-17 | Account holder address city |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:TransportServicesBuyerTradeParty > ram:PostalTradeAddress > ram:CountryID | DE-056-15 | Account holder address country |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:TransportServicesBuyerTradeParty > ram:PostalTradeAddress > ram:CountrySubDivisionName | DE-056-14 | Account holder address sub-division |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:TransportServicesBuyerTradeParty > ram:PostalTradeAddress > ram:PostcodeCode | DE-056-16 | Account holder address postal code |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:TransportServicesBuyerTradeParty > ram:PostalTradeAddress > ram:PostOfficeBox | DE-056-13 | Account holder address P.O. box |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:TransportServicesBuyerTradeParty > ram:PostalTradeAddress > ram:StreetName | DE-056-10 | Account holder address street |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:TransportServicesBuyerTradeParty > ram:TelephoneUniversalCommunication > [items] > ram:CompleteNumber | DE-056-18 | Account holder telephone number |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:TransshipmentIntendedIndicator | DE-047-40 | Transhipment consignment indicator |
| cga:CGA > cga:SpecifiedSupplyChainConsignment > [items] > ram:UnloadingTransportEvent > ram:OccurrenceLogisticsLocation > ram:ID | DE-047-04 | Port of discharge, coded |

<a id="formality-cgd"></a>
## CGD

- Mapping count: 101

| Tree path | DE ID | DE name |
| --- | --- | --- |
| cgd:CGD > cgd:ExchangedDeclaration > ram:StatementTypeCode | DE-003-07 | Declarant statement, coded |
| cgd:CGD > cgd:ExchangedDocument > ram:Remarks | DE-003-01 | Remarks |
| cgd:CGD > cgd:SpecifiedLogisticsTransportEquipment > [items] > ram:CategoryCode | DE-051-22 | Transport equipment category, coded |
| cgd:CGD > cgd:SpecifiedLogisticsTransportEquipment > [items] > ram:CharacteristicCode | DE-051-13 | Transport equipment size and type, coded |
| cgd:CGD > cgd:SpecifiedLogisticsTransportEquipment > [items] > ram:GrossVolumeMeasure | DE-051-11 | Container goods volume |
| cgd:CGD > cgd:SpecifiedLogisticsTransportEquipment > [items] > ram:ID | DE-051-01 | Transport equipment identification number |
| cgd:CGD > cgd:SpecifiedLogisticsTransportEquipment > [items] > ram:LinearSpatialDimension > ram:TypeCode | DE-051-15 | Container overdimension, coded |
| cgd:CGD > cgd:SpecifiedLogisticsTransportEquipment > [items] > ram:LinearSpatialDimension > ram:ValueMeasure | DE-051-16 | Oversize measure |
| cgd:CGD > cgd:SpecifiedLogisticsTransportEquipment > [items] > ram:MaritimeContainerCharacteristicCode | DE-051-17 | Container size and type, coded |
| cgd:CGD > cgd:SpecifiedLogisticsTransportEquipment > [items] > ram:NonSelfPropelledUnitCode | DE-045-32 | Mobile non-self-propelled unit type, coded |
| cgd:CGD > cgd:SpecifiedLogisticsTransportEquipment > [items] > ram:OperationalStatusCode | DE-051-18 | Transport equipment status, coded |
| cgd:CGD > cgd:SpecifiedLogisticsTransportEquipment > [items] > ram:OwnerTradeParty > ram:Name | DE-051-12 | Container owner or supplier name |
| cgd:CGD > cgd:SpecifiedLogisticsTransportEquipment > [items] > ram:SequenceNumeric | DE-001-02 | Sequence number |
| cgd:CGD > cgd:SpecifiedLogisticsTransportEquipment > [items] > ram:SettingTransportSettingTemperature > ram:ValueMeasure | DE-047-22 | Temperature setting |
| cgd:CGD > cgd:SpecifiedLogisticsTransportEquipment > [items] > ram:TareWeightMeasure | DE-051-06 | Container tare weight |
| cgd:CGD > cgd:SpecifiedLogisticsTransportEquipment > [items] > ram:TransportMovementStatusCode | DE-051-18 | Transport equipment status, coded |
| cgd:CGD > cgd:SpecifiedLogisticsTransportEquipment > [items] > ram:VerifiedGrossWeightMeasure | DE-051-19 | Verified gross mass |
| cgd:CGD > cgd:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:EmptyTransportEquipmentUnitQuantity | DE-045-08 | Number of empty containers TEU on board |
| cgd:CGD > cgd:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:AttachedAssociatedTransportEquipment > [items] > ram:ID | DE-051-01 | Transport equipment identification number |
| cgd:CGD > cgd:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:AttachedAssociatedTransportEquipment > [items] > ram:SequenceNumeric | DE-001-02 | Sequence number |
| cgd:CGD > cgd:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:BrandName | DE-065-07 | Vehicle make |
| cgd:CGD > cgd:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:CargoDescription | DE-065-23 | Vehicle cargo description |
| cgd:CGD > cgd:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:DriverQuantity | DE-065-14 | Vehicle number of drivers |
| cgd:CGD > cgd:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:GrossWeightMeasure | DE-065-12 | Vehicle gross weight |
| cgd:CGD > cgd:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:LicencePlateID | DE-065-04 | Vehicle license plate number |
| cgd:CGD > cgd:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:LoadedIndicator | DE-065-10 | Vehicle loaded indicator |
| cgd:CGD > cgd:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:ModelName | DE-065-08 | Vehicle model |
| cgd:CGD > cgd:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:NetWeightMeasure | DE-065-11 | Vehicle cargo net weight |
| cgd:CGD > cgd:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:OnboardTransportPerson > [items] > ram:FamilyName | DE-065-02 | Driver last name |
| cgd:CGD > cgd:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:OnboardTransportPerson > [items] > ram:GivenName | DE-065-01 | Driver first name |
| cgd:CGD > cgd:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:OnboardTransportPerson > [items] > ram:TechnicalID | DE-035-40 | Unique passenger technical identifier |
| cgd:CGD > cgd:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:PreBoardingNotificationID | DE-065-22 | Pre boarding notification number |
| cgd:CGD > cgd:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:RegistrationTradeCountry > ram:ID | DE-065-13 | Vehicle country of registration, coded |
| cgd:CGD > cgd:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:ReservationID | DE-065-03 | Vehicle ticket number |
| cgd:CGD > cgd:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:SequenceNumeric | DE-001-02 | Sequence number |
| cgd:CGD > cgd:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:ServiceProviderTradeParty > ram:EmailURIUniversalCommunication > [items] > ram:URIID | DE-065-21 | Haulier email |
| cgd:CGD > cgd:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:ServiceProviderTradeParty > ram:Name | DE-065-15 | Haulier name |
| cgd:CGD > cgd:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:ServiceProviderTradeParty > ram:PostalTradeAddress > ram:CityName | DE-065-18 | Haulier address city name |
| cgd:CGD > cgd:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:ServiceProviderTradeParty > ram:PostalTradeAddress > ram:CountryID | DE-065-19 | Haulier country, coded |
| cgd:CGD > cgd:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:ServiceProviderTradeParty > ram:PostalTradeAddress > ram:LineOne | DE-065-16 | Haulier address street and number |
| cgd:CGD > cgd:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:ServiceProviderTradeParty > ram:PostalTradeAddress > ram:PostcodeCode | DE-065-17 | Haulier address postal code |
| cgd:CGD > cgd:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:ServiceProviderTradeParty > ram:TelephoneUniversalCommunication > [items] > ram:CompleteNumber | DE-065-20 | Haulier phone number |
| cgd:CGD > cgd:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:TypeCode | DE-065-09 | Vehicle type, coded |
| cgd:CGD > cgd:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:RelatedPassiveTransportMeans > [items] > ram:VINID | DE-065-05 | Vehicle identification number (VIN) |
| cgd:CGD > cgd:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:SpecifiedTransportCargo > ram:AssociatedCommodityCargo > [items] > ram:InTransitUnitQuantity | DE-045-26 | Cargo quantity in transit |
| cgd:CGD > cgd:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:SpecifiedTransportCargo > ram:AssociatedCommodityCargo > [items] > ram:InTransitWeightMeasure | DE-045-27 | Cargo weight in transit |
| cgd:CGD > cgd:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:SpecifiedTransportCargo > ram:AssociatedCommodityCargo > [items] > ram:TypeCode | DE-045-17 | Type of cargo, coded |
| cgd:CGD > cgd:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:SpecifiedTransportCargo > ram:AssociatedCommodityCargo > [items] > ram:UnitQuantity | DE-045-22 | Cargo quantity on board |
| cgd:CGD > cgd:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:SpecifiedTransportCargo > ram:AssociatedCommodityCargo > [items] > ram:WeightMeasure | DE-045-23 | Cargo weight on board |
| cgd:CGD > cgd:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OnboardPortOperationsPortOperationEvent > ram:TransportEquipmentUnitQuantity | DE-045-07 | Total numbers of containers, TEU |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:CargoFlowID | DE-045-24 | Cargo flow identification number |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:CargoOperationCode | DE-047-42 | Cargo operation, coded |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:CargoRestrictedIndicator | DE-047-44 | Cargo restricted indicator |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:CarrierAcceptanceLogisticsLocation > ram:CountryID | DE-047-10 | Goods consigned country, coded |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:CommercialCode | DE-047-36 | Cargo commercial code |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:CustomsAssociatedManifestDocument > [items] > ram:ID | DE-047-34 | Manifest transit number |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:CustomsAssociatedManifestDocument > [items] > ram:TypeCode | DE-045-01 | Manifest type, coded |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:DeliveryTransportEvent > ram:OccurrenceLogisticsLocation > ram:CountryID | DE-047-08 | Country of delivery, coded |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:DeliveryTransportEvent > ram:OccurrenceLogisticsLocation > ram:Name | DE-047-09 | Place of delivery name |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:FreightForwarderTradeParty > ram:PostalTradeAddress > ram:CountryID | DE-047-24 | Shipper or freight forwarder country, coded |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:FreightForwarderTradeParty > ram:PostalTradeAddress > ram:FreeForm | DE-047-23 | Shipper or freight forwarder name and address |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:GrossWeightMeasure | DE-047-16 | Total gross mass |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:HandlingInstructions > ram:Description | DE-047-32 | Cargo handling installation description |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:HNSCode | DE-047-43 | HNS group, coded |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:AssociatedReferencedLogisticsTransportEquipment > [items] > ram:ID | DE-051-01 | Transport equipment identification number |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:AssociatedReferencedLogisticsTransportEquipment > [items] > ram:SequenceNumeric | DE-001-02 | Sequence number |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:GrossVolumeMeasure | DE-048-02 | Cargo item gross volume |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:GrossWeightMeasure | DE-048-03 | Cargo item gross mass |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:NatureIdentificationTransportCargo > ram:Identification | DE-048-04 | Description of goods |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:NatureIdentificationTransportCargo > ram:IMSBCBulkClassificationCode | DE-048-15 | Cargo item IMSBC group, coded |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:SequenceNumeric | DE-048-01 | Cargo item number |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:TransportLogisticsPackage > [items] > ram:ItemQuantity | DE-048-09 | Cargo Item number of packages |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:TransportLogisticsPackage > [items] > ram:PhysicalLogisticsShippingMarks > ram:Marking | DE-048-08 | Cargo item marks and numbers |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:TransportLogisticsPackage > [items] > ram:TypeCode | DE-048-10 | Cargo Item Package type, coded |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:TypeCode | DE-048-05 | Cargo item HS Code |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:LoadingTransportEvent > ram:OccurrenceLogisticsLocation > ram:ID | DE-047-01 | Port of loading, coded |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:MovementTypeCode | DE-047-41 | Consignment transhipped or export, coded |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:OnCarriageLogisticsTransportMovement > ram:ModeCode | DE-047-28 | Next transport mode, coded |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:OriginalLoadingPortName | DE-047-07 | Original port of loading name |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:PhytosanitaryPlantTypeName | DE-047-46 | Type of plant |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:PreCarriageLogisticsTransportMovement > ram:ModeCode | DE-047-27 | Previous transport mode, coded |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:RestrictedCargoPurpose | DE-047-45 | Purpose of restricted cargo |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:SequenceNumeric | DE-001-02 | Sequence number |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:TransportContractReferencedDocument > ram:ID | DE-056-02 | Transport contract number |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:TransportContractReferencedDocument > ram:TypeCode | DE-056-03 | Transport document type |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:TransportService > ram:PrepaidIndicator | DE-047-19 | Prepaid indicator |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:TransportServicesBuyerTradeParty > ram:DefinedTradeContact > ram:PersonName | DE-056-20 | Account holder contact name |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:TransportServicesBuyerTradeParty > ram:EmailURIUniversalCommunication > [items] > ram:URIID | DE-056-19 | Account holder email |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:TransportServicesBuyerTradeParty > ram:Name | DE-056-09 | Account holder name |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:TransportServicesBuyerTradeParty > ram:OwnedCreditorFinancialAccount > ram:AccountName | DE-056-07 | Account short name |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:TransportServicesBuyerTradeParty > ram:OwnedCreditorFinancialAccount > ram:ProprietaryID | DE-056-08 | Account reference number |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:TransportServicesBuyerTradeParty > ram:PostalTradeAddress > ram:AdditionalStreetName | DE-056-11 | Account holder address street additional line |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:TransportServicesBuyerTradeParty > ram:PostalTradeAddress > ram:BuildingNumber | DE-056-12 | Account holder address number |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:TransportServicesBuyerTradeParty > ram:PostalTradeAddress > ram:CityName | DE-056-17 | Account holder address city |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:TransportServicesBuyerTradeParty > ram:PostalTradeAddress > ram:CountryID | DE-056-15 | Account holder address country |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:TransportServicesBuyerTradeParty > ram:PostalTradeAddress > ram:CountrySubDivisionName | DE-056-14 | Account holder address sub-division |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:TransportServicesBuyerTradeParty > ram:PostalTradeAddress > ram:PostcodeCode | DE-056-16 | Account holder address postal code |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:TransportServicesBuyerTradeParty > ram:PostalTradeAddress > ram:PostOfficeBox | DE-056-13 | Account holder address P.O. box |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:TransportServicesBuyerTradeParty > ram:PostalTradeAddress > ram:StreetName | DE-056-10 | Account holder address street |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:TransportServicesBuyerTradeParty > ram:TelephoneUniversalCommunication > [items] > ram:CompleteNumber | DE-056-18 | Account holder telephone number |
| cgd:CGD > cgd:SpecifiedSupplyChainConsignment > [items] > ram:UnloadingTransportEvent > ram:OccurrenceLogisticsLocation > ram:ID | DE-047-04 | Port of discharge, coded |

<a id="formality-coa"></a>
## COA

- Mapping count: 1

| Tree path | DE ID | DE name |
| --- | --- | --- |
| coa:COA > coa:ExchangedDocument > ram:Remarks | DE-003-01 | Remarks |

<a id="formality-crt"></a>
## CRT

- Mapping count: 22

| Tree path | DE ID | DE name |
| --- | --- | --- |
| crt:CRT > crt:ExchangedDocument > ram:AttachedSpecifiedBinaryFile > [items] > ram:Description | DE-003-03 | Attachment description |
| crt:CRT > crt:ExchangedDocument > ram:AttachedSpecifiedBinaryFile > [items] > ram:FileName | DE-003-05 | Attachment file name |
| crt:CRT > crt:ExchangedDocument > ram:AttachedSpecifiedBinaryFile > [items] > ram:MIMECode | DE-003-06 | Attachment MIME type |
| crt:CRT > crt:ExchangedDocument > ram:AttachedSpecifiedBinaryFile > [items] > ram:TypeCode | DE-003-02 | Attachment type, coded |
| crt:CRT > crt:ExchangedDocument > ram:Remarks | DE-003-01 | Remarks |
| crt:CRT > crt:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:MaritimeApplicableSpecifiedCertificate > [items] > ram:AnnualInspectionDate | DE-006-17 | Certificate annual inspection date |
| crt:CRT > crt:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:MaritimeApplicableSpecifiedCertificate > [items] > ram:Description | DE-006-04 | Certificate description |
| crt:CRT > crt:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:MaritimeApplicableSpecifiedCertificate > [items] > ram:EffectiveFromDate | DE-006-15 | Certificate valid date from |
| crt:CRT > crt:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:MaritimeApplicableSpecifiedCertificate > [items] > ram:ExpiryDate | DE-006-11 | Certificate date of expiry |
| crt:CRT > crt:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:MaritimeApplicableSpecifiedCertificate > [items] > ram:ID | DE-006-03 | Certificate identifier |
| crt:CRT > crt:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:MaritimeApplicableSpecifiedCertificate > [items] > ram:Information | DE-006-12 | Certificate comments |
| crt:CRT > crt:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:MaritimeApplicableSpecifiedCertificate > [items] > ram:IssuanceTradeLocation > ram:ID | DE-006-13 | Certificate place of issue, coded |
| crt:CRT > crt:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:MaritimeApplicableSpecifiedCertificate > [items] > ram:IssuanceTradeLocation > ram:Name | DE-006-14 | Certificate place of issue name |
| crt:CRT > crt:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:MaritimeApplicableSpecifiedCertificate > [items] > ram:IssueDate | DE-006-10 | Certificate issue date |
| crt:CRT > crt:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:MaritimeApplicableSpecifiedCertificate > [items] > ram:IssuerCertificateIssuerParty > ram:ID | DE-006-08 | Certificate issuer, coded |
| crt:CRT > crt:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:MaritimeApplicableSpecifiedCertificate > [items] > ram:IssuerCertificateIssuerParty > ram:Name | DE-006-09 | Certificate issuer name |
| crt:CRT > crt:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:MaritimeApplicableSpecifiedCertificate > [items] > ram:IssuerCertificateIssuerParty > ram:PostalTradeAddress > ram:CountryID | DE-006-07 | Certificate issuer flag state, coded |
| crt:CRT > crt:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:MaritimeApplicableSpecifiedCertificate > [items] > ram:IssuerCertificateIssuerParty > ram:TypeCode | DE-006-06 | Certificate issuer type, coded |
| crt:CRT > crt:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:MaritimeApplicableSpecifiedCertificate > [items] > ram:StatusCode | DE-006-05 | Certificate status, coded |
| crt:CRT > crt:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:MaritimeApplicableSpecifiedCertificate > [items] > ram:TypeCode | DE-006-01 | Certificate type, coded |
| crt:CRT > crt:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:MaritimeApplicableSpecifiedCertificate > [items] > ram:ValidIndicator | DE-006-02 | Valid certificate indicator |
| crt:CRT > crt:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:MaritimeApplicableSpecifiedCertificate > [items] > ram:ValidityExtendedUntilDate | DE-006-16 | Certificate extension end date |

<a id="formality-cwa"></a>
## CWA

- Mapping count: 33

| Tree path | DE ID | DE name |
| --- | --- | --- |
| cwa:CWA > cwa:ExchangedDocument > ram:Remarks | DE-003-01 | Remarks |
| cwa:CWA > cwa:ExchangedDocument > ram:SubtypeCode > [items] | DE-002-11 | Message subtype, coded |
| cwa:CWA > cwa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AshoreLicenceIndicator | DE-039-01 | License to be ashore indicator |
| cwa:CWA > cwa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:BirthCountryID | DE-035-07 | Person country of birth, coded |
| cwa:CWA > cwa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:BirthDate | DE-035-05 | Person date of birth |
| cwa:CWA > cwa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:BirthplaceName | DE-035-06 | Person place of birth name |
| cwa:CWA > cwa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:Comments | DE-035-27 | Person comments |
| cwa:CWA > cwa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:CrewAccessControlReferencedDocument > [items] > ram:EffectiveSpecifiedPeriod > ram:EndDate | DE-040-03 | Crew access control card validity end date |
| cwa:CWA > cwa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:CrewAccessControlReferencedDocument > [items] > ram:EffectiveSpecifiedPeriod > ram:StartDate | DE-040-02 | Crew access control card validity start date |
| cwa:CWA > cwa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:CrewAccessControlReferencedDocument > [items] > ram:ID | DE-040-01 | Crew access control card number |
| cwa:CWA > cwa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:CrewAccessControlReferencedDocument > [items] > ram:IssueDate | DE-040-04 | Crew access control card issue date |
| cwa:CWA > cwa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:DisembarkationDate | DE-035-12 | Person disembarkation date |
| cwa:CWA > cwa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:DisembarkationLogisticsLocation > ram:ID | DE-035-11 | Person port of disembarkation, coded |
| cwa:CWA > cwa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:EmbarkationDateTime | DE-035-10 | Person embarkation date and time |
| cwa:CWA > cwa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:EmbarkationLogisticsLocation > ram:ID | DE-035-09 | Person port of embarkation, coded |
| cwa:CWA > cwa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:FamilyName | DE-035-02 | Person family name |
| cwa:CWA > cwa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:GenderCode | DE-035-08 | Person gender, coded |
| cwa:CWA > cwa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:GivenName | DE-035-03 | Person given name |
| cwa:CWA > cwa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:IrregularDisembarkationStatement | DE-035-28 | Irregular disembarkation declaration |
| cwa:CWA > cwa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:MovementTypeCode | DE-035-26 | Person movement type, coded |
| cwa:CWA > cwa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:NationalityTradeCountry > [items] > ram:AdditionalIdentificationID | DE-035-04 | Person nationality, coded |
| cwa:CWA > cwa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:ResidencePermitReferencedDocument > ram:ID | DE-039-09 | Residence permit number |
| cwa:CWA > cwa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:ResidencePermitReferencedDocument > ram:IssueLogisticsLocation > ram:CountryID | DE-039-04 | Residence permit issuing country, coded |
| cwa:CWA > cwa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:RoleCode | DE-035-14 | Crewmember rank or rating, coded |
| cwa:CWA > cwa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:SequenceNumeric | DE-001-02 | Sequence number |
| cwa:CWA > cwa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TravelIdentityReferencedDocument > ram:EffectiveSpecifiedPeriod > ram:EndDate | DE-035-22 | Person identity or travel document expiry date |
| cwa:CWA > cwa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TravelIdentityReferencedDocument > ram:ID | DE-035-17 | Person identity or travel document number |
| cwa:CWA > cwa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TravelIdentityReferencedDocument > ram:IssueDate | DE-035-21 | Person identity or travel document issue date |
| cwa:CWA > cwa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TravelIdentityReferencedDocument > ram:IssueLogisticsLocation > ram:CountryID | DE-035-18 | Person identity or travel document issuing nation, coded |
| cwa:CWA > cwa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TravelIdentityReferencedDocument > ram:IssuerTradeParty > ram:Name | DE-035-19 | Person identity or travel document issuer name |
| cwa:CWA > cwa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TravelIdentityReferencedDocument > ram:TypeCode | DE-035-16 | Person identity or travel document type, coded |
| cwa:CWA > cwa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TravelVisaReferencedDocument > ram:ID | DE-039-10 | Person visa number |
| cwa:CWA > cwa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TravelVisaReferencedDocument > ram:IssueLogisticsLocation > ram:CountryID | DE-039-11 | Person visa issuing country, coded |

<a id="formality-cwd"></a>
## CWD

- Mapping count: 33

| Tree path | DE ID | DE name |
| --- | --- | --- |
| cwd:CWD > cwd:ExchangedDocument > ram:Remarks | DE-003-01 | Remarks |
| cwd:CWD > cwd:ExchangedDocument > ram:SubtypeCode > [items] | DE-002-11 | Message subtype, coded |
| cwd:CWD > cwd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AshoreLicenceIndicator | DE-039-01 | License to be ashore indicator |
| cwd:CWD > cwd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:BirthCountryID | DE-035-07 | Person country of birth, coded |
| cwd:CWD > cwd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:BirthDate | DE-035-05 | Person date of birth |
| cwd:CWD > cwd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:BirthplaceName | DE-035-06 | Person place of birth name |
| cwd:CWD > cwd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:Comments | DE-035-27 | Person comments |
| cwd:CWD > cwd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:CrewAccessControlReferencedDocument > [items] > ram:EffectiveSpecifiedPeriod > ram:EndDate | DE-040-03 | Crew access control card validity end date |
| cwd:CWD > cwd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:CrewAccessControlReferencedDocument > [items] > ram:EffectiveSpecifiedPeriod > ram:StartDate | DE-040-02 | Crew access control card validity start date |
| cwd:CWD > cwd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:CrewAccessControlReferencedDocument > [items] > ram:ID | DE-040-01 | Crew access control card number |
| cwd:CWD > cwd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:CrewAccessControlReferencedDocument > [items] > ram:IssueDate | DE-040-04 | Crew access control card issue date |
| cwd:CWD > cwd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:DisembarkationDate | DE-035-12 | Person disembarkation date |
| cwd:CWD > cwd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:DisembarkationLogisticsLocation > ram:ID | DE-035-11 | Person port of disembarkation, coded |
| cwd:CWD > cwd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:EmbarkationDateTime | DE-035-10 | Person embarkation date and time |
| cwd:CWD > cwd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:EmbarkationLogisticsLocation > ram:ID | DE-035-09 | Person port of embarkation, coded |
| cwd:CWD > cwd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:FamilyName | DE-035-02 | Person family name |
| cwd:CWD > cwd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:GenderCode | DE-035-08 | Person gender, coded |
| cwd:CWD > cwd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:GivenName | DE-035-03 | Person given name |
| cwd:CWD > cwd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:IrregularDisembarkationStatement | DE-035-28 | Irregular disembarkation declaration |
| cwd:CWD > cwd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:MovementTypeCode | DE-035-26 | Person movement type, coded |
| cwd:CWD > cwd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:NationalityTradeCountry > [items] > ram:AdditionalIdentificationID | DE-035-04 | Person nationality, coded |
| cwd:CWD > cwd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:ResidencePermitReferencedDocument > ram:ID | DE-039-09 | Residence permit number |
| cwd:CWD > cwd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:ResidencePermitReferencedDocument > ram:IssueLogisticsLocation > ram:CountryID | DE-039-04 | Residence permit issuing country, coded |
| cwd:CWD > cwd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:RoleCode | DE-035-14 | Crewmember rank or rating, coded |
| cwd:CWD > cwd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:SequenceNumeric | DE-001-02 | Sequence number |
| cwd:CWD > cwd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TravelIdentityReferencedDocument > ram:EffectiveSpecifiedPeriod > ram:EndDate | DE-035-22 | Person identity or travel document expiry date |
| cwd:CWD > cwd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TravelIdentityReferencedDocument > ram:ID | DE-035-17 | Person identity or travel document number |
| cwd:CWD > cwd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TravelIdentityReferencedDocument > ram:IssueDate | DE-035-21 | Person identity or travel document issue date |
| cwd:CWD > cwd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TravelIdentityReferencedDocument > ram:IssueLogisticsLocation > ram:CountryID | DE-035-18 | Person identity or travel document issuing nation, coded |
| cwd:CWD > cwd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TravelIdentityReferencedDocument > ram:IssuerTradeParty > ram:Name | DE-035-19 | Person identity or travel document issuer name |
| cwd:CWD > cwd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TravelIdentityReferencedDocument > ram:TypeCode | DE-035-16 | Person identity or travel document type, coded |
| cwd:CWD > cwd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TravelVisaReferencedDocument > ram:ID | DE-039-10 | Person visa number |
| cwd:CWD > cwd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TravelVisaReferencedDocument > ram:IssueLogisticsLocation > ram:CountryID | DE-039-11 | Person visa issuing country, coded |

<a id="formality-due"></a>
## DUE

- Mapping count: 24

| Tree path | DE ID | DE name |
| --- | --- | --- |
| due:DUE > due:ExchangedDeclaration > ram:PreviousID | DE-002-12 | Previous formality LRN |
| due:DUE > due:ExchangedDocument > ram:Remarks | DE-003-01 | Remarks |
| due:DUE > due:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ApplicableSpecifiedFairwayPortDues > ram:ApplicableSpecifiedPayment > [items] > ram:DueAmount | DE-077-06 | Due amount |
| due:DUE > due:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ApplicableSpecifiedFairwayPortDues > ram:ApplicableSpecifiedPayment > [items] > ram:DueDate | DE-077-08 | Due expiring date |
| due:DUE > due:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ApplicableSpecifiedFairwayPortDues > ram:ApplicableSpecifiedPayment > [items] > ram:MethodCode | DE-077-22 | Due method of payment, coded |
| due:DUE > due:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ApplicableSpecifiedFairwayPortDues > ram:ApplicableSpecifiedPayment > [items] > ram:PaidLogisticsLocation > ram:ID | DE-077-09 | Due payment port, coded |
| due:DUE > due:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ApplicableSpecifiedFairwayPortDues > ram:ApplicableSpecifiedPayment > [items] > ram:ProofID | DE-077-10 | Due payment identification number |
| due:DUE > due:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ApplicableSpecifiedFairwayPortDues > ram:ApplicableSpecifiedPayment > [items] > ram:ReceivedDate | DE-077-07 | Due payment date |
| due:DUE > due:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ApplicableSpecifiedFairwayPortDues > ram:ApplicableSpecifiedPayment > [items] > ram:TypeCode | DE-077-05 | Due type, coded |
| due:DUE > due:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ApplicableSpecifiedFairwayPortDues > ram:DeclarationSubmissionIndicator | DE-077-01 | Fairway dues declaration submission indicator |
| due:DUE > due:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ApplicableSpecifiedFairwayPortDues > ram:DefinitiveDeclarationIndicator | DE-077-04 | Definitive declaration indicator |
| due:DUE > due:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ApplicableSpecifiedFairwayPortDues > ram:LiableTradeParty > ram:AdditionalID | DE-077-12 | Fairway due liable party additional identification number |
| due:DUE > due:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ApplicableSpecifiedFairwayPortDues > ram:LiableTradeParty > ram:EmailURIUniversalCommunication > ram:URIID | DE-077-14 | Fairway due liable party email address |
| due:DUE > due:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ApplicableSpecifiedFairwayPortDues > ram:LiableTradeParty > ram:ID | DE-077-11 | Fairway due liable party identification number |
| due:DUE > due:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ApplicableSpecifiedFairwayPortDues > ram:LiableTradeParty > ram:Name | DE-077-13 | Fairway due liable party name |
| due:DUE > due:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ApplicableSpecifiedFairwayPortDues > ram:LiableTradeParty > ram:PostalTradeAddress > ram:AdditionalStreetName | DE-077-16 | Fairway due liable party address street additional line |
| due:DUE > due:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ApplicableSpecifiedFairwayPortDues > ram:LiableTradeParty > ram:PostalTradeAddress > ram:BuildingNumber | DE-077-17 | Fairway due liable party address number |
| due:DUE > due:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ApplicableSpecifiedFairwayPortDues > ram:LiableTradeParty > ram:PostalTradeAddress > ram:CityName | DE-077-19 | Fairway due liable party city  name |
| due:DUE > due:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ApplicableSpecifiedFairwayPortDues > ram:LiableTradeParty > ram:PostalTradeAddress > ram:CountryID | DE-077-20 | Fairway due liable party country, coded |
| due:DUE > due:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ApplicableSpecifiedFairwayPortDues > ram:LiableTradeParty > ram:PostalTradeAddress > ram:PostcodeCode | DE-077-18 | Fairway due liable party postal code |
| due:DUE > due:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ApplicableSpecifiedFairwayPortDues > ram:LiableTradeParty > ram:PostalTradeAddress > ram:StreetName | DE-077-15 | Fairway due liable party address street |
| due:DUE > due:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ApplicableSpecifiedFairwayPortDues > ram:NoDeclarationReasonCode | DE-077-02 | No fairway dues declaration reason, coded |
| due:DUE > due:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ApplicableSpecifiedFairwayPortDues > ram:PartyJointLiabilityIndicator | DE-077-21 | Fairway due liable party indicator |
| due:DUE > due:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ApplicableSpecifiedFairwayPortDues > ram:PeriodicDeclarationIndicator | DE-077-03 | Periodic fairway dues declaration indicator |

<a id="formality-frm"></a>
## FRM

- Mapping count: 0

<a id="formality-hza"></a>
## HZA

- Mapping count: 125

| Tree path | DE ID | DE name |
| --- | --- | --- |
| hza:HZA > hza:ExchangedDeclaration > ram:StatementTypeCode > [items] | DE-003-07 | Declarant statement, coded |
| hza:HZA > hza:ExchangedDocument > ram:AttachedSpecifiedBinaryFile > [items] > ram:Description | DE-003-03 | Attachment description |
| hza:HZA > hza:ExchangedDocument > ram:AttachedSpecifiedBinaryFile > [items] > ram:FileName | DE-003-05 | Attachment file name |
| hza:HZA > hza:ExchangedDocument > ram:AttachedSpecifiedBinaryFile > [items] > ram:MIMECode | DE-003-06 | Attachment MIME type |
| hza:HZA > hza:ExchangedDocument > ram:AttachedSpecifiedBinaryFile > [items] > ram:TypeCode | DE-003-02 | Attachment type, coded |
| hza:HZA > hza:ExchangedDocument > ram:Remarks | DE-003-01 | Remarks |
| hza:HZA > hza:SpecifiedLogisticsTransportEquipment > [items] > ram:AtmosphericPressureMeasure | DE-052-04 | Pressure measure |
| hza:HZA > hza:SpecifiedLogisticsTransportEquipment > [items] > ram:CategoryCode | DE-051-22 | Transport equipment category, coded |
| hza:HZA > hza:SpecifiedLogisticsTransportEquipment > [items] > ram:CharacteristicCode | DE-051-13 | Transport equipment size and type, coded |
| hza:HZA > hza:SpecifiedLogisticsTransportEquipment > [items] > ram:EmptyTankResidueDangerousGoods > ram:HazardClassificationID | DE-050-03 | Empty tank last cargo hazard class, coded |
| hza:HZA > hza:SpecifiedLogisticsTransportEquipment > [items] > ram:EmptyTankResidueDangerousGoods > ram:MaritimePollutantTypeCode | DE-050-04 | Empty tank last cargo marine pollutant type, coded |
| hza:HZA > hza:SpecifiedLogisticsTransportEquipment > [items] > ram:EmptyTankResidueDangerousGoods > ram:ProperShippingName | DE-050-01 | Empty tank last dangerous cargo name |
| hza:HZA > hza:SpecifiedLogisticsTransportEquipment > [items] > ram:EmptyTankResidueDangerousGoods > ram:RegulationCode | DE-050-05 | Empty tank last cargo dangerous goods regulation, coded |
| hza:HZA > hza:SpecifiedLogisticsTransportEquipment > [items] > ram:EmptyTankResidueDangerousGoods > ram:UNDGIdentificationCode | DE-050-02 | Empty tank last cargo UNDG number, coded |
| hza:HZA > hza:SpecifiedLogisticsTransportEquipment > [items] > ram:FumigatedIndicator | DE-052-05 | Fumigated indicator |
| hza:HZA > hza:SpecifiedLogisticsTransportEquipment > [items] > ram:ID | DE-051-01 | Transport equipment identification number |
| hza:HZA > hza:SpecifiedLogisticsTransportEquipment > [items] > ram:MaritimeContainerCharacteristicCode | DE-051-17 | Container size and type, coded |
| hza:HZA > hza:SpecifiedLogisticsTransportEquipment > [items] > ram:OperationalStatusCode | DE-051-18 | Transport equipment status, coded |
| hza:HZA > hza:SpecifiedLogisticsTransportEquipment > [items] > ram:OxygenContentPercent | DE-052-03 | Oxygen content percentage |
| hza:HZA > hza:SpecifiedLogisticsTransportEquipment > [items] > ram:PreviousHoldCargoName | DE-052-07 | Previous goods in holds |
| hza:HZA > hza:SpecifiedLogisticsTransportEquipment > [items] > ram:RelatedVentilationEvent > ram:MethodDescription | DE-052-10 | Ventilation method description |
| hza:HZA > hza:SpecifiedLogisticsTransportEquipment > [items] > ram:RelatedVentilationEvent > ram:OccurrenceSpecifiedPeriod > ram:FormattedEndDateTime | DE-052-09 | Ventilation after fumigation end date time |
| hza:HZA > hza:SpecifiedLogisticsTransportEquipment > [items] > ram:RelatedVentilationEvent > ram:OccurrenceSpecifiedPeriod > ram:FormattedStartDateTime | DE-052-08 | Ventilation after fumigation start date time |
| hza:HZA > hza:SpecifiedLogisticsTransportEquipment > [items] > ram:SequenceNumeric | DE-001-02 | Sequence number |
| hza:HZA > hza:SpecifiedLogisticsTransportEquipment > [items] > ram:SpecifiedApplicableFumigation > ram:ExpertName | DE-053-12 | Fumigation expert name |
| hza:HZA > hza:SpecifiedLogisticsTransportEquipment > [items] > ram:SpecifiedApplicableFumigation > ram:GasParticleMeasure | DE-053-11 | Fumigation gas particle measure |
| hza:HZA > hza:SpecifiedLogisticsTransportEquipment > [items] > ram:SpecifiedApplicableFumigation > ram:MethodDescription | DE-053-06 | Fumigation method description |
| hza:HZA > hza:SpecifiedLogisticsTransportEquipment > [items] > ram:SpecifiedApplicableFumigation > ram:OccurrenceDate | DE-053-04 | Fumigation date |
| hza:HZA > hza:SpecifiedLogisticsTransportEquipment > [items] > ram:SpecifiedApplicableFumigation > ram:OccurrenceLocation | DE-053-05 | Fumigation place identification |
| hza:HZA > hza:SpecifiedLogisticsTransportEquipment > [items] > ram:SpecifiedApplicableFumigation > ram:PrearrivalGasCheckCompletedIndicator | DE-053-09 | Fumigation gas check indicator |
| hza:HZA > hza:SpecifiedLogisticsTransportEquipment > [items] > ram:SpecifiedApplicableFumigation > ram:PrearrivalRemnantsRemovedIndicator | DE-053-13 | Fumigation remnants removed indicator |
| hza:HZA > hza:SpecifiedLogisticsTransportEquipment > [items] > ram:SpecifiedApplicableFumigation > ram:UsedFumigantName | DE-053-02 | Fumigant name |
| hza:HZA > hza:SpecifiedLogisticsTransportEquipment > [items] > ram:SpecifiedApplicableFumigation > ram:VentilatedIndicator | DE-053-07 | Fumigation ventilated indicator |
| hza:HZA > hza:SpecifiedLogisticsTransportEquipment > [items] > ram:StowagePositionID | DE-051-02 | Position on board |
| hza:HZA > hza:SpecifiedLogisticsTransportEquipment > [items] > ram:TankStatusCode | DE-052-01 | Tank status, coded |
| hza:HZA > hza:SpecifiedLogisticsTransportEquipment > [items] > ram:UsedCapacityCode | DE-051-21 | Transport equipment full or empty indicator, coded |
| hza:HZA > hza:SpecifiedLogisticsTransportEquipment > [items] > ram:VentilatedIndicator | DE-052-06 | Cargo tanks ventilated indicator |
| hza:HZA > hza:SpecifiedLogisticsTransportMovement > ram:BalticMOUIndicator | DE-046-08 | Baltic MOU indicator |
| hza:HZA > hza:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ExplosiveIndicator | DE-046-13 | Explosives or fireworks indicator |
| hza:HZA > hza:SpecifiedLogisticsTransportMovement > ram:CargoApplicableTransshipment > [items] > ram:DangerousGoodsStorageLogisticsLocation > ram:Name | DE-046-14 | Dangerous goods transhipment location |
| hza:HZA > hza:SpecifiedLogisticsTransportMovement > ram:CargoApplicableTransshipment > [items] > ram:OccurrenceDateTime | DE-054-10 | Transshipment date time |
| hza:HZA > hza:SpecifiedLogisticsTransportMovement > ram:CargoApplicableTransshipment > [items] > ram:UsedReferencedTransportMeans > ram:CallSignID | DE-054-05 | Transshipment ship call sign |
| hza:HZA > hza:SpecifiedLogisticsTransportMovement > ram:CargoApplicableTransshipment > [items] > ram:UsedReferencedTransportMeans > ram:DeadweightTonnageMeasure | DE-054-07 | Transshipment ship gross tonnage |
| hza:HZA > hza:SpecifiedLogisticsTransportMovement > ram:CargoApplicableTransshipment > [items] > ram:UsedReferencedTransportMeans > ram:IMOID | DE-054-03 | Transshipment ship IMO number |
| hza:HZA > hza:SpecifiedLogisticsTransportMovement > ram:CargoApplicableTransshipment > [items] > ram:UsedReferencedTransportMeans > ram:MMSIID | DE-054-04 | Transshipment ship MMSI number |
| hza:HZA > hza:SpecifiedLogisticsTransportMovement > ram:CargoApplicableTransshipment > [items] > ram:UsedReferencedTransportMeans > ram:Name | DE-054-02 | Transshipment destination ship name |
| hza:HZA > hza:SpecifiedLogisticsTransportMovement > ram:CargoApplicableTransshipment > [items] > ram:UsedReferencedTransportMeans > ram:RegistrationTradeCountry > ram:ID | DE-054-06 | Transshipment ship flag, coded |
| hza:HZA > hza:SpecifiedLogisticsTransportMovement > ram:DangerousGoodsInformationTradeContact > ram:EmailURIUniversalCommunication > ram:URIID | DE-046-05 | DPG contact email |
| hza:HZA > hza:SpecifiedLogisticsTransportMovement > ram:DangerousGoodsInformationTradeContact > ram:ID | DE-046-07 | DPG contact tax number |
| hza:HZA > hza:SpecifiedLogisticsTransportMovement > ram:DangerousGoodsInformationTradeContact > ram:PersonName | DE-046-03 | DPG contact name |
| hza:HZA > hza:SpecifiedLogisticsTransportMovement > ram:DangerousGoodsInformationTradeContact > ram:RelatedTradeLocation > ram:ID | DE-046-06 | DPG contact location, coded |
| hza:HZA > hza:SpecifiedLogisticsTransportMovement > ram:DangerousGoodsInformationTradeContact > ram:TelephoneUniversalCommunication > ram:CompleteNumber | DE-046-04 | DPG contact phone number |
| hza:HZA > hza:SpecifiedLogisticsTransportMovement > ram:DGManifestOnboardIndicator | DE-046-02 | DPG list on board indicator |
| hza:HZA > hza:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:LargestTankVolumeMeasure | DE-009-16 | Largest tank capacity |
| hza:HZA > hza:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:OnboardSpecifiedTank > ram:TotalCapacityVolumeMeasure | DE-009-15 | Tanks total capacity |
| hza:HZA > hza:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:TankQuantity | DE-009-14 | Number of tanks |
| hza:HZA > hza:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:DGPeriodicAuthorizationReferencedDocument > ram:ID | DE-046-10 | Dangerous goods periodic authorisation number |
| hza:HZA > hza:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:DGPeriodicAuthorizationReferencedDocument > ram:IssueDate | DE-046-11 | Dangerous goods periodic authorisation issue date |
| hza:HZA > hza:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:DGPeriodicAuthorizationReferencedDocument > ram:IssuerTradeParty > ram:Name | DE-046-12 | Dangerous goods periodic authorisation issuer name |
| hza:HZA > hza:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:GasFreeCertificateIndicator | DE-046-09 | Gas free certificate indicator |
| hza:HZA > hza:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:GasMeasuringEquipmentIndicator | DE-053-08 | Fumigant gas measuring equipment indicator |
| hza:HZA > hza:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:INFID | DE-046-01 | INF ship class, coded |
| hza:HZA > hza:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:RegulationComplianceIndicator | DE-053-14 | Fumigation regulations compliance indicator |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:ApplicableTransportDangerousGoods > ram:TransportExpertTradeContact > ram:EmailURIUniversalCommunication > ram:URIID | DE-046-05 | DPG contact email |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:ApplicableTransportDangerousGoods > ram:TransportExpertTradeContact > ram:ID | DE-046-07 | DPG contact tax number |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:ApplicableTransportDangerousGoods > ram:TransportExpertTradeContact > ram:PersonName | DE-046-03 | DPG contact name |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:ApplicableTransportDangerousGoods > ram:TransportExpertTradeContact > ram:RelatedTradeLocation > ram:ID | DE-046-06 | DPG contact location, coded |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:ApplicableTransportDangerousGoods > ram:TransportExpertTradeContact > ram:TelephoneUniversalCommunication > ram:CompleteNumber | DE-046-04 | DPG contact phone number |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:CargoOperationCode | DE-047-42 | Cargo operation, coded |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:ConsignorAssignedID | DE-056-01 | Dangerous goods shipper's reference number |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:HandlingInstructions > ram:OccurrenceLogisticsLocation > ram:Name | DE-047-49 | Place of handling name |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:AdditionalHazardClassificationID > [items] | DE-049-14 | Dangerous goods subsidiary risks, coded |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:ControlTemperatureMeasurement > ram:ActualMeasure | DE-049-28 | Control temperature |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:CriticalViscosityTemperatureMeasure | DE-049-36 | Viscosity critical temperature |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:DischargeTemperatureMeasure | DE-049-22 | Liquid bulk discharge temperature |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:EmergencyTemperatureMeasurement > ram:ActualMeasure | DE-049-29 | Emergency temperature |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:EMSID > [items] | DE-049-13 | Dangerous goods EmS number |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:ExplosiveCargoNetWeightMeasure | DE-049-17 | Net explosive mass |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:FlashpointTemperatureMeasurement > ram:ActualMeasure | DE-049-09 | Dangerous goods flashpoint |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:FlashpointTemperatureMeasurement > ram:TypeCode | DE-049-34 | Dangerous goods flashpoint description, coded |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:GrossVolumeMeasure | DE-049-12 | Dangerous goods volume |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:GrossWeightMeasure | DE-049-11 | Dangerous goods gross mass |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:HazardClassificationID | DE-049-02 | Dangerous goods hazard class, coded |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:HazardousInBulkIndicator | DE-049-30 | Bulk hazardous material indicator |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:IMDGSegregationGroupCode | DE-049-33 | Dangerous goods segregation group, coded |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:LimitedQuantityIndicator | DE-049-18 | Limited quantities indicator |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:MaritimePollutantTypeCode | DE-049-08 | Dangerous goods marine pollution type, coded |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:MeltingPointTemperatureMeasure | DE-049-21 | Liquid bulk melting point |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:NetWeightMeasure | DE-049-10 | Dangerous goods net mass |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:PackagingDangerLevelCode | DE-049-06 | Dangerous goods packing group |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:ProperShippingName | DE-049-04 | Dangerous goods proper shipping name |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:RadioactiveMaterial > ram:ApplicableSpecifiedRadioactiveIsotope > ram:ActivityLevelMeasure | DE-049-24 | Class 7 maximum activity |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:RadioactiveMaterial > ram:CriticalitySafetyIndexMeasure | DE-049-27 | Radioactive criticality safety index |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:RadioactiveMaterial > ram:RadionuclideName | DE-049-23 | Class 7 nuclide name |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:RadioactiveMaterial > ram:TransportIndexMeasure | DE-049-26 | Radioactive index of transport |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:RadioactiveMaterial > ram:TypeCode | DE-049-25 | Class 7 category, coded |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:RegulationCode | DE-049-01 | Dangerous goods regulation, coded |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:SmallVolumeIndicator | DE-049-19 | Excepted quantities indicator |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:SpecifiedLogisticsPackage > [items] > ram:ItemQuantity | DE-049-15 | Dangerous goods number of packages |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:SpecifiedLogisticsPackage > [items] > ram:LevelCode | DE-049-35 | Dangerous goods packing level, coded |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:SpecifiedLogisticsPackage > [items] > ram:PhysicalLogisticsShippingMarks > ram:MarkingInstructionCode | DE-049-31 | Cargo marking Instructions, coded |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:SpecifiedLogisticsPackage > [items] > ram:TypeCode | DE-049-16 | Dangerous goods package type, coded |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:SupplementaryInformation | DE-049-07 | Dangerous goods additional information |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:TechnicalName | DE-049-05 | Dangerous goods technical specifications |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:UNDGIdentificationCode | DE-049-03 | Dangerous goods UNDG number, coded |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:ViscosityMeasure | DE-049-20 | Liquid bulk viscosity |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:AssociatedReferencedLogisticsTransportEquipment > [items] > ram:CategoryCode | DE-051-22 | Transport equipment category, coded |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:AssociatedReferencedLogisticsTransportEquipment > [items] > ram:ID | DE-051-01 | Transport equipment identification number |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:AssociatedReferencedLogisticsTransportEquipment > [items] > ram:InactiveSpecifiedLogisticsTransportMeans > ram:LicencePlateID | DE-065-04 | Vehicle license plate number |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:AssociatedReferencedLogisticsTransportEquipment > [items] > ram:InactiveSpecifiedLogisticsTransportMeans > ram:VINID | DE-065-05 | Vehicle identification number (VIN) |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:AssociatedReferencedLogisticsTransportEquipment > [items] > ram:LoadedTransportDangerousGoods > ram:ExplosiveCargoNetWeightMeasure | DE-049-17 | Net explosive mass |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:AssociatedReferencedLogisticsTransportEquipment > [items] > ram:LoadedTransportDangerousGoods > ram:GrossWeightMeasure | DE-049-11 | Dangerous goods gross mass |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:AssociatedReferencedLogisticsTransportEquipment > [items] > ram:LoadedTransportDangerousGoods > ram:NetWeightMeasure | DE-049-10 | Dangerous goods net mass |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:AssociatedReferencedLogisticsTransportEquipment > [items] > ram:LoadedTransportDangerousGoods > ram:SpecifiedLogisticsPackage > [items] > ram:ItemQuantity | DE-049-15 | Dangerous goods number of packages |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:AssociatedReferencedLogisticsTransportEquipment > [items] > ram:LoadedTransportDangerousGoods > ram:SpecifiedLogisticsPackage > [items] > ram:LevelCode | DE-049-35 | Dangerous goods packing level, coded |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:AssociatedReferencedLogisticsTransportEquipment > [items] > ram:LoadedTransportDangerousGoods > ram:SpecifiedLogisticsPackage > [items] > ram:TypeCode | DE-049-16 | Dangerous goods package type, coded |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:AssociatedReferencedLogisticsTransportEquipment > [items] > ram:SequenceNumeric | DE-001-02 | Sequence number |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:AssociatedReferencedLogisticsTransportEquipment > [items] > ram:StowagePositionID | DE-051-02 | Position on board |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:SequenceNumeric | DE-048-01 | Cargo item number |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:TransportLogisticsPackage > ram:PhysicalLogisticsShippingMarks > ram:Marking | DE-048-08 | Cargo item marks and numbers |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:LoadingTransportEvent > ram:OccurrenceLogisticsLocation > ram:ID | DE-047-01 | Port of loading, coded |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:LoadingTransportEvent > ram:ScheduledOccurrenceDate | DE-047-13 | Expected date of loading |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:OnCarriageLogisticsTransportMovement > ram:ModeCode | DE-047-28 | Next transport mode, coded |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:SequenceNumeric | DE-001-02 | Sequence number |
| hza:HZA > hza:SpecifiedSupplyChainConsignment > [items] > ram:UnloadingTransportEvent > ram:OccurrenceLogisticsLocation > ram:ID | DE-047-04 | Port of discharge, coded |

<a id="formality-hzd"></a>
## HZD

- Mapping count: 104

| Tree path | DE ID | DE name |
| --- | --- | --- |
| hzd:HZD > hzd:ExchangedDeclaration > ram:StatementTypeCode > [items] | DE-003-07 | Declarant statement, coded |
| hzd:HZD > hzd:ExchangedDocument > ram:Remarks | DE-003-01 | Remarks |
| hzd:HZD > hzd:SpecifiedLogisticsTransportEquipment > [items] > ram:CategoryCode | DE-051-22 | Transport equipment category, coded |
| hzd:HZD > hzd:SpecifiedLogisticsTransportEquipment > [items] > ram:CharacteristicCode | DE-051-13 | Transport equipment size and type, coded |
| hzd:HZD > hzd:SpecifiedLogisticsTransportEquipment > [items] > ram:EmptyTankResidueDangerousGoods > ram:HazardClassificationID | DE-050-03 | Empty tank last cargo hazard class, coded |
| hzd:HZD > hzd:SpecifiedLogisticsTransportEquipment > [items] > ram:EmptyTankResidueDangerousGoods > ram:MaritimePollutantTypeCode | DE-050-04 | Empty tank last cargo marine pollutant type, coded |
| hzd:HZD > hzd:SpecifiedLogisticsTransportEquipment > [items] > ram:EmptyTankResidueDangerousGoods > ram:ProperShippingName | DE-050-01 | Empty tank last dangerous cargo name |
| hzd:HZD > hzd:SpecifiedLogisticsTransportEquipment > [items] > ram:EmptyTankResidueDangerousGoods > ram:RegulationCode | DE-050-05 | Empty tank last cargo dangerous goods regulation, coded |
| hzd:HZD > hzd:SpecifiedLogisticsTransportEquipment > [items] > ram:EmptyTankResidueDangerousGoods > ram:UNDGIdentificationCode | DE-050-02 | Empty tank last cargo UNDG number, coded |
| hzd:HZD > hzd:SpecifiedLogisticsTransportEquipment > [items] > ram:FumigatedIndicator | DE-052-05 | Fumigated indicator |
| hzd:HZD > hzd:SpecifiedLogisticsTransportEquipment > [items] > ram:ID | DE-051-01 | Transport equipment identification number |
| hzd:HZD > hzd:SpecifiedLogisticsTransportEquipment > [items] > ram:MaritimeContainerCharacteristicCode | DE-051-17 | Container size and type, coded |
| hzd:HZD > hzd:SpecifiedLogisticsTransportEquipment > [items] > ram:OperationalStatusCode | DE-051-18 | Transport equipment status, coded |
| hzd:HZD > hzd:SpecifiedLogisticsTransportEquipment > [items] > ram:PreviousHoldCargoName | DE-052-07 | Previous goods in holds |
| hzd:HZD > hzd:SpecifiedLogisticsTransportEquipment > [items] > ram:SequenceNumeric | DE-001-02 | Sequence number |
| hzd:HZD > hzd:SpecifiedLogisticsTransportEquipment > [items] > ram:SpecifiedApplicableFumigation > ram:ExpertName | DE-053-12 | Fumigation expert name |
| hzd:HZD > hzd:SpecifiedLogisticsTransportEquipment > [items] > ram:SpecifiedApplicableFumigation > ram:GasParticleMeasure | DE-053-11 | Fumigation gas particle measure |
| hzd:HZD > hzd:SpecifiedLogisticsTransportEquipment > [items] > ram:SpecifiedApplicableFumigation > ram:MethodDescription | DE-053-06 | Fumigation method description |
| hzd:HZD > hzd:SpecifiedLogisticsTransportEquipment > [items] > ram:SpecifiedApplicableFumigation > ram:OccurrenceDate | DE-053-04 | Fumigation date |
| hzd:HZD > hzd:SpecifiedLogisticsTransportEquipment > [items] > ram:SpecifiedApplicableFumigation > ram:OccurrenceLocation | DE-053-05 | Fumigation place identification |
| hzd:HZD > hzd:SpecifiedLogisticsTransportEquipment > [items] > ram:SpecifiedApplicableFumigation > ram:PrearrivalGasCheckCompletedIndicator | DE-053-09 | Fumigation gas check indicator |
| hzd:HZD > hzd:SpecifiedLogisticsTransportEquipment > [items] > ram:SpecifiedApplicableFumigation > ram:PrearrivalRemnantsRemovedIndicator | DE-053-13 | Fumigation remnants removed indicator |
| hzd:HZD > hzd:SpecifiedLogisticsTransportEquipment > [items] > ram:SpecifiedApplicableFumigation > ram:UsedFumigantName | DE-053-02 | Fumigant name |
| hzd:HZD > hzd:SpecifiedLogisticsTransportEquipment > [items] > ram:SpecifiedApplicableFumigation > ram:VentilatedIndicator | DE-053-07 | Fumigation ventilated indicator |
| hzd:HZD > hzd:SpecifiedLogisticsTransportEquipment > [items] > ram:StowagePositionID | DE-051-02 | Position on board |
| hzd:HZD > hzd:SpecifiedLogisticsTransportEquipment > [items] > ram:TankStatusCode | DE-052-01 | Tank status, coded |
| hzd:HZD > hzd:SpecifiedLogisticsTransportEquipment > [items] > ram:UsedCapacityCode | DE-051-21 | Transport equipment full or empty indicator, coded |
| hzd:HZD > hzd:SpecifiedLogisticsTransportMovement > ram:BalticMOUIndicator | DE-046-08 | Baltic MOU indicator |
| hzd:HZD > hzd:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ExplosiveIndicator | DE-046-13 | Explosives or fireworks indicator |
| hzd:HZD > hzd:SpecifiedLogisticsTransportMovement > ram:DangerousGoodsInformationTradeContact > ram:EmailURIUniversalCommunication > ram:URIID | DE-046-05 | DPG contact email |
| hzd:HZD > hzd:SpecifiedLogisticsTransportMovement > ram:DangerousGoodsInformationTradeContact > ram:ID | DE-046-07 | DPG contact tax number |
| hzd:HZD > hzd:SpecifiedLogisticsTransportMovement > ram:DangerousGoodsInformationTradeContact > ram:PersonName | DE-046-03 | DPG contact name |
| hzd:HZD > hzd:SpecifiedLogisticsTransportMovement > ram:DangerousGoodsInformationTradeContact > ram:RelatedTradeLocation > ram:ID | DE-046-06 | DPG contact location, coded |
| hzd:HZD > hzd:SpecifiedLogisticsTransportMovement > ram:DangerousGoodsInformationTradeContact > ram:TelephoneUniversalCommunication > ram:CompleteNumber | DE-046-04 | DPG contact phone number |
| hzd:HZD > hzd:SpecifiedLogisticsTransportMovement > ram:DGManifestOnboardIndicator | DE-046-02 | DPG list on board indicator |
| hzd:HZD > hzd:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:LargestTankVolumeMeasure | DE-009-16 | Largest tank capacity |
| hzd:HZD > hzd:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:OnboardSpecifiedTank > ram:TotalCapacityVolumeMeasure | DE-009-15 | Tanks total capacity |
| hzd:HZD > hzd:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:TankQuantity | DE-009-14 | Number of tanks |
| hzd:HZD > hzd:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:DGPeriodicAuthorizationReferencedDocument > ram:ID | DE-046-10 | Dangerous goods periodic authorisation number |
| hzd:HZD > hzd:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:DGPeriodicAuthorizationReferencedDocument > ram:IssueDate | DE-046-11 | Dangerous goods periodic authorisation issue date |
| hzd:HZD > hzd:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:DGPeriodicAuthorizationReferencedDocument > ram:IssuerTradeParty > ram:Name | DE-046-12 | Dangerous goods periodic authorisation issuer name |
| hzd:HZD > hzd:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:GasFreeCertificateIndicator | DE-046-09 | Gas free certificate indicator |
| hzd:HZD > hzd:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:GasMeasuringEquipmentIndicator | DE-053-08 | Fumigant gas measuring equipment indicator |
| hzd:HZD > hzd:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:INFID | DE-046-01 | INF ship class, coded |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:ApplicableTransportDangerousGoods > ram:TransportExpertTradeContact > ram:EmailURIUniversalCommunication > ram:URIID | DE-046-05 | DPG contact email |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:ApplicableTransportDangerousGoods > ram:TransportExpertTradeContact > ram:ID | DE-046-07 | DPG contact tax number |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:ApplicableTransportDangerousGoods > ram:TransportExpertTradeContact > ram:PersonName | DE-046-03 | DPG contact name |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:ApplicableTransportDangerousGoods > ram:TransportExpertTradeContact > ram:RelatedTradeLocation > ram:ID | DE-046-06 | DPG contact location, coded |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:ApplicableTransportDangerousGoods > ram:TransportExpertTradeContact > ram:TelephoneUniversalCommunication > ram:CompleteNumber | DE-046-04 | DPG contact phone number |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:CargoOperationCode | DE-047-42 | Cargo operation, coded |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:ConsignorAssignedID | DE-056-01 | Dangerous goods shipper's reference number |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:HandlingInstructions > ram:OccurrenceLogisticsLocation > ram:Name | DE-047-49 | Place of handling name |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:AdditionalHazardClassificationID > [items] | DE-049-14 | Dangerous goods subsidiary risks, coded |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:ControlTemperatureMeasurement > ram:ActualMeasure | DE-049-28 | Control temperature |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:CriticalViscosityTemperatureMeasure | DE-049-36 | Viscosity critical temperature |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:DischargeTemperatureMeasure | DE-049-22 | Liquid bulk discharge temperature |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:EmergencyTemperatureMeasurement > ram:ActualMeasure | DE-049-29 | Emergency temperature |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:EMSID > [items] | DE-049-13 | Dangerous goods EmS number |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:ExplosiveCargoNetWeightMeasure | DE-049-17 | Net explosive mass |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:FlashpointTemperatureMeasurement > ram:ActualMeasure | DE-049-09 | Dangerous goods flashpoint |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:FlashpointTemperatureMeasurement > ram:TypeCode | DE-049-34 | Dangerous goods flashpoint description, coded |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:GrossVolumeMeasure | DE-049-12 | Dangerous goods volume |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:GrossWeightMeasure | DE-049-11 | Dangerous goods gross mass |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:HazardClassificationID | DE-049-02 | Dangerous goods hazard class, coded |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:HazardousInBulkIndicator | DE-049-30 | Bulk hazardous material indicator |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:IMDGSegregationGroupCode | DE-049-33 | Dangerous goods segregation group, coded |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:LimitedQuantityIndicator | DE-049-18 | Limited quantities indicator |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:MaritimePollutantTypeCode | DE-049-08 | Dangerous goods marine pollution type, coded |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:MeltingPointTemperatureMeasure | DE-049-21 | Liquid bulk melting point |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:NetWeightMeasure | DE-049-10 | Dangerous goods net mass |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:PackagingDangerLevelCode | DE-049-06 | Dangerous goods packing group |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:ProperShippingName | DE-049-04 | Dangerous goods proper shipping name |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:RadioactiveMaterial > ram:ApplicableSpecifiedRadioactiveIsotope > ram:ActivityLevelMeasure | DE-049-24 | Class 7 maximum activity |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:RadioactiveMaterial > ram:CriticalitySafetyIndexMeasure | DE-049-27 | Radioactive criticality safety index |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:RadioactiveMaterial > ram:RadionuclideName | DE-049-23 | Class 7 nuclide name |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:RadioactiveMaterial > ram:TransportIndexMeasure | DE-049-26 | Radioactive index of transport |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:RadioactiveMaterial > ram:TypeCode | DE-049-25 | Class 7 category, coded |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:RegulationCode | DE-049-01 | Dangerous goods regulation, coded |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:SmallVolumeIndicator | DE-049-19 | Excepted quantities indicator |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:SpecifiedLogisticsPackage > [items] > ram:ItemQuantity | DE-049-15 | Dangerous goods number of packages |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:SpecifiedLogisticsPackage > [items] > ram:LevelCode | DE-049-35 | Dangerous goods packing level, coded |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:SpecifiedLogisticsPackage > [items] > ram:TypeCode | DE-049-16 | Dangerous goods package type, coded |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:SupplementaryInformation | DE-049-07 | Dangerous goods additional information |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:TechnicalName | DE-049-05 | Dangerous goods technical specifications |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:UNDGIdentificationCode | DE-049-03 | Dangerous goods UNDG number, coded |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:ApplicableTransportDangerousGoods > ram:ViscosityMeasure | DE-049-20 | Liquid bulk viscosity |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:AssociatedReferencedLogisticsTransportEquipment > [items] > ram:CategoryCode | DE-051-22 | Transport equipment category, coded |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:AssociatedReferencedLogisticsTransportEquipment > [items] > ram:ID | DE-051-01 | Transport equipment identification number |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:AssociatedReferencedLogisticsTransportEquipment > [items] > ram:InactiveSpecifiedLogisticsTransportMeans > ram:LicencePlateID | DE-065-04 | Vehicle license plate number |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:AssociatedReferencedLogisticsTransportEquipment > [items] > ram:InactiveSpecifiedLogisticsTransportMeans > ram:VINID | DE-065-05 | Vehicle identification number (VIN) |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:AssociatedReferencedLogisticsTransportEquipment > [items] > ram:LoadedTransportDangerousGoods > ram:ExplosiveCargoNetWeightMeasure | DE-049-17 | Net explosive mass |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:AssociatedReferencedLogisticsTransportEquipment > [items] > ram:LoadedTransportDangerousGoods > ram:GrossWeightMeasure | DE-049-11 | Dangerous goods gross mass |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:AssociatedReferencedLogisticsTransportEquipment > [items] > ram:LoadedTransportDangerousGoods > ram:NetWeightMeasure | DE-049-10 | Dangerous goods net mass |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:AssociatedReferencedLogisticsTransportEquipment > [items] > ram:LoadedTransportDangerousGoods > ram:SpecifiedLogisticsPackage > [items] > ram:ItemQuantity | DE-049-15 | Dangerous goods number of packages |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:AssociatedReferencedLogisticsTransportEquipment > [items] > ram:LoadedTransportDangerousGoods > ram:SpecifiedLogisticsPackage > [items] > ram:LevelCode | DE-049-35 | Dangerous goods packing level, coded |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:AssociatedReferencedLogisticsTransportEquipment > [items] > ram:LoadedTransportDangerousGoods > ram:SpecifiedLogisticsPackage > [items] > ram:TypeCode | DE-049-16 | Dangerous goods package type, coded |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:AssociatedReferencedLogisticsTransportEquipment > [items] > ram:SequenceNumeric | DE-001-02 | Sequence number |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:AssociatedReferencedLogisticsTransportEquipment > [items] > ram:StowagePositionID | DE-051-02 | Position on board |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:SequenceNumeric | DE-048-01 | Cargo item number |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:IncludedSupplyChainConsignmentItem > [items] > ram:TransportLogisticsPackage > ram:PhysicalLogisticsShippingMarks > ram:Marking | DE-048-08 | Cargo item marks and numbers |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:LoadingTransportEvent > ram:OccurrenceLogisticsLocation > ram:ID | DE-047-01 | Port of loading, coded |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:PreCarriageLogisticsTransportMovement > ram:ModeCode | DE-047-27 | Previous transport mode, coded |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:SequenceNumeric | DE-001-02 | Sequence number |
| hzd:HZD > hzd:SpecifiedSupplyChainConsignment > [items] > ram:UnloadingTransportEvent > ram:OccurrenceLogisticsLocation > ram:ID | DE-047-04 | Port of discharge, coded |

<a id="formality-mdd"></a>
## MDD

- Mapping count: 21

| Tree path | DE ID | DE name |
| --- | --- | --- |
| mdd:MDD > mdd:ExchangedDocument > ram:Remarks | DE-003-01 | Remarks |
| mdd:MDD > mdd:ExchangedDocument > ram:SecondSignatoryDocumentAuthentication > ram:ProviderTradeParty > ram:Name | DE-032-16 | Countersigning surgeon name |
| mdd:MDD > mdd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:BirthDate | DE-035-05 | Person date of birth |
| mdd:MDD > mdd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:CategoryCode | DE-035-01 | Person type, coded |
| mdd:MDD > mdd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:EmbarkationDateTime | DE-035-10 | Person embarkation date and time |
| mdd:MDD > mdd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:EmbarkationLogisticsLocation > ram:ID | DE-035-09 | Person port of embarkation, coded |
| mdd:MDD > mdd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:FamilyName | DE-035-02 | Person family name |
| mdd:MDD > mdd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:GenderCode | DE-035-08 | Person gender, coded |
| mdd:MDD > mdd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:GivenName | DE-035-03 | Person given name |
| mdd:MDD > mdd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:NationalityTradeCountry > [items] > ram:AdditionalIdentificationID | DE-035-04 | Person nationality, coded |
| mdd:MDD > mdd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:ReportedMDHIllness > ram:CaseDispositionCode | DE-037-05 | Case Disposition, coded |
| mdd:MDD > mdd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:ReportedMDHIllness > ram:Comment | DE-037-09 | Person health details comments |
| mdd:MDD > mdd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:ReportedMDHIllness > ram:EvacuationLogisticsLocation > ram:ID | DE-037-06 | Location of evacuation, coded |
| mdd:MDD > mdd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:ReportedMDHIllness > ram:EvacuationLogisticsLocation > ram:Name | DE-037-07 | Location of evacuation name |
| mdd:MDD > mdd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:ReportedMDHIllness > ram:HealthStatusCode | DE-037-04 | Health status, coded |
| mdd:MDD > mdd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:ReportedMDHIllness > ram:HealthStatusReportedIndicator | DE-037-03 | Health status reported indicator |
| mdd:MDD > mdd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:ReportedMDHIllness > ram:Nature | DE-037-01 | Illness |
| mdd:MDD > mdd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:ReportedMDHIllness > ram:SymptomOnsetDate | DE-037-02 | Symptoms onset date |
| mdd:MDD > mdd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:ReportedMDHIllness > ram:Treatment | DE-037-08 | Treatment |
| mdd:MDD > mdd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:RoleCode | DE-035-14 | Crewmember rank or rating, coded |
| mdd:MDD > mdd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:SequenceNumeric | DE-001-02 | Sequence number |

<a id="formality-mdh"></a>
## MDH

- Mapping count: 25

| Tree path | DE ID | DE name |
| --- | --- | --- |
| mdh:MDH > mdh:ExchangedDocument > ram:Remarks | DE-003-01 | Remarks |
| mdh:MDH > mdh:ExchangedDocument > ram:SecondSignatoryDocumentAuthentication > ram:ProviderTradeParty > ram:Name | DE-032-16 | Countersigning surgeon name |
| mdh:MDH > mdh:SpecifiedLogisticsTransportMovement > ram:FoundStowawayIndicator | DE-034-04 | Stowaways found indicator |
| mdh:MDH > mdh:SpecifiedLogisticsTransportMovement > ram:ItineraryTransportRoute > ram:HealthAffectedAreaIndicator | DE-032-01 | Visited affected area indicator |
| mdh:MDH > mdh:SpecifiedLogisticsTransportMovement > ram:ItineraryTransportRoute > ram:HealthAffectedAreaVisitDate | DE-032-03 | Date of call in affected area |
| mdh:MDH > mdh:SpecifiedLogisticsTransportMovement > ram:ItineraryTransportRoute > ram:HealthAffectedAreaVisitLocationID | DE-032-02 | Port of call in affected area, coded |
| mdh:MDH > mdh:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:IdentifiedFoundStowaway > ram:EmbarkationLogisticsLocation > ram:ID | DE-042-04 | Stowaway port of boarding, coded |
| mdh:MDH > mdh:SpecifiedLogisticsTransportMovement > ram:ReportedMDHTransportationHealth > ram:DiedOnboardMDHHealthIndication > ram:ReportedQuantity | DE-032-17 | Number of dead persons |
| mdh:MDH > mdh:SpecifiedLogisticsTransportMovement > ram:ReportedMDHTransportationHealth > ram:DiedOnboardMDHHealthIndication > ram:StatusIndicator | DE-032-04 | Person died indicator |
| mdh:MDH > mdh:SpecifiedLogisticsTransportMovement > ram:ReportedMDHTransportationHealth > ram:DiseaseOnboardMDHHealthIndication > ram:StatusIndicator | DE-032-05 | Disease on board indicator |
| mdh:MDH > mdh:SpecifiedLogisticsTransportMovement > ram:ReportedMDHTransportationHealth > ram:IllPersonNowOnboardMDHHealthIndication > ram:StatusIndicator | DE-032-07 | Ill persons now indicator |
| mdh:MDH > mdh:SpecifiedLogisticsTransportMovement > ram:ReportedMDHTransportationHealth > ram:MedicalPractitionerConsultedMDHHealthIndication > ram:StatusIndicator | DE-032-08 | Medical practitioner consulted indicator |
| mdh:MDH > mdh:SpecifiedLogisticsTransportMovement > ram:ReportedMDHTransportationHealth > ram:MoreIllOnboardMDHHealthIndication > ram:ReportedQuantity | DE-032-12 | Number of ill persons |
| mdh:MDH > mdh:SpecifiedLogisticsTransportMovement > ram:ReportedMDHTransportationHealth > ram:MoreIllOnboardMDHHealthIndication > ram:StatusIndicator | DE-032-06 | Ill persons greater than expected indicator |
| mdh:MDH > mdh:SpecifiedLogisticsTransportMovement > ram:ReportedMDHTransportationHealth > ram:OnboardInfectionConditionMDHHealthIndication > ram:StatusIndicator | DE-032-09 | Infection condition on board indicator |
| mdh:MDH > mdh:SpecifiedLogisticsTransportMovement > ram:ReportedMDHTransportationHealth > ram:SanitaryMeasureAppliedMDHHealthIndication > ram:AppliedMDHSanitaryMeasure > [items] > ram:ApplicationDate | DE-032-15 | Sanitary measure date |
| mdh:MDH > mdh:SpecifiedLogisticsTransportMovement > ram:ReportedMDHTransportationHealth > ram:SanitaryMeasureAppliedMDHHealthIndication > ram:AppliedMDHSanitaryMeasure > [items] > ram:Description | DE-032-13 | Sanitary measure description |
| mdh:MDH > mdh:SpecifiedLogisticsTransportMovement > ram:ReportedMDHTransportationHealth > ram:SanitaryMeasureAppliedMDHHealthIndication > ram:AppliedMDHSanitaryMeasure > [items] > ram:Location | DE-032-14 | Sanitary measure place |
| mdh:MDH > mdh:SpecifiedLogisticsTransportMovement > ram:ReportedMDHTransportationHealth > ram:SanitaryMeasureAppliedMDHHealthIndication > ram:AppliedMDHSanitaryMeasure > [items] > ram:TypeCode | DE-032-18 | Sanitary measures type, coded |
| mdh:MDH > mdh:SpecifiedLogisticsTransportMovement > ram:ReportedMDHTransportationHealth > ram:SanitaryMeasureAppliedMDHHealthIndication > ram:StatusIndicator | DE-032-10 | Sanitary measure applied indicator |
| mdh:MDH > mdh:SpecifiedLogisticsTransportMovement > ram:ReportedMDHTransportationHealth > ram:SickAnimalOnboardMDHHealthIndication > ram:StatusIndicator | DE-032-11 | Sick animal indicator |
| mdh:MDH > mdh:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:SanitationControlReferencedDocument > ram:IssueDate | DE-033-03 | Sanitation control certificate date of Issue |
| mdh:MDH > mdh:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:SanitationControlReferencedDocument > ram:IssueLogisticsLocation > ram:ID | DE-033-02 | Sanitation control certificate port of issue, coded |
| mdh:MDH > mdh:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:SanitationControlReInspectionRequiredIndicator | DE-033-04 | Re-inspection required indicator |
| mdh:MDH > mdh:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ValidSanitationControlIndicator | DE-033-01 | Valid ship sanitation control exemption or control certificate, indicator |

<a id="formality-mts"></a>
## MTS

- Mapping count: 29

| Tree path | DE ID | DE name |
| --- | --- | --- |
| mts:MTS > mts:ExchangedDocument > ram:Remarks | DE-003-01 | Remarks |
| mts:MTS > mts:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:LoadingPortOperationsPortOperationEvent > ram:CruiseExcursionPassengerPersonQuantity | DE-034-08 | Number of cruise excursion passengers |
| mts:MTS > mts:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:LoadingPortOperationsPortOperationEvent > ram:CruisePassengerPersonQuantity | DE-034-07 | Number of cruise passengers |
| mts:MTS > mts:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:LoadingPortOperationsPortOperationEvent > ram:NonCruisePassengerPersonQuantity | DE-034-06 | Number of non-cruise passengers |
| mts:MTS > mts:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:LoadingPortOperationsPortOperationEvent > ram:SpecifiedTransportCargo > [items] > ram:AssociatedCommodityCargo > [items] > ram:EmptyUnitQuantity | DE-045-28 | Number of units without cargo |
| mts:MTS > mts:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:LoadingPortOperationsPortOperationEvent > ram:SpecifiedTransportCargo > [items] > ram:AssociatedCommodityCargo > [items] > ram:TypeCode | DE-045-17 | Type of cargo, coded |
| mts:MTS > mts:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:LoadingPortOperationsPortOperationEvent > ram:SpecifiedTransportCargo > [items] > ram:AssociatedCommodityCargo > [items] > ram:UnitQuantity | DE-045-18 | Number of units loaded |
| mts:MTS > mts:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:LoadingPortOperationsPortOperationEvent > ram:SpecifiedTransportCargo > [items] > ram:AssociatedCommodityCargo > [items] > ram:WeightMeasure | DE-045-20 | Cargo weight loaded |
| mts:MTS > mts:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:LoadingPortOperationsPortOperationEvent > ram:SpecifiedTransportCargo > [items] > ram:CommodityCargo > [items] > ram:OperationalCategoryCode | DE-045-29 | Cargo category, coded |
| mts:MTS > mts:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:LoadingPortOperationsPortOperationEvent > ram:SpecifiedTransportCargo > [items] > ram:CommodityCargo > [items] > ram:StatisticalClassificationCode | DE-045-30 | NST2007 cargo classification division, coded |
| mts:MTS > mts:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:LoadingPortOperationsPortOperationEvent > ram:SpecifiedTransportCargo > [items] > ram:CommodityCargo > [items] > ram:TypeCode | DE-045-31 | NST2007 cargo classification group, coded |
| mts:MTS > mts:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:LoadingPortOperationsPortOperationEvent > ram:SpecifiedTransportCargo > [items] > ram:CommodityCargo > [items] > ram:WeightMeasure | DE-045-20 | Cargo weight loaded |
| mts:MTS > mts:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:LoadingPortOperationsPortOperationEvent > ram:SpecifiedTransportCargo > [items] > ram:NonCruisePassengerUnitQuantity | DE-034-06 | Number of non-cruise passengers |
| mts:MTS > mts:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:LoadingPortOperationsPortOperationEvent > ram:SpecifiedTransportCargo > [items] > ram:UnloadingCoastalAreaCode | DE-047-48 | Maritime coastal area of unloading, coded |
| mts:MTS > mts:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:LoadingPortOperationsPortOperationEvent > ram:SpecifiedTransportCargo > [items] > ram:UnloadingPortCode | DE-047-04 | Port of discharge, coded |
| mts:MTS > mts:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:UnloadingPortOperationsPortOperationEvent > ram:CruiseExcursionPassengerPersonQuantity | DE-034-08 | Number of cruise excursion passengers |
| mts:MTS > mts:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:UnloadingPortOperationsPortOperationEvent > ram:CruisePassengerPersonQuantity | DE-034-07 | Number of cruise passengers |
| mts:MTS > mts:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:UnloadingPortOperationsPortOperationEvent > ram:NonCruisePassengerPersonQuantity | DE-034-06 | Number of non-cruise passengers |
| mts:MTS > mts:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:UnloadingPortOperationsPortOperationEvent > ram:SpecifiedTransportCargo > [items] > ram:AssociatedCommodityCargo > [items] > ram:EmptyUnitQuantity | DE-045-28 | Number of units without cargo |
| mts:MTS > mts:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:UnloadingPortOperationsPortOperationEvent > ram:SpecifiedTransportCargo > [items] > ram:AssociatedCommodityCargo > [items] > ram:TypeCode | DE-045-17 | Type of cargo, coded |
| mts:MTS > mts:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:UnloadingPortOperationsPortOperationEvent > ram:SpecifiedTransportCargo > [items] > ram:AssociatedCommodityCargo > [items] > ram:UnitQuantity | DE-045-19 | Number of units unloaded |
| mts:MTS > mts:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:UnloadingPortOperationsPortOperationEvent > ram:SpecifiedTransportCargo > [items] > ram:AssociatedCommodityCargo > [items] > ram:WeightMeasure | DE-045-21 | Cargo weight unloaded |
| mts:MTS > mts:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:UnloadingPortOperationsPortOperationEvent > ram:SpecifiedTransportCargo > [items] > ram:CommodityCargo > [items] > ram:OperationalCategoryCode | DE-045-29 | Cargo category, coded |
| mts:MTS > mts:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:UnloadingPortOperationsPortOperationEvent > ram:SpecifiedTransportCargo > [items] > ram:CommodityCargo > [items] > ram:StatisticalClassificationCode | DE-045-30 | NST2007 cargo classification division, coded |
| mts:MTS > mts:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:UnloadingPortOperationsPortOperationEvent > ram:SpecifiedTransportCargo > [items] > ram:CommodityCargo > [items] > ram:TypeCode | DE-045-31 | NST2007 cargo classification group, coded |
| mts:MTS > mts:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:UnloadingPortOperationsPortOperationEvent > ram:SpecifiedTransportCargo > [items] > ram:CommodityCargo > [items] > ram:WeightMeasure | DE-045-21 | Cargo weight unloaded |
| mts:MTS > mts:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:UnloadingPortOperationsPortOperationEvent > ram:SpecifiedTransportCargo > [items] > ram:LoadingCoastalAreaCode | DE-047-47 | Maritime coastal area of loading, coded |
| mts:MTS > mts:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:UnloadingPortOperationsPortOperationEvent > ram:SpecifiedTransportCargo > [items] > ram:LoadingPortCode | DE-047-01 | Port of loading, coded |
| mts:MTS > mts:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:UnloadingPortOperationsPortOperationEvent > ram:SpecifiedTransportCargo > [items] > ram:NonCruisePassengerUnitQuantity | DE-034-06 | Number of non-cruise passengers |

<a id="formality-noa"></a>
## NOA

- Mapping count: 154

| Tree path | DE ID | DE name |
| --- | --- | --- |
| noa:NOA > noa:ExchangedDeclaration > ram:StatementTypeCode | DE-003-07 | Declarant statement, coded |
| noa:NOA > noa:ExchangedDocument > ram:AttachedSpecifiedBinaryFile > [items] > ram:Description | DE-003-03 | Attachment description |
| noa:NOA > noa:ExchangedDocument > ram:AttachedSpecifiedBinaryFile > [items] > ram:FileName | DE-003-05 | Attachment file name |
| noa:NOA > noa:ExchangedDocument > ram:AttachedSpecifiedBinaryFile > [items] > ram:MIMECode | DE-003-06 | Attachment MIME type |
| noa:NOA > noa:ExchangedDocument > ram:AttachedSpecifiedBinaryFile > [items] > ram:TypeCode | DE-003-02 | Attachment type, coded |
| noa:NOA > noa:ExchangedDocument > ram:Remarks | DE-003-01 | Remarks |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:ArrivalTransportEvent > ram:EstimatedTransportMeansArrivalOccurrenceDateTime | DE-015-05 | ETA at first port call location |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:ArrivalTransportEvent > ram:OccupiedSpecifiedBerth > ram:ExpectedMooringOrientationCode | DE-019-04 | Expected mooring orientation, coded |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:ArrivalTransportEvent > ram:OccupiedSpecifiedBerth > ram:ExpectedMooringOrientationReason | DE-019-05 | Expected mooring orientation reason |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:ArrivalTransportEvent > ram:OccupiedSpecifiedBerth > ram:FirstBollardID | DE-019-07 | First bollard identifier |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:ArrivalTransportEvent > ram:OccupiedSpecifiedBerth > ram:LastBollardID | DE-019-08 | Last bollard identifier |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:ArrivalTransportEvent > ram:OccupiedSpecifiedBerth > ram:MooringTypeCode | DE-019-03 | Mooring type, coded |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:ArrivalTransportEvent > ram:OccupiedSpecifiedBerth > ram:OccupancySpecifiedPeriod > ram:FormattedEndDateTime | DE-019-02 | Berth occupancy end date time |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:ArrivalTransportEvent > ram:OccupiedSpecifiedBerth > ram:OccupancySpecifiedPeriod > ram:FormattedStartDateTime | DE-019-01 | Berth occupancy start date time |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:ArrivalTransportEvent > ram:OccupiedSpecifiedBerth > ram:ShipRequirements | DE-019-06 | Ship requirements at berth description |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:ArrivalTransportEvent > ram:OccurrenceLogisticsLocation > ram:SubordinateLocation > ram:Name | DE-015-04 | Expected first location |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:ArrivalTransportEvent > ram:ScheduledArrivalRelatedDateTime | DE-022-03 | Date and time of arrival - estimated in ENS |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:AuthorizedCabotageIndicator | DE-014-23 | Cabotage authorized indicator |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallPurposeCode > [items] | DE-014-10 | Primary Purpose of Call, coded |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ApplicableSpecifiedOperation > ram:CallPurposeCode > [items] | DE-075-03 | Purpose of call at location, coded |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ApplicableSpecifiedOperation > ram:EstimatedOccurrenceSpecifiedPeriod > ram:FormattedEndDateTime | DE-075-05 | Operations expected end date time |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ApplicableSpecifiedOperation > ram:EstimatedOccurrenceSpecifiedPeriod > ram:FormattedStartDateTime | DE-075-04 | Operations expected start date time |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ApplicableSpecifiedOperation > ram:PropulsionEnergyTypeCode | DE-075-06 | Propulsion energy, coded |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ApplicableSpecifiedOperation > ram:RelevantLogisticsLocation > [items] > ram:ID | DE-075-02 | Cargo operation area identifier |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ApplicableSpecifiedOperation > ram:RelevantLogisticsLocation > [items] > ram:Name | DE-075-01 | Cargo operation area name |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ApplicableSpecifiedOperation > ram:StayEnergyTypeCode | DE-075-07 | Port stay energy, coded |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ArrivalBorderPortLocationID | DE-022-11 | Border port at arrival, coded |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ArrivalPortEntryLocationLocation | DE-015-03 | Entry point at port of call |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ArrivalPortOperationsPortOperationEvent > ram:WaterwayDirectionCode | DE-020-03 | Arrival direction, coded |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:BallastWaterChangedIndicator | DE-014-50 | Ballast waters changed indicator |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:CountryFirstCallIndicator | DE-014-40 | First port in country indicator |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:CruiseShipIndicator | DE-014-09 | Cruise ship indicator |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:CruiseTurnAroundIndicator | DE-014-41 | Cruise turn around indicator |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:EstimatedPortAreaArrivalRelatedDateTime | DE-015-02 | ETA in port area |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:EstimatedTransportMeansArrivalOccurrenceDateTime | DE-022-02 | Date and time of arrival - estimated |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:EstimatedTransportMeansDepartureOccurrenceDateTime | DE-022-05 | Date and time of departure - estimated |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ExpectedArrivalPortAreaRelatedLogisticsLocation > ram:Name | DE-015-01 | Expected port area identification text |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:ExtendedStayRegimeIndicator | DE-014-33 | Extended stay regime indicator |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:GNBAreaVisitedIndicator | DE-014-46 | Visited GNB area before indicator |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:InspectionReadyIndicator | DE-014-39 | Ready for inspection indicator |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:PilotCompulsoryIndicator | DE-014-45 | Pilot compulsory indicator |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RelatedLogisticsConvoy > ram:ArrivalConstellationIndicator | DE-020-01 | Constellation at arrival indicator |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotExemption > ram:ExaminationCandidatePermittedOnboardIndicator | DE-083-03 | Pilot exemption exam indicator |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotExemption > ram:PilotExemptionCertificate > [items] > ram:CertifiedTradeParty > ram:SpecifiedRepresentativePerson > ram:FamilyName | DE-083-12 | Pilot exemption certificate holder family name |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotExemption > ram:PilotExemptionCertificate > [items] > ram:CertifiedTradeParty > ram:SpecifiedRepresentativePerson > ram:GivenName | DE-083-13 | Pilot exemption certificate holder given name |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotExemption > ram:PilotExemptionCertificate > [items] > ram:ExpiryDate | DE-083-07 | Pilot exemption certificate validity date |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotExemption > ram:PilotExemptionCertificate > [items] > ram:ID | DE-083-02 | Pilotage exemption certificate number |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotExemption > ram:PilotExemptionCertificate > [items] > ram:TypeCode | DE-083-11 | Pilot exemption certificate type, coded |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotExemption > ram:PilotExemptionCertificate > [items] > ram:ValidFromLogisticsLocation > ram:ID | DE-083-04 | Pilot exemption certificate validity from port, coded |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotExemption > ram:PilotExemptionCertificate > [items] > ram:ValidFromLogisticsLocation > ram:Name | DE-083-05 | Pilot exemption certificate validity from port name |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotExemption > ram:PilotExemptionCertificate > [items] > ram:ValidFromLogisticsLocation > ram:SubordinateLocation > ram:SubordinateSubordinateLocation > ram:Name | DE-083-06 | Pilot exemption certificate validity from berth name |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotExemption > ram:PilotExemptionCertificate > [items] > ram:ValidToLogisticsLocation > ram:ID | DE-083-08 | Pilot exemption certificate validity to port, coded |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotExemption > ram:PilotExemptionCertificate > [items] > ram:ValidToLogisticsLocation > ram:Name | DE-083-09 | Pilot exemption certificate validity to port name |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotExemption > ram:PilotExemptionCertificate > [items] > ram:ValidToLogisticsLocation > ram:SubordinateLocation > ram:SubordinateSubordinateLocation > ram:Name | DE-083-10 | Pilot exemption certificate validity to berth name |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotExemption > ram:ShipExemptIndicator | DE-083-01 | Pilotage exemption indicator |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotExemption > ram:TypeCode | DE-083-14 | Pilotage exemption type, coded |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:SailingPlanningRequestTypeCode | DE-014-44 | Planning type for sailing request, coded |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:VisitorsExpectedIndicator | DE-014-42 | Ship visitors indicator |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CargoApplicableTransshipment > ram:OccurrenceIndicator | DE-054-01 | Cargo transshipment indicator |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CargoDescription | DE-014-16 | Cargo brief description |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CarrierAgentTradeParty > [items] > ram:DefinedTradeContact > ram:DirectTelephoneUniversalCommunication > ram:CompleteNumber | DE-029-06 | Agent landline number |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CarrierAgentTradeParty > [items] > ram:DefinedTradeContact > ram:EmailURIUniversalCommunication > ram:URIID | DE-029-08 | Agent email |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CarrierAgentTradeParty > [items] > ram:DefinedTradeContact > ram:ID | DE-029-14 | Agent contact identification number |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CarrierAgentTradeParty > [items] > ram:DefinedTradeContact > ram:MobileTelephoneUniversalCommunication > ram:CompleteNumber | DE-029-07 | Agent mobile number |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CarrierAgentTradeParty > [items] > ram:DefinedTradeContact > ram:SpecifiedContactPerson > ram:FamilyName | DE-029-04 | Agent contact family name |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CarrierAgentTradeParty > [items] > ram:DefinedTradeContact > ram:SpecifiedContactPerson > ram:GivenName | DE-029-15 | Agent contact given name |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CarrierAgentTradeParty > [items] > ram:ID | DE-029-01 | Agent identification number |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CarrierAgentTradeParty > [items] > ram:Name | DE-029-02 | Agency name |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CarrierAgentTradeParty > [items] > ram:PostalTradeAddress > ram:CityName | DE-029-11 | Agent City |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CarrierAgentTradeParty > [items] > ram:PostalTradeAddress > ram:CountryID | DE-029-13 | Agent country, coded |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CarrierAgentTradeParty > [items] > ram:PostalTradeAddress > ram:CountrySubDivisionName | DE-029-12 | Agent country sub-division name |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CarrierAgentTradeParty > [items] > ram:PostalTradeAddress > ram:LineOne | DE-029-09 | Agent street and number |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CarrierAgentTradeParty > [items] > ram:PostalTradeAddress > ram:PostcodeCode | DE-029-10 | Agent postcode |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CarrierAgentTradeParty > [items] > ram:PostalTradeAddress > ram:PostOfficeBox | DE-029-16 | Agent P.O. Box |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CarrierAgentTradeParty > [items] > ram:SequenceNumeric | DE-001-02 | Sequence number |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CarrierTradeParty > ram:ID | DE-014-24 | Shipping line, coded |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CrewQuantity | DE-034-03 | Number of crew |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CruiseItineraryTransportRoute > ram:ItineraryStopTransportEvent > [items] > ram:ArrivalRelatedDateTime | DE-025-02 | Cruise itinerary date and time of arrival |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CruiseItineraryTransportRoute > ram:ItineraryStopTransportEvent > [items] > ram:DepartureRelatedDateTime | DE-025-03 | Cruise itinerary date and time of departure |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CruiseItineraryTransportRoute > ram:ItineraryStopTransportEvent > [items] > ram:Description | DE-025-04 | Cruise activity description |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CruiseItineraryTransportRoute > ram:ItineraryStopTransportEvent > [items] > ram:OccurrenceLogisticsLocation > ram:ID | DE-025-01 | Cruise itinerary port, coded |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:CruiseItineraryTransportRoute > ram:ItineraryStopTransportEvent > [items] > ram:SequenceNumeric | DE-001-02 | Sequence number |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:DangerousGoodsIndicator | DE-014-11 | Dangerous goods carrier indicator |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:DefectReportingTransportEvent > ram:DefectIndicator | DE-013-01 | Ship defect indicator |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:DefectReportingTransportEvent > ram:ReportedSpecifiedFault > [items] > ram:Description | DE-013-03 | Ship defect description |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:DefectReportingTransportEvent > ram:ReportedSpecifiedFault > [items] > ram:TypeCode | DE-013-02 | Ship defect, coded |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:DriverQuantity | DE-034-05 | Number of drivers |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:FoundStowawayIndicator | DE-034-04 | Stowaways found indicator |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:FumigationIndicator | DE-053-01 | Fumigation indicator |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:GovernmentShipIndicator | DE-014-28 | Governmental ship indicator |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:ID | DE-014-02 | Voyage Number |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:ItineraryTransportRoute > ram:ItineraryStopTransportEvent > [items] > ram:ArrivalRelatedDateTime | DE-022-09 | Estimated date and time of arrival at the next port of call |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:ItineraryTransportRoute > ram:ItineraryStopTransportEvent > [items] > ram:DepartureRelatedDate | DE-023-09 | Previous port call departure date |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:ItineraryTransportRoute > ram:ItineraryStopTransportEvent > [items] > ram:EstimatedTransportMeansDepartureOccurrenceDateTime | DE-022-07 | Estimated date and time of departure from the last port of call |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:ItineraryTransportRoute > ram:ItineraryStopTransportEvent > [items] > ram:OccurrenceLogisticsLocation > ram:ID | DE-022-06 | Last port of call, coded |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:ItineraryTransportRoute > ram:ItineraryStopTransportEvent > [items] > ram:OccurrenceLogisticsLocation > ram:SubordinateRelatedSubordinateLocation > ram:Name | DE-022-14 | Itinerary subordinate port name |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:ItineraryTransportRoute > ram:ItineraryStopTransportEvent > [items] > ram:SequenceNumeric | DE-001-02 | Sequence number |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:ItineraryTransportRoute > ram:ScheduledSpecifiedPeriod > ram:StartDate | DE-022-10 | Itinerary start date |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:LinerServiceIndicator | DE-014-25 | Liner service indicator |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:MasterResponsibleTransportPerson > ram:FamilyName | DE-012-01 | Master family name |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:MasterResponsibleTransportPerson > ram:GivenName | DE-012-08 | Master given name |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:ModeCode | DE-014-03 | Mode of transport at the border |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:OnboardPersonQuantity | DE-034-01 | Number of persons on board |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:PassengerQuantity | DE-034-02 | Number of passengers |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:PortCallTradeContact > ram:EmailURIUniversalCommunication > ram:URIID | DE-012-06 | Ship contact person email address |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:PortCallTradeContact > ram:PersonName | DE-012-04 | Ship contact person name |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:PortCallTradeContact > ram:PostalTradeAddress > ram:FreeForm | DE-012-07 | Ship contact person address |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:PortCallTradeContact > ram:TelephoneUniversalCommunication > ram:CompleteNumber | DE-012-05 | Ship contact person phone number |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:RegularServiceID | DE-014-21 | Regular service identifier |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:RegularServiceIndicator | DE-014-20 | Regular service indicator |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:Service | DE-014-26 | Liner service name |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:ShippingAreaCode | DE-014-27 | Shipping area, coded |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:SixGhzTransmittingFrequencyIndicator | DE-014-29 | Transmitting on 6 GHz frequency indicator |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:SpecifiedStatutoryReportEvent > ram:ExpectedIndicator | DE-027-01 | Kiel canal passage planned indicator |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:SpecifiedTransportEvent > ram:Description | DE-022-13 | Voyage event description |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ActualMaximumDraughtLevelMeasure | DE-017-03 | Actual maximum draught |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:AftDraughtLevelMeasure | DE-017-02 | Draught aft |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:AirDraughtLevelMeasure | DE-017-06 | Air draught |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:FreeLiquidSurfaceCorrectionMeasure | DE-014-48 | Correction for free liquid surface |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:MaximumDraughtLevelMeasure | DE-008-22 | Maximum draught |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:RollPeriodMeasure | DE-014-49 | Roll period |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:SolidTransverseMetacentricHeightMeasure | DE-014-47 | Solid transverse metacentric height |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:DeadWeightMeasure | DE-008-29 | Ship deadweight tonnage |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:EstimatedMaximumDraughtLevelMeasure | DE-017-08 | Estimated departure draught |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ForwardDraughtLevelMeasure | DE-017-01 | Draught forward |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:GrossTonnageMeasure | DE-008-27 | Ship gross tonnage |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:MidShipDraughtLevelMeasure | DE-017-05 | Mid-ship draught |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:NetTonnageMeasure | DE-008-28 | Ship net tonnage |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:OffStandardLeftMeasure | DE-008-21 | Extra width port |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:OffStandardLengthMeasure | DE-008-19 | Extra length |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:OffStandardRightMeasure | DE-008-20 | Extra width starboard |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:OverallLengthMeasure | DE-008-25 | Ship length overall |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ProtrudingParts | DE-014-30 | Protruding parts description |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:RegistrationTradeCountry > ram:ID | DE-005-09 | Ship Flag state, coded |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:RegistrationTransportEvent > ram:ActualOccurrenceDate | DE-005-13 | Ship registry issue date |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:RegistrationTransportEvent > ram:CertifyingTradeParty > ram:ID | DE-005-10 | Ship registry, coded |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:RegistrationTransportEvent > ram:ID | DE-005-14 | Ship registry number |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:RegistrationTransportEvent > ram:OccurrenceLogisticsLocation > ram:ID | DE-005-12 | Ship registry port, coded |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:RegistrationTransportEvent > ram:OccurrenceLogisticsLocation > ram:Name | DE-005-11 | Ship registry port name |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ShipCompanyTradeParty > ram:AffiliationID | DE-007-34 | NOx Fund affiliation number |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ShipCompanyTradeParty > ram:EmailURIUniversalCommunication > [items] > ram:URIID | DE-007-08 | IMO company email address |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ShipCompanyTradeParty > ram:ID | DE-007-01 | IMO company number |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ShipCompanyTradeParty > ram:Name | DE-007-02 | IMO company name |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ShipCompanyTradeParty > ram:PostalTradeAddress > ram:CityName | DE-007-05 | IMO company city name |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ShipCompanyTradeParty > ram:PostalTradeAddress > ram:CountryID | DE-007-06 | IMO company country, coded |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ShipCompanyTradeParty > ram:PostalTradeAddress > ram:LineOne | DE-007-03 | IMO company street and number |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ShipCompanyTradeParty > ram:PostalTradeAddress > ram:PostcodeCode | DE-007-04 | IMO company postal code |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ShipCompanyTradeParty > ram:RegisteredID | DE-007-33 | NOx Fund company number |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ShipCompanyTradeParty > ram:SMDGCode | DE-007-35 | Ship company SMDG code |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ShipCompanyTradeParty > ram:TelephoneUniversalCommunication > [items] > ram:CompleteNumber | DE-007-07 | IMO company phone number |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:TypeCode | DE-005-16 | Ship type, coded |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:WidthMeasure | DE-008-13 | Vessel breadth |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:VoyageCabotageIndicator > [items] | DE-014-52 | Cabotage voyage indicator |
| noa:NOA > noa:SpecifiedLogisticsTransportMovement > ram:VoyageTypeServiceCode | DE-014-22 | Type of voyage, coded |

<a id="formality-nod"></a>
## NOD

- Mapping count: 91

| Tree path | DE ID | DE name |
| --- | --- | --- |
| nod:NOD > nod:ExchangedDeclaration > ram:StatementTypeCode | DE-003-07 | Declarant statement, coded |
| nod:NOD > nod:ExchangedDocument > ram:AttachedSpecifiedBinaryFile > [items] > ram:Description | DE-003-03 | Attachment description |
| nod:NOD > nod:ExchangedDocument > ram:AttachedSpecifiedBinaryFile > [items] > ram:FileName | DE-003-05 | Attachment file name |
| nod:NOD > nod:ExchangedDocument > ram:AttachedSpecifiedBinaryFile > [items] > ram:MIMECode | DE-003-06 | Attachment MIME type |
| nod:NOD > nod:ExchangedDocument > ram:AttachedSpecifiedBinaryFile > [items] > ram:TypeCode | DE-003-02 | Attachment type, coded |
| nod:NOD > nod:ExchangedDocument > ram:Remarks | DE-003-01 | Remarks |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:AfterDepartureSeaPassageIndicator | DE-016-09 | Sea border passage after departure indicator |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:DepartureBorderPortLocationID | DE-022-12 | Border port at departure, coded |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:DeparturePortExitLocationLocation | DE-016-02 | Port of call exit point |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:DeparturePortOperationsPortOperationEvent > ram:WaterwayDirectionCode | DE-020-04 | Departure direction, coded |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:EstimatedPortAreaDepartureRelatedDateTime | DE-016-01 | ETD from port area |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:EstimatedTransportMeansDepartureOccurrenceDateTime | DE-022-05 | Date and time of departure - estimated |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:PilotCompulsoryIndicator | DE-014-45 | Pilot compulsory indicator |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RelatedLogisticsConvoy > ram:DepartureConstellationIndicator | DE-020-02 | Constellation at departure indicator |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RelatedLogisticsConvoy > ram:DepartureFullyLoadedIndicator | DE-020-05 | Fully loaded at departure indicator |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotExemption > ram:ExaminationCandidatePermittedOnboardIndicator | DE-083-03 | Pilot exemption exam indicator |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotExemption > ram:PilotExemptionCertificate > [items] > ram:CertifiedTradeParty > ram:SpecifiedRepresentativePerson > ram:FamilyName | DE-083-12 | Pilot exemption certificate holder family name |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotExemption > ram:PilotExemptionCertificate > [items] > ram:CertifiedTradeParty > ram:SpecifiedRepresentativePerson > ram:GivenName | DE-083-13 | Pilot exemption certificate holder given name |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotExemption > ram:PilotExemptionCertificate > [items] > ram:ExpiryDate | DE-083-07 | Pilot exemption certificate validity date |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotExemption > ram:PilotExemptionCertificate > [items] > ram:ID | DE-083-02 | Pilotage exemption certificate number |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotExemption > ram:PilotExemptionCertificate > [items] > ram:TypeCode | DE-083-11 | Pilot exemption certificate type, coded |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotExemption > ram:PilotExemptionCertificate > [items] > ram:ValidFromLogisticsLocation > ram:ID | DE-083-04 | Pilot exemption certificate validity from port, coded |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotExemption > ram:PilotExemptionCertificate > [items] > ram:ValidFromLogisticsLocation > ram:Name | DE-083-05 | Pilot exemption certificate validity from port name |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotExemption > ram:PilotExemptionCertificate > [items] > ram:ValidFromLogisticsLocation > ram:SubordinateLocation > ram:SubordinateSubordinateLocation > ram:Name | DE-083-06 | Pilot exemption certificate validity from berth name |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotExemption > ram:PilotExemptionCertificate > [items] > ram:ValidToLogisticsLocation > ram:ID | DE-083-08 | Pilot exemption certificate validity to port, coded |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotExemption > ram:PilotExemptionCertificate > [items] > ram:ValidToLogisticsLocation > ram:Name | DE-083-09 | Pilot exemption certificate validity to port name |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotExemption > ram:PilotExemptionCertificate > [items] > ram:ValidToLogisticsLocation > ram:SubordinateLocation > ram:SubordinateSubordinateLocation > ram:Name | DE-083-10 | Pilot exemption certificate validity to berth name |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotExemption > ram:ShipExemptIndicator | DE-083-01 | Pilotage exemption indicator |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotExemption > ram:TypeCode | DE-083-14 | Pilotage exemption type, coded |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:SailingPlanningRequestTypeCode | DE-014-44 | Planning type for sailing request, coded |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:CargoApplicableTransshipment > ram:OccurrenceIndicator | DE-054-01 | Cargo transshipment indicator |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:CargoDescription | DE-014-16 | Cargo brief description |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:CarrierTradeParty > ram:ID | DE-014-24 | Shipping line, coded |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:CrewQuantity | DE-034-03 | Number of crew |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:DangerousGoodsIndicator | DE-014-11 | Dangerous goods carrier indicator |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:DefectReportingTransportEvent > ram:DefectIndicator | DE-013-01 | Ship defect indicator |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:DefectReportingTransportEvent > ram:ReportedSpecifiedFault > [items] > ram:Description | DE-013-03 | Ship defect description |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:DefectReportingTransportEvent > ram:ReportedSpecifiedFault > [items] > ram:TypeCode | DE-013-02 | Ship defect, coded |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:DepartureTransportEvent > ram:EstimatedTransportMeansDepartureOccurrenceDateTime | DE-016-04 | ETD from last port call location |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:DepartureTransportEvent > ram:OccurrenceLogisticsLocation > ram:SubordinateLocation > ram:Name | DE-016-03 | Expected last port call location |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:DriverQuantity | DE-034-05 | Number of drivers |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:ID | DE-014-02 | Voyage Number |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:ItineraryTransportRoute > ram:ItineraryStopTransportEvent > [items] > ram:ArrivalRelatedDateTime | DE-022-09 | Estimated date and time of arrival at the next port of call |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:ItineraryTransportRoute > ram:ItineraryStopTransportEvent > [items] > ram:OccurrenceLogisticsLocation > ram:ID | DE-022-08 | Next port of call, coded |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:ItineraryTransportRoute > ram:ItineraryStopTransportEvent > [items] > ram:OccurrenceLogisticsLocation > ram:SubordinateRelatedSubordinateLocation > ram:Name | DE-022-14 | Itinerary subordinate port name |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:ItineraryTransportRoute > ram:ItineraryStopTransportEvent > [items] > ram:SequenceNumeric | DE-001-02 | Sequence number |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:MasterResponsibleTransportPerson > ram:FamilyName | DE-012-01 | Master family name |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:MasterResponsibleTransportPerson > ram:GivenName | DE-012-08 | Master given name |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:OnboardPersonQuantity | DE-034-01 | Number of persons on board |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:PassengerQuantity | DE-034-02 | Number of passengers |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:PortCallTradeContact > ram:EmailURIUniversalCommunication > ram:URIID | DE-012-06 | Ship contact person email address |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:PortCallTradeContact > ram:PersonName | DE-012-04 | Ship contact person name |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:PortCallTradeContact > ram:PostalTradeAddress > ram:FreeForm | DE-012-07 | Ship contact person address |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:PortCallTradeContact > ram:TelephoneUniversalCommunication > ram:CompleteNumber | DE-012-05 | Ship contact person phone number |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:SpecifiedStatutoryReportEvent > ram:ExpectedIndicator | DE-027-01 | Kiel canal passage planned indicator |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ActualMaximumDraughtLevelMeasure | DE-017-03 | Actual maximum draught |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:AftDraughtLevelMeasure | DE-017-02 | Draught aft |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:AirDraughtLevelMeasure | DE-017-06 | Air draught |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:FreeLiquidSurfaceCorrectionMeasure | DE-014-48 | Correction for free liquid surface |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:MaximumDraughtLevelMeasure | DE-008-22 | Maximum draught |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:RollPeriodMeasure | DE-014-49 | Roll period |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:SolidTransverseMetacentricHeightMeasure | DE-014-47 | Solid transverse metacentric height |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:DeadWeightMeasure | DE-008-29 | Ship deadweight tonnage |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ForwardDraughtLevelMeasure | DE-017-01 | Draught forward |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:GrossTonnageMeasure | DE-008-27 | Ship gross tonnage |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:MidShipDraughtLevelMeasure | DE-017-05 | Mid-ship draught |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:NetTonnageMeasure | DE-008-28 | Ship net tonnage |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:OffStandardLeftMeasure | DE-008-21 | Extra width port |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:OffStandardLengthMeasure | DE-008-19 | Extra length |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:OffStandardRightMeasure | DE-008-20 | Extra width starboard |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:OverallLengthMeasure | DE-008-25 | Ship length overall |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ProtrudingParts | DE-014-30 | Protruding parts description |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:RegistrationTradeCountry > ram:ID | DE-005-09 | Ship Flag state, coded |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:RegistrationTransportEvent > ram:ActualOccurrenceDate | DE-005-13 | Ship registry issue date |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:RegistrationTransportEvent > ram:CertifyingTradeParty > ram:ID | DE-005-10 | Ship registry, coded |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:RegistrationTransportEvent > ram:ID | DE-005-14 | Ship registry number |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:RegistrationTransportEvent > ram:OccurrenceLogisticsLocation > ram:ID | DE-005-12 | Ship registry port, coded |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:RegistrationTransportEvent > ram:OccurrenceLogisticsLocation > ram:Name | DE-005-11 | Ship registry port name |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ShipCompanyTradeParty > ram:AffiliationID | DE-007-34 | NOx Fund affiliation number |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ShipCompanyTradeParty > ram:EmailURIUniversalCommunication > [items] > ram:URIID | DE-007-08 | IMO company email address |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ShipCompanyTradeParty > ram:ID | DE-007-01 | IMO company number |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ShipCompanyTradeParty > ram:Name | DE-007-02 | IMO company name |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ShipCompanyTradeParty > ram:PostalTradeAddress > ram:CityName | DE-007-05 | IMO company city name |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ShipCompanyTradeParty > ram:PostalTradeAddress > ram:CountryID | DE-007-06 | IMO company country, coded |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ShipCompanyTradeParty > ram:PostalTradeAddress > ram:LineOne | DE-007-03 | IMO company street and number |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ShipCompanyTradeParty > ram:PostalTradeAddress > ram:PostcodeCode | DE-007-04 | IMO company postal code |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ShipCompanyTradeParty > ram:RegisteredID | DE-007-33 | NOx Fund company number |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ShipCompanyTradeParty > ram:SMDGCode | DE-007-35 | Ship company SMDG code |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ShipCompanyTradeParty > ram:TelephoneUniversalCommunication > [items] > ram:CompleteNumber | DE-007-07 | IMO company phone number |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:TypeCode | DE-005-16 | Ship type, coded |
| nod:NOD > nod:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:WidthMeasure | DE-008-13 | Vessel breadth |

<a id="formality-pbk"></a>
## PBK

- Mapping count: 58

| Tree path | DE ID | DE name |
| --- | --- | --- |
| pbk:PBK > pbk:ExchangedDocument > ram:Remarks | DE-003-01 | Remarks |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AssociatedPassengerBooking > ram:ActualDateTime | DE-038-06 | Booking date time |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AssociatedPassengerBooking > ram:BookedReturnIndicator | DE-038-30 | Return booked indicator |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AssociatedPassengerBooking > ram:BookingCountryID | DE-038-05 | Booking country, coded |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AssociatedPassengerBooking > ram:BookingTypeCode | DE-038-04 | Booking type, coded |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AssociatedPassengerBooking > ram:CheckInDateTime | DE-038-11 | Check-in date time |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AssociatedPassengerBooking > ram:CurrencyConversionRate | DE-038-15 | Received conversion rate |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AssociatedPassengerBooking > ram:LatestBookingAmendmentDateTime | DE-038-07 | Booking latest amendment date time |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AssociatedPassengerBooking > ram:PassengerUniqueReferenceIDID | DE-038-01 | Passenger unique reference number |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AssociatedPassengerBooking > ram:PaymentAmount | DE-038-13 | Booking payment amount |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AssociatedPassengerBooking > ram:PaymentCurrencyCode | DE-038-14 | Payment currency, coded |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AssociatedPassengerBooking > ram:PaymentMethodCode | DE-038-12 | Method of payment, coded |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AssociatedPassengerBooking > ram:PaymentTradeSettlementFinancialCard > ram:CardholderName | DE-038-18 | Credit card holder name |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AssociatedPassengerBooking > ram:PaymentTradeSettlementFinancialCard > ram:ID | DE-038-16 | Credit card number |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AssociatedPassengerBooking > ram:PaymentTradeSettlementFinancialCard > ram:IssuingCompanyName | DE-038-17 | Credit card service provider name |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AssociatedPassengerBooking > ram:PetKennelBookedIndicator | DE-038-09 | Pet kennel indicator |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AssociatedPassengerBooking > ram:ReturnTravelDateTime | DE-038-31 | Return travel date time |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AssociatedPassengerBooking > ram:SeatOrCabinID | DE-038-08 | Passenger seat or cabin number |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AssociatedPassengerBooking > ram:SpecifiedBookingPerson > ram:Name | DE-038-19 | Booking person name |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AssociatedPassengerBooking > ram:SpecifiedBookingPerson > ram:ResidenceTradeAddress > ram:AdditionalStreetName | DE-038-21 | Booking person address, street additional line |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AssociatedPassengerBooking > ram:SpecifiedBookingPerson > ram:ResidenceTradeAddress > ram:BuildingNumber | DE-038-22 | Booking person address, number |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AssociatedPassengerBooking > ram:SpecifiedBookingPerson > ram:ResidenceTradeAddress > ram:CityName | DE-038-25 | Booking person address, city |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AssociatedPassengerBooking > ram:SpecifiedBookingPerson > ram:ResidenceTradeAddress > ram:CountryID | DE-038-27 | Booking person address country, coded |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AssociatedPassengerBooking > ram:SpecifiedBookingPerson > ram:ResidenceTradeAddress > ram:CountrySubDivisionName | DE-038-26 | Booking person address, sub-division |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AssociatedPassengerBooking > ram:SpecifiedBookingPerson > ram:ResidenceTradeAddress > ram:PostcodeCode | DE-038-24 | Booking person address, postcode |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AssociatedPassengerBooking > ram:SpecifiedBookingPerson > ram:ResidenceTradeAddress > ram:PostOfficeBox | DE-038-23 | Booking person address, P.O. box |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AssociatedPassengerBooking > ram:SpecifiedBookingPerson > ram:ResidenceTradeAddress > ram:StreetName | DE-038-20 | Booking person address, street |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AssociatedPassengerBooking > ram:SpecifiedBookingPerson > ram:TelephoneUniversalCommunication > ram:CompleteNumber | DE-038-28 | Booking person contact number |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AssociatedPassengerBooking > ram:SpecifiedBookingPerson > ram:URIUniversalCommunication > ram:URIID | DE-038-29 | Booking person email address |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AssociatedPassengerBooking > ram:TicketID | DE-038-02 | Passenger ticket number |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AssociatedPassengerBooking > ram:TransitInterlinedTravelTypeCode | DE-038-10 | Transit interlined travel type, coded |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:BirthCountryID | DE-035-07 | Person country of birth, coded |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:BirthDate | DE-035-05 | Person date of birth |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:BirthplaceName | DE-035-06 | Person place of birth name |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:DisembarkationLogisticsLocation > ram:ID | DE-035-11 | Person port of disembarkation, coded |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:EmailURIUniversalCommunication > ram:URIID | DE-035-31 | Person email address |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:EmbarkationDateTime | DE-035-10 | Person embarkation date and time |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:EmbarkationLogisticsLocation > ram:ID | DE-035-09 | Person port of embarkation, coded |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:FamilyName | DE-035-02 | Person family name |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:GenderCode | DE-035-08 | Person gender, coded |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:GivenName | DE-035-03 | Person given name |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:InformationTradeAddress > ram:AdditionalStreetName | DE-035-33 | Person home address street additional line |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:InformationTradeAddress > ram:BuildingNumber | DE-035-34 | Person home address number |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:InformationTradeAddress > ram:CityName | DE-035-37 | Person home address city |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:InformationTradeAddress > ram:CountryID | DE-035-39 | Person home address country, coded |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:InformationTradeAddress > ram:CountrySubDivisionName | DE-035-38 | Person home address country sub-division name |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:InformationTradeAddress > ram:PostcodeCode | DE-035-36 | Person home address postcode |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:InformationTradeAddress > ram:PostOfficeBox | DE-035-35 | Person home address P.O. box |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:InformationTradeAddress > ram:StreetName | DE-035-32 | Person home address street |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:InTransitIndicator | DE-035-13 | Person in transit indicator |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:MobileTelephoneUniversalCommunication > ram:CompleteNumber | DE-035-30 | Person phone number |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:NationalityTradeCountry > [items] > ram:AdditionalIdentificationID | DE-035-04 | Person nationality, coded |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TechnicalID | DE-035-40 | Unique passenger technical identifier |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TravelIdentityReferencedDocument > ram:EffectiveSpecifiedPeriod > ram:EndDate | DE-035-22 | Person identity or travel document expiry date |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TravelIdentityReferencedDocument > ram:ID | DE-035-17 | Person identity or travel document number |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TravelIdentityReferencedDocument > ram:IssueLogisticsLocation > ram:CountryID | DE-035-18 | Person identity or travel document issuing nation, coded |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TravelIdentityReferencedDocument > ram:TypeCode | DE-035-16 | Person identity or travel document type, coded |
| pbk:PBK > pbk:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TravelVisaReferencedDocument > ram:ID | DE-039-10 | Person visa number |

<a id="formality-pxa"></a>
## PXA

- Mapping count: 50

| Tree path | DE ID | DE name |
| --- | --- | --- |
| pxa:PXA > pxa:ExchangedDocument > ram:Remarks | DE-003-01 | Remarks |
| pxa:PXA > pxa:ExchangedDocument > ram:SubtypeCode > [items] | DE-002-11 | Message subtype, coded |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AshoreLicenceIndicator | DE-039-01 | License to be ashore indicator |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AssistanceRequirements | DE-035-25 | Person special care or assistance description |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AssociatedPassengerBooking > ram:TicketID | DE-038-02 | Passenger ticket number |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AssociatedPassengerBooking > ram:TicketSalesCompanyID | DE-038-03 | Ticket selling company identifier |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:BirthCountryID | DE-035-07 | Person country of birth, coded |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:BirthDate | DE-035-05 | Person date of birth |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:BirthplaceName | DE-035-06 | Person place of birth name |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:CategoryCode | DE-035-01 | Person type, coded |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:Comments | DE-035-27 | Person comments |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:CruiseExcursionPassengerIndicator | DE-035-41 | Cruise excursion indicator |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:DisembarkationDate | DE-035-12 | Person disembarkation date |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:DisembarkationLogisticsLocation > ram:FirstBorderCrossingRelatedSubordinateLocation > ram:AssociatedTransportModeCode | DE-039-07 | Disembarkation to first border crossing transport mode, coded |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:DisembarkationLogisticsLocation > ram:FirstBorderCrossingRelatedSubordinateLocation > ram:ID | DE-039-06 | Disembarkation first border crossing, coded |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:DisembarkationLogisticsLocation > ram:FirstBorderCrossingRelatedSubordinateLocation > ram:ImmediateNextID | DE-039-05 | Immediate next country after disembarkation, coded |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:DisembarkationLogisticsLocation > ram:FirstBorderCrossingRelatedSubordinateLocation > ram:OnboardPersonInsuranceExemptionIndicator | DE-039-08 | Person insurance exemption indicator |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:DisembarkationLogisticsLocation > ram:ID | DE-035-11 | Person port of disembarkation, coded |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:EmailURIUniversalCommunication > ram:URIID | DE-035-31 | Person email address |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:EmbarkationDateTime | DE-035-10 | Person embarkation date and time |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:EmbarkationLogisticsLocation > ram:ID | DE-035-09 | Person port of embarkation, coded |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:EmergencyTelephoneUniversalCommunication > ram:CompleteNumber | DE-035-29 | Person emergency contact number |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:FamilyName | DE-035-02 | Person family name |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:GenderCode | DE-035-08 | Person gender, coded |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:GivenName | DE-035-03 | Person given name |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:InformationTradeAddress > ram:AdditionalStreetName | DE-035-33 | Person home address street additional line |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:InformationTradeAddress > ram:BuildingNumber | DE-035-34 | Person home address number |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:InformationTradeAddress > ram:CityName | DE-035-37 | Person home address city |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:InformationTradeAddress > ram:CountryID | DE-035-39 | Person home address country, coded |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:InformationTradeAddress > ram:CountrySubDivisionName | DE-035-38 | Person home address country sub-division name |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:InformationTradeAddress > ram:PostcodeCode | DE-035-36 | Person home address postcode |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:InformationTradeAddress > ram:PostOfficeBox | DE-035-35 | Person home address P.O. box |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:InformationTradeAddress > ram:StreetName | DE-035-32 | Person home address street |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:InTransitIndicator | DE-035-13 | Person in transit indicator |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:MobileTelephoneUniversalCommunication > ram:CompleteNumber | DE-035-30 | Person phone number |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:MovementTypeCode | DE-035-26 | Person movement type, coded |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:NationalityTradeCountry > [items] > ram:AdditionalIdentificationID | DE-035-04 | Person nationality, coded |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:ResidencePermitReferencedDocument > ram:ID | DE-039-09 | Residence permit number |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:ResidencePermitReferencedDocument > ram:IssueLogisticsLocation > ram:CountryID | DE-039-04 | Residence permit issuing country, coded |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:SequenceNumeric | DE-001-02 | Sequence number |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:SpecificCertifiedAccreditation > ram:TypeCode | DE-039-02 | Passenger accreditation type, coded |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TechnicalID | DE-035-40 | Unique passenger technical identifier |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TravelIdentityReferencedDocument > ram:EffectiveSpecifiedPeriod > ram:EndDate | DE-035-22 | Person identity or travel document expiry date |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TravelIdentityReferencedDocument > ram:ID | DE-035-17 | Person identity or travel document number |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TravelIdentityReferencedDocument > ram:IssueDate | DE-035-21 | Person identity or travel document issue date |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TravelIdentityReferencedDocument > ram:IssueLogisticsLocation > ram:CountryID | DE-035-18 | Person identity or travel document issuing nation, coded |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TravelIdentityReferencedDocument > ram:IssuerTradeParty > ram:Name | DE-035-19 | Person identity or travel document issuer name |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TravelIdentityReferencedDocument > ram:TypeCode | DE-035-16 | Person identity or travel document type, coded |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TravelVisaReferencedDocument > ram:ID | DE-039-10 | Person visa number |
| pxa:PXA > pxa:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TravelVisaReferencedDocument > ram:IssueLogisticsLocation > ram:CountryID | DE-039-11 | Person visa issuing country, coded |

<a id="formality-pxd"></a>
## PXD

- Mapping count: 46

| Tree path | DE ID | DE name |
| --- | --- | --- |
| pxd:PXD > pxd:ExchangedDocument > ram:Remarks | DE-003-01 | Remarks |
| pxd:PXD > pxd:ExchangedDocument > ram:SubtypeCode > [items] | DE-002-11 | Message subtype, coded |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AshoreLicenceIndicator | DE-039-01 | License to be ashore indicator |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AssistanceRequirements | DE-035-25 | Person special care or assistance description |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AssociatedPassengerBooking > ram:TicketID | DE-038-02 | Passenger ticket number |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:AssociatedPassengerBooking > ram:TicketSalesCompanyID | DE-038-03 | Ticket selling company identifier |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:BirthCountryID | DE-035-07 | Person country of birth, coded |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:BirthDate | DE-035-05 | Person date of birth |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:BirthplaceName | DE-035-06 | Person place of birth name |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:CategoryCode | DE-035-01 | Person type, coded |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:Comments | DE-035-27 | Person comments |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:CruiseExcursionPassengerIndicator | DE-035-41 | Cruise excursion indicator |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:DisembarkationDate | DE-035-12 | Person disembarkation date |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:DisembarkationLogisticsLocation > ram:ID | DE-035-11 | Person port of disembarkation, coded |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:EmailURIUniversalCommunication > ram:URIID | DE-035-31 | Person email address |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:EmbarkationDateTime | DE-035-10 | Person embarkation date and time |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:EmbarkationLogisticsLocation > ram:ID | DE-035-09 | Person port of embarkation, coded |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:EmergencyTelephoneUniversalCommunication > ram:CompleteNumber | DE-035-29 | Person emergency contact number |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:FamilyName | DE-035-02 | Person family name |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:GenderCode | DE-035-08 | Person gender, coded |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:GivenName | DE-035-03 | Person given name |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:InformationTradeAddress > ram:AdditionalStreetName | DE-035-33 | Person home address street additional line |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:InformationTradeAddress > ram:BuildingNumber | DE-035-34 | Person home address number |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:InformationTradeAddress > ram:CityName | DE-035-37 | Person home address city |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:InformationTradeAddress > ram:CountryID | DE-035-39 | Person home address country, coded |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:InformationTradeAddress > ram:CountrySubDivisionName | DE-035-38 | Person home address country sub-division name |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:InformationTradeAddress > ram:PostcodeCode | DE-035-36 | Person home address postcode |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:InformationTradeAddress > ram:PostOfficeBox | DE-035-35 | Person home address P.O. box |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:InformationTradeAddress > ram:StreetName | DE-035-32 | Person home address street |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:InTransitIndicator | DE-035-13 | Person in transit indicator |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:MobileTelephoneUniversalCommunication > ram:CompleteNumber | DE-035-30 | Person phone number |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:MovementTypeCode | DE-035-26 | Person movement type, coded |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:NationalityTradeCountry > [items] > ram:AdditionalIdentificationID | DE-035-04 | Person nationality, coded |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:ResidencePermitReferencedDocument > ram:ID | DE-039-09 | Residence permit number |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:ResidencePermitReferencedDocument > ram:IssueLogisticsLocation > ram:CountryID | DE-039-04 | Residence permit issuing country, coded |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:SequenceNumeric | DE-001-02 | Sequence number |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:SpecificCertifiedAccreditation > ram:TypeCode | DE-039-02 | Passenger accreditation type, coded |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TechnicalID | DE-035-40 | Unique passenger technical identifier |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TravelIdentityReferencedDocument > ram:EffectiveSpecifiedPeriod > ram:EndDate | DE-035-22 | Person identity or travel document expiry date |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TravelIdentityReferencedDocument > ram:ID | DE-035-17 | Person identity or travel document number |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TravelIdentityReferencedDocument > ram:IssueDate | DE-035-21 | Person identity or travel document issue date |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TravelIdentityReferencedDocument > ram:IssueLogisticsLocation > ram:CountryID | DE-035-18 | Person identity or travel document issuing nation, coded |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TravelIdentityReferencedDocument > ram:IssuerTradeParty > ram:Name | DE-035-19 | Person identity or travel document issuer name |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TravelIdentityReferencedDocument > ram:TypeCode | DE-035-16 | Person identity or travel document type, coded |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TravelVisaReferencedDocument > ram:ID | DE-039-10 | Person visa number |
| pxd:PXD > pxd:SpecifiedLogisticsTransportMovement > ram:OnboardTransportPerson > [items] > ram:TravelVisaReferencedDocument > ram:IssueLogisticsLocation > ram:CountryID | DE-039-11 | Person visa issuing country, coded |

<a id="formality-sec"></a>
## SEC

- Mapping count: 43

| Tree path | DE ID | DE name |
| --- | --- | --- |
| sec:SEC > sec:ExchangedDocument > ram:Remarks | DE-003-01 | Remarks |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:HigherSecurityLevelReason | DE-023-08 | Higher security level reason |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:LastTenFacilityLocationsNotReportedReason | DE-014-43 | Missing previous calls justification |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OccurrenceLogisticsLocation > ram:FacilityReferencedLocation > ram:ID | DE-014-05 | Port facility, coded |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:ItineraryTransportRoute > ram:ItineraryStopTransportEvent > [items] > ram:AdditionalSecurityMeasuresApplicableNote > [items] > ram:Content | DE-023-07 | Ship additional security measures, description |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:ItineraryTransportRoute > ram:ItineraryStopTransportEvent > [items] > ram:AdditionalSecurityMeasuresApplicableNote > [items] > ram:ContentCode | DE-023-06 | Ship additional security measures, coded |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:ItineraryTransportRoute > ram:ItineraryStopTransportEvent > [items] > ram:ConveyanceFacilityRelatedLogisticsLocation > ram:StaySpecifiedPeriod > ram:EndDate | DE-023-05 | Previous port facility call end date |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:ItineraryTransportRoute > ram:ItineraryStopTransportEvent > [items] > ram:ConveyanceFacilityRelatedLogisticsLocation > ram:StaySpecifiedPeriod > ram:StartDate | DE-023-04 | Previous port facility call start date |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:ItineraryTransportRoute > ram:ItineraryStopTransportEvent > [items] > ram:OccurrenceLogisticsLocation > ram:FacilityReferencedLocation > ram:ID | DE-023-02 | Previous port facility, coded |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:ItineraryTransportRoute > ram:ItineraryStopTransportEvent > [items] > ram:OccurrenceLogisticsLocation > ram:ID | DE-024-01 | Subsequent port of call, coded |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:ItineraryTransportRoute > ram:ItineraryStopTransportEvent > [items] > ram:SecurityLevelCode | DE-023-03 | Ship security level in previous port facility, coded |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:ItineraryTransportRoute > ram:ItineraryStopTransportEvent > [items] > ram:SequenceNumeric | DE-001-02 | Sequence number |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:ShipToShipEvent > [items] > ram:AdditionalSecurityMeasuresApplicableNote > [items] > ram:Content | DE-028-10 | Ship security measures description |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:ShipToShipEvent > [items] > ram:AdditionalSecurityMeasuresApplicableNote > [items] > ram:ContentCode | DE-028-09 | Ship security measures, coded |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:ShipToShipEvent > [items] > ram:Description | DE-028-02 | Ship-to-ship activity description |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:ShipToShipEvent > [items] > ram:OccurrenceLogisticsLocation > ram:ID | DE-028-04 | Ship-to-ship activity location, coded |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:ShipToShipEvent > [items] > ram:OccurrenceLogisticsLocation > ram:Name | DE-028-03 | Ship-to-ship activity location name |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:ShipToShipEvent > [items] > ram:OccurrenceLogisticsLocation > ram:PhysicalGeographicalCoordinate > ram:LatitudeMeasure | DE-028-07 | Ship-to-ship activity location, latitude |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:ShipToShipEvent > [items] > ram:OccurrenceLogisticsLocation > ram:PhysicalGeographicalCoordinate > ram:LongitudeMeasure | DE-028-08 | Ship-to-ship activity location, longitude |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:ShipToShipEvent > [items] > ram:OccurrenceSpecifiedPeriod > ram:EndDate | DE-028-06 | Ship-to-ship activity end date |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:ShipToShipEvent > [items] > ram:OccurrenceSpecifiedPeriod > ram:StartDate | DE-028-05 | Ship-to-ship activity start date |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:ShipToShipEvent > [items] > ram:SecondShipName | DE-028-11 | Ship-to ship activity second ship name |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:ShipToShipEvent > [items] > ram:SequenceNumeric | DE-001-02 | Sequence number |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:ShipToShipEvent > [items] > ram:TypeCode | DE-028-01 | Ship-to-ship activity, coded |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ApprovedSecurityPlanOnboardIndicator | DE-005-17 | Security Plan approval indicator |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:CompanySecurityOfficerTransportPerson > ram:EmailURIUniversalCommunication > ram:URIID | DE-031-04 | Company security officer email |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:CompanySecurityOfficerTransportPerson > ram:FamilyName | DE-031-01 | Company security officer family name |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:CompanySecurityOfficerTransportPerson > ram:GivenName | DE-031-07 | Company security officer given name |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:CompanySecurityOfficerTransportPerson > ram:InformationTradeAddress > ram:FreeForm | DE-031-06 | Company security officer address |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:CompanySecurityOfficerTransportPerson > ram:LandlineTelephoneUniversalCommunication > ram:CompleteNumber | DE-031-05 | Company security officer landline number |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:CompanySecurityOfficerTransportPerson > ram:MobileTelephoneUniversalCommunication > ram:CompleteNumber | DE-031-03 | Company security officer mobile number |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:CompanySecurityOfficerTransportPerson > ram:RoleCode | DE-031-02 | Company security officer rank or rating, coded |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ISPSSecurityLevelCode | DE-005-18 | Ship current security level, coded |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:MaritimeApplicableISSCCertificate > ram:ExpiryDate | DE-030-06 | ISSC expiry date |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:MaritimeApplicableISSCCertificate > ram:ID | DE-030-08 | ISSC identifier |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:MaritimeApplicableISSCCertificate > ram:IssuerTradeParty > ram:SpecifiedLegalOrganization > ram:Name | DE-030-05 | RSO Name |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:MaritimeApplicableISSCCertificate > ram:IssuerTradeParty > ram:SpecifiedLegalOrganization > ram:PostalTradeAddress > ram:CountryID | DE-030-04 | ISSC contracting Government, coded |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:MaritimeApplicableISSCCertificate > ram:ReportedDocumentStatus > ram:Reason | DE-030-02 | Reason why ship has no valid ISSC or interim ISSC |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:MaritimeApplicableISSCCertificate > ram:ReportedDocumentStatus > ram:ReasonCode | DE-030-03 | Reason why ship has no valid ISSC or interim ISSC, coded |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:MaritimeApplicableISSCCertificate > ram:TypeCode | DE-030-07 | ISSC type, coded |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:MaritimeApplicableISSCCertificate > ram:ValidIndicator | DE-030-01 | Valid ISSC indicator |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:MobileSpecifiedSatelliteIdentification > [items] > ram:ID | DE-005-19 | Ship satellite service number |
| sec:SEC > sec:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:MobileSpecifiedSatelliteIdentification > [items] > ram:ProviderCode | DE-005-20 | Ship satellite service provider, coded |

<a id="formality-shp"></a>
## SHP

- Mapping count: 98

| Tree path | DE ID | DE name |
| --- | --- | --- |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:BetweenPerpendicularsLengthMeasure | DE-008-01 | Length between perpendiculars |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ChartererParty > ram:Name | DE-007-28 | Charterer name |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ChartererParty > ram:PostalTradeAddress > ram:CityName | DE-007-31 | Charterer city name |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ChartererParty > ram:PostalTradeAddress > ram:CountryID | DE-007-32 | Charterer country, coded |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ChartererParty > ram:PostalTradeAddress > ram:LineOne | DE-007-29 | Charterer street and number |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ChartererParty > ram:PostalTradeAddress > ram:PostcodeCode | DE-007-30 | Charterer postal code |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ChartererParty > ram:TypeCode | DE-007-27 | Charterer type, coded |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:CommercialManagerTradeParty > ram:Name | DE-007-17 | Commercial manager name |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:CommercialManagerTradeParty > ram:PostalTradeAddress > ram:CityName | DE-007-20 | Commercial manager city name |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:CommercialManagerTradeParty > ram:PostalTradeAddress > ram:CountryID | DE-007-21 | Commercial manager country, coded |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:CommercialManagerTradeParty > ram:PostalTradeAddress > ram:LineOne | DE-007-18 | Commercial manager street and number |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:CommercialManagerTradeParty > ram:PostalTradeAddress > ram:PostcodeCode | DE-007-19 | Commercial manager postal code |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:ApplicableSpecifiedMarineGreenCredential > ram:ExhaustGasCleaningSystemIndicator | DE-011-02 | Exhaust gas cleaning systems indicator |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:ApplicableSpecifiedMarineGreenCredential > ram:IGFRegulatoryRequirementIndicator | DE-011-05 | Ship IGF indicator |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:ApplicableSpecifiedMarineGreenCredential > ram:NOxReductionSystemDescription | DE-011-08 | NOx reduction system description |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:ApplicableSpecifiedMarineGreenCredential > ram:ScrubberSystemIndicator | DE-011-03 | Scrubber system indicator |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:ApplicableSpecifiedMarineGreenCredential > ram:ScrubberSystemTypeCode | DE-011-04 | Scrubber system type, coded |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:AuxiliaryEngineQuantity | DE-010-09 | Number of auxiliary engines |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:BodyLengthParallelMeasure | DE-008-06 | Parallel body ship length |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:BowThrusterQuantity | DE-010-18 | Number of bow thrusters |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:BowToBridgeMeasure | DE-008-07 | Bow to bridge length |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:BulbousBowIndicator | DE-009-19 | Bulbous bow indicator |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:ConstructionVesselBuilding > ram:ConstructionDate | DE-009-04 | Build date |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:ConstructionVesselBuilding > ram:ContractDate | DE-009-06 | Building contract date |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:ConstructionVesselBuilding > ram:Description | DE-009-18 | Ship construction characteristics description |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:ConstructionVesselBuilding > ram:KeelLayingDate | DE-009-05 | Keel laying date |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:DepthMeasure | DE-008-23 | Vessel depth |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:DisplacementMeasure | DE-008-24 | Vessel maximum displacement measure |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:FullyLoadedAftToManifoldParallelMeasure | DE-008-03 | Parallel body distance aft to mid-point manifold fully loaded |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:FullyLoadedForwardToManifoldParallelMeasure | DE-008-02 | Parallel body distance forward to mid-point manifold fully loaded |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:InBallastAftToManifoldParallelMeasure | DE-008-05 | Parallel body distance aft to mid-point manifold in ballast |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:InBallastForwardToManifoldParallelMeasure | DE-008-04 | Parallel body distance forward to mid-point manifold in ballast |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:InertGasSystemIndicator | DE-009-17 | Inert gas system indicator |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:KeelToMastLengthMeasure | DE-008-18 | Keel to mast distance |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:MainEngineQuantity | DE-010-02 | Number of main engines |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:MastHeightMeasure | DE-008-17 | Mast height |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:MaximumTEUCapacityQuantity | DE-008-10 | Vessel maximum TEU capacity |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:MooringWinchQuantity | DE-009-12 | Number of mooring winches |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:OnboardSpecifiedMarineThruster > [items] > ram:BowPowerMeasure | DE-010-20 | Bow thruster Power |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:OnboardSpecifiedMarineThruster > [items] > ram:SternPowerMeasure | DE-010-21 | Stern thruster Power |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:OnboardSpecifiedPropeller > [items] > ram:DriveTypeCode | DE-010-24 | Drive type, coded |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:OnboardSpecifiedPropeller > [items] > ram:LocationCode | DE-010-13 | Propeller location, coded |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:OnboardSpecifiedPropeller > [items] > ram:PitchRotationCode | DE-010-16 | Pitch propeller rotation, coded |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:OnboardSpecifiedPropeller > [items] > ram:PowerMeasure | DE-010-14 | Propellers power |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:OnboardSpecifiedPropeller > [items] > ram:TypeCode | DE-010-12 | Propeller type, coded |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:OnboardSpecifiedPropeller > [items] > ram:VariablePitchIndicator | DE-010-15 | Variable pitch propeller indicator |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:OnboardVesselRamp > ram:LengthMeasure | DE-009-07 | Ramp length |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:OnboardVesselRamp > ram:LocationCode | DE-009-08 | Ramp location, coded |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:OnboardVesselRamp > ram:WidthMeasure | DE-009-09 | Ramp width |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:PropellerQuantity | DE-010-11 | Number of propellers |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:RudderQuantity | DE-010-23 | The number of rudders |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:RudderSurfaceAreaMeasure | DE-008-14 | Rudder surface |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:SpecifiedMooringWinch > [items] > ram:Description | DE-009-11 | Mooring winches type description |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:SpecifiedMooringWinch > [items] > ram:LocationCode | DE-009-10 | Mooring winches position, coded |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:SpecifiedMooringWinch > [items] > ram:WorkingLoadLimitWeightMeasure | DE-009-13 | Mooring winches working load limit |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:SternThrusterQuantity | DE-010-19 | Number of stern thrusters |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:SternToBridgeMeasure | DE-008-08 | Stern to bridge length |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:SummerDeadweightTonnageMeasure | DE-008-09 | Summer deadweight |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:ThrusterIndicator | DE-010-17 | Thrusters indicator |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:WindageSurfaceAreaMeasure | DE-008-15 | Windage area |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ExternalMarking | DE-005-21 | Vessel external markings |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ICEClassCode | DE-009-03 | ICE class, coded |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:MainEngineAvailabilityIndicator | DE-010-01 | Main engine availability indicator |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:MLCShipownerTradeParty > ram:Name | DE-007-36 | MLC shipowner name |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:MobileSpecifiedSatelliteIdentification > [items] > ram:ID | DE-005-19 | Ship satellite service number |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:MobileSpecifiedSatelliteIdentification > [items] > ram:ProviderCode | DE-005-20 | Ship satellite service provider, coded |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:NavigationTypeCode | DE-005-23 | Ship navigation type, coded |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:OnboardAuxiliaryEngine > [items] > ram:EngineIGFIndicator | DE-011-07 | Engine IGF indicator |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:OnboardAuxiliaryEngine > [items] > ram:EngineTierTypeCode | DE-011-06 | Engine tier, coded |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:OnboardAuxiliaryEngine > [items] > ram:PowerMeasure | DE-010-10 | Auxiliary engine power |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:OnboardAuxiliaryEngine > [items] > ram:SequenceNumeric | DE-001-02 | Sequence number |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:OnboardMainEngine > [items] > ram:EngineIGFIndicator | DE-011-07 | Engine IGF indicator |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:OnboardMainEngine > [items] > ram:EngineTierTypeCode | DE-011-06 | Engine tier, coded |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:OnboardMainEngine > [items] > ram:ExhaustEmissionClassCode | DE-010-03 | Main exhaust emission class, coded |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:OnboardMainEngine > [items] > ram:FullCargoSpeedMeasure | DE-010-07 | Main engine full cargo speed |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:OnboardMainEngine > [items] > ram:InBallastSpeedMeasure | DE-010-08 | Main engine speed in ballast |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:OnboardMainEngine > [items] > ram:LatestTestDate | DE-010-05 | Main engine last test date |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:OnboardMainEngine > [items] > ram:ManufacturerTradeParty > ram:Name | DE-010-04 | Main engine manufacturer name |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:OnboardMainEngine > [items] > ram:PowerMeasure | DE-010-06 | Main engine power |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:OnboardMainEngine > [items] > ram:SequenceNumeric | DE-001-02 | Sequence number |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:OnboardMainEngine > [items] > ram:TypeCode | DE-010-26 | Main engine type, coded |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:OpenWaterSpeedMeasure | DE-010-22 | Ship operational speed |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:OperatorTradeParty > ram:Name | DE-007-16 | Lessee name |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:OwnerTradeParty > ram:ApplicableMembership > ram:ProvidingLegalOrganization > ram:Name | DE-007-15 | P&I Club name |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:OwnerTradeParty > ram:Name | DE-007-10 | Registered owner name |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:OwnerTradeParty > ram:PostalTradeAddress > ram:CityName | DE-007-13 | Registered owner city name |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:OwnerTradeParty > ram:PostalTradeAddress > ram:CountryID | DE-007-14 | Registered owner country, coded |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:OwnerTradeParty > ram:PostalTradeAddress > ram:LineOne | DE-007-11 | Registered owner street and number |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:OwnerTradeParty > ram:PostalTradeAddress > ram:PostcodeCode | DE-007-12 | Registered owner postal code |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:OwnerTradeParty > ram:RegisteredID | DE-007-09 | Registered owner IMO number |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ReducedGrossTonnageMeasure | DE-008-16 | Reduced gross tonnage |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:RelatedTransportModeCode | DE-005-22 | Ship transport mode, coded |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:SummerDraughtLevelMeasure | DE-008-11 | Summer draught |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:TechnicalManagerTradeParty > ram:Name | DE-007-22 | Technical manager name |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:TechnicalManagerTradeParty > ram:PostalTradeAddress > ram:CityName | DE-007-25 | Technical manager city name |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:TechnicalManagerTradeParty > ram:PostalTradeAddress > ram:CountryID | DE-007-26 | Technical manager country, coded |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:TechnicalManagerTradeParty > ram:PostalTradeAddress > ram:LineOne | DE-007-23 | Technical manager street and number |
| shp:SHP > shp:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:TechnicalManagerTradeParty > ram:PostalTradeAddress > ram:PostcodeCode | DE-007-24 | Technical manager postal code |

<a id="formality-sid"></a>
## SID

- Mapping count: 9

| Tree path | DE ID | DE name |
| --- | --- | --- |
| sid:SID > sid:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:CallSignID | DE-005-05 | Ship call sign |
| sid:SID > sid:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:CFRID | DE-005-07 | CFR number |
| sid:SID > sid:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ENIID | DE-005-06 | ENI Number |
| sid:SID > sid:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ENINumberIndicator | DE-005-24 | Ship has ENI number indicator |
| sid:SID > sid:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:IMOID | DE-005-03 | Ship IMO number |
| sid:SID > sid:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:IMONumberIndicator | DE-005-02 | Ship has IMO number indicator |
| sid:SID > sid:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:MMSIID | DE-005-04 | MMSI number |
| sid:SID > sid:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:Name | DE-005-01 | Ship name |
| sid:SID > sid:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:OtherID | DE-005-08 | Other ship identifier |

<a id="formality-srv"></a>
## SRV

- Mapping count: 106

| Tree path | DE ID | DE name |
| --- | --- | --- |
| srv:SRV > srv:ExchangedDeclaration > ram:PreviousID | DE-002-12 | Previous formality LRN |
| srv:SRV > srv:ExchangedDeclaration > ram:StatementTypeCode | DE-003-07 | Declarant statement, coded |
| srv:SRV > srv:ExchangedDocument > ram:AttachedSpecifiedBinaryFile > [items] > ram:Description | DE-003-03 | Attachment description |
| srv:SRV > srv:ExchangedDocument > ram:AttachedSpecifiedBinaryFile > [items] > ram:FileName | DE-003-05 | Attachment file name |
| srv:SRV > srv:ExchangedDocument > ram:AttachedSpecifiedBinaryFile > [items] > ram:MIMECode | DE-003-06 | Attachment MIME type |
| srv:SRV > srv:ExchangedDocument > ram:AttachedSpecifiedBinaryFile > [items] > ram:TypeCode | DE-003-02 | Attachment type, coded |
| srv:SRV > srv:ExchangedDocument > ram:Remarks | DE-003-01 | Remarks |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:ArrivalTransportEvent > ram:OccupiedSpecifiedBerth > ram:ExpectedMooringOrientationCode | DE-019-04 | Expected mooring orientation, coded |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:PortMovementTypeCode | DE-014-51 | Ship movement type, coded |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:ApplicableSpecifiedServiceInvoice > ram:CustomerID | DE-079-04 | Service invoice customer number |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:ApplicableSpecifiedServiceInvoice > ram:RecipientInformation | DE-079-11 | Service beneficiary name |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:ApplicableSpecifiedServiceInvoice > ram:Remarks | DE-079-09 | Service invoice remarks |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:ApplicableSpecifiedServiceInvoice > ram:RequestedInEnglishIndicator | DE-079-01 | Service invoice requested in English indicator |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:ApplicableSpecifiedServiceInvoice > ram:RequesterMarkings | DE-079-10 | Service requester invoice markings |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:ApplicableSpecifiedServiceInvoice > ram:RequesterTradeParty > ram:ID | DE-079-03 | Service invoice organization identifier |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:ApplicableSpecifiedServiceInvoice > ram:RequesterTradeParty > ram:Name | DE-079-02 | Service invoice company name |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:ApplicableSpecifiedServiceInvoice > ram:RequesterTradeParty > ram:PostalTradeAddress > ram:CityName | DE-079-07 | Service invoice address city name |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:ApplicableSpecifiedServiceInvoice > ram:RequesterTradeParty > ram:PostalTradeAddress > ram:CountryID | DE-079-08 | Service invoice country, coded |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:ApplicableSpecifiedServiceInvoice > ram:RequesterTradeParty > ram:PostalTradeAddress > ram:LineOne | DE-079-05 | Service invoice address street and number |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:ApplicableSpecifiedServiceInvoice > ram:RequesterTradeParty > ram:PostalTradeAddress > ram:PostcodeCode | DE-079-06 | Service invoice address postal code |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:ConfirmationIndicator | DE-078-18 | Service request confirmation indicator |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:DeliverySpecifiedLogisticsLocation > ram:EndPosition | DE-078-12 | End position for the service |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:DeliverySpecifiedLogisticsLocation > ram:EstimatedPerformanceSpecifiedPeriod > ram:FormattedEndDateTime | DE-078-07 | ETA end position for the service |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:DeliverySpecifiedLogisticsLocation > ram:EstimatedPerformanceSpecifiedPeriod > ram:FormattedStartDateTime | DE-078-05 | ETA start position for the service |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:DeliverySpecifiedLogisticsLocation > ram:Name | DE-078-09 | Position for the service |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:DeliverySpecifiedLogisticsLocation > ram:RequestedPerformanceSpecifiedPeriod > ram:FormattedEndDateTime | DE-078-08 | Date and time of service completion - requested |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:DeliverySpecifiedLogisticsLocation > ram:RequestedPerformanceSpecifiedPeriod > ram:FormattedStartDateTime | DE-078-06 | Date and time of service start - requested |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:DeliverySpecifiedLogisticsLocation > ram:StartPosition | DE-078-11 | Start position for the service |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:ID | DE-078-01 | Service, coded |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:OtherShipDependencyIndicator | DE-078-19 | Dependency on other ship indicator |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:PreplannedIndicator | DE-078-04 | Planned service indicator |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RelatedSpecifiedLogisticsLocation > ram:Name | DE-078-10 | Other position reference |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedBunkeringService > ram:IncludedSpecifiedBunkerFuel > [items] > ram:Description | DE-072-09 | Bunker description |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedBunkeringService > ram:IncludedSpecifiedBunkerFuel > [items] > ram:FlashPointTemperatureMeasure | DE-072-05 | Bunker flash point |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedBunkeringService > ram:IncludedSpecifiedBunkerFuel > [items] > ram:ProductTypeCode | DE-072-04 | Bunker product type, coded |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedBunkeringService > ram:IncludedSpecifiedBunkerFuel > [items] > ram:RetainedVolumeMeasure | DE-072-10 | Bunker retained quantity |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedBunkeringService > ram:IncludedSpecifiedBunkerFuel > [items] > ram:SulphurContentPercent | DE-072-06 | Bunker sulphur content percent |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedBunkeringService > ram:IncludedSpecifiedBunkerFuel > [items] > ram:TransferVolumeMeasure | DE-072-11 | Bunker transfer quantity |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedBunkeringService > ram:IncludedSpecifiedBunkerFuel > [items] > ram:TypeCode | DE-072-01 | Bunker type, coded |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedBunkeringService > ram:LengthUnitMeasure | DE-087-03 | Bunkering unit length |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedBunkeringService > ram:ProviderIdentificationID | DE-087-02 | Bunkering unit identification |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedBunkeringService > ram:RateMeasure | DE-086-01 | Bunkering rate measure |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedBunkeringService > ram:TypeCode | DE-087-01 | Bunker provision type, coded |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedBunkeringService > ram:WidthUnitMeasure | DE-087-04 | Bunkering unit width |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedCargoHandlingService > ram:DangerousGoodsIndicator | DE-092-03 | Hazmat indicator |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedCargoHandlingService > ram:InstructionsCode | DE-092-01 | Handling instructions, coded |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedCargoHandlingService > ram:InstructionsRemark | DE-092-02 | Handling instructions remarks |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedElectricitySupplyService > ram:FrequencyMeasure | DE-089-04 | Electrical supply frequency |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedElectricitySupplyService > ram:PowerMeasure | DE-089-03 | Electrical supply power value |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedElectricitySupplyService > ram:ShipConnectingCableSuitableIndicator | DE-089-05 | Electricity confirmation indicator |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedElectricitySupplyService > ram:VoltageMeasure | DE-089-01 | Electrical supply pressure value |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedIceBreakingService > ram:ConvoyDraftMeasure | DE-080-01 | Draft under ice breaking convoy |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedIceBreakingService > ram:DisplacementMeasure | DE-080-02 | Ship weight plus cargo displacement measure |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedIceBreakingService > ram:ShipBallastStatusCode | DE-080-03 | Ship ballast status, coded |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedLighteringService > ram:OtherShipName | DE-088-01 | Lightering activity other ship name |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedLighteringService > ram:SupervisorTransportPerson > [items] > ram:FamilyName | DE-088-05 | Lightering supervisor family name |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedLighteringService > ram:SupervisorTransportPerson > [items] > ram:GivenName | DE-088-04 | Lightering supervisor given name |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedLighteringService > ram:TransferredSpecifiedTransferProduct > [items] > ram:Description | DE-088-03 | Lightering procedure product type description |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedLighteringService > ram:TransferredSpecifiedTransferProduct > [items] > ram:GrossVolumeMeasure | DE-088-02 | Lightering to be transferred volume |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedMooringService > ram:GangwayArrangementsDescription | DE-085-02 | Gangway arrangements description |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedMooringService > ram:GangwayArrangementsIndicator | DE-085-01 | Gangway arrangements indicator |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedMooringService > ram:PersonRequiredQuantity | DE-085-03 | Mooring service men required quantity |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotBoarding > ram:ActualFreeboardHeightMeasure | DE-082-10 | Actual freeboard height |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotBoarding > ram:ElevatorIndicator | DE-082-03 | Pilot elevator indicator |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotBoarding > ram:FenderingIndicator | DE-082-13 | Fendering indicator |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotBoarding > ram:HelicopterHoistingPossibilityIndicator | DE-082-06 | Pilot helicopter hoisting possible indicator |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotBoarding > ram:HelicopterPossibilityIndicator | DE-082-05 | Pilot helicopter possible indicator |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotBoarding > ram:HelicopterRequestIndicator | DE-082-04 | Pilot helicopter request indicator |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotBoarding > ram:LowFreeboardIndicator | DE-082-09 | Pilot boarding low freeboard indicator |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotBoarding > ram:PilotDoorAboveKeelHeightMeasure | DE-082-12 | Pilot door height above keel |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotBoarding > ram:PilotDoorIndicator | DE-082-11 | Pilot door indicator |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotBoarding > ram:RemotePilotageMasterPermittedIndicator | DE-082-08 | Remote pilotage ship allowed indicator |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotBoarding > ram:RemotePilotagePermittedIndicator | DE-082-07 | Remote pilotage allowed indicator |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotBoarding > ram:RequestedDateTime | DE-082-01 | Pilot time of boarding - requested |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:ApplicableSpecifiedPilotBoarding > ram:SideCode | DE-082-02 | Pilot boarding side, coded |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:LateBookingRemarks | DE-081-04 | Pilotage late booking remarks |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:PilotQuantity | DE-081-02 | The number of pilots required |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:SpecialRemarks | DE-081-06 | Pilotage important details description |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:TowageRelatedIndicator | DE-081-03 | Towing pilotage indicator |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:TugName | DE-081-07 | Accompanying tug name |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:TugTypeDescription | DE-081-08 | Accompanying tug type |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedPilotageService > ram:TypeCode | DE-081-01 | Pilotage type, coded |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedTowageTugService > ram:PullingForceMeasure | DE-084-03 | Towage pulling force |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedTowageTugService > ram:TypeDescription | DE-084-01 | Required tug type description |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedTowageTugService > ram:UnitQuantity | DE-084-02 | Number of tugs |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedWasteService > ram:HoldingTankResidueMeasure | DE-090-04 | Holding tank residues quantity |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedWasteService > ram:NonEUFoodWasteIndicator | DE-090-01 | Food waste non-EU indicator |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedWasteService > ram:PumpRateIndicator | DE-090-02 | Pump rate indicator |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedWasteService > ram:ScrubberHoldingTankCapacityMeasure | DE-090-03 | Scrubber or holding tank capacity |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedWasteService > ram:SlopFlashPointBelowLimitIndicator | DE-090-06 | Slop flash point indicator |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedWasteService > ram:VesselOnlySlopIndicator | DE-090-05 | Vessels own slop indicator |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:RequestedSpecifiedWaterSupplyService > ram:FreshWaterVolumeMeasure | DE-091-01 | Requested fresh water volume |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:ResponsibleTradeParty > ram:DefinedTradeContact > ram:EmailURIUniversalCommunication > ram:URIID | DE-078-14 | Service contact email |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:ResponsibleTradeParty > ram:DefinedTradeContact > ram:MobileTelephoneUniversalCommunication > ram:CompleteNumber | DE-078-16 | Service contact mobile number |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:ResponsibleTradeParty > ram:DefinedTradeContact > ram:SpecifiedContactPerson > ram:FamilyName | DE-078-13 | Service provider contact family name |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:ResponsibleTradeParty > ram:DefinedTradeContact > ram:SpecifiedContactPerson > ram:GivenName | DE-078-20 | Service provider contact given name |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:ResponsibleTradeParty > ram:DefinedTradeContact > ram:TelephoneUniversalCommunication > ram:CompleteNumber | DE-078-15 | Service contact landline number |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:ResponsibleTradeParty > ram:Name | DE-078-03 | Service provider name |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:RequestedRelatedReferencedTransportService > ram:ResponsibleTradeParty > ram:URIUniversalCommunication > ram:URIID | DE-078-17 | Service URL |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ActualMaximumDraughtLevelMeasure | DE-017-03 | Actual maximum draught |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:AftDraughtLevelMeasure | DE-017-02 | Draught aft |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:AirDraughtLevelMeasure | DE-017-06 | Air draught |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:MaximumDraughtLevelMeasure | DE-008-22 | Maximum draught |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:OnboardShorePowerConnectionIndicator | DE-010-25 | Shore power connection indicator |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ForwardDraughtLevelMeasure | DE-017-01 | Draught forward |
| srv:SRV > srv:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:MidShipDraughtLevelMeasure | DE-017-05 | Mid-ship draught |

<a id="formality-vid"></a>
## VID

- Mapping count: 12

| Tree path | DE ID | DE name |
| --- | --- | --- |
| vid:VID > vid:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:EstimatedTransportMeansArrivalOccurrenceDateTime | DE-022-02 | Date and time of arrival - estimated |
| vid:VID > vid:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OccurrenceLogisticsLocation > ram:ID | DE-014-04 | Port of call, coded |
| vid:VID > vid:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OccurrenceLogisticsLocation > ram:SubordinateRelatedSubordinateLocation > ram:Name | DE-014-53 | Subordinate port name |
| vid:VID > vid:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:CallSignID | DE-005-05 | Ship call sign |
| vid:VID > vid:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:CFRID | DE-005-07 | CFR number |
| vid:VID > vid:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ENIID | DE-005-06 | ENI Number |
| vid:VID > vid:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ENINumberIndicator | DE-005-24 | Ship has ENI number indicator |
| vid:VID > vid:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:IMOID | DE-005-03 | Ship IMO number |
| vid:VID > vid:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:IMONumberIndicator | DE-005-02 | Ship has IMO number indicator |
| vid:VID > vid:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:MMSIID | DE-005-04 | MMSI number |
| vid:VID > vid:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:Name | DE-005-01 | Ship name |
| vid:VID > vid:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:OtherID | DE-005-08 | Other ship identifier |

<a id="formality-war"></a>
## WAR

- Mapping count: 11

| Tree path | DE ID | DE name |
| --- | --- | --- |
| war:WAR > war:ExchangedDocument > ram:Remarks | DE-003-01 | Remarks |
| war:WAR > war:SpecifiedLogisticsTransportMovement > ram:CallTransportEvent > ram:OccurrenceLogisticsLocation > ram:SubordinateLocation > ram:Name | DE-014-06 | Location in port |
| war:WAR > war:SpecifiedLogisticsTransportMovement > ram:ReportedTransportationWasteMaterial > ram:ActualDeliveryTransportEvent > ram:OccurrenceSpecifiedPeriod > ram:FormattedEndDateTime | DE-069-06 | Actual waste delivery date and time, to |
| war:WAR > war:SpecifiedLogisticsTransportMovement > ram:ReportedTransportationWasteMaterial > ram:ActualDeliveryTransportEvent > ram:OccurrenceSpecifiedPeriod > ram:FormattedStartDateTime | DE-069-05 | Actual waste delivery date and time, from |
| war:WAR > war:SpecifiedLogisticsTransportMovement > ram:ReportedTransportationWasteMaterial > ram:IncludedTransportationWasteMaterialComponent > [items] > ram:Description | DE-071-02 | Waste description |
| war:WAR > war:SpecifiedLogisticsTransportMovement > ram:ReportedTransportationWasteMaterial > ram:IncludedTransportationWasteMaterialComponent > [items] > ram:ReceivedMeasure | DE-071-08 | Amount of waste received volume |
| war:WAR > war:SpecifiedLogisticsTransportMovement > ram:ReportedTransportationWasteMaterial > ram:IncludedTransportationWasteMaterialComponent > [items] > ram:SequenceNumeric | DE-001-02 | Sequence number |
| war:WAR > war:SpecifiedLogisticsTransportMovement > ram:ReportedTransportationWasteMaterial > ram:IncludedTransportationWasteMaterialComponent > [items] > ram:TypeCode | DE-071-01 | Waste type, coded |
| war:WAR > war:SpecifiedLogisticsTransportMovement > ram:ReportedTransportationWasteMaterial > ram:PortReceptionFacilityProviderTradeParty > ram:Name | DE-069-01 | Port reception facility provider name |
| war:WAR > war:SpecifiedLogisticsTransportMovement > ram:ReportedTransportationWasteMaterial > ram:TreatmentFacilityProviderTradeParty > [items] > ram:AffiliationID | DE-069-03 | Waste treatment facility provider tax number |
| war:WAR > war:SpecifiedLogisticsTransportMovement > ram:ReportedTransportationWasteMaterial > ram:TreatmentFacilityProviderTradeParty > [items] > ram:Name | DE-069-02 | Waste treatment facility provider name |

<a id="formality-was"></a>
## WAS

- Mapping count: 30

| Tree path | DE ID | DE name |
| --- | --- | --- |
| was:WAS > was:ExchangedDocument > ram:Remarks | DE-003-01 | Remarks |
| was:WAS > was:SpecifiedLogisticsTransportMovement > ram:ReportedTransportationWasteMaterial > ram:CollectionAgreementIndicator | DE-070-01 | Waste collection agreement indicator |
| was:WAS > was:SpecifiedLogisticsTransportMovement > ram:ReportedTransportationWasteMaterial > ram:CollectionTransportService > [items] > ram:CategoryTypeCode | DE-070-02 | Waste collection agreement type, coded |
| was:WAS > was:SpecifiedLogisticsTransportMovement > ram:ReportedTransportationWasteMaterial > ram:CollectionTransportService > [items] > ram:ID | DE-070-03 | Waste collection agreement number |
| was:WAS > was:SpecifiedLogisticsTransportMovement > ram:ReportedTransportationWasteMaterial > ram:CollectionTransportService > [items] > ram:ResponsibleTradeParty > ram:Name | DE-070-04 | Waste collection agreement company identifier |
| was:WAS > was:SpecifiedLogisticsTransportMovement > ram:ReportedTransportationWasteMaterial > ram:CollectionTransportService > [items] > ram:SpecifiedLogisticsLocation > ram:ID | DE-070-05 | Waste collection agreement port, coded |
| was:WAS > was:SpecifiedLogisticsTransportMovement > ram:ReportedTransportationWasteMaterial > ram:CustomsApprovalRequiredIndicator | DE-069-08 | Customs approval required indicator |
| was:WAS > was:SpecifiedLogisticsTransportMovement > ram:ReportedTransportationWasteMaterial > ram:IncludedTransportationWasteMaterialComponent > [items] > ram:DeliveryTransportEvent > ram:OccurrenceLogisticsLocation > ram:SubordinateLocation > ram:Name | DE-069-11 | Waste delivery location |
| was:WAS > was:SpecifiedLogisticsTransportMovement > ram:ReportedTransportationWasteMaterial > ram:IncludedTransportationWasteMaterialComponent > [items] > ram:DeliveryTransportEvent > ram:ScheduledOccurrenceDateTime | DE-069-04 | Waste delivery date and time - planned |
| was:WAS > was:SpecifiedLogisticsTransportMovement > ram:ReportedTransportationWasteMaterial > ram:IncludedTransportationWasteMaterialComponent > [items] > ram:DeliveryTransportEvent > ram:WasteCollectionLocationCode | DE-069-10 | Waste collection ship side, coded |
| was:WAS > was:SpecifiedLogisticsTransportMovement > ram:ReportedTransportationWasteMaterial > ram:IncludedTransportationWasteMaterialComponent > [items] > ram:Description | DE-071-02 | Waste description |
| was:WAS > was:SpecifiedLogisticsTransportMovement > ram:ReportedTransportationWasteMaterial > ram:IncludedTransportationWasteMaterialComponent > [items] > ram:EstimatedGeneratedMeasure | DE-071-07 | Waste estimated amount to be generated volume |
| was:WAS > was:SpecifiedLogisticsTransportMovement > ram:ReportedTransportationWasteMaterial > ram:IncludedTransportationWasteMaterialComponent > [items] > ram:MaximumDedicatedStorageCapacityMeasure | DE-071-04 | Waste maximum dedicated storage capacity |
| was:WAS > was:SpecifiedLogisticsTransportMovement > ram:ReportedTransportationWasteMaterial > ram:IncludedTransportationWasteMaterialComponent > [items] > ram:PlannedDischargedMeasure | DE-071-03 | Waste amount to be delivered volume |
| was:WAS > was:SpecifiedLogisticsTransportMovement > ram:ReportedTransportationWasteMaterial > ram:IncludedTransportationWasteMaterialComponent > [items] > ram:PortReceptionFacilityProviderTradeParty > ram:Name | DE-069-01 | Port reception facility provider name |
| was:WAS > was:SpecifiedLogisticsTransportMovement > ram:ReportedTransportationWasteMaterial > ram:IncludedTransportationWasteMaterialComponent > [items] > ram:RemainingDeliveryTransportEvent > ram:DeliveryPlanCodeCode | DE-071-10 | Remaining waste delivery plan, coded |
| was:WAS > was:SpecifiedLogisticsTransportMovement > ram:ReportedTransportationWasteMaterial > ram:IncludedTransportationWasteMaterialComponent > [items] > ram:RemainingDeliveryTransportEvent > ram:OccurrenceLogisticsLocation > ram:ID | DE-071-06 | Port of delivery of remaining waste, coded |
| was:WAS > was:SpecifiedLogisticsTransportMovement > ram:ReportedTransportationWasteMaterial > ram:IncludedTransportationWasteMaterialComponent > [items] > ram:RetainedMeasure | DE-071-05 | Waste amount retained volume |
| was:WAS > was:SpecifiedLogisticsTransportMovement > ram:ReportedTransportationWasteMaterial > ram:IncludedTransportationWasteMaterialComponent > [items] > ram:SequenceNumeric | DE-001-02 | Sequence number |
| was:WAS > was:SpecifiedLogisticsTransportMovement > ram:ReportedTransportationWasteMaterial > ram:IncludedTransportationWasteMaterialComponent > [items] > ram:TypeCode | DE-071-01 | Waste type, coded |
| was:WAS > was:SpecifiedLogisticsTransportMovement > ram:ReportedTransportationWasteMaterial > ram:NextDeliveryPlanCode | DE-068-04 | Next waste delivery plan, coded |
| was:WAS > was:SpecifiedLogisticsTransportMovement > ram:ReportedTransportationWasteMaterial > ram:NextDeliveryTransportEvent > ram:OccurrenceLogisticsLocation > ram:ID | DE-068-02 | Port of next waste delivery, coded |
| was:WAS > was:SpecifiedLogisticsTransportMovement > ram:ReportedTransportationWasteMaterial > ram:NextDeliveryTransportEvent > ram:ScheduledOccurrenceDate | DE-071-09 | Waste next delivery date |
| was:WAS > was:SpecifiedLogisticsTransportMovement > ram:ReportedTransportationWasteMaterial > ram:PreviousDeliveryTransportEvent > ram:ActualOccurrenceDate | DE-068-03 | Waste last delivery date |
| was:WAS > was:SpecifiedLogisticsTransportMovement > ram:ReportedTransportationWasteMaterial > ram:PreviousDeliveryTransportEvent > ram:OccurrenceLogisticsLocation > ram:ID | DE-068-01 | Port of last waste delivery, coded |
| was:WAS > was:SpecifiedLogisticsTransportMovement > ram:ReportedTransportationWasteMaterial > ram:PumpCapacityMeasure | DE-069-07 | Pump capacity |
| was:WAS > was:SpecifiedLogisticsTransportMovement > ram:ReportedTransportationWasteMaterial > ram:WasteCollectionSanitaryFeePaidIndicator | DE-069-09 | Waste collection paid indicator |
| was:WAS > was:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:ApplicableSpecifiedMarineGreenCredential > ram:SewageSystemTreatment | DE-011-01 | Sewage system treatment description |
| was:WAS > was:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:ApplicableSpecifiedMarineGreenCredential > ram:WasteIncineratorDescription | DE-011-10 | Waste incinerator description |
| was:WAS > was:SpecifiedLogisticsTransportMovement > ram:UsedLogisticsTransportMeans > ram:ConstructionSpecifiedTransportMeansCharacteristic > ram:ApplicableSpecifiedMarineGreenCredential > ram:WasteIncineratorIndicator | DE-011-09 | Waste incinerator indicator |
