// let imgw = document.querySelector('img');
let bible_div = document.querySelector("#lang");
// let bible_div = document.getElementById("lang")




let bank_list = () => {
        const init = {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        };
        const result = fetch("https://nigerianbanks.xyz/", init)
          .then((res) => res.json())
          .then(resp =>
            resp.forEach((res,index,resp) => {
              let banks = res.name + " " + res.ussd;
              bible_div.innerHTML += banks + "<br/>";
              console.log(index,res.name,res.ussd);
            })
          )
          .catch((err) => {
           bible_div.innerHTML = "404";
          });
        }












// .then(result => bible_div.innerHTML = result)

// `<div>${data.url}</div>`
// .forEach((respi) => {
//   bible_div.innerHTML = respi.name;
//   console.log(respi.name);
// }))
