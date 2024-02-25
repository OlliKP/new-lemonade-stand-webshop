import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Citron",
      description:
        "Citroner er saftige og syrlige citrusfrugter, kendt for deres lyse gule farve og forfriskende smag. De dyrkes primært i lande med varme klimaer som Spanien, Italien, USA og Indien. Deres friske og syrlige smag tilføjer en skarp og forfriskende kvalitet til lemonade, der er perfekt til at slukke tørsten på varme sommerdage.",
      price: "8",
      image:
        "https://images.pexels.com/photos/266346/pexels-photo-266346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Lime",
      description:
        " Lime er en citrusfrugt med en mere intens syrlig smag end citroner, og den tilføjer en distinkt og livlig smag til lemonade. Limes dyrkes typisk i tropiske og subtropiske områder som Mexico, Indien, Brasilien og Egypten. Deres saftige og aromatiske egenskaber giver lemonaden et pikant twist, der er ideelt til at balancere sødmen.",
      price: "8",
      image:
        "https://images.pexels.com/photos/2363347/pexels-photo-2363347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Appelsin",
      description:
        "Appelsiner er saftige citrusfrugter, der er kendt for deres søde og syrlige smag samt deres lyse orange farve. De dyrkes primært i lande som Spanien, Brasilien, USA og Kina. Når appelsinsaft tilføjes til lemonade, tilføjer det en sød og forfriskende smag med en subtil syrlighed, der komplimenterer andre frugter godt.",
      price: "7",
      image:
        "https://images.pexels.com/photos/2771926/pexels-photo-2771926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title: "Ananas",
      description:
        "Ananas er tropiske frugter med en sød og saftig smag samt en karakteristisk gul farve. De dyrkes hovedsageligt i lande som Costa Rica, Filippinerne, Thailand og Indonesien. Når ananassaft blandes i lemonade, tilføjer det en eksotisk og frugtagtig smag med en forfriskende sødme, der giver en følelse af øjeblikkelig sommerglæde.",
      price: "12",
      image:
        "https://images.pexels.com/photos/4110334/pexels-photo-4110334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      title: "Jordbær",
      description:
        "Jordbær er søde, saftige bær med en lyserød til rød farve og en karakteristisk sødlig smag. De dyrkes i en række klimaer over hele verden, herunder USA, Spanien, Kina og Tyrkiet. Når de tilføjes til lemonade, tilføjer jordbær en forfriskende og naturlig sødme samt en lys og frugtagtig aroma, der gør lemonaden endnu mere indbydende.",
      price: "10",
      image:
        "https://images.pexels.com/photos/70746/strawberries-red-fruit-royalty-free-70746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      title: "Fersken",
      description:
        "Ferskner er saftige frugter med en sød og delikat smag samt en blød og saftig tekstur. De dyrkes i lande som Kina, Italien, Spanien og USA. Når ferskensaft blandes i lemonade, tilføjer det en forfriskende og naturlig sødme med en subtil syrlighed, der giver en behagelig balance og en vidunderlig sommerlig smagsoplevelse.",
      price: "10",
      image:
        "https://images.pexels.com/photos/209416/pexels-photo-209416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 7,
      title: "Mint",
      description:
        "Mynteblade er aromatiske urter, der tilføjer en frisk og kølig smag samt en behagelig duft. De dyrkes i mange lande, herunder USA, Marokko, Indien og Egypten. Når friske mynteblade muddles eller infunderes i lemonade, tilføjer det en forfriskende og krydret smag med en behagelig undertone af sødme, der skaber en forfriskende drik, perfekt til at køle af på varme dage.",
      price: "5",
      image:
        "https://images.pexels.com/photos/7584210/pexels-photo-7584210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 8,
      title: "Hyldeblomst",
      description:
        "Hyldeblomst har en delikat og blomsteragtig smag, der tilføjer en unik og forfriskende dimension til lemonade. Blomsterne høstes primært i Europa, især i lande som England, Frankrig og Tyskland. Når de kombineres med citronsaft og sukker, tilføjer hyldeblomst en subtil og parfumeret smag til lemonaden, der er perfekt til at nyde på en varm sommerdag.",
      price: "5",
      image:
        "https://images.pexels.com/photos/12511250/pexels-photo-12511250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ],
  cart: [], // {id, title, descr, price, img, qty}
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Get the items data from products array
      const item = state.products.find((prod) => prod.id === action.payload.id);
      // Check if item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
