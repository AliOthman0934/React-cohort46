const allCategories =  [
  "FAKE: electronics",
  "FAKE: jewelery",
  "FAKE: men's clothing",
  "FAKE: women's clothing",
];

const categories = allCategories.map(category => category.replace("FAKE: ", ""));

export default categories;
