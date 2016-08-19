#表单验证
## 使用
```js
//初始化
var fromTest = new FromTest();
//手机号检查
fromTest.phoneTest(18329022201)// true;
//用户名检查
fromTest.userNameTest("125")// return object -> {text:true, length: true}
```
## 方法
### phoneTest(phoneNumber)
    手机验证 
    return ture||false
### userNameTest(userNameText)
    用户名验证 
    返回 俩个属性 text, length
    text 检查是否英文数字下斜杠
    length 检查长度是否大于14
### passwordTest(passwordText)
    密码验证
    返回
    space 是否有空格
    length 长度是否6--14
### equalTwoPassword(password1, password2)
    俩个密码相等判断
    返回 true || false
### emailTest(emailText)
    验证邮箱
    返回 true || false
### idCardTest(idCardText)
    验证身份证
    返回 true || false



