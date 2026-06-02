// تشغيل زر البداية وينقل للصفحة 2
document.getElementById('start-btn').addEventListener('click', function() {
    nextPage(2);
});

// دالة التنقل العامة بين الصفحات
function nextPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.add('hidden');
    });

    const targetPage = document.getElementById('page' + pageNumber);
    if (targetPage) {
        targetPage.classList.remove('hidden');
    }
}

// السؤال الأول
function answerQuestion1(choice) {
    alert("真棒！");
    nextPage(3);
}

// السؤال الثاني
function answerQuestion2(choice) {
    alert("聪明！");
    nextPage(4);
}

// السؤال الثالث: لازم يختار 周文河 عشان يعدي
function answerQuestion3(choice) {
    if (choice === '周文河') {
        alert("猜对啦 💖");
        nextPage(5); 
    } else {
        alert("猜错啦 笨蛋 😤"); 
    }
}

// السؤال الرابع: رسائل مخصصة حسب الاختيار
function answerQuestion4(isTrue) {
    if (isTrue) {
        alert("你知道就好了 🥰");
    } else {
        alert("笨蛋，咋不知道呀，不明显吗 😡💖");
    }
    nextPage(6); 
}