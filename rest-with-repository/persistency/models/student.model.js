export default (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      className: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      }
    });
  
    return Student;
  };