// 参照サイト
// Firebase Web : Phone Number Authentication | Firebase Phone Number Authentication | part 8
// https://www.youtube.com/watch?v=5jYIIwm6IeI

window.onload = function () {
    render();
};
function render() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        "recaptha-container"
    );






    
    recaptchaVerifier.render();
}

function phoneAuth() {
    // 入力された電話番号を変数に代入
    var number = document.getElementById("number").value;
    // console.log(window.recaptchaVerifier);

    number = trimNonNumber(number.toString());
    // console.log(a);
    //firebaseのauth機能で認証処理
    firebase
        .auth()
        .signInWithPhoneNumber(number, window.recaptchaVerifier)
        .then(function (confirmationResult) {
            window.confirmationResult = confirmationResult;
            coderesult = confirmationResult;
            console.log(coderesult);
            alert("メッセージを送りました");
        })
        .catch(function (error) {
            console.dir(error);
            alert(error.message);
        });
}

function codeVerify() {
    var code = document.getElementById("verificationCode").value;
    console.log(code);

    coderesult
        .confirm(code)
        .then(function (result) {
            alert("Success!");
            var user = result.user;
            console.log(user);
        })
        .catch(function (error) {
            alert(error.message);
        });
}

function trimNonNumber(number) {
    // console.log(number.substring(1));

    let resultNumber = "";
    let phoneHead = number.toString().substring(0, 1);
    // ハイフンを取り除く
    // スペースを取り除く
    // 先頭の0を削って国債番号を取り付ける
    // console.log(phoneHead);
    // 半角スペースまたは半角ハイフンを削除
    console.log("phoneHead ", phoneHead);

    if (/\s|-/.test(number)) {
        resultNumber = number.split(/\s|-/).join("");
    }
    if (phoneHead == "0") {
        let num = resultNumber.substring(1);
        //日本の国債番号をつける必要がある
        resultNumber = `+81${number.substring(1)}`;
    }

    // console.log(resultNumber);

    return resultNumber;
}
