// document.addEventListener('DOMContentLoaded', () => {
//     const clickSound = document.getElementById('click-sound');

//     document.querySelectorAll('a').forEach(link => {
//         link.addEventListener('click', (e) => {
//             // Previene la navegación automática
//             e.preventDefault();

//             // Reproduce el sonido
//             clickSound.currentTime = 0;
//             clickSound.play();

//             // Después del sonido, realiza la navegación
//             setTimeout(() => {
//                 const href = link.getAttribute('href');
//                 const target = link.getAttribute('target');

//                 if (target === '_blank') {
//                     window.open(href, '_blank');
//                 } else {
//                     window.location.href = href;
//                 }
//             }, 150); // Tiempo suficiente para oír el click
//         });
//     });
// });
// document.addEventListener('DOMContentLoaded', () => {
//     const clickSound = document.getElementById('click-sound');

//     document.querySelectorAll('a').forEach(link => {
//         link.addEventListener('click', (e) => {
//             e.preventDefault();
//             clickSound.currentTime = 0;
//             clickSound.play();

//             setTimeout(() => {
//                 const href = link.getAttribute('href');
//                 const target = link.getAttribute('target');
//                 if (target === '_blank') {
//                     window.open(href, '_blank');
//                 } else {
//                     window.location.href = href;
//                 }
//             }, 150);
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const clickSound = document.getElementById('click-sound');

    const elementosConSonido = document.querySelectorAll('a, button, i');

    elementosConSonido.forEach(elemento => {
        elemento.addEventListener('click', (e) => {
            // Si es enlace, manejamos la navegación personalizada
            if (elemento.tagName === 'A') {
                e.preventDefault();
                clickSound.currentTime = 0;
                clickSound.play();

                setTimeout(() => {
                    const href = elemento.getAttribute('href');
                    const target = elemento.getAttribute('target');

                    if (target === '_blank') {
                        window.open(href, '_blank');
                    } else {
                        window.location.href = href;
                    }
                }, 150);
            } else {
                // Para botones o íconos, solo sonido
                clickSound.currentTime = 0;
                clickSound.play();
            }
        });
    });
});




