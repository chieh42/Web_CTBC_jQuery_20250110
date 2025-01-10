$("#hide-1").click(()=>{
    $("#h3-1").hide();
});


$("#show-1").click(()=>{
    $("#h3-1").show();
});

$("#toggle-1").click(()=>{
    $("#h3-1").toggle();
});

// 2.認識函數的參數
$("#hide-2").click(()=>{
    $("#h3-2").hide(1000);
});

$("#show-2").click(()=>{
    $("#h3-2").show(1000,()=>{
        $("#h3-2").text("我是標題三顯示");
    });
});

// 3.滑入滑出效果
const h3_3 = $("#h3-3");

$("#slideUp-3").click(()=>{
    h3_3.slideUp(1000);
});

$("#slideDown-3").click(()=>{
    h3_3.slideDown(1000);
});

// 4.css函式應用
$("#btn-4").click(()=>{
    $("#box-4").addClass("btn");
});

// dblclick特別注意
$("#box-4").dblclick(()=>{
    $("#box-4").text("我是箱子被點兩下");
});