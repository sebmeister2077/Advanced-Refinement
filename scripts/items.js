
new OreBlock("clay", new Item("clay"))
new OreBlock("raw-crystal", new Item("raw-crystal"))
new OreBlock("hematite",new Item("hematite"))
new OreBlock("spalerite", new Item("sphalerite"))

new OreBlock("ice", new Item("ice"));//todo i need to override this

const snowBlock = Vars.content.block("snow")
snowBlock.itemDrop = new Item("snow");
