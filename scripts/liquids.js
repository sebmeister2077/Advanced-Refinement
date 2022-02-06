const carbonicAcid = new Liquid("carbonic-acid")
const mineralWater = new Liquid("mineral-water")
new Liquid("impure-nitric-acid")
new Liquid("liquid-nitrogen")
new Liquid("nitric-acid")


const carbonicAcidFloor = new Floor("carbonic-acid")
carbonicAcidFloor.isLiquid = true;
carbonicAcidFloor.liquidDrop = carbonicAcid;
carbonicAcidFloor.damageTaken = 1;
carbonicAcidFloor.cacheLayer = CacheLayer.tar;
