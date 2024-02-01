<template>
  <div style="width: 90%" class="q-pl-xl q-ml-xl q-pa-xl">
    <div>
      <div class="row q-pl-xl q-pa-xl bg-dark">
        <div class="col q-pa-sm" style="width: 100%" no-border>
          <q-card class="my-card bg-dark radius" flat>
            <q-card-section horizontal>
              <div class="text-justify my-fontAcme" style="color: white">
                <h2>
                  Descubre el mundo de la musica con tus canciones favoritas
                </h2>
                <h4>
                  SnowChord esta hecha para que puedas practicar con las
                  canciones que tu quieras, aunque de vez en cuando te ira dando
                  recomendaciones
                </h4>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-4 q-pa-md">
          <div style="width: 100%">
            <q-img src="~assets/Img/Cellphone.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="row bg-secondary">
      <div class="col q-pl-xl q-pl-xl" style="color: rgb(0, 0, 0)">
        <div style="width: auto">
          <div class="col">
            <h3 class="text-center my-fontAcme">¡Conoce a Snowi!</h3>
            <h4 class="text-center my-fontAcme">
              Tu maestro y amigo de aventuras
            </h4>
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
                  background-image: url('https://supercurioso.com/wp-content/uploads/2013/12/Diseno-sin-titulo-2023-12-05T160056.923.jpg');
                "
              >
                <h5 class="text-center">
                  Este encantador muñeco de nieve estará contigo en toda tu
                  travesia seas nuevo o no.
                </h5>
                <h5 class="text-center">
                  <strong style="color: rgb(104, 72, 7)"
                    >¡Incluso podras cambiarle de look!</strong
                  >
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="width: 70%; border: 3px solid white" class="col bg-primary">
        <div class="q-pa-md">
          <h3 class="text-center my-fontAcme" style="color: white">
            Disfruta de video tutoriales en los mini-cursos oficiales que
            ponemos a tu disposicion
          </h3>
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
    <div class="my-fontAcme row q-pa-xl bg-accent" style="color: white">
      <div style="width: 100%" class="bg-dark">
        <h2 class="text-center">Ahora estas listo para empezar?</h2>
        <div class="col flex justify-center centers q-pb-xl">
          <q-btn color="primary" icon="check" label="Ir ahora" to="/register" />
        </div>
      </div>
    </div>
  </div>
</template>
