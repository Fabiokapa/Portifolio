        const btn_mobile = document.querySelector("#btn");
        btn_mobile.addEventListener('click' , abrir);

        let item_menu = document.querySelector('#menu ');

        item_menu.addEventListener('click',()=>{
            nav.classList.remove('active');
        })  
        
        function abrir(){

            let nav = document.getElementById("nav");
            nav.classList.toggle('active');
         
        }

        const chk = document.getElementById('chk');
        chk.addEventListener('change',() =>{
            document.body.classList.toggle('dark');
        });

