function btnStart_Click() {
    // 取得文本框的值
    var modeValue = document.getElementById("txtMode").value;
    var inputTextValue = document.getElementById("txtInput").value;
    var drpNumbers = document.getElementById("drpNumbers").value;

    //取得第一個(的位置
    var EndStr = (inputTextValue + "").indexOf("(");
    //取得void /string /bool開始位置
    var begin = inputTextValue.indexOf(modeValue);
    //取得方法名稱前面的空格 ，從空格後面尋找到(
    var BeginStr = inputTextValue.indexOf(" ", begin);
    //substring   start 要小於End，不然會交換
    var methodName = inputTextValue.substring(BeginStr, EndStr).trim();

    var result = "";

    //檢核
    if (modeValue == "") {
        alert("請輸入模式EX: void/string/int");
        return;
    }
    if (inputTextValue == "") {
        alert("請輸入複製的方法");
        return;
    }
    if (!inputTextValue.includes(modeValue)) {
        alert("請輸入相同的方法型別");
        return;
    }
    if (BeginStr > EndStr || BeginStr=="-1") {
        alert("請輸入相同方法類型(Please enter same method type)");
        return;
    }

   
    //要複製的數量 (copy function name add number)
    for (var i = 0; i < drpNumbers; i++) {
        var copyMethodName = methodName + i;
        // 將原始方法名稱替換為新的名稱
        var a = inputTextValue.substring(0, BeginStr + 1) + copyMethodName;
        var newMethod = a + inputTextValue.substring(EndStr, inputTextValue.length);
        //把複製的方法加入集合  (function add result)
        result += newMethod + "\r\n ";
    }


    document.getElementById("txtOutput").value = result;


}