export default (sequelize, Sequelize) => {
    const Rent = sequelize.define("rent", {
      startDate: {
        type: Sequelize.DATE
      },
      duration: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.DOUBLE
      },
      customer: {
        type: Sequelize.STRING
      }
    });
  
    return Rent;
  };
