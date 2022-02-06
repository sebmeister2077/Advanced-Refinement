const carbonicAcid = new Liquid("carbonic-acid")
new Liquid("impure-nitric-acid")
new Liquid("liquid-nitrogen")
new Liquid("mineral-water")
new Liquid("nitric-acid")


const carbonicAcidFloor = new Floor("carbonic-acid")
carbonicAcidFloor.isLiquid = true;
carbonicAcidFloor.liquidDrop = Liquids.carbonicAcid;