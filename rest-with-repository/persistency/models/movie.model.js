export default (sequelize, Sequelize) => {
    const Movie = sequelize.define("movie", {
      name: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      }
    });
  
    return Movie;
  };