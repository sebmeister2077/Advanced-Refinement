const carbonicAcid = new Liquid("carbonic-acid")
const mineralWater = new Liquid("mineral-water")
new Liquid("impure-nitric-acid")
new Liquid("liquid-nitrogen")
new Liquid("nitric-acid")


const carbonicAcidFloor = new Floor("carbonic-acid")
// carbonicAcidFloor.isLiquid = true;
// carbonicAcidFloor.liquidDrop = carbonicAcid;
// carbonicAcidFloor.drownTime = 100;
// carbonicAcidFloor.status = StatusEffects.melting;
// carbonicAcidFloor.statusDuration = 200;
// carbonicAcidFloor.cacheLayer = cacheLayers.slag;

carbonicAcidFloor = {
    ...carbonicAcidFloor,
    isLiquid: true,
    liquidDrop: carbonicAcid,
    drownTime: 100,
    status: StatusEffects.melting,
    statusDuration: 200,
    cacheLayer: cacheLayers.slag,
}