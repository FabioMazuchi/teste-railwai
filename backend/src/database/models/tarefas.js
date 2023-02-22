const model = (sequelize, DataTypes) => {
	const TarefaModel = sequelize.define('Tarefa', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		description: DataTypes.STRING,
		check: DataTypes.BOOLEAN
	}, { timestamps: false, tableName: 'tarefas',  underscored: true});


	return TarefaModel;
}

module.exports = model;