const User = require("../model/User");

//get all users
const user_get = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json({ users });
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

//create new user
const user_post = async (req, res) => {
  console.log(req.body);
  try {
    const newUser = await User.create(req.body);
    console.log("User's auto-generated ID:", newUser.id);
    res.json({ user: newUser });
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

//update user
const user_patch = async (req, res) => {
  try {
    const updatedUser = await User.update(
      { name: req.body.name },
      {
        where: {
          id: req.query.id,
        },
      }
    );
    res.json({ user: updatedUser });
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

//delete user
const user_delete = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.query.id,
      },
    });
    res.json({ msg: `user has been deleted` });
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};



module.exports = {
  user_get,
  user_post,
  user_patch,
  user_delete,
};
