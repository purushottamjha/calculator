import { browser, by, element } from 'protractor';

/**
 * App page object.
 */
export class AppPage {
  /**
   * Navigate the the app page.
   */
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }
}
