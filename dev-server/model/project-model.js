import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  client: String,
  imgUrl: String,
  projectUrl: String,
  projectImgUrl: String,
  show: Boolean,
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
})
projectSchema.set('timestamps', true)

export default mongoose.model('project', projectSchema)
