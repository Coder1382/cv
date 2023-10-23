    let slider=0;
    let pager=0;
    pages=document.getElementsByClassName('page');
    sheets=document.getElementsByClassName('sheet');
    function flip(str){
        document.getElementsByClassName('sent')[0].classList.add('hide');
        if(str==='right' && slider<pages.length-1){
            pages[slider].classList.add('hide');
            pages[++slider].classList.remove('hide');
        }
        else if(str==='left' && slider>0){
            pages[slider].classList.add('hide');
            pages[--slider].classList.remove('hide');
        }
        if(slider===pages.length-1){
                document.getElementById('right').classList.add('hide');
        }
        else{
            document.getElementById('right').classList.remove('hide');
            if(slider===0){
                document.getElementById('left').classList.add('hide');
            }
            else{
                document.getElementById('left').classList.remove('hide');
            }
        }
    }
    document.addEventListener('keydown', e=>{
        if(e.key==='ArrowLeft'){
            flip('left');
        }
        else if(e.key==='ArrowRight'){
            flip('right');
        }
    });
    function go(str){
        if(str==='down' && pager<sheets.length-1){
            sheets[pager].classList.add('hide');
            sheets[++pager].classList.remove('hide');
        }
        else if(str==='up' && pager>0){
            sheets[pager].classList.add('hide');
            sheets[--pager].classList.remove('hide');
        }
        if(pager===sheets.length-1){
            document.getElementById('down').classList.add('hide');
        }
        else{
            document.getElementById('down').classList.remove('hide');
            if(pager===0){
                document.getElementById('up').classList.add('hide');
            }
            else{
                document.getElementById('up').classList.remove('hide');
            }
        }
    }
