export default class Map {
    constructor(mapId, options) {
        this.mapId = mapId;
        this.options = options;
        this.init();
    }

    async init() {
        await this.injectYMapsScript();
        await this.loadYMaps();
        this.initMap();
    }

    injectYMapsScript() {
        return new Promise((resolve) => {
            const ymapsScript = document.createElement('script');
            ymapsScript.src =
                "https://api-maps.yandex.ru/2.1.68/?apikey=a69df322-6f0d-4200-937d-307050c5388cc&load=package.full&lang=ru-RU";
            document.body.appendChild(ymapsScript);
            ymapsScript.addEventListener('load', resolve);
        });
    }

    loadYMaps() {
        return new Promise((resolve) => ymaps.ready(resolve));
    }

    initMap() {
        let geoObjects = [],
        points = this.options.coords,

        getPointData = function (index) {
            return {
                balloonContentHeader: '<font size=3><b><a target="_blank" href="https://yandex.ru">Здесь может быть ваша ссылка</a></b></font>',
                balloonContentBody: '<p>Ваше имя: <input name="login"></p><p>Телефон в формате 2xxx-xxx:  <input></p><p><input type="submit" value="Отправить"></p>',
                balloonContentFooter: '<font size=1>Информация предоставлена: </font> балуном <strong>метки ' + index + '</strong>',
                clusterCaption: 'метка <strong>' + index + '</strong>'
            }
        },

        MyIconLayout = ymaps.templateLayoutFactory.createClass([
            '<div class="ya-placemark" data-coords="">',
                '<svg width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">',
                    '<g filter="url(#filter0_d_106_3793)">',
                        '<circle cx="51" cy="51" r="37" fill="#254558"/>',
                    '</g>',
                    '<path d="M63.9297 45.675C62.3547 38.745 56.3097 35.625 50.9997 35.625C50.9997 35.625 50.9997 35.625 50.9847 35.625C45.6897 35.625 39.6297 38.73 38.0547 45.66C36.2997 53.4 41.0397 59.955 45.3297 64.08C46.9197 65.61 48.9597 66.375 50.9997 66.375C53.0397 66.375 55.0797 65.61 56.6547 64.08C60.9447 59.955 65.6847 53.415 63.9297 45.675ZM50.9997 53.19C48.3897 53.19 46.2747 51.075 46.2747 48.465C46.2747 45.855 48.3897 43.74 50.9997 43.74C53.6097 43.74 55.7247 45.855 55.7247 48.465C55.7247 51.075 53.6097 53.19 50.9997 53.19Z" fill="#EAFC40"/>',
                    '<defs>',
                        '<filter id="filter0_d_106_3793" x="0" y="0" width="102" height="102" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">',
                        '<feFlood flood-opacity="0" result="BackgroundImageFix"/>',
                        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>',
                        '<feOffset/>',
                        '<feGaussianBlur stdDeviation="7"/>',
                        '<feComposite in2="hardAlpha" operator="out"/>',
                        '<feColorMatrix type="matrix" values="0 0 0 0 0.145098 0 0 0 0 0.270588 0 0 0 0 0.345098 0 0 0 0.3 0"/>',
                        '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_3793"/>',
                        '<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_3793" result="shape"/>',
                        '</filter>',
                    '</defs>',
                '</svg>',
            '</div>'
        ].join('')),

        getPointOptions = function () {
            return {
                // Опции.
                iconLayout: 'default#imageWithContent',
                // Макет содержимого.
                iconContentLayout: MyIconLayout
            };
        };

        this.clusterer = new ymaps.Clusterer({
            groupByCoordinates: true,
            clusterDisableClickZoom: true,
            clusterOpenBalloonOnClick: false,
        });


        this.clusterer.events.add('click', (e) => {
            const coords = e.get('target').geometry.getCoordinates();
            console.log(coords);
        });

        this.map = new ymaps.Map(this.mapId, {
            center: this.options.center,
            zoom: this.options.zoom,
            controls: this.options.controls,
        });

        this.map.behaviors.disable('scrollZoom');
            for (var i = 0, len = points.length; i < len; i++) {
            geoObjects[i] = new ymaps.Placemark(points[i], getPointData(i), getPointOptions());
        }

        let translate;
        const position = this.map.getGlobalPixelCenter();
        const mediaQuery = window.matchMedia('(max-width: 992px)');
        mediaQuery.matches ? (translate = [ position[0], position[1] ]) : (translate = [ position[0] + 150, position[1] - 12 ]);
        this.map.setGlobalPixelCenter(translate);

        if (mediaQuery.matches) {
            this.map.behaviors.disable('drag');
            this.map.behaviors.enable('MultiTouch');
        }

        this.clusterer.add(geoObjects);
        this.map.geoObjects.add(this.clusterer);
    }

    showInfo() {
        console.log(this.options);
    }
}
