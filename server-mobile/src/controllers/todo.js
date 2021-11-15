const {todos} = require('../../models')

// Create controller get Todos here
exports.getTodos = async (req, res) => {
  try {
    const data = await todos.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      }
    });

    res.send({
      status: 'success',
      todos: data
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: 'failed',
      message: 'Server Error',
    });
  }
};
  
  // Create controller get Todo by received id here
exports.getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await todos.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      }
    });

    res.send({
      status: 'success',
      todos: data
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: 'failed',
      message: 'Server Error',
    });
  }
};
  
  // Create controller add Todo here
exports.addTodo = async (req, res) => {
  try {
    const data = await todos.create({
      todo: req.body.todo,
      status: "Unfinished"
    });

    res.send({
      status: 'success',
      message: 'add todo finished',
      data,
    })
    
  } catch (error) {
    console.log(error);
    res.send({
      status: 'failed',
      message: 'Server Error',
    });
  }
};
  
  // Create controller update Todo here
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;

    await todos.update(
      {
        status: "Finished"
      },
      {
        where: {
          id,
        }
      }
    )

    res.send({
      status: 'success',
      message: `Update todo id: ${id} finished`,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: 'failed',
      message: 'Server Error',
    });
  }
};
  
  // Create controller delete Todo here
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await todos.destroy({
      where: {
        id,
      }
    })

    res.send({
      status: 'success',
      message: `Delete todo id: ${id} finished`
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: 'failed',
      message: 'Server Error',
    });
  }
};
  