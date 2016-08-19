var FromTest = function(){
	this.phoneReg = /^1[3-8]\d{9}$/;
	this.userNameReg = /^(\w)+$/;
	this.passwordReg = / /g;
	this.emailReg = /^\w+@\w+(\.[\da-zA-Z]+)+$/;
	this.idCardReg = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
}

//手机验证
FromTest.prototype.phoneTest = function(phoneNumber){
	return this.phoneReg.test(phoneNumber);
}

//用户名 最长14位 英文数字下斜杠都可 返回 true false， text字符串是否符合 length是否符合
FromTest.prototype.userNameTest = function(userNameText){
	return {text: this.userNameReg.test(userNameText), length: userNameText.length <= 14}
}

//是否有空格长度6--14
FromTest.prototype.passwordTest = function(passwordText){
	return {space: this.passwordReg.test(passwordText), length: passwordText.length >= 6 && passwordText.length <= 14}
}

//俩个密码相等判断
FromTest.prototype.equalTwoPassword = function(password1, password2){
	return password1 === password2;
}

//邮箱验证
FromTest.prototype.emailTest = function(emailText){
	return this.emailReg.test(emailText);
}

//身份证验证
FromTest.prototype.idCardTest = function(idCardText){
	return this.idCardReg.test(idCardText);
}