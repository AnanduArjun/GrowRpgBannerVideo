import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import styles from './GrowRpgBannerVideoWebPart.module.scss';
import * as strings from 'GrowRpgBannerVideoWebPartStrings';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './assets/style.css';

export interface IGrowRpgBannerVideoWebPartProps {
  description: string;
}

export default class GrowRpgBannerVideoWebPart extends BaseClientSideWebPart<IGrowRpgBannerVideoWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
    <section class="${styles.growRpgBannerVideo} growRpgBannerVideo">
      <div class="${styles.VideoContainer}">
        <video id="myVideo" autoplay loop muted src="https://rpgnet.sharepoint.com/sites/OneRPG/Dummy%20Images/dummy-video.mp4"></video>
        <div class="${styles.VideoOverlay}">
            <h1 class="text-white">Freedom To Go Beyond</h1>
            <p class="text-white">That's the beauty of L'Oreal</p>
        </div>
      </div>

      <div class="${styles.paddingParent}">
        <div class="${styles.BannerBottomContent}">
          <h3 class="text-center">What are you looking for?</h3>
          <div class="${styles.buttonContainer}">
              <div class="${styles.item}">
                <button>Short Term Assignments <img src="https://rpgnet.sharepoint.com/sites/OneRPG/SiteAssets/images/dropdownIcon.png"></button>
                <div class="${styles.itemContent}">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.</p>
                </div>
              </div>
              <div class="${styles.item}">
                <button>Full Time Roles <img src="https://rpgnet.sharepoint.com/sites/OneRPG/SiteAssets/images/dropdownIcon.png"></button>
                <div class="${styles.itemContent}">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.</p>
                </div>
              </div>
              <div class="${styles.item}">
                <button>Learning <img src="https://rpgnet.sharepoint.com/sites/OneRPG/SiteAssets/images/dropdownIcon.png"></button>
                <div class="${styles.itemContent}">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.</p>
                </div>
              </div>
              <div class="${styles.item}">
                <button>Full Time Roles <img src="https://rpgnet.sharepoint.com/sites/OneRPG/SiteAssets/images/dropdownIcon.png"></button>
                <div class="${styles.itemContent}">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.</p>
                </div>
              </div>
          </div>

          <button class="${styles.BottomContentButton}" onclick="location.href='#'">Explore More</button>
        </div>
      </div>
    </section>`;

    const items = this.domElement.querySelectorAll(`.${styles.item}`);
    items.forEach(item => {
      item.addEventListener('mouseenter', () => {
        items.forEach(i => {
          i.classList.remove(styles.active);
        });
        item.classList.add(styles.active);
      });
    
      item.addEventListener('mouseleave', () => {
        item.classList.remove(styles.active);
      });
    });
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}