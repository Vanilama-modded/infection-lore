document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('editor');
    const toolbar = document.querySelector('.toolbar');

    toolbar.addEventListener('click', (e) => {
        const target = e.target.closest('button, select, input');
        if (!target) return;

        const command = target.dataset.command;
        let value = null;

        if (target.tagName === 'SELECT') {
            value = target.value;
        }

        if (target.type === 'color') {
            target.oninput = () => {
                 document.execCommand(command, false, target.value);
            }
        } else {
            document.execCommand(command, false, value);
        }

        editor.focus();
    });
});
