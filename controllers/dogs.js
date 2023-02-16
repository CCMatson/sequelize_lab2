const { Dog } = require("../models")

const create = async (req, res) => {
  try {
    const dog = await Dog.create(req.body)
    res.status(200).json(dog)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const dogs = await Dog.findAll()
    res.status(200).json(dogs)
  } catch (error) {
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const dog = await Dog.findByPk(req.params.id)
    dog.set(req.body)
    await dog.save()
    
    res.status(200).json(dog)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteDog = async (req, res) => {
  try {
    const dog = await Dog.findByPk(req.params.id)
    await dog.destroy()
    res.status(200).json(dog)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
create,
index,
update,
delete: deleteDog,
}