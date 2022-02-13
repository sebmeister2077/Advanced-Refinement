//liquids
const carbonicAcid = new Liquid("carbonic-acid")
const mineralWater = new Liquid("mineral-water")
const impureNitricAcid = new Liquid("impure-nitric-acid")
const liquidNitrogen = new Liquid("liquid-nitrogen")
const nitricAcid = new Liquid("nitric-acid")

//floors
const carbonicAcidFloor = new Floor("carbonic-acid")
carbonicAcidFloor.isLiquid = true;
carbonicAcidFloor.liquidDrop = carbonicAcid;
carbonicAcidFloor.damageTaken = 1;
carbonicAcidFloor.speedMultiplier = 0.7;
carbonicAcidFloor.drownTime = 360;
carbonicAcidFloor.statusEffect = StatusEffects.corroded;
carbonicAcidFloor.cacheLayer = CacheLayer.tar;
