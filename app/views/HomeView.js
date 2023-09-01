export const HomeView = `    <section class="row p-0 m-0">
      <div class="offset-2 col-12 col-md-6 m-0 p-0 mt-5 ">
        <h2 class="text-center">POKEMON</h2>
        <div class="p-0 m-0 d-flex justify-content-center" id="pokemon-container">
          <h3>YOU MUST SELECT A WILD POKEMON.</h3>
        </div>
        <div class="p-0 m-0 d-flex justify-content-center">
        <button class="btn grad-2 fs-4 text-white mt-5 border border-3 border-dark" onclick="app.CardsController.getCards()">GET POKEMON CARDS</button>
        </div>
        <div class="p-0 m-0 d-flex flex-column align-items-center text-center" id="cards-container"></div>
      </div>
      <div class="col-12 col-md-4 m-0 p-0 mt-5 list-cont">
      <div class="text-flex d-flex justify-content-center">
        <h2 class="text-center">POKEMON LIST</h2>
        </div>
        <div class="p-0 m-0 d-flex justify-content-center d-flex flex-column" id="pokemon-list-container">
          container
        </div>
      </div>
    </section>`