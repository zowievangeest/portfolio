import mongoose from 'mongoose'

const certificateSchema = new mongoose.Schema({
  authority: String,
  authorityUrl: String,
  title: String,
  website: String,
  achievedDate: Date,
  expireDate: Date,
  show: Boolean,
  expirable: Boolean,
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
})
certificateSchema.set('timestamps', true)

export default mongoose.model('certificate', certificateSchema)
