const products = [
  { id: "medicamento", price: 50, name: "Diclofenac" },
  { id: "medicamento", price: 50, name: "Diclofenac" },
];

const task = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(products);
  }, 1000);
});

task
  .then(
    (result) => {
      console.log(result);
      return "Yachelini";
    },
    (err) => {
      console.log("Error: " + err);
    }
  )
  .then((result) => {
    console.log("Soy el segundo then: " + result);
  })
  .catch((err) => {
    console.log("Soy el catch: ", err);
  })
  .finally(() => {
    console.log("Me ejecuto siempre");
  });

export default function Clase6() {
  return <></>;
}
