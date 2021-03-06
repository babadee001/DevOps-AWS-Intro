export default (sequelize, DataTypes) => {
    const Books = sequelize.define('Book', {
      title: {
        type: DataTypes.STRING,
        allowNull: DataTypes.FALSE,
      },
      isbn: {
        type: DataTypes.STRING,
        unique: true,
        required: true
      },
      quantity: {
        type: DataTypes.INTEGER,
        required: true
      },
      catId: DataTypes.INTEGER,
      cover: DataTypes.STRING,
      author: DataTypes.STRING,
      description: DataTypes.TEXT
    }, {
      classMethods: {
        associate: (models) => {
          // associations can be defined here
          Books.hasMany(models.Borrowed, {
            onDelete: 'CASCADE',
            foreignKey: 'bookId'
          });
          Books.hasOne(models.Category, {
            foreignKey: 'catId',
            onDelete: 'CASCADE'
          });
        }
      }
    });
    return Books;
  };
  