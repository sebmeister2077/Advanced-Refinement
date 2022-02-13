const scrapCondensator = new ItemLiquidGenerator(true, true, "scrap-condensator");
scrapCondensator.outputsItems = () => true; // overrides the hardcoded value
scrapCondensator.outputItem = Vars.content.item("scrap")