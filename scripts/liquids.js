new Liquid("carbonic-acid")
new Liquid("impure-nitric-acid")
new Liquid("liquid-nitrogen")
new Liquid("mineral-water")
new Liquid("nitric-acid")


const carbonicAcid = extendContent(Liquid, "carbonic-acid", {});
const impureNitricAcid = extendContent(Liquid, "impure-nitric-acid", {});
const liquidNitrogen = extendContent(Liquid, "liquid-nitrogen", {});
const nitricAcid = extendContent(Liquid, "nitric-acid", {});

module.exports = {
    carbonicAcid: carbonicAcid,
    impureNitricAcid: impureNitricAcid,
    liquidNitrogen: liquidNitrogen,
    nitricAcid: nitricAcid
}