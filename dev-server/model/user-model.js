import mongoose from 'mongoose'
import {StringUtil} from '../utilities/string-util'
import bcrypt from 'bcrypt-nodejs'

const userSchema = new mongoose.Schema({
  email: String,
  first: String,
  last: String,
  password: String
})
userSchema.set('timestamps', true)

userSchema.virtual('fullName').get(function() {
  const first = StringUtil.capitalize(this.first.toLowerCase())
  const last = StringUtil.capitalize(this.last.toLowerCase())
  return `${first} ${last}`
})

userSchema.statics.passwordMatches = function(password, hash) {
  return bcrypt.compareSync(password, hash)
}

userSchema.pre('save', function(next) {
  this.email = this.email.toLowerCase()
  const unsafePassword = this.password
  this.password = bcrypt.hashSync(unsafePassword)
  next()
})

export default mongoose.model('user', userSchema)
