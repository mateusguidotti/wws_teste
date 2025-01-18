const wppSupportButton = document.querySelector('#wpp-support-btn')
const formContainer = document.querySelector('#form-container');
const sendButton = document.querySelector('#send-button')
let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

const formField_1 = formContainer.querySelector('#field1');
const formField_2 = formContainer.querySelector('#field2')
const formField_3 = formContainer.querySelector('#field3')
const formField_4 = formContainer.querySelector('#field4')


wppSupportButton.addEventListener('click', function () {

    if (formContainer.classList.contains('hidden')) {
        formContainer.classList.add('flex');
        formContainer.classList.remove('hidden');
        scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        console.log(scrollbarWidth);
        document.body.style.marginRight = `-${scrollbarWidth}px`;
        document.body.style.overflowX = "hidden"

    } else {
        formContainer.classList.add('hidden');
        formContainer.classList.remove('flex');
        document.body.style.margin = '';
    }
});

const select1 = formContainer.querySelector('#select1');

select1.addEventListener('input', function (event) {
    let value = event.target.value;

    console.log(value);

    updateField_2(value);

    const select2 = formContainer.querySelector('#select2');

    select2.addEventListener('input', function (event) {
        let value = event.target.value;


        if (value === 'creekside' || value === "ovix") {
            showSendButton();
        } else {
            updateField_3(value);
        }


        console.log(value);

        const select3 = formContainer.querySelector('#select3');

        select3.addEventListener('input', function (event) {
            let value = event.target.value;

            updateField_4(value);
        })
    })
})

sendButton.addEventListener('click', function() {
    const select1 = formContainer.querySelector('#select1');
    const select2 = formContainer.querySelector('#select2');
    const select3 = formContainer.querySelector('#select3');
    const select4 = formContainer.querySelector('#select4');

    console.log(select1.value);
    console.log(select2.value);
    console.log(select3.value);
    console.log(select4.value);
}); 















function updateField_2(value) {
    formField_2.innerHTML = '';
    formField_3.innerHTML = '';
    formField_4.innerHTML = '';
    hiddenSendButton();

    if (value === 'question') {
        formField_2.innerHTML = `
            <span class="text-lg font-bold mb-2">Do que se trata a sua dúvida?</span>

            <select name="" id="select2"
                class="rounded-md h-10 bg-transparent border-2 mb-4 px-5 text-white">
                <option hidden selected value="nonListed">Selecione uma opção</option>
                <option value="products" class="bg-gray-900">Produtos</option>
                <option value="delivery" class="bg-gray-900">Entrega</option>
            </select>`
    } else if (value === 'modPrice') {
        formField_2.innerHTML = `
            <span class="text-lg font-bold mb-2">Qual mod?</span>

            <select name="" id="select2"
                class="rounded-md h-10 bg-transparent border-2 mb-4 px-5 text-white">
                <option hidden selected value="nonListed">Selecione um mod</option>
                <option value="creekside" class="bg-gray-900">Creekside</option>
                <option value="ovix" class="bg-gray-900">Stand Basic</option>
            </select>
        `;

    } else if (value === 'errorReport') {
        formField_2.innerHTML = `
            <span class="text-lg font-bold mb-2">Onde está o erro?</span>

            <select name="" id="select2"
                class="rounded-md h-10 bg-transparent border-2 mb-4 px-5 text-white">
                <option hidden selected value="nonListed">Selecione algo</option>
                <option value="site" class="bg-gray-900">Site</option>
                <option value="server" class="bg-gray-900">Servidor do Discord</option>
                <option value="wpp" class="bg-gray-900">WhatsApp</option>
            </select>
        `;
    } else if (value === 'suggestion') {
        formField_2.innerHTML = `
            <span class="text-lg font-bold mb-2">Ao que se aplica sua sugestão?</span>

            <select name="" id="select2"
                class="rounded-md h-10 bg-transparent border-2 mb-4 px-5 text-white">
                <option hidden selected value="nonListed">Selecione algo</option>
                <option value="site" class="bg-gray-900">Site</option>
                <option value="server" class="bg-gray-900">Servidor do Discord</option>
                <option value="wpp" class="bg-gray-900">WhatsApp</option>
            </select>
        `;
    };
};

function updateField_3(value) {
    formField_3.innerHTML = '';
    formField_4.innerHTML = '';
    hiddenSendButton();
    mods = []

    if (value === 'products') {
        formField_3.innerHTML = `
        <span class="text-lg font-bold mb-2">Qual Produto?</span>

        <select name="" id="select3"
            class="rounded-md h-10 bg-transparent border-2 mb-4 px-5 text-white">
            <option hidden selected value="nonListed">Selecione um produto</option>
            <option value="creekside" class="bg-gray-900">Creekside</option>
            <option value="standBasic" class="bg-gray-900">Stand Basic</option>
        </select>
    `;

        mods.push(formContainer.querySelector('#select3').value);
        console.log(mods)

    } else if (value === 'delivery') {
        formField_3.innerHTML = `
        <span class="text-lg font-bold mb-2">Qual a sua dúvida ?</span>

        <textarea name="" id="select3"
            class="rounded-md h-32 bg-transparent border-2 mb-4 px-3 py-2 text-white"></textarea>
    `;

        showSendButton();

    } else if (value === 'site' || value === 'server' || value === 'wpp') {
        formField_3.innerHTML = `
        <span class="text-lg font-bold mb-2">Descreva o erro:</span>

        <textarea name="" id="select3"
            class="rounded-md h-32 bg-transparent border-2 mb-4 px-3 py-2 text-white"></textarea>
    `;

        showSendButton();

    }
}

function updateField_4(value) {
    formField_4.innerHTML = '';
    hiddenSendButton();

    if (mods.length !== 0) {
        formField_4.innerHTML = `
        <span class="text-lg font-bold mb-2">Qual a sua dúvida ?</span>

        <textarea name="" id="select4"
            class="rounded-md h-32 bg-transparent border-2 mb-4 px-3 py-2 text-white"></textarea>
    `;
    }

    let select4 = formContainer.querySelector('#select4')

    if (select4 || !select4 && select3.value !== 0) {
        showSendButton();
    }
}

function showSendButton() {
    sendButton.classList.remove('hidden');
}

function hiddenSendButton() {
    sendButton.classList.add('hidden');
}
