let city = document.querySelector('#citys');
let district = document.querySelector('#district');
async function API() {
  let response = await fetch('/trcityData.json');
  const data = await response.json();

  cityNameData(data.cities);
}
API();
function cityNameData(data) {
  data.forEach(element => {

    city.innerHTML += ` <option value="${element.cityName}">${element.cityName}</option>`;

  });
  city.addEventListener('change', function (event) {
    Filter(data,event.target.value);
  })
}
function Filter(data,value) {
  let filterElement = data.filter(data => data.cityName == value);
  filterElement.forEach(element => {
    district.innerHTML='';
    district.disabled = false;
    for (let i = 0; i < element.districts.length; i++) {
      district.innerHTML += ` <option value="${element.districts[i].districtName}">${element.districts[i].districtName}</option>`;
    }
  });
}
