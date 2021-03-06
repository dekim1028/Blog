import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const UserSchema = new Schema({
	userid: String,
	hashedPassword: String,
	username: String,
});

UserSchema.methods.setPassword = async function (password) {
	const hash = await bcrypt.hash(password, 10);
	this.hashedPassword = hash;
};

UserSchema.methods.checkPassword = async function (password) {
	const result = await bcrypt.compare(password, this.hashedPassword);
	return result;
};

UserSchema.statics.findByUserId = function (userid) {
	return this.findOne({ userid });
};

UserSchema.methods.serialize = function () {
	const data = this.toJSON();
	delete data.hashedPassword;
	return data;
};

UserSchema.methods.generateToken = function () {
	const token = jwt.sign(
		//첫번째 파라미터에는 토큰안에 집어넣고 싶은 데이터를 넣습니다.
		{
			_id: this.id,
			userid: this.userid,
			username: this.username,
		},
		process.env.JWT_SECRET, //두번째 파라미터에는 JWT암호를 넣습니다.
		{
			expiresIn: '7d', //7일동안 유효함
		},
	);
	return token;
};

const User = mongoose.model('User', UserSchema);
export default User;
