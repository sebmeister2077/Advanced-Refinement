
new OreBlock("clay", new Item("clay"))
new OreBlock("raw-crystal", new Item("raw-crystal"))
new OreBlock("hematite",new Item("hematite"))
new OreBlock("spalerite", new Item("sphalerite"))

const snowBlock = Vars.content.block("snow")
snowBlock.itemDrop = new Item("snow");

const iceItem = new Item("ice");
Vars.content.block("ice").itemDrop = iceItem;
Vars.content.block("ice-snow").itemDrop = iceItem;