const categoryList = document.querySelector("#categories");
// console.log(categoryList);

const itemsList = categoryList.querySelectorAll(".item");
const quantatiItems = itemsList.length;
console.log(`Number of categories: ${quantatiItems}`);

itemsList.forEach((item) => {
  const categotyTitle = item.querySelector("h2").textContent;
  // console.log(categotyTitle);

  const subItemsList = item.querySelectorAll("li");
  const itemQuantity = subItemsList.length;

  console.log(`Category: ${categotyTitle}`);
  console.log(`Elements: ${itemQuantity}`);
});
