const btn2=document.getElementById('Btn-2')
const btn1=document.getElementById('Btn-1')
btn2.addEventListener('click', function(){
    btn2.classList.remove(
        'bg-white',
         'opacity-[.7]',

    )
    btn2.classList.add(
        'bg-[#B4F461]',
        'font-semibold'
    )
btn1.classList.remove( 
    'bg-[#B4F461]',
    'font-semibold')
btn1.classList.add( 
    'bg-white',
         'opacity-[.7]')
   
document.getElementById('Donate-form').classList.add("hidden")
})
