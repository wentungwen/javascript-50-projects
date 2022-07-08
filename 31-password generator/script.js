const result_el = document.getElementById("result");
const length_el = document.getElementById("length");
const upper_el = document.getElementById("uppercase");
const lower_el = document.getElementById("lowercase");
const number_el = document.getElementById("number");
const symbol_el = document.getElementById("symbol");
const generate_el = document.getElementById("generate");
const clipboard_el = document.getElementById("clipboard");

const random_func = {
  lower: get_random_lower,
  number: get_random_number,
  symbol: get_random_symbol,
  upper: get_random_upper,
};

clipboard_el.addEventListener('click', ()=>{
  const textarea=document.createElement('textarea')
  const password=result_el.innerText
  

  textarea.value=password
  console.log(textarea.value)
  document.body.appendChild(textarea)
  textarea.select()

  if(!password){
    return 
  }
  navigator.clipboard.writeText(textarea.value).then(
    ()=>{
      console.log(textarea.value)
    }
  ).catch(err=>{
    console.log('err')
  })
  textarea.remove()
  alert('have copied')
  

})

generate_el.addEventListener("click", () => {
  const length = +length_el.value;
  const has_lower = lower_el.checked;
  const has_upper = upper_el.checked;
  const has_symbol = symbol_el.checked;
  const has_number = number_el.checked;

  result_el.innerText = generate_password(
    length,
    has_lower,
    has_number,
    has_symbol,
    has_upper
  );
});

function generate_password(length, lower, number, symbol, upper) {
  let generated_password = "";
  const type_count = lower + upper + number + symbol;
  // type_arr = 刪掉false，僅剩下類別為 true 的陣列
  const type_arr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  if (type_count == 0) {
    return "";
  }

  // 假設只選[upper, lower]，就重複產生2+2+2直到數量比length還多，再砍掉多餘的數量（這樣保證都有符合條件）

  for (let i = 0; i < length; i += type_count) {
    type_arr.forEach(type => {
      const func_name = Object.keys(type)[0];
      generated_password += random_func[func_name]();
    });
  }

  const final = generated_password.slice(0, length);
  return final
  
}

function get_random_lower() {
  return String.fromCharCode(Math.floor(Math.random()*26) + 97);
  
}
function get_random_upper() {
  return String.fromCharCode(Math.floor(Math.random()*26) + 65);
}
function get_random_number() {
  return String.fromCharCode(Math.floor(Math.random()*10) + 48);
}
function get_random_symbol() {
  const random_list = "#$%^^&*)(*(_";
  return random_list[Math.floor(Math.random() * random_list.length)];
}
