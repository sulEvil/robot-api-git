document.addEventListener('DOMContentLoaded', () => {

    const adder = document.getElementById('adder');
    const options = document.getElementById('options')
    const robots = document.getElementById('robots')

    adder.addEventListener('click', () => {
        let elem = document.createElement('input');
        elem.className = "option";
        elem.required = true;
        elem.type = "text"
        elem.name = "options[]";
        options.append(elem);
    })

    // let elem2 = document.createElement('li');
    // elem2.className = "robot";
    // elem2.innerText = `<div class="name">
    //             Вопрос
    //         </div>
    //         <div class="answer">
    //             Варианты ответа
    //         </div>
    //         <ul>
    //             <li>
    //                 тест 1
    //             </li>
    //             <li>
    //                 тест 2
    //             </li>
    //         </ul>`
    // robots.append(elem2);


fetch('http://localhost:8080/api/question/all')
    .then(response => response.json()) // Декодируем ответ в формате json
    .then(data => {
        let bd = data.split('\n');

        bd.map(elem => {
            let el = elem.split('; ')
            let options = el[1].split(',')
            let elem2 = document.createElement('li');
            if(el[0]){
                elem2.className = "robot";
                elem2.innerHTML += `<div class="name">
                ${el[0]}
            </div>
            <div class="answer">
                Варианты ответа
            </div>
            <ul>
                `;

                 options.map(opt => {
                    elem2.innerHTML += `<li>
                                            ${opt}
                                        </li>`
                })


                elem2.innerHTML += `</ul>`

                robots.append(elem2);
            }

        })




    }); // Выводим ответ в консоль




})
