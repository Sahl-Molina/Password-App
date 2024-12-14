const outputBox = document.getElementById('outputBox');
const generateButton = document.getElementById('generateButton');
const copyButton = document.getElementById('copyButton');


const getNewPassword = async () => {
    try {
        const fetchedPassword = await fetch('http://localhost:5000/api/get-password')
        
        if (!fetchedPassword.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const password = await fetchedPassword.json();
        return password;

    } catch (error) {
        console.error('Error al generar la contraseña: ', error);
    }
}

const handleCopyButton = (outputBox) => {
    navigator.clipboard.writeText(outputBox.value)
}

generateButton.addEventListener('click', async () => {
    const password = await getNewPassword();
    outputBox.setAttribute('value', password);
});

copyButton.addEventListener( 'click', () => handleCopyButton(outputBox))