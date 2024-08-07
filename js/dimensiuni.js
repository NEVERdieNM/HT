
function add_form() {
    const icon_button_container = document.querySelectorAll(".icon-button-container");
    for (const button of icon_button_container) {
        button.remove();
    }

    const input_list_elem = document.getElementById("input-list");

    const form_wrapper_elem = document.createElement('div');
    form_wrapper_elem.classList.add('inputs');
    form_wrapper_elem.style.marginTop = '1rem';
    form_wrapper_elem.innerHTML = `  <form class="form-dimensiuni">
                                        <input name="nume" type="text" placeholder="Nume">
                                        <input name="lungime" type="number" step="0.1" min="0" placeholder="Lungime">
                                        <input name="latime" type="number"  step="0.1" min="0" placeholder="Latime">
                                        <input name="cantitate" type="number" min="0" placeholder="Cantitate">
                                    </form>`;
    input_list_elem.appendChild(form_wrapper_elem);

    input_list_elem.appendChild(icon_button_container[0]);

    const remove_form_button_elem = document.createElement('div');
    remove_form_button_elem.setAttribute('id', 'remove-form-button-container');
    remove_form_button_elem.classList.add('icon-button-container');
    remove_form_button_elem.innerHTML = '<button id="remove-form-button" class="icon-button" onclick="remove_form();"><img src="icons/clipboard-minus.svg" alt=""></button>'
    input_list_elem.appendChild(remove_form_button_elem);
    
}

function remove_form() {
    const input_forms = document.querySelectorAll('.inputs');
    
    if (input_forms.length > 1) {
        input_forms[input_forms.length - 1].remove();
    }
    if (input_forms.length == 2) {
        const remove_button = document.getElementById('remove-form-button-container');
        remove_button.remove();
    }
}

function submit_forms() {
    const forms = document.querySelectorAll('.form-dimensiuni');
    
    let form_dict_arr = Array();

    for (const form of forms) {
        let form_dict = new Map()
        for (const input of form.children) {
            form_dict.set(input.name, input.value);
        }
        form_dict_arr.push(form_dict);
    }

    for (let dict of form_dict_arr) {
        dict.forEach((value, key) => {
            console.log(`${key}: ${value}`)
        });
    }
}