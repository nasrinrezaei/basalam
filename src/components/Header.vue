<template>
  <div class="head">
    <div class="headtop">
      <div class="logo">
        <img src="@/assets/pic/Logo.png" />
        <img class="Type" src="@/assets/pic/Type.png" />
        <img src="@/assets/pic/Vector.png" />
      </div>

      <div class="buttonsell">
        <h5>فروش در باسلام</h5>
      </div>
      <div class="pocket">
        <img src="@/assets/pic/pocket.png" />
        <div class="circule">
          <div><h5>۳</h5></div>
        </div>
      </div>
    </div>
    <form class="search">
      <input
        type="text"
        placeholder=" جست و جو در صدها هزار محصولات خانگی و محلی ... "
      />
      <img src="@/assets/pic/search.png" />
    </form>
  </div>
</template>
<style scoped>
.Type {
  margin-right: 0.2rem;
  margin-left: 0.6rem;
}
.head {
  padding: 0.4rem 0.6rem;
  background: white;
}
.headtop {
  display: flex;
  align-items: center;
}
.logo {
  display: flex;
  align-items: center;
}
.buttonsell {
  margin-right: auto;
  padding: 0.5rem 0.6rem;
  background-color: #3e3e3e;
  border-radius: 6.25rem;
}
.buttonsell h5 {
  font-size: 0.75rem;
  color: white;
  font-weight:400;
}
.pocket {
  margin-left: 0.5rem;
  margin-right: 0.6rem;
  position: relative;
}
.circule {
  width: 1.1rem;
  position: absolute;
  left: -0.8rem;
  top: -0.62rem;
  color: white;
}
.circule div {
  height: 1.1rem;
  border-radius: 50%;
  background-color: #df3856;
  text-align: center;
}
.search {
  height: 2.5rem;
  position: relative;
  padding: 0rem 0.6rem;
  margin-top: 0.8rem;
}
.search input {
  border-radius: 6rem;
  border: 1px solid #9d9d9d;
  width: 100%;
  font-family: IRANSans;
  font-size: 0.7rem;
  padding: 0.6rem 0.6rem;
}
.search input:focus {
  outline: none;
}
.search img {
  position: absolute;
  top: 8px;
  left: 24px;
}
</style>