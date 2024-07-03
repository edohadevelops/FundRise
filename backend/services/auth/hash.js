import bcrypt from 'bcryptjs';
import 'dotenv/config'

export const hashedPassword = (password) => {
    const saltRounds = Number(process.env.SALT)
    return bcrypt.hashSync(password,saltRounds)
}