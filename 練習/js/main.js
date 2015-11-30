$(function () {

    var $menuBtn = $('.menu_btn'),
        backcolor = ['#CE1C6C','#473DC9','#42C93D'],
        num = 0;
console.log(backcolor[num]);
    $menuBtn.animate({
        top:700
        },1000,'easeOutBounce'
    );

    $menuBtn.find('li')
        .on('mouseover',function() {
            $(this).css({
                opacity: 0.5,
                height: '150px',
                width: '150px'
            }),
            $('body').css({
                backgroundColor: backcolor[num]
            })
        })
        .on('mouseout',function() {
            $(this).css({
                opacity: 1,
                height: '100px',
                width: '100px'
            })
            $('body').css({
                backgroundColor: '#F7FAD5'
            })
        });
});