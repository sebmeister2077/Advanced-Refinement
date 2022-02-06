const carbonicAcid = new Liquid("carbonic-acid")
const mineralWater = new Liquid("mineral-water")
new Liquid("impure-nitric-acid")
new Liquid("liquid-nitrogen")
new Liquid("nitric-acid")


const carbonicAcidFloor = new Floor("carbonic-acid-floor")
carbonicAcidFloor.isLiquid = true;
carbonicAcidFloor.liquidDrop = carbonicAcid;