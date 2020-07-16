import { browser, by, element, ExpectedConditions } from 'protractor';

/**
 * App page object.
 */
export class AppPage {
  /**
   * Result box.
   */
  calculatorScreen = element(by.css('.calculator-screen'));

  /**
   * Operators.
   */
  plus = element(by.css('.plus'));
  minus = element(by.css('.minus'));
  multiply = element(by.css('.multiply'));
  divide = element(by.css('.divide'));

  /**
   * Operands.
   */
  zero = element(by.css('.zero'));
  one = element(by.css('.one'));
  two = element(by.css('.two'));
  three = element(by.css('.three'));
  four = element(by.css('.four'));
  five = element(by.css('.five'));
  six = element(by.css('.six'));
  seven = element(by.css('.seven'));
  eight = element(by.css('.eight'));
  nine = element(by.css('.nine'));

  /**
   * Other symbols.
   */
  decimal = element(by.css('.decimal'));
  allClear = element(by.css('.all-clear'));
  equalSign = element(by.css('.equal-sign'));
  plusMinus = element(by.css('.plus-minus'));

  /**
   * Navigate the the app page.
   */
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  /**
   * Wait for the page to finish loading.
   */
  finishLoading(): Promise<unknown> {
    return browser.wait(
      ExpectedConditions.not(ExpectedConditions.presenceOf(this.one))
    ) as Promise<unknown>;
  }
}
