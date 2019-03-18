import mongoose from 'mongoose'

const educationSchema = new mongoose.Schema({
  institution: String,
  degree: String,
  specialization: String,
  startDate: Date,
  endDate: Date,
  description: String,
  show: Boolean,
  current: Boolean,
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
})
educationSchema.set('timestamps', true)

export default mongoose.model('education', educationSchema)
