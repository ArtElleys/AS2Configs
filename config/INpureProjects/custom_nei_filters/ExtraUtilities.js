if(FML.isModLoaded("ExtraUtilities")) {
	NEI.override("ExtraUtilities:drum", [0, 1]);
	if(FML.isModLoaded("ForgeMicroblock")) {
		ExtraUtilities.obliterate_microblocks([1, 2, 3], ForgeMicroblock.getRandomMaterial());
	}
}