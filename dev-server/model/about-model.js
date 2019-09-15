import mongoose from 'mongoose'

const aboutSchema = new mongoose.Schema({
  name: String,
  label: String,
  image: String,
  email: String,
  phone: String,
  url: String,
  summary: String,
  birthday: Date,
  birthplace: String,
  gender: String,
  nationality: String,
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
})
aboutSchema.set('timestamps', true)

export default mongoose.model('about', aboutSchema)
