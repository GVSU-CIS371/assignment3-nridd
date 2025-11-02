<template>
  <div>
    <!-- Mug display -->
    <Beverage
      :isIced="beverageStore.currentTemp === 'cold'"
      :base="beverageStore.currentBase"
      :creamer="beverageStore.currentCreamer"
      :syrup="beverageStore.currentSyrup"
    />

    <!-- Temperature -->
    <ul>
      <li>
        <label>
          <input type="radio" value="hot" v-model="beverageStore.currentTemp" />
          Hot
        </label>
        <label>
          <input type="radio" value="cold" v-model="beverageStore.currentTemp" />
          Cold
        </label>
      </li>

      <!-- Base -->
      <li>
        <label>
          <input
            type="radio"
            value="coffee"
            v-model="beverageStore.currentBase"
          />
          Coffee
        </label>
        <label>
          <input
            type="radio"
            value="green-tea"
            v-model="beverageStore.currentBase"
          />
          Green Tea
        </label>
        <label>
          <input
            type="radio"
            value="black-tea"
            v-model="beverageStore.currentBase"
          />
          Black Tea
        </label>
      </li>

      <!-- Creamer -->
      <li>
        <label>
          <input
            type="radio"
            value="none"
            v-model="beverageStore.currentCreamer"
          />
          No Cream
        </label>
        <label>
          <input
            type="radio"
            value="milk"
            v-model="beverageStore.currentCreamer"
          />
          Milk
        </label>
        <label>
          <input
            type="radio"
            value="cream"
            v-model="beverageStore.currentCreamer"
          />
          Cream
        </label>
        <label>
          <input
            type="radio"
            value="half-half"
            v-model="beverageStore.currentCreamer"
          />
          Half & Half
        </label>
      </li>

      <!-- Syrup -->
      <li>
        <label>
          <input
            type="radio"
            value="none"
            v-model="beverageStore.currentSyrup"
          />
          No Syrup
        </label>
        <label>
          <input
            type="radio"
            value="vanilla"
            v-model="beverageStore.currentSyrup"
          />
          Vanilla
        </label>
        <label>
          <input
            type="radio"
            value="caramel"
            v-model="beverageStore.currentSyrup"
          />
          Caramel
        </label>
        <label>
          <input
            type="radio"
            value="hazelnut"
            v-model="beverageStore.currentSyrup"
          />
          Hazelnut
        </label>
      </li>
    </ul>

    <!-- Name input + button -->
    <div>
      <input
        type="text"
        v-model="beverageStore.nameInput"
        placeholder="Beverage Name"
      />
      <button @click="beverageStore.makeBeverage">🍺 Make Beverage</button>
    </div>

    <!-- Saved Beverages -->
    <div id="beverage-container" style="margin-top: 20px">
      <h2>Saved Beverages</h2>
      <div
        v-for="bev in beverageStore.savedBeverages"
        :key="bev.name"
        style="margin-bottom: 5px"
      >
        <button @click="beverageStore.showBeverage(bev.name)">
          {{ bev.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";

const beverageStore = useBeverageStore();
</script>

<style>
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}

ul {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}
li {
  margin-bottom: 0.5rem;
}
input {
  margin: 0 0.25rem;
}
</style>
