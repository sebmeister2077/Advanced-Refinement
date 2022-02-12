
new OreBlock("clay", new Item("clay"))
new OreBlock("raw-crystal", new Item("raw-crystal"))
new OreBlock("hematite",new Item("hematite"))
new OreBlock("spalerite", new Item("sphalerite"))

const snowBlock = Vars.content.block("snow")
snowBlock.itemDrop = new Item("snow");

const iceBlock = Vars.content.block("ice");
iceBlock.itemDrop = new Item("ice")