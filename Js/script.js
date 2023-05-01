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

        const nome = document.getElementById("logo");
       
        function nome_maquina(elemento){

            const nome_array = elemento.innerHTML.split('');
            elemento.innerHTML="";

            nome_array.forEach((letra , index) => {
                setTimeout(()=> elemento.innerHTML += letra ,75*index)

            });
            
        }

        nome_maquina(nome);