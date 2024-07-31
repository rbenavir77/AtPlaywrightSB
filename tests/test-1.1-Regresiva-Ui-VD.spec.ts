import { test, expect,chromium } from '@playwright/test';
import {getOrder} from '../db/EcommerceQueries';
//import {ElementController} from '../utils/ElementController'

test.describe('Suite de pruebas', () => {
  let browser:any;
  test.beforeAll(async () => {
    // Inicia el navegador Chromium
    browser = await chromium.launch({ headless: false });
    
  });

  test.afterAll(async () => {
    await browser.close();
    
  })

test('test Usuario invitado WPD', async ({ page }) => {
  await page.goto('https://staging2.salcobrandonline.cl/');
  await page.getByRole('button', { name: 'Mantener ubicación' }).click();
  await page.getByPlaceholder('¿Qué estás buscando?').click();
  await page.getByPlaceholder('¿Qué estás buscando?').fill('tio nacho');
  await page.getByRole('button', { name: 'Search Icon Image' }).click();
  await page.locator('li').filter({ hasText: 'Tío NachoTio Nacho Pack' }).getByRole('button').click();
  await page.getByText('Ir a pagar').click();
  await page.getByText('Ir a pagar').click();
  await page.getByRole('link', { name: 'Ir a Pagar' }).click();
  await page.getByRole('button', { name: 'Continúa como invitado' }).click();
  await page.getByPlaceholder('José').click();
  await page.getByPlaceholder('José').fill('Ricardo');
  await page.getByPlaceholder('José').press('Tab');
  await page.getByPlaceholder('González').fill('Benavides');
  await page.getByPlaceholder('González').press('Tab');
  await page.getByPlaceholder('salco@brand.cl').fill('rbenavides@sb.cl');
  await page.getByPlaceholder('salco@brand.cl').press('Tab');
  await page.getByPlaceholder('912345678').fill('965656396');

/*   const elementController = new ElementController(page);
  const stringxpath = '//button[contains(text(),"Continuar")]';
  await elementController.clickTabAndWaitForElement('button', stringxpath);
  await elementController.clickElementWhenEnabled(stringxpath); // Ahora puedes interactuar con el elemento */

  await page.locator('//button[contains(text(),"Continuar")]').click();
  await page.locator('//button[contains(text(),"Continuar")]').click();
  await page.locator('//button[contains(text(),"Continuar")]').click();
  
  await page.getByRole('tab', { name: 'Retiro en tienda' }).click();
  await page.locator('.radio-circle').first().click();
  await page.getByRole('button', { name: 'Continuar a medios de pago' }).click();
  await page.getByRole('button', { name: 'WebPay method Redcompra /' }).click();
  await page.click('input[name="tos"]');
  await page.getByRole('button', { name: 'Realizar pago' }).click();
  await page.getByRole('button', { name: 'Débito' }).click();
  await page.getByRole('button', { name: 'Banco Selecciona tu banco' }).click();
  await page.getByRole('button', { name: 'TEST COMMERCE BANK' }).click();
  await page.getByPlaceholder('XXXX XXXX XXXX XXXX').click();
  await page.getByPlaceholder('XXXX XXXX XXXX XXXX').fill('5555 5555 5555 5555 55555');
  await page.getByRole('button', { name: 'Pagar $' }).click();
  await page.locator('#rutClient').click();
  await page.locator('#rutClient').fill('111111111');
  await page.locator('#rutClient').press('Tab');
  await page.locator('#passwordClient').fill('123');
  await page.locator('#passwordClient').press('Tab');
  await page.getByRole('button', { name: 'Aceptar' }).press('Enter');
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByRole('link', { name: 'Volver a la tienda' }).click();
  await page.waitForSelector('#order_summary h4');
  
  // Selecciona la etiqueta HTML que contiene el texto
  const etiqueta = await page.$('#order_summary h4');

  // Extrae el texto de la etiqueta
  const texto = await page.$eval('#order_summary h4', (element) => element.textContent);
  console.log("🚀 ~ test ~ texto:", texto)

  
  // Valida el largo del texto
  const largoEsperado = 10;
  const regex = /Nº (\w+)/;
  // Busca la letra en el texto
  const letraABuscar = 'R';
  const numeroPedido = texto?.match(regex)?.[1] ?? "No se encontró el número de pedido.";
  const contieneLetra = numeroPedido.includes(letraABuscar);
  console.log("🚀 ~ test ~ contieneletra:", contieneLetra)
  console.log("🚀 ~ test ~ largoEsperado:", largoEsperado) // control alt L
  const largoValido = numeroPedido.length === largoEsperado;
  console.log("🚀 ~ test ~ largoValido:", largoValido)
  console.log("🚀 ~ test ~ texto?.length:", texto?.length)
  const serviceNumber = Number(numeroPedido?.replace('R',''))
  const order = await getOrder(serviceNumber)
  console.log("🚀 ~ test ~ order:", order)
  
  // Verifica que ambas condiciones se cumplan
  await expect(contieneLetra).toBe(true);
  await expect(largoValido).toBe(true);


  //await page.goto('https://webpay3gint.transbank.cl/webpayserver/voucher.cgi');
  //await page.getByRole('link', { name: 'Volver a la tienda' }).click();
  });
});