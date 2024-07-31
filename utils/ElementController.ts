import { Page, Locator } from 'playwright';

export  class ElementController {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitForElementToBeEnabled(selector: string): Promise<void> {
    const element: Locator = this.page.locator(selector);
    await element.waitFor({ state: 'visible' }); // Espera a que el elemento sea visible
    await this.page.waitForFunction(
      (el) => !el?.hasAttribute('disabled'),
      await element.elementHandle() // Pasa el handle del elemento
    );
  }

  async clickElementWhenEnabled(selector: string): Promise<void> {
    await this.waitForElementToBeEnabled(selector);
    await this.page.locator(selector).click();
  }

  async clickTabAndWaitForElement(tabName: string, elementSelector: string): Promise<void> {
    await this.page.getByRole('tab', { name: tabName }).click();
    await this.waitForElementToBeEnabled(elementSelector);
  }
}


/* // Ejemplo de uso:
//(async () => {
 // const playwright = require('playwright');
 // const browser = await playwright.chromium.launch();
 // const page: Page = await browser.newPage();
  //await page.goto('https://example.com');

  //const elementController = new ElementController(page);

  // Haz clic en la pestaña "Retiro en tienda" y espera a que el elemento se habilite
 //await elementController.clickTabAndWaitForElement('Retiro en tienda', 'selector_del_elemento');

  // Ahora puedes interactuar con el elemento
  //await elementController.clickElementWhenEnabled('selector_del_elemento');

  // Cierra el navegador
// await browser.close();
//})(); */
