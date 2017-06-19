var vanilla_blocks = ["portal", "end_portal", "fire", "water", "lava", "mob_spawner"];
if(vanilla_enabled) {
	for each(block in vanilla_blocks){
		NEI.hide("minecraft", block);
	}
	NEI.override("minecraft:potion", [0]);
	NEI.override("minecraft:spawn_egg", [0]);
}