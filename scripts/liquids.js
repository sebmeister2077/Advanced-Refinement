const carbonicAcid = new Liquid("carbonic-acid")
const mineralWater = new Liquid("mineral-water")
new Liquid("impure-nitric-acid")
new Liquid("liquid-nitrogen")
new Liquid("nitric-acid")


const carbonicAcidFloor = new Floor("floor-carbonic-acid")
carbonicAcidFloor = {
    ...carbonicAcidFloor,
    isLiquid = true,
    liquidDrop = carbonicAcid,
    drownTime = 100,
    status = StatusEffects.melting,
    statusDuration = 200,
    cacheLayer = cacheLayers.slag,
}