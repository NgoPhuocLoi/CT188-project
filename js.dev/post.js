const postList = document.querySelector(".post-list");

const submitBtn = document.querySelector(".js-submit-btn");
const postForm = document.querySelector(".js-post-form");
const tinhInput = document.querySelector("select#tinh");
const quanInput = document.querySelector("select#quan");
const phuongInput = document.querySelector("select#phuong");
const diachiInput = document.querySelector("input[name=diachi]");
const myModal = new bootstrap.Modal(document.getElementById("formModal"), {
  keyboard: false,
});

const handleAddressChange = () => {
  diachiInput.value = `${phuongInput.value}${phuongInput.value && ","} ${
    quanInput.value
  }${quanInput.value && ", "}${tinhInput.value}`;
};

tinhInput.addEventListener("change", handleAddressChange);
quanInput.addEventListener("change", handleAddressChange);
phuongInput.addEventListener("change", handleAddressChange);

postForm.onsubmit = (e) => {
  const loaiGD = document.querySelector(
    "input[name=loaigiaodich]:checked"
  ).value;
  const loaiBDS = document.querySelector("input[name=loaiBDS]").value;
  const tinh = tinhInput.value;
  const quan = quanInput.value;
  const phuong = phuongInput.value;

  const dientich = document.querySelector("input[name=dientich]").value;
  const giaban = document.querySelector("input[name=giaban]").value;
  const phongngu = document.querySelector("input[name=phong-ngu]").value;
  const phongtam = document.querySelector("input[name=phong-tam]").value;
  const huong = document.querySelector("select#huong").value;
  const anh = document.querySelector("input[type=file]").files[0];

  const tieude = document.querySelector("input[name=tieude]").value;
  const gioithieu = document.querySelector("textarea[name=gioithieu]").value;

  e.preventDefault();
  if (postForm.checkValidity()) {
    const newPostContainer = document.createElement("div");
    newPostContainer.classList.add("col-lg-12", "col-md-6");
    newPostContainer.innerHTML = `
    <div class="p-3 border rounded mb-4 shadow">
      <div class="row">
        <div class="col-md-12 col-lg-4">
          <img
            src="${URL.createObjectURL(anh)}"
            class="rounded w-100"
            alt=""
          />
        </div>

        <div class="col-lg-8">
          <a
            class="link-secondary fw-bold fs-4 text-limit-2 my-2"
            href="#"
            >${tieude}</a
          >

          <div class="text-secondary my-1">
            <i class="fa-solid fa-location-dot me-2"></i>${diachiInput.value}
          </div>

          <div class="d-flex gap-5 my-2">
            <div class="fw-semibold">${loaiGD} ${loaiBDS}</div>
            <div class="fw-semibold">
              <span class="text-secondary fs-6 fw-normal">Giá: </span>${giaban}
            </div>
            <div class="fw-semibold">
              <span class="text-secondary fs-6 fw-normal"
                >Diện tích: </span
              >${dientich}
            </div>
          </div>

          <div class="fw-semibold my-2">
            <span class="text-secondary fs-6 fw-normal">Ngày đăng: </span
            >${new Date().toLocaleDateString("vn")}
          </div>
          <div class="fw-semibold my-2">
            <span class="text-secondary fs-6 fw-normal"
              >Vị trí tin đăng: </span
            >${loaiGD} ${loaiBDS} ${tinh}
          </div>
        </div>
      </div>
    </div>`;
    postList.appendChild(newPostContainer);
    myModal.hide();
    postForm.reset();
  }
};
