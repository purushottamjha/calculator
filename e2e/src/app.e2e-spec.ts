import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App.', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    page.finishLoading();
  });

  it('should add two numbers.', () => {
    browser.debugger();
    this.one.click();
    this.plus.click();
    this.two.click();
    this.equalSign.click();
    expect(this.calculatorScreen.getText).toEqual('3');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE
      } as logging.Entry)
    );
  });
});
