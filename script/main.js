const lnb_btn = document.querySelector('.lnb_btn')
const lnb_btnImg = document.querySelector('.lnb_btn img')
const cover = document.querySelector('.cover')

const open = () => {
  if(!wrap.classList.contains('on')){   // 클라스 on이 없을때
    wrap.classList.add('on');
  lnb_btnImg.setAttribute('src', 'img/bg_header_lnb_active.png')
  } else {
    close()
  }  
}
const close = ()=>{
  wrap.classList.remove('on');
    lnb_btnImg.setAttribute('src', 'img/bg_header_lnb_active.png')
}
lnb_btn.addEventListener('click',open)
cover.addEventListener('click',close)