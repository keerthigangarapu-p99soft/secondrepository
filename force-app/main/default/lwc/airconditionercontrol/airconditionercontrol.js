import { LightningElement, track } from 'lwc';

export default class Airconditionercontrol extends LightningElement {
  @track targetTemperature = 24; // Initial tempera
  @track selectedMode = 'cooling'; // Initial mode
  @track selectedFanSpeed = 'low'; // Initial fan speed

  handleTemperatureChange(event) {
    this.targetTemperature = event.target.value;
    // You can implement logic to send the temperature change to the air conditioner.
  }

  handleModeChange(event) {
    this.selectedMode = event.target.value;
    // You can implement logic to send the mode change to the air conditioner.
  }

  handleFanSpeedChange(event) {
    this.selectedFanSpeed = event.target.value;
    // You can implement logic to send the fan speed change to the air conditioner.
  }
}
