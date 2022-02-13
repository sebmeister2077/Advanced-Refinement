
//items
const clayItem = new Item("clay")
const rawCrystalItem = new Item("raw-crystal");
const hematiteItem = new Item("hematite")
const sphaleriteItem = new Item("sphalerite")
const snowItem = new Item("snow");
const iceItem = new Item("ice");


//oreblocks
const oreRawCrystal = new OreBlock("raw-crystal")
oreRawCrystal.itemDrop = rawCrystalItem
const oreHematite = new OreBlock("hematite")
oreHematite.itemDrop = hematiteItem
const oreSphalerite = new OreBlock("spalerite")
oreSphalerite.itemDrop = sphaleriteItem;

//floors

const clayFloor = new Floor("clay")
clayFloor.needsSurface = false;

//overrides
Vars.content.block("snow").itemDrop = snowItem
Vars.content.block("ice").itemDrop = iceItem;
Vars.content.block("ice-snow").itemDrop = iceItem;
// ? to be reasearched Vars.content.block("molten-slag").solidifies = true; // slag liquid can be made solid