export const Rulesets: { [k: string]: FormatData; } = {

hptblegality: {
	effectType: 'ValidatorRule',
		name: 'HP TB Legality',
			desc: "Allow every Pokemon to learn Hidden Power AND Tera Blast",
				checkCanLearn(move, species, setSources, set){
		if (move.id.startsWith("hiddenpower") || move.id === "terablast") return null;
		return this.checkCanLearn(move, species, setSources, set);
	},

	},
}