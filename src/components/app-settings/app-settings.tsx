import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'app-settings',
  styleUrl: 'app-settings.css'
})
export class AppSettings {
  @State() useCurrentLocation: boolean = true;
  @State() presetLocation: string = "North Palm Beach";
  @State() unit: string = "fahrenheit";
  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/" />
        </ion-buttons>
        <ion-title>Settings</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <small>
          You may choose to display weather either from your
          current location, or a preset location of your choosing.
        </small>
        <ion-radio-group value={this.useCurrentLocation ? "current" : "preset"}>
          <ion-item>
            <ion-label>Use current location</ion-label>
            <ion-radio slot="start" value="current" />
          </ion-item>
          <ion-item>
            <ion-label>Use preset location</ion-label>
            <ion-radio slot="start" value="preset" />
          </ion-item>
        </ion-radio-group>
        <small>When using a preset location, the location listed below will be used.</small>
        <ion-item>
          <ion-input 
            type="text" 
            value={this.presetLocation}
          />
        </ion-item>
        
        <small>
        Select the unit of measurement that you would like to use to display the                         weather:
        </small>
        <ion-radio-group value={this.unit}>
          <ion-item>
            <ion-label>Fahrenheit</ion-label>
            <ion-radio slot="start" value="fahrenheit" />
          </ion-item>
          <ion-item>
            <ion-label>Celsius</ion-label>
            <ion-radio slot="start" value="celsius" />
          </ion-item>
          <ion-item>
            <ion-label>Kelvin</ion-label>
            <ion-radio slot="start" value="kelvin" />
          </ion-item>
        </ion-radio-group>
        <small hidden={this.unit != "kelvin"}>Kelvin? Seriously? </small>
      </ion-content>
    ];
  }
}
