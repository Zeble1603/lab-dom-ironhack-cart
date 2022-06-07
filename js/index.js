// ITERATION 1
function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerHTML
  let quantity = product.querySelector('.quantity input').value
  let subtotal = product.querySelector('.subtotal span')
  let total = price * quantity
  subtotal.innerHTML = total
  return total
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProductElem = document.querySelector('.product');
  updateSubtotal(singleProductElem);
  
  
  // end of test

  // ITERATION 2
  const productsElem = document.getElementsByClassName('product');
  let total = 0
  for (product of productsElem){
    updateSubtotal(product);
    total += updateSubtotal(product)
  }

  // ITERATION 3
  let totalValueElem = document.querySelector("#total-value span")
  totalValueElem.innerText = total
}

// ITERATION 4

function removeProduct(event) {
  debugger
  const target = event.currentTarget.parentNode.parentNode;
  //... your code goes here
  target.parentNode.removeChild(target)
  // remove the subtotal of the removed product from the total 
  let totalValueElem = document.querySelector("#total-value span")
  let removedSubtotalElem = target.querySelector('.subtotal span')
  totalValueElem.innerHTML = totalValueElem.innerHTML - removedSubtotalElem.innerHTML
}

// ITERATION 5

function createProduct(event) {
  const targetToadd = event.currentTarget;
  debugger
  const createProductElem = targetToadd.parentNode.parentNode
  const NameInputElem = createProductElem.querySelectorAll('input')[0]
  const PriceInputElem = createProductElem.querySelectorAll('input')[1]
  let nameInputValue = NameInputElem.value
  let priceInputVale = PriceInputElem.value
  const target = document.querySelector('tbody')
  target.innerHTML +=  `<tr class="product">
                        <td class="name">
                          <span>${nameInputValue}</span>
                        </td>
                        <td class="price">$<span>${priceInputVale}</span></td>
                        <td class="quantity">
                          <input type="number" value="0" min="0" placeholder="Quantity" />
                        </td>
                        <td class="subtotal">$<span>0</span></td>
                        <td class="action">
                          <button class="btn btn-remove">Remove</button>
                        </td>
                      </tr>`;
  
  let removeProductBtnElem = document.getElementsByClassName('btn-remove')
  removeProductBtnElem.addEventListener('click',removeProduct)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let removeProductBtnElem = document.getElementsByClassName('btn-remove')
  for (let removeBtn of removeProductBtnElem){
    removeBtn.addEventListener('click', removeProduct);
  }

  const createProductBtnElem = document.getElementById('create')
  createProductBtnElem.addEventListener('click', createProduct);
});

