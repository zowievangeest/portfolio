import mongoose from 'mongoose'

const experienceSchema = new mongoose.Schema({
  organization: String,
  description: String,
  shortDescription: String,
  role: String,
  startDate: Date,
  endDate: Date,
  url: String,
  show: Boolean,
  current: Boolean,
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
})
experienceSchema.set('timestamps', true)

export default mongoose.model('experience', experienceSchema)
