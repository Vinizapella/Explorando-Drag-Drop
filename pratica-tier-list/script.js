const dropzones = document.querySelectorAll('.shape-dropzone, .options-sections-teams');
const draggables = document.querySelectorAll('.teams');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.id);
        setTimeout(() => {
                event.target.parentElement.classList.add('hide-on-drag');
            }, 0);
        console.log('Drag started:', event.target.id);
    });

    draggable.addEventListener('dragend', (event) => {
        event.target.parentElement.classList.remove('hide-on-drag');
            console.log('Drag ended:', event.target.id);
        })
});

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragover', (event) => {
        event.preventDefault();
        console.log('Drag over:', event.target.className);
    });

    dropzone.addEventListener('drop', (event) => {
        event.preventDefault();
        const draggableId = event.dataTransfer.getData('text/plain');
        const draggableElement = document.getElementById(draggableId);
        if (draggableElement) {
            const containerToMove = draggableElement.parentElement;
            containerToMove.classList.remove('hide-on-drag');
            dropzone.appendChild(containerToMove);
            console.log(`Elemento ${draggableId} solto com sucesso`, event.target.className);
        }
    });

     dropzone.addEventListener('dragenter', (event) => {
            event.preventDefault();
        });

        dropzone.addEventListener('dragleave', (event) => {
            event.preventDefault();
        });
    });
