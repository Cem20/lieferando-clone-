let menus = ['Pizza Tono', 'Pizza Hawai', 'Pizza Magaritha','Spaghetti Bolognese','Spaghetti Napoli','Shrimps', 'Tiramisu'];
let prices = [5.0, 3.0, 2.5, 4.0 , 7.0 ,4.0, 6.0];
let index = [0, 1, 2, 3, 4, 5, 6];
let amounts = [0, 0, 0, 0, 0, 0, 0];
let imgs = ['./htmimg/pizza.jpg', './htmimg/noodle.jpg', './htmimg/tiramisu.jpg'];
let sum = 0;
let newid = ['Pizzen', 'Pasta', 'Vorspeisen'];
let totalvalue = [0,0,0,0,0,0,0];
let desc = ['Mit frischen Tunfisch und saftigen Oliven', 'Mit Meeresfrüchen und Obstücken wie Anananas', 'Pizza ohne Belag außer Käse und Tomatensoße', 'Klassische Spaghetti Bolognese mit herzhaft gewürzter Hackfleischsoße und al dente gekochten Nudeln', 'Leckere Spaghetti Napoli mit einer authentischen Tomatensauce, verfeinert mit Knoblauch, Olivenöl und frischen Kräutern', 'Zarte gegrillte Shrimps mit Knoblauch, Olivenöl und frischen Kräutern','Luftiges Tiramisu mit Mascarpone-Creme, Biskuit, Kaffee und Kakao'];
let descs = ['Extra Käse, Zusätzliche Meeresfrüchte, Extra Oliven'];
let choice = ['Extra Käse, scharfe Peperoni','Extra Ananas, vegetarisch ohne Schinken', 'Extra Olivenöl, Rucola-Topping','Parmesankäse, extra Knoblauch', 'Extra Oliven, scharfe Peperoni', 'Zitronenbutter, scharfe Chilis', 'Schokoladenraspeln, Erdbeeren']
let newsum = 0;
let isLiked = [];
let flikes = ['/htmimg/nosh.svg'];
let DeliveryCosts = 2.0;
let DeliveryCostsReplace = '2 €';
let BasketTemplate;
let order = new Set();