function triggerFileInput() {
    document.getElementById('fileInput').click();
}


function displaySelectedFiles() {
    const fileInput = document.getElementById('fileInput');
    const filesDiv = document.querySelector('.files-uploades');
    const files = fileInput.files;
    if (files.length === 0) {

        filesDiv.innerHTML = `
            <img src="assests/images/cloud.webp" width="100px">
            <p>Drop Your document here, or <span style="color: #440099;">browse</span></p>
            <p>Supports PDF,DOCX</p>
        `;
    } else {

        filesDiv.innerHTML = '';
    
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const fileName = file.name;
            const p = document.createElement('p');
            p.textContent = fileName;
            filesDiv.appendChild(p);
        }
    
        const addButton = document.createElement('button');
        const iconElement = document.createElement('i');
        iconElement.className = 'fa fa-upload';
        addButton.classList.add('btn'); 
        addButton.classList.add('btn-sec'); 
        addButton.classList.add('btn-secs'); 
        

        addButton.appendChild(iconElement);

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        buttonContainer.appendChild(addButton);

            iconElement.addEventListener('click', function() {
                location.reload(); 
            });

        addButton.addEventListener('click', function() {
            fileInput.click();
        });
        

        filesDiv.appendChild(buttonContainer);
    }
}

function toggleResponse() {
    var responseDiv = document.getElementById('responseDiv');
    responseDiv.style.display = 'block'; 
    document.getElementById('submitBtn').disabled = true; 
}



