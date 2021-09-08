const app = {
    init: () => {
        document.addEventListener('DOMContentLoaded', app.load);
    },
    load: () => {
        app.getData();
    },
    getData: () => {
        let page = document.body.id;
        switch(page) {
            case 'home': app.getHome();
              break;
            case 'dentists': app.getDentists();
              break;
            case 'services': app.getServices();
              break;
            case 'forum': app.getForum();
              break;
        }
    },

/*-----------INDEX PAGE------------*/

    getHome: () => {

        /*-----------go through dentists list------------*/
        var btnl = document.getElementsByTagName('i')[1];
        var btnr = document.getElementsByTagName('i')[2];
        var dentistsArray = ['profil1', 'profil2', 'profil3'];
        var imgDent = document.getElementById('choose_dentist');
        var name1 = 'Dr James Smith';
        var text1 = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, id, unde sunt blanditiis quia ipsum dicta tempore quod possimus ducimus optio dolorem quasi impedit facilis maiores vitae non eligendi. Maiores voluptates reiciendis molestias eius qui harum, nobis aperiam inventore velit...';
        var name2 = 'Dr Jennifer Brown';
        var text2 = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, id, unde sunt blanditiis quia ipsum dicta tempore quod possimus ducimus optio dolorem quasi impedit facilis maiores vitae non eligendi. Maiores voluptates reiciendis molestias...';
        var name3 = 'Dr Patrick Ramirez';
        var text3 = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, id, unde sunt blanditiis quia ipsum dicta tempore quod possimus ducimus optio dolorem quasi impedit facilis maiores vitae non eligendi. Maiores voluptates reiciendis molestias eius qui harum...';
        var nameDemo = document.getElementById('dentist_name_demo');
        var textDemo = document.getElementById('dentist_text_demo');

        btnr.addEventListener('click', right, false);
        function right() {
            if(imgDent.style.backgroundImage === "" || imgDent.style.backgroundImage === "url(\"img/profil1.png\")") {
                imgDent.style.backgroundImage = 'url(img/profil2.png)';
                nameDemo.textContent = name2;
                nameDemo.classList.add('smooth_opacity');
                textDemo.textContent = text2;
                textDemo.classList.add('smooth_opacity');
                setTimeout(turnoff, 600);
            } else if(imgDent.style.backgroundImage === "url(\"img/profil2.png\")") {
                imgDent.style.backgroundImage = 'url(img/profil3.png)';
                nameDemo.textContent = name3;
                nameDemo.classList.add('smooth_opacity');
                textDemo.textContent = text3;
                textDemo.classList.add('smooth_opacity');
                setTimeout(turnoff, 600);
            } else if(imgDent.style.backgroundImage === "url(\"img/profil3.png\")") {
                imgDent.style.backgroundImage = 'url(img/profil1.png)';
                nameDemo.textContent = name1;
                nameDemo.classList.add('smooth_opacity');
                textDemo.textContent = text1;
                textDemo.classList.add('smooth_opacity');
                setTimeout(turnoff, 600);
            } 
        } 


        btnl.addEventListener('click', left, false);
        function left() {
            if(imgDent.style.backgroundImage === "" || imgDent.style.backgroundImage === "url(\"img/profil1.png\")") {
                imgDent.style.backgroundImage = 'url(img/profil3.png)';
                nameDemo.textContent = name3;
                nameDemo.classList.add('smooth_opacity');
                textDemo.textContent = text3;
                textDemo.classList.add('smooth_opacity');
                setTimeout(turnoff, 600);
            } else if(imgDent.style.backgroundImage === "url(\"img/profil2.png\")") {
                imgDent.style.backgroundImage = 'url(img/profil1.png)';
                nameDemo.textContent = name1;
                nameDemo.classList.add('smooth_opacity');
                textDemo.textContent = text1;
                textDemo.classList.add('smooth_opacity');
                setTimeout(turnoff, 600);
            } else if(imgDent.style.backgroundImage === "url(\"img/profil3.png\")") {
                imgDent.style.backgroundImage = 'url(img/profil2.png)';
                nameDemo.textContent = name2;
                nameDemo.classList.add('smooth_opacity');
                textDemo.textContent = text2;
                textDemo.classList.add('smooth_opacity');
                setTimeout(turnoff, 600);
            } 
        } 



        function turnoff() {
            nameDemo.classList.remove('smooth_opacity');
            textDemo.classList.remove('smooth_opacity');
        }

    },

/*-----------DENTISTS PAGE------------*/

    getDentists: () => {
                /*-----------animations when scrolling------------*/

        var element = document.getElementById('dentists_main')


        window.addEventListener('load', start, false);
        function start() {
                element.classList.add('smooth_opacity');
        }
    },

/*-----------SERVICES PAGE------------*/

    getServices: () => {
                /*-----------shaky animation--------------*/

        var boks = document.getElementById('services_main').firstElementChild.children;

        for(var i=0; i<boks.length; i++) {
            boks[i].addEventListener('mouseover', anim, false);
            boks[i].addEventListener('mouseout', outAnim, false);
        }

        function anim() {
            this.classList.toggle('shake');
        }

        function outAnim() {
            this.classList.toggle('shake');
        }


        /*-----------show animation--------------*/

        var main = document.getElementById('services_main');
        main.classList.add('slide_reverse');
    },

/*-----------FORUM PAGE------------*/

    getForum: () => {

        var inputName = document.getElementById('name');
        var inputEmail = document.getElementById('email');
        var inputText = document.getElementsByTagName('textarea')[0];
        var post = document.querySelector('[type="submit"]');

        post.addEventListener('click', submit, false);

        function submit(e) {
            e.preventDefault()
            if(inputName.value.length > 0 && inputEmail.value.length > 3 && inputText.value.length > 0) {
                var wall = document.getElementsByClassName('wall')[0];
                var line = document.createElement('hr');
                var wallName = document.createElement('h5');
                wallName.classList.add('d-inline-block');
                wallName.textContent = inputName.value;
                var wallEmail = document.createElement('h6');
                wallEmail.classList.add('ml-1','d-inline-block');
                wallEmail.textContent = '(' + inputEmail.value + ')';
                var wallText = document.createElement('p');
                wallText.textContent = inputText.value;

                var inputs = [inputName, inputEmail, inputText];
                var wallInputs = [line, wallName, wallEmail, wallText];
                var lastReview = wall.firstElementChild.firstElementChild.nextElementSibling;
                for(var i=0; i<wallInputs.length; i++) {
                    wall.firstElementChild.insertBefore(wallInputs[i], lastReview);
                    wallInputs[i+1].classList.add('slide');
                    inputs[i].value = '';
                }
            }
        }
    }
}
app.init();
