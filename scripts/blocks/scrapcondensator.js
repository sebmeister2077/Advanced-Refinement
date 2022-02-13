const scrapCondensator = new ItemLiquidGenerator("scrap-condensator");
scrapCondensator.hasItems = true;
scrapCondensator.hasLiquids = true;
scrapCondensator.outputsItems = () => true; // overrides the hardcoded value
scrapCondensator.itemDrop = Vars.content.item("scrap")