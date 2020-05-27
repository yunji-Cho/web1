var targetLink = document.querySelectorAll('.tab-menu>li a'),
    tabContent = document.querySelectorAll('#tab-content>div');


for(i=0; i<targetLink.length; i++){
    targetLink[i].addEventListener('click',function(e){
        e.preventDefault();

        var orgTarget = e.target.getAttribute('href');
        var tabTarget = orgTarget.replace('#','');

        for(x=0; x<tabContent.length; x++){
            tabContent[x].style.display="none";
        }

        document.getElementById(tabTarget).style.display="block";

        for(var j=0; j<targetLink.length; j++){
            targetLink[j].classList.remove('active');
            e.target.classList.add('active');
        }

    });
}

tabContent[0].style.display="block";



/*
열자마자는 tab-content안의 div들 모두 안보이도록 한다.

링크를 클릭하면 클릭한 그 요소의 href 속성의 값을 변수 tabTarget에 저장
저장된 값에서 #은 삭제한다.
 tabTarget = tabs-1
 documentgetElementById().display="block"

*/

/*
var orgTarget="#tabs-1"; //a.replace('b','c');
var tabTarget = orgTarget.replace('#','');

document.getElementById(tabTarget).style.display="block"
*/