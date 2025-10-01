var products = [
	{
		price: 20,
		name: 'Crenvurști Curcan Copți',
		details:
			'Crenvurști de curcan copți la cuptor, ideali pentru o masă rapidă și gustoasă. Realizați din carne de curcan de înaltă calitate, cu un gust savuros și ușor condimentat.',
		imageURL:
			'https://cdn.freshful.ro/media/cache/freshful_large/9b/38/4406425970628e516b353db253ee.jpg',
		id: '1',
	},
	{
		price: 29.99,
		name: 'Vrăbioară vită maturată 250g',
		details:
			'Vrabioara de vită este o carne fragedă, care are puține grăsimi și o aromă intensă. Este localizată în zona spatelui animalului.',
		imageURL:
			'https://cdn.freshful.ro/media/cache/sylius_shop_product_thumbnail/6e/88/36a8db93e2e71ba2c522bc3d4c07.jpg',
		id: '2',
	},
	{
		price: 9.89,
		name: 'Dovleac Halloween minim 1.5kg',
		details:
			'Dovleacul este simbolul reprezentativ al Halloween-ului. Vei avea nevoie de un dovleac ca și acesta, de culoare portocalie, cu bază plată pentru a decora casa în spirtul Halloween-ului. Un Halloween fără dovleac, nu este un adevărat Halloween.',
		imageURL:
			'https://cdn.freshful.ro/media/cache/freshful_large/15/6c/d1ab960859954873fc036d1afea2.jpg',
		id: '3',
	},
	{
		price: 8,
		name: 'Avocado eco 1 buc',
		details: 'Avocado eco 1 buc.',
		imageURL:
			'https://www.freshful.ro/_next/image?url=https%3A%2F%2Fcdn.freshful.ro%2Fmedia%2Fcache%2Ffreshful_large%2F64%2F70%2Fe82af99f8124568776386cf9bd80.jpg&w=640&q=100',
		id: '4',
	},
	{
		price: 1.29,
		name: 'Înghețată vafă de cacao 100ml',
		details: 'Înghețată delicioasă de cacao, în vafă.',
		imageURL:
			'https://cdn.freshful.ro/media/cache/sylius_shop_product_thumbnail/11/f2/81b80bca10997fedd8e04605e7a9.jpg',
		id: '6',
	},
	{
		price: 8,
		name: 'Lămâi netratate 500g',
		details: 'Lămâi netratate 500g',
		imageURL:
			'https://www.freshful.ro/_next/image?url=https%3A%2F%2Fcdn.freshful.ro%2Fmedia%2Fcache%2Ffreshful_large%2F7e%2F4b%2Ff3c9e2d2244b0c5c1d281f544bae.jpg&w=640&q=100',
		id: '7',
	},
	{
		price: 19,
		name: 'Rulada cu crema',
		details: 'Rulada cu umplutura de cacao',
		imageURL:
			'https://static.mega-image.ro/medias/sys_master/h68/hf5/9181741744158.jpg?buildNumber=c79adfd9e9bd84031d51fe40122671d8207dec1252efe86e103208a4502caeac&imwidth=320',
		id: '8',
	},
	{
		price: 8.99,
		name: 'Lămâi',
		details: 'Lămâi netratate 500g',
		imageURL:
			'https://cdn.freshful.ro/media/cache/freshful_large/7e/4b/f3c9e2d2244b0c5c1d281f544bae.jpg',
		id: '9',
	},
	{
		price: 15.99,
		name: 'Coastă grill 500g',
		details:
			'Coastă de porc asezonată bine cu piper negru, cimbru, busuioc, chilli, boia dulce și usturoi pentru ca friptura ta să fie perfectă. Se poate prepara, după preferință, la grătar sau în cuptor.',
		imageURL:
			'https://cdn.freshful.ro/media/cache/sylius_shop_product_thumbnail/24/c4/263305749e9e55896f2749de6b2d.jpg',
		id: '10',
	},
	{
		price: 3.69,
		name: 'Borș cu leuștean 1l',
		details:
			'Borșul are locul lui de cinste în bucătăria românească. Când ai poftă de o ciorbă gustoasă, folosește cu încredere borșul cu leuștean.',
		imageURL:
			'https://cdn.freshful.ro/media/cache/sylius_shop_product_original/f7/bd/c3c960b98e7b103f0480ee87b7ce.jpg',
		id: '11',
	},
	{
		price: 11.69,
		name: 'Ciocănele de pui 630g',
		details:
			'Pulpa inferioară de pui cu os și piele de la Cocorico este gustoasă și fragedă. Fiind un aliment lipsit de carbohidraţi şi sărac în grăsimi, carnea de pui reprezintă ingredientul perfect pentru siluetă.',
		imageURL:
			'https://cdn.freshful.ro/media/cache/sylius_shop_product_thumbnail/42/d6/485fc8e6a72c4eb51f58e18d183c.jpg',
		id: '12',
	},
	{
		price: 7,
		name: 'Legume supă 600g',
		details:
			'Mix de legume ideal pentru pregătirea rapidă și ușoară a supelor. Amestecul conține morcovi, țelină și ceapă, în proporții variabile.',
		imageURL:
			'https://cdn.freshful.ro/media/cache/sylius_shop_product_original/c9/c5/1798dc5e118ee1627b93cc028146.jpg',
		id: '13',
	},
	{
		price: 41.39,
		name: 'Slănină de Mangaliță cu sare de Himalaya 300g',
		details:
			'Slănina de porc din rasa mangalița este maturată, afumată și puțin condimentată.',
		imageURL:
			'https://cdn.freshful.ro/media/cache/freshful_large/2a/51/7bdcf60d25e339d5fbab221d3106.jpg',
		id: '16',
	},
	{
		price: 2.19,
		name: 'Suc de morcovi, mere şi portocale 0.2l',
		details:
			'Un suc deosebit, care te vitalizează și îți oferă vitaminele de care ai nevoie.',
		imageURL:
			'https://cdn.freshful.ro/media/cache/sylius_shop_product_thumbnail/e7/0c/65afa2c82dc913c58825da91c14c.jpg',
		id: '17',
	},
	{
		price: 31,
		name: 'FRANUí',
		details: 'Zmeură în ciocolată albă și ciocolată cu lapte 150g',
		imageURL:
			'https://www.freshful.ro/_next/image?url=https%3A%2F%2Fcdn.freshful.ro%2Fmedia%2Fcache%2Ffreshful_large%2F11%2F43%2Fba11e05cc8e8fc3333ff835f4ccf.jpg&w=640&q=100',
		id: '18',
	},
	{
		price: 6.99,
		name: 'Gutui de Voinești',
		details: '1 bucată; porniți în căutarea fructelor cu gust',
		imageURL:
			'https://cdn.freshful.ro/media/cache/freshful_large/ed/db/f627584d166ea4ea88e6bc2472c2.jpg',
		id: '19',
	},
	{
		price: 8.59,
		name: 'Hummus cu semințe de dovleac 200gr',
		details:
			'VitamineHummus-ul Pumpkin Seeds de la Ribella este o variantă inedită și delicioasă a rețetei clasice de hummus.',
		imageURL:
			'https://www.springfarma.com/media/catalog/product/cache/4a2ca05ba5e1f4830973cf53046ef2fd/1/3/13701.jpghttps://cdn.freshful.ro/media/cache/freshful_large/45/fc/e83a5b9f234682e14e7d2e95c00f.jpg',
		id: '20',
	},
	{
		price: 21.99,
		name: 'Terea Turquoise',
		details: 'Țigări Terea Turquoise compatibile cu Iqos Iluma.',
		imageURL:
			'https://cdn.freshful.ro/media/cache/sylius_shop_product_thumbnail/9e/70/a56f1d1f98e0ab0f846e8ca5d2cf.jpg',
		id: '21',
	},
	{
		price: 2.5,
		name: 'Cottage cu branza',
		details: 'Granule de brânză Cottage cu smântână 2% grăsime 180g',
		imageURL:
			'https://cdn.freshful.ro/media/cache/freshful_large/3d/0b/a1b0f1f8b70d39200e4ea88e4475.jpg',
		id: '23',
	},
	{
		price: 26,
		name: 'Magnum',
		details: 'Înghețată Mini Double cu aromă de zmeură 6x55ml',
		imageURL:
			'https://cdn.freshful.ro/media/cache/freshful_large/e9/5a/d03b52f9dedac7cd3e5ca2ecf853.jpg',
		id: '24',
	},
	{
		price: 21.99,
		name: 'Parmigiano Reggiano DOP 200g',
		details:
			'Parmigiano Reggiano DOP - brânză cu pastă tare, min. 32% grăsime raportată la substanță uscată.',
		imageURL:
			'https://cdn.freshful.ro/media/cache/sylius_shop_product_original/02/65/2fd572189341a7901ec4fe5fe0eb.jpg',
		id: '25',
	},
	{
		price: 1.49,
		name: 'Sfeclă roșie România 1 buc',
		details:
			'Frunzele și rădăcinile de sfeclă sunt pline de nutrienți, inclusiv antioxidanți, care luptă împotriva deteriorării celulelor și reduc riscul de boli de inimă. Sfecla este una dintre puținele legume care conțin betalaine, un antioxidant puternic care dă sfeclei roșii culoarea ei vibrantă.',
		imageURL:
			'https://cdn.freshful.ro/media/cache/sylius_shop_product_original/67/6b/54152c488b93c723cb9ffbcae2fc.jpg',
		id: '26',
	},
	{
		price: 4.19,
		name: 'Rodie',
		details: '1 bucată; semințe zemoase',
		imageURL:
			'https://cdn.freshful.ro/media/cache/freshful_large/4a/c0/8e288fa5ba09c0323210e8ed06cb.jpg',
		id: '27',
	},
	{
		price: 12.99,
		name: 'Măsline verzi umplute cu brânză prospătă 200g',
		details:
			'Măslinele verzi cu umplutură delicată de brânză sunt o gustare sofisticată, care va transforma rapid mesele obișnuite într-un festin mediteranean cu gusturi unice. ',
		imageURL:
			'https://cdn.freshful.ro/media/cache/freshful_large/70/52/5523c55a8e33ec80b5cbb964697c.jpg',
		id: '28',
	},
	{
		price: 1.89,
		name: 'Gusto Pufuleți cu sare 85g',
		details:
			'La nivel global, pufuleții sunt cumpărați de milioane de consumatori, mulțumită calității lor foarte înalte precum și rețetei și tehnologiei unice, care le oferă un gust distinctiv și delicios.',
		imageURL:
			'https://cdn.freshful.ro/media/cache/sylius_shop_product_thumbnail/e8/46/f3976271282e5c22d822d634c919.jpg',
		id: '29',
	},
	{
		price: 29,
		name: 'Telemea ',
		details: 'Telemea de vacă 40% grăsime, 400g',
		imageURL:
			'https://cdn.freshful.ro/media/cache/sylius_shop_product_thumbnail/85/bc/2599e3428e996e4ccdeb68a6f169.jpg',
		id: '30',
	},
	{
		price: 15.99,
		name: 'Cârnați de Pleșcoi IGP uscați 150g',
		details:
			'Cârnați de Pleșcoi preparați din carne de vită și oaie, afumați la rece.',
		imageURL:
			'https://cdn.freshful.ro/media/cache/freshful_large/97/0b/98883b0e706832f792a077eedc20.jpg',
		id: '31',
	},
	{
		price: 39,
		name: 'CREMOLA',
		details: 'Înghețată cu aromă de vanilie 1l',
		imageURL:
			'https://cdn.freshful.ro/media/cache/freshful_large/ba/5e/dbb5dc7ddde1b48075c9b8e733d0.jpg',
		id: '33',
	},
	{
		price: 4.49,
		name: 'Vinete eco România, 1 buc',
		details:
			'Gustul înaintea cantității, asta am căutat și am găsit la partenerul nostru. Legumele sunt crescute într-un sol curat, din semințe netratate chimic. Se face o rotație a culturilor, fertilizarea cu compost „home made” din resturile vegetale rezultate din cadrul fermei garantează un gust ca în copilărie.',
		imageURL:
			'https://cdn.freshful.ro/media/cache/sylius_shop_product_original/29/be/09ab9697b78c8870ef7580178e17.jpg',
		id: '34',
	},
	{
		price: 7,
		name: 'Ceai Verde cu Lămâie',
		details:
			'Ceai verde răcoritor cu aromă de lămâie, fără zahăr, perfect pentru hidratare. Sticlă de 0.5L.',
		imageURL:
			'https://cdn.freshful.ro/media/cache/freshful_large/57/bd/f427dce004701d701e80a773de5e.jpg',
		id: '35',
	},
	{
		price: 2.99,
		name: 'Iaurt cu banane Zuzu',
		details:
			'Iaurtul cu banane Zuzu este cel care îți oferă vitamine, proteine și calciu, pentru ca tu să îți poți începe ziua exact așa cum îți dorești',
		imageURL:
			'https://www.freshful.ro/_next/image?url=https%3A%2F%2Fcdn.freshful.ro%2Fmedia%2Fcache%2Ffreshful_large%2F4e%2Fa2%2F6f69a1e3d5a0cbaf09725dc187c4.jpg&w=1200&q=100',
		id: '37',
	},
	{
		price: 6.19,
		name: 'ketchup dulce 342g',
		details: 'Sos de roșii dulce, pasteurizat',
		imageURL:
			'https://cdn.freshful.ro/media/cache/sylius_shop_product_thumbnail/46/c5/f5dfc9d9f243b4da42a4bba82266.jpg',
		id: '40',
	},
	{
		price: '2,69',
		name: 'Pâine albă pe vatră 300g',
		details: 'Pâine albă pe vatră, cu coajă crocantă și miez pufos.',
		imageURL:
			'https://cdn.freshful.ro/media/cache/freshful_large/59/d6/a600d58407ca7d5a33af9ce956af.jpg',
		id: '43',
	},
	{
		price: 6.99,
		name: 'Mere Idared de Voinești 1kg',
		details:
			'Mărul Idared este un soi de măr de toamnă, obținut prin încrucișarea soiurilor Ionahan “Jonathan” și Wagener premiat.',
		imageURL:
			'https://cdn.freshful.ro/media/cache/freshful_large/15/fc/2196158acf09e20f5971e839f9a4.jpg',
		id: '44',
	},
	{
		price: 15.99,
		name: 'Ketchup heinz 570',
		details:
			'Ketchup gros, bogat, care provine din roșii dulci, suculente, roșii coapte la soare.',
		imageURL:
			'https://www.freshful.ro/_next/image?url=https%3A%2F%2Fcdn.freshful.ro%2Fmedia%2Fcache%2Ffreshful_large%2Fb4%2F58%2F84b9eec1f6f2754959ce35a1ee70.jpg&w=640&q=100',
		id: '45',
	},
	{
		price: 19.29,
		name: 'Sos de maioneza light 405ml',
		details:
			'Sosul de maioneză light are o consistenţă cremoasă și un gust deosebit. Au fost folosite ouă de găini crescute în aer liber.',
		imageURL:
			'https://cdn.freshful.ro/media/cache/sylius_shop_product_thumbnail/f7/a6/a882931723ea9cfc1c867685381f.jpg',
		id: '47',
	},
	{
		price: 5.99,
		name: 'Mere Idared de Voinești 1kg',
		details:
			'Mărul Idared este un soi de măr de toamnă, obținut prin încrucișarea soiurilor Ionahan “Jonathan” și Wagener premiat.',
		imageURL:
			'https://cdn.freshful.ro/media/cache/freshful_large/15/fc/2196158acf09e20f5971e839f9a4.jpg',
		id: '48',
	},
	{
		price: 21.49,
		name: 'Pepsi Zero Max 0.33l',
		details:
			'Pepsi Cola Max Taste, gustul maxim, fără zahar, gata să te scoată din cotidian. Pepsi Max este foarte popular în Europa și Asia datorită gustului intens de cola fără zahăr.',
		imageURL:
			'https://cdn.freshful.ro/media/cache/freshful_large/51/04/b574724a3293d8861a9326354d3a.jpg',
		id: '49',
	},
	{
		price: 21.49,
		name: 'Pepsi Zero Max 0.33l',
		details:
			'Pepsi Cola Max Taste, gustul maxim, fără zahar, gata să te scoată din cotidian. Pepsi Max este foarte popular în Europa și Asia datorită gustului intens de cola fără zahăr.',
		imageURL:
			'https://cdn.freshful.ro/media/cache/freshful_large/51/04/b574724a3293d8861a9326354d3a.jpg',
		id: '50',
	},
	{
		price: 19.29,
		name: 'Sos de maioneza light 405ml',
		details:
			'Sosul de maioneză light are o consistenţă cremoasă și un gust deosebit. Au fost folosite ouă de găini crescute în aer liber.',
		imageURL:
			'https://cdn.freshful.ro/media/cache/sylius_shop_product_thumbnail/f7/a6/a882931723ea9cfc1c867685381f.jpg',
		id: '51',
	},
	{
		price: 20.99,
		name: 'Salată de vinete cu maioneză 500g',
		details: 'Salată de vinete coapte, decojite, cu sos de maioneză și ceapă.',
		imageURL:
			'https://cdn.freshful.ro/media/cache/sylius_shop_product_thumbnail/71/3f/0674a6611c5371b87654e37cfe8b.jpg',
		id: '52',
	},
	{
		price: 85,
		name: 'name 53',
		details: 'details 53',
		imageURL: 'imageURL 53',
		id: '53',
	},
	{
		price: '7,55',
		name: 'lamai 1 kg',
		details:
			'Lămâile ajută la întărirea sistemul imunitar și contribuie la detoxifierea organismului. ',
		imageURL:
			'https://www.freshful.ro/_next/image?url=https%3A%2F%2Fcdn.freshful.ro%2Fmedia%2Fcache%2Ffreshful_large%2F8c%2Fb9%2F168b47f62af50e032aea7bc22199.jpg&w=640&q=100',
		id: '55',
	},
	{
		price: 27,
		name: 'name 56',
		details: 'details 56',
		imageURL: 'imageURL 56',
		id: '56',
	},
	{
		price: 61,
		name: 'name 57',
		details: 'details 57',
		imageURL: 'imageURL 57',
		id: '57',
	},
	{
		price: 15.99,
		name: 'ketchup heinz 570',
		details:
			'Ketchup gros, bogat, care provine din roșii dulci, suculente, roșii coapte la soare.',
		imageURL:
			'https://www.freshful.ro/_next/image?url=https%3A%2F%2Fcdn.freshful.ro%2Fmedia%2Fcache%2Ffreshful_large%2Fb4%2F58%2F84b9eec1f6f2754959ce35a1ee70.jpg&w=640&q=100',
		id: '58',
	},
	{
		price: 15.99,
		name: 'ketchup heinz 570',
		details:
			'Ketchup gros, bogat, care provine din roșii dulci, suculente, roșii coapte la soare.',
		imageURL:
			'https://www.freshful.ro/_next/image?url=https%3A%2F%2Fcdn.freshful.ro%2Fmedia%2Fcache%2Ffreshful_large%2Fb4%2F58%2F84b9eec1f6f2754959ce35a1ee70.jpg&w=640&q=100',
		id: '59',
	},
];

function createProductCard(product) {
	return `
      <div class="card">
         <p class="name">${product.name}</p>
         <img
            src=${product.imageURL}
            alt=""
         />
         <p class="price">${product.price} lei</p>
      </div>
   `;
}

for (var i = 0; i <= products.length - 1; i++) {
	var container = document.getElementById('container');
	container.innerHTML += createProductCard(products[i]);
}
