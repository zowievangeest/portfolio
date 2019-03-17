import mongoose from 'mongoose'

/**
 * Connect to mongo database based on DB_URL
 */
export function connectToDB() {
  console.log(process.env)
  mongoose.connect(process.env.DB_URL, {useNewUrlParser: true}, error => {
    if (error) {
      console.log('Unable to connect to database')
      throw error
    } else {
      console.log('Connected to MongoDB!')
    }
  })
}
