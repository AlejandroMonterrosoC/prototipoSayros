const productos = [
  {
    id: '1',
    name: 'Pantalones',
    prodDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cupiditate enim beatae atque ut distinctio dolorem eaque ex error odio ducimus animi reprehenderit, dicta veritatis aut ab. Modi quaerat saepe deleniti quia itaque ea',
    prodC: ['Control humedad', 'Stretch', 'Repelencia', 'Antimanchas'],
    imgs: ['imgsCarpet/productosImgs/pantalonesImgs/DSC00279.jpg', 'imgsCarpet/productosImgs/pantalonesImgs/DSC00280.jpg', 'imgsCarpet/productosImgs/pantalonesImgs/DSC00281.jpg', 'imgsCarpet/productosImgs/pantalonesImgs/DSC00279.jpg', 'imgsCarpet/productosImgs/pantalonesImgs/DSC00280.jpg'],
    prodRel: ['id:2', 'id:3', 'id:4', 'id:5']
  },
  {
    id: '2',
    name: 'Camisas y Blusas',
    prodDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cupiditate enim beatae atque ut distinctio dolorem eaque ex error odio ducimus animi reprehenderit, dicta veritatis aut ab. Modi quaerat saepe deleniti quia itaque ea',
    prodC: ['Anti arrugas', 'Stretch', 'Repelencia', 'Antimanchas'],
    imgs: ['imgsCarpet/productosImgs/camisasBlusasImgs/camblu5.jpg', 'imgsCarpet/productosImgs/camisasBlusasImgs/camblu1.jpg', 'imgsCarpet/productosImgs/camisasBlusasImgs/camblu2.jpg', 'imgsCarpet/productosImgs/camisasBlusasImgs/camblu3.jpg', 'imgsCarpet/productosImgs/camisasBlusasImgs/camblu4.jpg'],
    prodRel: ['id:2', 'id:3', 'id:4', 'id:5']
  },
  {
    id: '3',
    name: 'Chalecos',
    prodDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cupiditate enim beatae atque ut distinctio dolorem eaque ex error odio ducimus animi reprehenderit, dicta veritatis aut ab. Modi quaerat saepe deleniti quia itaque ea',
    prodC: ['Control humedad', 'Stretch', 'Repelencia', 'Antimanchas'],
    imgs: ['imgsCarpet/productosImgs/chalecosImgs/chaleco5.jpg', 'imgsCarpet/productosImgs/chalecosImgs/chaleco1.jpg', 'imgsCarpet/productosImgs/chalecosImgs/chaleco2.jpg', 'imgsCarpet/productosImgs/chalecosImgs/chaleco3.jpg', 'imgsCarpet/productosImgs/chalecosImgs/chaleco4.jpg'],
    prodRel: ['id:2', 'id:3', 'id:4', 'id:5']
  },
  {
    id: '4',
    name: 'Chumpas',
    prodDesc: 'Chumpas empresariales elegantes y duraderas, confeccionadas con algodón y tela sintética de alta calidad, brindan comodidad, resistencia y estilo profesional que refuerza la identidad y confianza de tu empresa.',
    prodC: ['Control humedad', 'Stretch', 'Repelencia', 'Antimanchas'],
    imgs: ['imgsCarpet/productosImgs/chumpasImgs/chumpa5.jpg', 'imgsCarpet/productosImgs/chumpasImgs/chumpa1.jpg', "imgsCarpet/productosImgs/chumpasImgs/chumpa2.jpg", "imgsCarpet/productosImgs/chumpasImgs/chumpa3.jpg", "imgsCarpet/productosImgs/chumpasImgs/chumpa4.jpg"],
    prodRel: ['id:2', 'id:3', 'id:4', 'id:5']
  },
  {
    id: '5',
    name: 'Polos',
    prodDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cupiditate enim beatae atque ut distinctio dolorem eaque ex error odio ducimus animi reprehenderit, dicta veritatis aut ab. Modi quaerat saepe deleniti quia itaque ea',
    prodC: ['Control humedad', 'Stretch', 'Repelencia', 'Antimanchas'],
    imgs: ['imgsCarpet/productosImgs/polosImgs/DSC00126.jpg', 'imgsCarpet/productosImgs/polosImgs/DSC00127.jpg', 'imgsCarpet/productosImgs/polosImgs/DSC00126.jpg', 'imgsCarpet/productosImgs/polosImgs/DSC00127.jpg', 'imgsCarpet/productosImgs/polosImgs/DSC00126.jpg'],
    prodRel: ['id:2', 'id:3', 'id:4', 'id:5']
  },
  {
    id: '6',
    name: 'Restaurantes',
    prodDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cupiditate enim beatae atque ut distinctio dolorem eaque ex error odio ducimus animi reprehenderit, dicta veritatis aut ab. Modi quaerat saepe deleniti quia itaque ea',
    prodC: ['Control humedad', 'Stretch', 'Repelencia', 'Antimanchas'],
    imgs: ['imgsCarpet/productosImgs/restaurantesImgs/DSC00106.jpg', 'imgsCarpet/productosImgs/restaurantesImgs/DSC00111.jpg', 'imgsCarpet/productosImgs/restaurantesImgs/DSC00115.jpg', 'imgsCarpet/productosImgs/restaurantesImgs/DSC00116.jpg', 'imgsCarpet/productosImgs/restaurantesImgs/DSC00119.jpg'],
    prodRel: ['id:2', 'id:3', 'id:4', 'id:5']
  }
];

const urlInfo = new URLSearchParams(window.location.search);
const idProd = urlInfo.get('id');
const imgsWrapper = document.querySelector('.producto-imgs-wrapper');
const textWrapper = document.querySelector('.producto-text-btn-wrapper');
const prodRelWrapper = document.querySelector('.prod-rel-wrapper');
let prodImgs;
let prodText;
let prodRel;

displayProduct(productos);

function displayProduct(products) {
  products.map((item) => {
    if (item.id === idProd) {
      prodImgs = `<div class="prod-img-big-wrapper">
          <img src="${item.imgs[0]}" alt="Sayros " class="prod-img-big">
        </div>
        <div class="prod-imgs-small-wrapper d-flex-wrapper">
          <div class="prod-img-small-wrapper">
            <img src="${item.imgs[1]}" alt="Sayros ${item.name}" class="prod-img-small" data-img-id-1 onclick="changeImg('[data-img-id-1]')">
          </div>
          <div class="prod-img-small-wrapper">
            <img src="${item.imgs[2]}" alt="Sayros ${item.name}" class="prod-img-small" data-img-id-2 onclick="changeImg('[data-img-id-2]')">
          </div>
          <div class="prod-img-small-wrapper">
            <img src="${item.imgs[3]}" alt="Sayros ${item.name}" class="prod-img-small" data-img-id-3 onclick="changeImg('[data-img-id-3]')">
          </div>
          <div class="prod-img-small-wrapper">
            <img src="${item.imgs[4]}" alt="Sayros ${item.name}" class="prod-img-small" data-img-id-4 onclick="changeImg('[data-img-id-4]')">
          </div>
        </div>`;
      
      prodText = `<h2 class="prod-title">${item.name}</h2>
        <p class="prod-description-p">${item.prodDesc}</p>
        <div class="prod-btn-whatsapp-wrapper">
          <a href="#" target="_blank" rel="noopener noreferrer" class="contacto-main-link-a contacto-main-link-whatsapp btn-item"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" stroke-width="2.5" stroke="currentColor" fill="none" class="duration-300 transform transition-all btn-svg" style="width: 32px; height: 32px;"><path d="M35.66 35.67a16.71 16.71 0 01-7.75-6.78.82.82 0 01.12-.95l1.55-1.69a.8.8 0 00.15-.87l-2.44-4.65s-1.08-1.65-3.29-.23c0 0-5.81 4.54-2.1 10.78s7.2 8.35 10.34 9.88c2.73 1.33 8.64 3.1 12.21-3.39 0 0 1.25-2 0-2.51-.57-.23-3.68-1.77-5-2.41a.82.82 0 00-1 .22l-1.86 2.35a.81.81 0 01-.93.25z"></path><path d="M8.86 53.49l4-11.2a23 23 0 118.64 8.8z" stroke-linecap="round"></path></svg>Whatsapp</a>
        </div>
        <div class="prod-caract-wrapper">
          <h4 class="prod-caracteristicas-title">Caracteristicas del producto</h4>
          <ul class="prod-caract-ul d-flex-wrapper">
            <li class="prod-caract-li">${item.prodC[0]}</li>
            <li class="prod-caract-li">${item.prodC[1]}</li>
            <li class="prod-caract-li">${item.prodC[2]}</li>
            <li class="prod-caract-li">${item.prodC[3]}</li>
          </ul>
        </div>`;
      
      /* for(let x = 0; x <= item.prodRel.length; x++) {

        prodRel = `<div class="prod-rel-item-wrapper">
          <div class="prod-rel-img">
            <img src="" alt="Sayros " class="prod-rel-img">
          </div>
          <span class="prod-rel-name">${item.prodRel[x]}</span>
        </div>`
      } */
    }
  });
}

imgsWrapper.innerHTML = prodImgs;
textWrapper.innerHTML = prodText;
/* zzzzzzzzz */
