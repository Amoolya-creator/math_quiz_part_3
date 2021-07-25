PlayerName1 = localStorage.getItem("User1");
PlayerName2 = localStorage.getItem("User2");
document.getElementById("player_1_name").innerHTML = PlayerName1;
document.getElementById("player_2_name").innerHTML = PlayerName2;

document.getElementById("question_turn").innerHTML=PlayerName1;
document.getElementById("answer_turn").innerHTML=PlayerName2;


function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4> Question : " + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer: <input type='text' id=input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";

}