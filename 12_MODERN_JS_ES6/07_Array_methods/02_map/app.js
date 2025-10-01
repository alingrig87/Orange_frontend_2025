const names = ['Ion', 'Mihai', 'Daniela'];

const nameLengths = names.map((name) => name.length);
console.log(nameLengths);

const produse = [
	{
		nume: 'Lapte',
		pret: 10,
		image:
			'https://static.mega-image.ro/medias/sys_master/products/hb6/h0a/9347865870366.jpg?buildNumber=6dc69d0fed67aa9a7d6f111e307c00b9b609eb3ad031e1a94efe36fe9d9fffc1&imwidth=300',
	},
	{
		nume: 'Unt',
		pret: 12,
		image: 'https://www.monor.ro/images/Unt-de-Masa-b-85.png',
	},
	{
		nume: 'Mere',
		pret: 7,
		image:
			'https://auchan.vtexassets.com/arquivos/ids/166113/mere-rosii-2-kg-8904758329374.jpg?v=637985908231930000',
	},
	{
		nume: 'Detergent',
		pret: 55,
		image:
			'https://i5.walmartimages.com/seo/Tide-Liquid-Laundry-Detergent-Original-64-Loads-92-fl-oz-HE-Compatible_f946cf37-7bb9-4b11-af74-355ead2084c0.edbd9b8b8ef5bb0940bf43e269d5c759.jpeg',
	},
	{
		nume: 'Cola',
		pret: 12,
		image:
			'https://www.lansgrupo.com/wp-content/uploads/2022/06/Coca-Cola-2.25-L-Bottle-1.jpg',
	},
	{
		nume: 'Apa',
		pret: 4,
		image:
			'https://auchan.vtexassets.com/arquivos/ids/296315-800-800?v=638857620093170000&width=800&height=800&aspect=true',
	},
	{
		nume: 'Bere',
		pret: 5,
		image:
			'https://auchan.vtexassets.com/arquivos/ids/251388/bere-blonda-ursus-0-33l-sgr.jpg?v=638404768225100000',
	},
	{
		nume: 'Oua',
		pret: 20,
		image:
			'https://auchan.vtexassets.com/arquivos/ids/266758-800-800?v=638494747129070000&width=800&height=800&aspect=true',
	},
	{
		nume: 'Ciocolata',
		pret: 17,
		image:
			'https://www.ferrerorocher.com/ro/sites/ferrerorocher20_ro/files/2025-09/f-rocher-milk-g90_front.png?t=1757426217',
	},
];

const productsContainer = document.getElementById('container');
productsContainer.innerHTML = produse
	.map(
		(produs) =>
			`
   <div class="card">
      <h1>${produs.nume}</h1>
      <img src=${produs.image} />
      <p>${produs.pret} LEI</p>
   </div>
   `
	)
	.join('');
