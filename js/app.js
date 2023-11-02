let medicines_container = document.querySelector(".medicines-container");
async function medicines(){
    let ajax = await fetch("js/api.json");
    let respone = await ajax.json();
    respone.forEach(medicine =>{
        medicines_container.innerHTML += `
            <div class="col-lg-6 mb-4">
                <div class="medicine p-3 my-5 border h-100">
                    <img src="${medicine.img}" alt="" class="rounded border border-5">
                    <h1 class="my-3">${medicine.name}</h1>
                    <p class="fs-3 my-4">${medicine.description}</p>
                    <h1>السعر: <span class="text-success px-2 rounded fs-3">${medicine.price}ج</span></h1>
                </div>
            </div>
        `
    })
}
medicines()