// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


class MutableNumberModel {
  constructor(value) {
    this.value = value;
  }

  increment() {
    this.value++;
    this.onChangeCallback();
  }


  decrement() {
    this.value--;
    this.onChangeCallback();
  }

  registerChangeCallback(onChangeCallback) {
    this.onChangeCallback = onChangeCallback;
  }
}

class MutableNumberController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.registerChangeCallback(
      () => this.view.renderUpdate()
    );

    this.view.registerIncrementCallback(
      () => this.model.increment()
    );

    this.view.registerDecerementCallback(
      () => this.model.decrement()
    );
  }
}

class MutableNumberView {
  constructor(model, controller) {
    this.model = model;
    this.controller = controller;
  }

  registerIncrementCallback(onIncremenetCallback) {
    this.onIncremenetCallback = onIncremenetCallback;
  }

  registerDecrementCallback(onDecrementCallback) {
    this.onDecrementCallback = onDecrementCallback;
  }

  renderUpdate() {
    this.numberSpan.textContent = this.model.value;
  }

  renderInitial() {
    this.container = document.createElement('div');
    this.numberSpan = document.createElement('span');
    this.incrementButton = document.createElement('button');
    this.decrementButton = document.createElement('button');

    this.incrementButton.textContent = '+';
    this.decrementButton.textContent = '-';

    this.incrementButton.onclick(
      () => this.onIncremenetCallback()
    );

    this.decrementButton.onclick(
      () => this.onDecrementCallback()
    );

    this.container.appendChild(this.numberSpan);
    this.container.appendChild(this.incrementButton);
    this.container.appendChild(this.decrementButton);

    this.renderUpdate();

    return this.container
  }
}