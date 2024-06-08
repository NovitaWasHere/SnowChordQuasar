<template>
  <div
    style="width: 90%"
    class="q-pl-xl q-ml-xl q-pa-xl my-fontAcme"
  >
    <div>
      <div class="row q-pl-xl q-pa-xl bg-dark">
        <div class="col q-pa-sm" style="width: 100%" no-border>
          <q-card class="my-card bg-dark radius" flat>
            <q-card-section horizontal>
              <div class="text-center my-fontAcme" style="color: white">
                <p class="text-h3">
                  Descubre el mundo de la musica con tus canciones favoritas
                </p>
                <p class="text-h5">
                  SnowChord está hecha para que puedas practicar con las
                  canciones que tú quieras, aunque de vez en cuando te ira dando
                  recomendaciones
                </p>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col q-pl-xl q-pl-xl" style="color: rgb(0, 0, 0)">
        <div >
          <div class="col">
            <p class="text-center my-fontAcme text-h3 text-white">¡Conoce a Snowi!</p>
            <p class="text-center my-fontAcme text-h5 text-white">
              Tu maestro y amigo de aventuras
            </p>
            <div class="row" style="width: 90%">
              <q-img
                src="~assets/Img/SnowiFeliz.png"
                style="width: 280px"
                class="col"
              />
              <div
                class="col radius q-pa-md"
                style="
                  border: 5px solid white;
                "
              >
                <h5 class="text-center text-white">
                  Este encantador muñeco de nieve estará contigo en toda tu
                  travesia.
                </h5>
                <h5 class="text-center">
                  <strong class="text-primary"
                    >¡Incluso podras cambiar su estilo!</strong
                  >
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="width: 70%; border: 3px solid white" class="col bg-primary">
        <div class="q-pa-md">
          <p class="text-center my-fontAcme text-h3 " style="color: white">
            Disfruta de videotutoriales en los mini-cursos oficiales que
            ponemos a tu disposición
          </p>
        </div>
        <div class="q-pa-md q-ma-sm">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/Yatq9rEv934?si=d6Nwnijs4HklxIfb"
          />
        </div>
      </div>
    </div>
    <br /><br />
    <div class="my-fontAcme row q-pa-md" style="color: white">
      <div style="width: 100%">
        <h2 class="text-center text-white">¿Ahora estás listo para empezar?</h2>
        <div class="col flex justify-center centers q-pb-xl">
          <q-btn-group
            push
            spread
            class="bg-secondary"
            style="border: 1px solid rgb(211, 148, 39); width: 20%"
          >
            <q-btn
              push
              to="/register"
              class="radius"
              color="secondary"
              text-color="black"
            ><q-icon class="q-pl-sm" name="arrow_forward"
            /></q-btn>
          </q-btn-group>
        </div>
      </div>
    </div>
  </div>
</template>
