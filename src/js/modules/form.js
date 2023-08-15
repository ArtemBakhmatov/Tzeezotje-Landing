const form = () => {
    const form = document.querySelector('.modal__form');
    const modal = document.querySelector('.modal');
    const message = {
        loading: 'icons/spinner.svg',
        success: 'Отправлено!',
        failure: 'Server error...'
    };

    const openModal = () => {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }

    const closeModal = () => {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    const showThanksModal = (message) => {
        const modalForm = document.querySelector('.modal__form');
        const close = document.querySelector('.modal__close');
        modalForm.classList.add('modal__form-none');
        close.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__message');
        thanksModal.classList.add('show');
        thanksModal.innerHTML = `
            <div class="modal__title">${message}</div>  
        `;
        document.querySelector('.modal__block').append(thanksModal);
        setTimeout(() => {
            modalForm.classList.remove('modal__form-none');
            close.classList.remove('hide');
            thanksModal.remove();
            closeModal();
        }, 3000);
    }

    form.addEventListener('submit', event => {
        event.preventDefault();
        const statusMessage = document.createElement('img');
        statusMessage.src = message.loading;
        statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
        `;
        form.insertAdjacentElement('afterend', statusMessage);

        const formData = new FormData(form);

        const object = {};
        formData.forEach((value, key) => {
            object[key] = value;
        });

        fetch('server.php', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(object)
        })
        .then(data => data.text())
        .then(data => {
            console.log(data); // увидим что на вернул сервер
            showThanksModal(message.success);
            statusMessage.remove();
        }).catch(() => {
            showThanksModal(message.failure);
        }).finally(() => {
            form.reset();
        });
    });

      
}

export default form;