// script.js

// Script para navegação em botões
const navButtons = document.querySelectorAll('nav button');



// Animação ao rolar a página
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const triggerHeight = window.innerHeight * 0.8;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerHeight) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        } else {
            section.style.opacity = 0;
            section.style.transform = 'translateY(20px)';
        }
    });
});

// Script para galeria de imagens
const galleryImages = document.querySelectorAll('.galeria-imagens img');

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        const imageSrc = image.src;
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';

        const modalImage = document.createElement('img');
        modalImage.src = imageSrc;
        modalImage.style.maxWidth = '90%';
        modalImage.style.maxHeight = '90%';
        modalImage.style.borderRadius = '10px';

        modal.appendChild(modalImage);
        document.body.appendChild(modal);

        modal.addEventListener('click', () => {
            modal.remove();
        });
    });
});
// script.js

// Script para navegação do botão "Encontre seu emprego ideal"
const employmentButton = document.querySelector('nav button:first-child'); // Primeiro botão

employmentButton.addEventListener('click', () => {
    window.location.href = 'cadastro_curriculo.html'; // Abre nova página
});


// Botões principais com animação
const mainButtons = document.querySelectorAll('button');

mainButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});
