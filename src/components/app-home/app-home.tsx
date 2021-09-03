import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {
  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Weather</ion-title>
          <ion-buttons slot="end">
            <ion-button href="/settings/ionic" routerDirection="forward">
              <ion-icon slot="icon-only" name="settings" />
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <div class="weather-display">
          <h1>76.5</h1>
          <p>Sunny</p>
          <ion-card>
            <ion-card-header>
              <ion-card-subtitle>North Palm Beach</ion-card-subtitle>
              <ion-card-title>Overview</ion-card-title>
            </ion-card-header>

            <ion-card-content>
              <ion-grid>
                <ion-row>
                  <ion-col size="6">Min</ion-col>
                  <ion-col size="6">64</ion-col>
                </ion-row>
                <ion-row>
                  <ion-col size="6">Max</ion-col>
                  <ion-col size="6">78</ion-col>
                </ion-row>
              </ion-grid>
            </ion-card-content>
          </ion-card>
        </div>
      </ion-content>,
    ];
  }
}
