const scrapCondensator = new ItemLiquidGenerator("scrap-condensator");
scrapCondensator.hasItems = true;
scrapCondensator.hasLiquids = true;
const scrapItem = Vars.content.item("scrap")
scrapCondensator.itemDrop = scrapItem
scrapCondensator.outputsItems = () => true; // overrides the hardcoded value