<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="bg-dark z-max" style="width: 100%; height: 800px" id="logo">
    <div
      class="absolute-center bg-dark z-max"
      style="width: 100%; height: max-content"
    >
      <div class="col q-pa-md">
        <div class="column items-center">
          <div class="col">
            <img src="~assets/Img/SnowiFeliz.png" alt="" />
          </div>
          <div class="col">
            <h3 class="basicText">SnowChords</h3>
          </div>
          <div class="col">
            <q-circular-progress
              indeterminate
              rounded
              size="50px"
              color="primary"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";

let show = true;

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    document.body.style.overflow = "auto";
    document.getElementById("logo").style.display = "block";
    timer = setTimeout(() => {
      unShowLoading();
      show = false;
    }, 1000);
  }
};
function unShowLoading() {
  document.body.style.overflow = "hidden";
  document.getElementById("logo").style.display = "none";
  show = true;
}
</script>
