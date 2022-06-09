const jwt = require("jsonwebtoken");            ///jsonwebtoken 을 사용하겟다

const token = jwt.sign({test : "테스트지롱"}, 'my-secret-key ffff');    /// 내맘대로 설정한 내용, 복호화 키


console.log(token);

const decoded = jwt.decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZXN0Ijoi7YWM7Iqk7Yq47KeA66GxIiwiaWF0IjoxNjUzNjM1ODgyfQ.gq4AaTx3n-NE0eZVxwoF7332MZoZ2lCeyK55Exkfu0Q");

console.log(decoded)