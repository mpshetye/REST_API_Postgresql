const Playground = require("../model/User");
const db = require("../config/database");

//get all users
const user_get = async (req, res) => {
  try {
    const users = await db.query(`SELECT id, name, age, location, "createdAt", "updatedAt" FROM "Playground"`,{
        model: Playground,
        mapToModel: true // pass true here if you have any mapped fields
      });
      console.log(users);
    //   console.log(metadata);
    res.json({ users });
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

// create new user
const user_post = async (req, res) => {
  console.log(req.body);
  try {
    const newUser = await db.query(`INSERT INTO "Playground"(id, name, age, location, "createdAt", "updatedAt") VALUES (DEFAULT, $1, $2, $3, now(), now())`,{
      model: Playground,
      mapToModel: true,
      bind:[`${req.body.name}`,`${req.body.age}`,`${req.body.location}`]});
    // console.log(newUser);  //displays []
    const message = `new user created`;
    res.json({ message });
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

//update all user details
const user_patch_all = async (req, res) => {
  try {
    const updatedUser = await db.query(`UPDATE "Playground" SET name=$1, age=$2, location=$3 WHERE id=$4`,{
      bind:[`${req.body.name}`,`${req.body.age}`,`${req.body.location}`,`${req.params.id}`]
    });
    res.json({user: updatedUser});
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

//delete user
const user_delete = async (req, res) => {
  try {
    await db.query(`DELETE FROM "Playground" WHERE id = $1`,{
      bind:[`${req.params.id}`]
    });
    res.json({ msg: `user has been deleted` });
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};


module.exports = {
  user_get,
  user_post,
  user_patch_all,
  // user_patch,
  user_delete
};
