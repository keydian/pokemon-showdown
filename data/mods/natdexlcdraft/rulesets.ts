export const Rulesets: { [k: string]: FormatData; } = {

hptblastlegality: {
	effectType: 'ValidatorRule',
		name: 'HP TB Legality',
			desc: "Allow every Pokemon to learn Hidden Power AND Tera Blast",
				checkCanLearn(move, species, setSources, set){
		if (move.id === "Hidden Power" || move.id === "Tera Blast") return null;
		return this.checkCanLearn(move, species, setSources, set);
	},

	},
}