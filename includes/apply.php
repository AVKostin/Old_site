<section class="apply" id="apply">
        <img src="assets/img/Line2.svg" alt="" class="apply__line">
        <div class="container">
            <h2 class="apply__title">
                З чим до нас звертаються
            </h2>
            <div class="psychology__set">
                <div class="psychology__wrapp psychology__wrapp_mod-1">
                    <div class="psychology__circle">
                        <img src="assets/img/Mask-1.png" alt="" class="psychology__circle_img">
                    </div>
                    <p class="psychology__text">
                        Відчуваєш тривогу в режимі нонстоп?
                    </p>
                </div>
                <div class="psychology__wrapp psychology__wrapp_mod-2">
                    <p class="psychology__text">
                        Знецінюєш себе?
                    </p>
                    <div class="psychology__circle">
                        <img src="assets/img/Mask-2.png" alt="" class="psychology__circle_img">
                    </div>
                </div>
                <div class="psychology__wrapp psychology__wrapp_mod-3">
                    <div class="psychology__circle">
                        <img src="assets/img/Mask-3.png" alt="" class="psychology__circle_img">
                    </div>
                    <p class="psychology__text">
                        Боїшся за своє майбутнє?
                    </p>
                </div>
                <div class="psychology__wrapp psychology__wrapp_mod-4">
                    <p class="psychology__text">
                        Контролюєш себе?
                    </p>
                    <div class="psychology__circle">
                        <img src="assets/img/Mask-4.png" alt="" class="psychology__circle_img">
                    </div>
                </div>
                <div class="psychology__wrapp psychology__wrapp_mod-5">
                    <div class="psychology__circle">
                        <img src="assets/img/Mask-5.png" alt="" class="psychology__circle_img">
                    </div>
                    <p class="psychology__text">
                        Тебе не розуміють?
                    </p>
                </div>
            </div>
        </div>
    </section>

    <script>
    // Получаем контейнер с блоками
    const psychologySet = document.querySelector('.psychology__set');

    // Сохраняем исходную разметку блоков
    const block1 = document.querySelector('.psychology__wrapp_mod-1');
    const block2 = document.querySelector('.psychology__wrapp_mod-2');
    const block3 = document.querySelector('.psychology__wrapp_mod-3');
    const block4 = document.querySelector('.psychology__wrapp_mod-4');
    const block5 = document.querySelector('.psychology__wrapp_mod-5');

    // Функция для изменения порядка блоков
    function rearrangeBlocks() {
        const screenWidth = window.innerWidth;

        // Если ширина экрана меньше или равна 767px (мобильная версия)
        if (screenWidth <= 1280) {
            // Удаляем созданные колонки
            const columns = document.querySelectorAll('.psychology__column');
            columns.forEach(column => column.remove());

            // Создаем первую колонку и добавляем в нее клонированные блоки 1, 3 и 5
            const column1 = document.createElement('div');
            column1.classList.add('psychology__column');
            column1.style.height = '811px';
            column1.style.display = 'flex';
            column1.style.justifyContent = 'space-between';

            const clonedBlock1 = block1.cloneNode(true);
            const clonedBlock3 = block3.cloneNode(true);
            const clonedBlock5 = block5.cloneNode(true);

            column1.appendChild(clonedBlock1);
            column1.appendChild(clonedBlock3);
            column1.appendChild(clonedBlock5);

            // Создаем вторую колонку и добавляем в нее клонированные блоки 2 и 4
            const column2 = document.createElement('div');
            column2.classList.add('psychology__column');
            column2.style.height = '811px';
            column2.style.display = 'flex';
            column2.style.justifyContent = 'space-evenly';

            const clonedBlock2 = block2.cloneNode(true);
            const clonedBlock4 = block4.cloneNode(true);

            column2.appendChild(clonedBlock2);
            column2.appendChild(clonedBlock4);

            // Очищаем контейнер и добавляем созданные колонки
            psychologySet.innerHTML = '';
            psychologySet.appendChild(column1);
            psychologySet.appendChild(column2);

            // Добавляем фоновое изображение только в мобильной версии
         // Добавляем фоновое изображение
         psychologySet.style.backgroundImage = "url('assets/img/line_43.png')";
            psychologySet.style.backgroundSize = 'cover';
            psychologySet.style.backgroundRepeat = 'no-repeat';
            psychologySet.style.backgroundPosition = 'center';
        } else {
            // Удаляем созданные колонки
            const columns = document.querySelectorAll('.psychology__column');
            columns.forEach(column => column.remove());

            // Восстанавливаем изначальный порядок блоков
            const blocks = [block1, block2, block3, block4, block5];
            blocks.forEach(block => psychologySet.appendChild(block));

            // Удаляем фоновое изображение в десктопной версии
            psychologySet.style.backgroundImage = 'none';
        }
    }

    // Вызываем функцию при загрузке страницы и при изменении размера окна
    window.addEventListener('DOMContentLoaded', rearrangeBlocks);
    window.addEventListener('resize', rearrangeBlocks);
</script>
<style>
    .psychology__column {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .psychology__wrapp {
        margin: 10px;
        padding: 10px;
        /* border: 1px solid black; */
        text-align: center;
    }

    @media (min-width: 768px) {
        .psychology__set {
            display: flex;
        }

        .psychology__column {
            flex: 1;
            height: 811px;
        }
    }

    /* Стили для фонового изображения */
    .background-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: -1;
    }

    .background-image__img {
        max-width: 100%;
        max-height: 100%;
    }
</style>